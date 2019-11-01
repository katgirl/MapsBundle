/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {utils} from "./c4g-maps-utils";
import {getLanguage} from "./c4g-maps-i18n";
import {Control} from "ol/control";
import {linear} from "ol/easing";
import {easeOut} from "ol/easing";
import {Style} from "ol/style";
import {Circle} from "ol/style";
import {Stroke} from "ol/style";
import {transform, transformExtent} from "ol/proj";
import {Point} from "ol/geom";
import {Feature} from "ol";
import {Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Observable} from "ol/";
import {unByKey} from "ol/Observable";
import {containsCoordinate} from "ol/extent";
import {getWidth} from "ol/extent";
import {getHeight} from "ol/extent";
import {getVectorContext} from 'ol/render';

'use strict';
export class GeoSearch extends Control {

  /**
   * @TODO description
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  constructor(opt_options) {
    super(opt_options);
    var self,
      options,
      element,
      button,
      searchWrapper,
      searchInput,
      searchButton,
      resultTrigger,
      resultWrapper;

    self = this;
    // this.element = element;
    // this.searchWrapper = searchWrapper;
    // this.resultWrapper = resultWrapper;

    options = opt_options || {};
    let langConstants = getLanguage(options.mapController.data);

    // default options
    options = jQuery.extend({
      mapController: undefined,
      className: cssConstants.GEOSEARCH,
      extDiv: false,
      collapsible: true,
      collapsed: true,
      tipLabel: langConstants.CTRL_GEOSEARCH,
      label: '>>',
      collapsedLabel: '(?)',
      attribution: true,
      // customAttribution: '',
      // engineUrl: false,
      searchZoom: 12,
      zoomBounds: false,
      results: false,
      quicksearch: true,
      animate: true,
      markResult: true,
      popup: true,
      caching: 0,
      autopick: false
    }, options);

    // prepare search-configuration
    //
    this.config = {};
    // searchEngineUrl
    // if (typeof options.engineUrl === 'string') {
    //   // if it is a string, then it is (hopefully) a URL, that we can use directly
    //   // @TODO add a URL-check
    //   this.config.url = options.engineUrl;
    // } else {
    //   // if it is none of the above, then use the default URL
    //   this.config.url = 'https://nominatim.openstreetmap.org/search';
    // }
    if (options.mapController.data.geosearch.searchKey && options.mapController.data.geosearch.url) {
      this.config.url = options.mapController.data.geosearch.url + "search.php";
      this.config.key = options.mapController.data.geosearch.searchKey;
    }
    else {
      this.config.url = options.mapController.data.api.geosearch + "/" + options.mapController.data.profile;
    }
    // zoomlevel when centering the found location
    this.config.zoomlevel = options.searchZoom;
    // zoom to bounds instead of zoomlevel when centering the found location
    this.config.zoombounds = options.zoomBounds;
    // quicksearch-option (instantly jump to the first found location)
    this.config.quicksearch = options.quicksearch;
    // animation (animate flight to targeted location)
    this.config.animate = options.animate;
    // highlight the result location
    this.config.markResult = options.markResult;
    this.config.popup = options.popup;

    this.config.autopick = options.autopick;
    this.config.mapController = options.mapController;
    this.config.results = options.results;

    this.config.collapsed = options.collapsed;

    this.config.caching = options.caching;

    // @TODO
    // Attribution

    // check extDiv
    if (options.extDiv && document.getElementById(options.extDiv)) {
      options.extDiv = document.getElementById(options.extDiv);
    } else {
      options.extDiv = false;
    }

    // controlwrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;

    if ((options.collapsed && !options.extDiv) && !(this.config.caching && utils.getValue('geosearch') == '1')) {
      jQuery(element).addClass(cssConstants.CLOSE);
    } else {
      jQuery(element).addClass(cssConstants.OPEN);
    }

    if (options.collapsible && !options.extDiv) {
      // button
      button = document.createElement('button');
      button.className = cssConstants.GEOSEARCH_TRIGGER;
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      jQuery(button).click(function () {
        try {
          this.blur();
        } catch (ignore) {
        }
        self.toggle();
      });
    } else if (options.extDiv) {
      options.target = options.extDiv;
    }

    // wrapper div
    this.searchWrapper = document.createElement('div');
    this.searchWrapper.className = cssConstants.GEOSEARCH_WRAPPER;

    // search-field
    searchInput = document.createElement('input');
    searchInput.type = 'text';
    this.searchWrapper.appendChild(searchInput);

    // search-button
    searchButton = document.createElement('button');
    searchButton.className = cssConstants.GEOSEARCH_START;
    searchButton.title = langConstants.CTRL_START_SEARCH;
    this.searchWrapper.appendChild(searchButton);

    jQuery(searchButton).click(function () {
      try {
        this.blur();
      } catch (ignore) {
      }
      if (searchInput.value) {
        self.findLocation(searchInput.value);
      }
    });

    jQuery(searchInput).keypress(function (e) {
      if (e.which === 13) {
        if (searchInput.value) {

          self.findLocation(searchInput.value);

          if (document.getElementById("resultcontainer")) {
            document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
          }
          if (self.config.results) {

            var searchResultContainer = document.createElement('ul');
            searchResultContainer.setAttribute("id", "resultcontainer");
            if (self.results) {
              for (var i = 0; i < self.results.length; i++) {
                var searchResult = document.createElement('li');
                var searchResultButton = document.createElement('button');
                searchResultButton.setAttribute("id", i);
                searchResultButton.setAttribute('class', 'searchResultButton');
                searchResultButton.addEventListener('click', function () {
                  self.zoomTo(this.getAttribute("id"))
                });

                searchResultButton.setAttribute("name", self.results[i].display_name);
                searchResultButton.innerHTML = self.results[i].display_name;
                searchResult.appendChild(searchResultButton);
                searchResultContainer.appendChild(searchResult);

              }
              if (searchWrapper) {
                searchWrapper.appendChild(searchResultContainer);
              }
            }
          }
        }
        return false;
      }
    });

    element.appendChild(this.searchWrapper);

    // inheritance-stuff
    Control.call(this, {
      element: element,
      target: options.target
    });

  }

  /**
   * @TODO
   *
   * @return  {[type]}  [description]
   */
  open() {
    if (jQuery(this.element).hasClass(cssConstants.CLOSE)) {
      jQuery(this.element).addClass(cssConstants.OPEN)
        .removeClass(cssConstants.CLOSE)
        .find('input')[0].focus();
      if (this.config.caching) {
        utils.storeValue('geosearch', '1');
      }
    }
  }

  /**
   * @TODO
   *
   * @return  {[type]}  [description]
   */
  close() {
    if (jQuery(this.element).hasClass(cssConstants.OPEN)) {
      jQuery(this.element).addClass(cssConstants.CLOSE)
        .removeClass(cssConstants.OPEN);
      // this.closeResults();
      if (document.getElementById("resultcontainer")) {
        document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
      }
      if (this.config.caching) {
        utils.storeValue('geosearch', '0');
      }
    }
  }

  /**
   * @TODO
   *
   * @return  {[type]}  [description]
   */
  toggle() {
    if (jQuery(this.element).hasClass(cssConstants.CLOSE)) {
      this.open();
    } else {
      this.close();
    }
  }

  // /**
  //  * @TODO
  //  *
  //  * @return  {[type]}  [description]
  //  */
  // openResults: function () {
  //   if (jQuery(this.resultWrapper).hasClass(cssConstants.CLOSE)) {
  //     jQuery(this.resultWrapper).addClass(cssConstants.OPEN)
  //       .removeClass(cssConstants.CLOSE);
  //   }
  // },

  // /**
  //  * @TODO
  //  *
  //  * @return  {[type]}  [description]
  //  */
  // closeResults: function () {
  //   if (jQuery(this.resultWrapper).hasClass(cssConstants.OPEN)) {
  //     jQuery(this.resultWrapper).addClass(cssConstants.CLOSE)
  //       .removeClass(cssConstants.OPEN);
  //   }
  // },

  // /**
  //  * @TODO
  //  *
  //  * @return  {[type]}  [description]
  //  */
  // toggleResults: function () {
  //   if (jQuery(this.resultWrapper).hasClass(cssConstants.CLOSE)) {
  //     this.openResults();
  //   } else {
  //     this.closeResults();
  //   }
  // },

  /**
   * @TODO
   *
   * @return  {[type]}  [description]
   */
  clearResults() {
    this.resultWrapper.innerHTML = '';
  }


  /**
   * @TODO
   *
   * @param   {[type]}  location  [description]
   *
   * @return  {[type]}            [description]
   */
  zoomTo(index) {
    var self,
      map,
      animate,
      markResult,
      result,
      resultCoordinate,
      flyTo,
      completeSearch,
      animationDuration,
      zoomType;

    flyTo = function (map, location, zoomlevel, zoombounds, boundingbox, markResult, animate) {
      var duration = 2000;
      var zoom = zoomlevel;
      var parts = 2;
      var called = false;
      var extent;

      function callback(complete) {
        --parts;
        if (called) {
          return;
        }
        if (parts === 0 || !complete) {
          called = true;

          if (zoombounds && boundingbox) {
            // translate osm-extent to ol3-extent

            let osmExtent = [];
            osmExtent.push(parseFloat(boundingbox[2]));
            osmExtent.push(parseFloat(boundingbox[0]));
            osmExtent.push(parseFloat(boundingbox[3]));
            osmExtent.push(parseFloat(boundingbox[1]));

            extent = transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857')
            window.setTimeout(function () {
              mapView.fit(
                extent,
                map.getSize(),
                {
                  minZoom: mapView.get('minZoom') || 2,
                  maxZoom: zoom || mapView.get('maxZoom') || 18,
                  duration: duration / 2,
                  easing: easeOut
                }
              );
            }, duration)
          }

          completeSearch(markResult, animate);
        }
      }

      map.getView().animate({
        center: location,
        duration: duration
      }, callback);
      map.getView().animate({
        zoom: zoom - 1,
        duration: duration / 2
      }, {
        zoom: zoom,
        duration: duration / 2
      }, callback);

    };

    completeSearch = function (markResult, animate) {
      var addMarker,
        markerSource,
        markerLayer,
        animateMarker;

      markerSource = new VectorSource();
      markerLayer = new Vector({
        style: new Style(),
        source: markerSource
      });
      map.addLayer(markerLayer);

      addMarker = function () {
        markerSource.addFeature(
          new Feature(
            new Point(resultCoordinate)
          )
        );
      };

      animateMarker = function (feature) {
        var animationStep,
          start,
          duration,
          listenerKey;

        start = new Date().getTime();
        duration = 3000;

        animationStep = function (event) {
          var vectorContext,
            frameState,
            elapsed,
            elapsedRatio,
            radius,
            opacity,
            marker,
            flashGeom;

          vectorContext = event.vectorContext;
          frameState = event.frameState;
          flashGeom = feature.getGeometry().clone();
          elapsed = frameState.time - start;
          elapsedRatio = elapsed / duration;
          radius = linear(1 - elapsedRatio) * 100;
          if (radius < 0) {
            radius = 0;
          }
          opacity = linear(elapsedRatio);

          marker = new Style({
            image: new Circle({
              radius: radius,
              snapToPixel: false,
              stroke: new Stroke({
                color: 'rgba(200, 0, 0, ' + opacity + ')',
                width: 3,
                opacity: opacity
              })
            })
          });

          vectorContext.setStyle(marker);
          vectorContext.drawGeometry(flashGeom, null);

          if (elapsed > duration) {
            markerSource.clear();
            unByKey(listenerKey);
            return;
          }
          // continue postrender animation
          frameState.animate = true;
        }; // end of "animationStep"

        listenerKey = markerLayer.on('postrender', animationStep);

      }; // end of "animateMarker"

      markerSource.on('addfeature', function (event) {
        animateMarker(event.feature);
      });

      if (animate) {
        if (zoomType === 'zoom') {
          window.setTimeout(addMarker, animationDuration / 2);
        } else {
          window.setTimeout(addMarker, animationDuration);
        }
      } else {
        addMarker();
      }


    };

    self = this;
    map = this.getMap();

    result = self.results[index];
    resultCoordinate = transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

    if (animate) {
      var resolution = mapView.getResolution();
      var viewExtent = mapView.calculateExtent(map.getSize());
      if (containsCoordinate(viewExtent, resultCoordinate)) {
        zoomType = 'zoom';
      } else {
        if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
          var coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
          var difContext = getWidth(viewExtent);
        } else {
          coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
          difContext = getHeight(viewExtent);
        }
        if (coordDif > 0) {
          resolution *= coordDif / difContext;
        }
        zoomType = 'bounce';
      }

      flyTo(map, resultCoordinate, self.config.zoomlevel, self.config.zoombounds, result.boundingbox, this.config.markResult, this.config.animate);
    }
    else {
      completeSearch(this.config.markResult, this.config.animate);
      map.getView().setCenter(resultCoordinate);
      if (self.config.zoomlevel >= 0) {
        map.getView().setZoom(self.config.zoomlevel);
      }
    }

  }

  findLocation(location, opt_options) {
    var self,
      map,
      animate,
      animationDuration,
      markResult;

    self = this;
    map = this.getMap();

    // show spinner
    this.config.mapController.spinner.show();

    animate = this.config.animate;
    animationDuration = 2000;
    markResult = this.config.markResult;

    if (typeof opt_options === 'object') {
      if (opt_options.animate !== undefined) {
        animate = opt_options.animate;
      }
      if (opt_options.markResult !== undefined) {
        markResult = opt_options.markResult;
      }
    }


    // @TODO
    // check bounds
    //   are there restriction-bounds on the map?
    //   -> else use extent-bounds

    // @TODO
    // highlight found area/location


    if (this.config.quicksearch) {
      let data = {
        format: "json",
        q: location
      };
      if (this.config.key) {
        data.key = this.config.key;
      }
      // AJAX -> @nominatim
      jQuery.ajax({
        dataType: "json",
        url: this.config.url,
        data: data
      })
        .done(function (results) {

          var mapView,
            currentCoordinate,
            resultCoordinate,
            coordDif,
            difContext,
            viewExtent,
            result,
            osmExtent,
            resolution,
            zoomType,
            flyTo,
            completeSearch;

          if (results && results.length && results.length > 0){
            mapView = map.getView();

            flyTo = function (map, location, zoomlevel, zoombounds, boundingbox, markResult, animate) {
              var duration = 2000;
              var zoom = zoomlevel;
              var parts = 2;
              var called = false;
              var extent;

              function callback(complete) {
                --parts;
                if (called) {
                  return;
                }
                if (parts === 0 || !complete) {
                  called = true;

                  if (zoombounds && boundingbox) {
                    // translate osm-extent to ol3-extent

                    osmExtent = [];
                    osmExtent.push(parseFloat(boundingbox[2]));
                    osmExtent.push(parseFloat(boundingbox[0]));
                    osmExtent.push(parseFloat(boundingbox[3]));
                    osmExtent.push(parseFloat(boundingbox[1]));

                    extent = transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857');

                    window.setTimeout(function () {
                      var viewFit = mapView.fit(
                        extent,
                        map.getSize(),
                        {
                          minZoom: mapView.get('minZoom') || 2,
                          maxZoom: zoom || mapView.get('maxZoom') || 18,
                          duration: duration / 2,
                          easing: easeOut
                        }
                      );
                    }, duration)
                  }

                  completeSearch(markResult, animate);
                }
              }

              map.getView().animate({
                center: location,
                duration: duration
              }, callback);

              map.getView().animate({
                zoom: zoom - 1,
                duration: duration / 2
              }, {
                zoom: zoom,
                duration: duration / 2
              }, callback);

            };

            completeSearch = function (markResult, animate) {
              // result marker & animation
              if (markResult) {
                var addMarker,
                  markerSource,
                  markerLayer,
                  animateMarker;

                markerSource = new VectorSource();
                markerLayer = new Vector({
                  style: new Style(),
                  source: markerSource
                });
                map.addLayer(markerLayer);

                addMarker = function () {
                  markerSource.addFeature(
                    new Feature(
                      new Point(resultCoordinate)
                    )
                  );
                };

                animateMarker = function (feature) {
                  var animationStep,
                    start,
                    duration,
                    listenerKey;

                  start = new Date().getTime();
                  duration = 3000;

                  animationStep = function (event) {
                    var vectorContext,
                      frameState,
                      elapsed,
                      elapsedRatio,
                      radius,
                      opacity,
                      marker,
                      flashGeom;

                    vectorContext = getVectorContext(event);
                    frameState = event.frameState;
                    flashGeom = feature.getGeometry().clone();
                    elapsed = frameState.time - start;
                    elapsedRatio = elapsed / duration;
                    radius = linear(1 - elapsedRatio) * 100;
                    if (radius < 0) {
                      radius = 0;
                    }
                    opacity = linear(elapsedRatio);

                    var marker = new Style({
                      image: new Circle({
                        radius: radius,
                        snapToPixel: false,
                        stroke: new Stroke({
                          color: 'rgba(200, 0, 0, ' + opacity + ')',
                          width: 3,
                          opacity: opacity
                        })
                      })
                    });

                    vectorContext.setStyle(marker);
                    vectorContext.drawGeometry(flashGeom, null);

                    if (elapsed > duration) {
                      markerSource.clear();
                      unByKey(listenerKey);
                      return;
                    }
                    // continue postrender animation
                    frameState.animate = true;
                  }; // end of "animationStep"

                  listenerKey = markerLayer.on('postrender', animationStep);

                }; // end of "animateMarker"

                markerSource.on('addfeature', function (event) {
                  animateMarker(event.feature);
                });

                if (animate) {
                  if (zoomType === 'zoom') {
                    window.setTimeout(addMarker, animationDuration / 2);
                  } else {
                    window.setTimeout(addMarker, animationDuration);
                  }
                } else {
                  addMarker();
                }

              }// end of result marker & animation handling

            };

            if (results[0]) {
              result = results[0];
              self.results = results;
              currentCoordinate = mapView.getCenter();
              resultCoordinate = transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

              if (animate) {
                flyTo(map, resultCoordinate, self.config.zoomlevel, self.config.zoombounds, result.boundingbox, markResult, animate);
              } else {
                completeSearch(self.config.markResult, self.config.animate);
                mapView.setCenter(resultCoordinate);
                if (self.config.zoomlevel >= 0) {
                  map.getView().setZoom(self.config.zoomlevel);
                }
              }

              var pixel = map.getPixelFromCoordinate(resultCoordinate);
              var feature = map.forEachFeatureAtPixel(pixel,
                function (feature, layer) {
                  return feature;
                });
              var layer = map.forEachFeatureAtPixel(pixel,
                function (feature, layer) {
                  return layer;
                });
              if (self.config.popup) {
                var popupInfos = {};
                if (feature && feature.get('popup')) {
                  // single POI
                  popupInfos = feature.get('popup');
                } else if (layer && layer.popup) {
                  popupInfos = layer.popup;
                } else {
                  feature = false;
                }
                if (feature) {
                  var geometry = feature.getGeometry();
                  if (geometry instanceof Point) {
                    var coord = geometry.getCoordinates();
                  } else {
                    var coord = resultCoordinate;
                  }

                  window.c4gMapsPopup.popup.setPosition(coord);
                  if (popupInfos.content) {
                    window.c4gMapsPopup.$content.html('');
                    window.c4gMapsPopup.popup.addClass(cssConstants.ACTIVE).addClass(cssConstants.LOADING);
                    window.c4gMapsPopup.spinner.show();

                    if (popupInfos.async === false || popupInfos.async == '0') {
                      var objPopup = {};
                      objPopup.popup = popupInfos;
                      objPopup.feature = feature;
                      objPopup.layer = layer;
                      // Call the popup hook for plugin specific popup content
                      if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                        utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                      }
                      self.config.mapController.proxy.setPopup(objPopup);
                    } else {
                      jQuery.ajax({
                        dataType: "json",
                        url: self.api_infowindow_url + '/' + popupInfos.content,
                        done: function (data) {
                          var popupInfo = {
                            async: popupInfos.async,
                            content: data.content,
                            popup: popupInfos.popup,
                            routing_link: popupInfos.routing_link
                          };

                          objPopup = {};
                          objPopup.popup = popupInfo;
                          objPopup.feature = feature;
                          objPopup.layer = layer;

                          // Call the popup hook for plugin specific popup content
                          if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                            utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                          }

                          self.setPopup(objPopup);
                        }
                      });
                    }
                  } else {
                    window.c4gMapsPopup.popup.removeClass(cssConstants.ACTIVE);
                  }

                } else if (window && window.c4gMapsPopup && window.c4gMapsPopup.popup) {
                  jQuery(window.c4gMapsPopup.popup).removeClass(cssConstants.ACTIVE);
                }
              }


              if (self.config.autopick && self.config.mapController.geopicker && typeof self.config.mapController.geopicker.pick === 'function') {
                self.config.mapController.geopicker.pick(resultCoordinate);
              }

            } else {
              let langConstants = getLanguage(self.options.mapController.data);
              alert(langConstants.SEARCH_NOT_FOUND);
            }
            // self.resultWrapper.innerHTML = '@ console';

            if (document.getElementById("resultcontainer")) {
              document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
            }
            if (self.config.results) {

              var searchResultContainer = document.createElement('ul');
              searchResultContainer.setAttribute("id", "resultcontainer");
              if (self.results) {
                for (var i = 0; i < self.results.length; i++) {
                  var searchResult = document.createElement('li');
                  var searchResultButton = document.createElement('button');
                  searchResultButton.setAttribute("id", i);
                  searchResultButton.setAttribute('class', 'searchResultButton');
                  searchResultButton.addEventListener('click', function () {
                    self.zoomTo(this.getAttribute("id"))
                  });

                  searchResultButton.setAttribute("name", self.results[i].display_name);
                  searchResultButton.innerHTML = self.results[i].display_name;
                  searchResult.appendChild(searchResultButton);
                  searchResultContainer.appendChild(searchResult);

                }
                self.searchWrapper.appendChild(searchResultContainer);
              }
            }
          }

        })

        // AJAX-failure
        //
        .fail(function () {
          // @TODO
          // self.resultWrapper.innerHTML = 'ohoh!';
        })

        // AJAX-always
        //
        .always(function () {
          self.config.mapController.spinner.hide();
        });

    } else {
      // @TODO
    }

  }

}

