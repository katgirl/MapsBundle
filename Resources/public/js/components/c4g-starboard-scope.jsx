/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant.js";
import {Cluster} from "ol/source";
import {StarboardScopeItem} from "./c4g-starboard-scope-item.jsx";
import {getLanguage} from "./../c4g-maps-i18n";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {utils} from "../c4g-maps-utils";
import {Geolocation} from "ol";
import {LineString} from "ol/geom";
import {toLonLat} from 'ol/proj';


export default class StarboardScope extends Component {

  constructor(props) {
    window.globalCounter = {};
    super(props);
    const scope = this;
    this.lastTime = -Infinity;
    this.preventAddReqs = false;
    //specific code for the control
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    button.title = this.langConstants.ELEMENTS_SCOPE;
    element.className = "c4g-starboardscope-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.baselayerSwitcher = control;
    mapController.map.addControl(control);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);


    this.getFeaturesInScope = this.getFeaturesInScope.bind(this);
    this.view = props.mapController.map.getView();
    let layerController = props.mapController.proxy.layerController;
    this.vectorSource = layerController.vectorSource instanceof Cluster ? layerController.vectorSource.getSource(): layerController.vectorSource;
    this.view.on('change', (evt) => {
      this.getFeaturesInScope()
    });
    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
    window.c4gMapsHooks.layer_loaded.push((lol)=> {
      this.getFeaturesInScope();
    })
    this.state = {
      open: props.open || false,
      className: props.className || "c4g-starboardscope-panel",
      control: control,
      features: []
    };
  }

  getFeaturesInScope () {
    let timestamp = Date.now(); //get timestamp to trigger event only every fourth of a second
    const mapController = this.props.mapController;
    const layerController = mapController.proxy.layerController;

    if (this.state.open && this._isMounted && timestamp > this.lastTime + 250) {
      this.lastTime = timestamp;
      let extent = this.view.calculateExtent();
      let features = this.vectorSource.getFeaturesInExtent(extent);
      let featuresSorted = this.sortFeatures(features);
      if (!featuresSorted) {
        this.lastTime = -Infinity;
        window.setTimeout(()=>{this.getFeaturesInScope()}, 200);
      }
      this.setState({
        features: features
      });
    }
  }
  getDistance (point1, point2)
  {
    const R = 6371; // km
    let dLat = this.toRad(point2[0]-point1[0]);
    let dLon = this.toRad(point2[1]-point1[1]);
    let lat1 = this.toRad(point1[0]);
    let lat2 = this.toRad(point2[0]);
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d * 1000;
  }

  toRad (value)
  {
    return value * Math.PI / 180;
  }
  sortFeatures (features) {
    if (this.geolocation) {
      if (this.props.mapController.data.matrixKey) {
        let objMissDist = {};
        let arrLocations = [];
        let position = this.geolocation.getPosition();
        if (!position) {
          return false;
        }
        arrLocations.push(toLonLat(position));
        for (let i in features) {
          if (features.hasOwnProperty(i) && !features[i].get('distanceMatrix')) {
            objMissDist[i] = features[i];
            arrLocations.push(toLonLat(features[i].getGeometry().getCoordinates()));
          }
        }
        if (arrLocations.length > 2 && !this.preventAddReqs) {
          let url = this.props.mapController.data.proxyUrl + 'matrix.php?language=de&profile=auto&key=' + this.props.mapController.data.matrixKey;
          let body = JSON.stringify({locations: arrLocations});
          const scope = this;
          scope.preventAddReqs = true;
          fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'text/plain'
            },
            body: body
          }).then(function (response) {
            scope.preventAddReqs = false;
            return response.json().then(function(jsonData) {
              let distances = jsonData.sources_to_targets[0];
              for(let i in distances) {
                if (distances.hasOwnProperty(i) && objMissDist.hasOwnProperty(i)) {
                  objMissDist[i].set('distanceMatrix', distances[i].distance * 1000);
                }
              }
              scope.sortFeatures(scope.state.features);
              scope.forceUpdate();
            });
          });
        }
      }
      let position = this.geolocation.getPosition();
      features.sort((a, b) => {
            let distanceA = 0;
            let distanceB = 0;
            if (a.get('distanceMatrix') || a.get('distance')) {
              distanceA = a.get('distanceMatrix')|| a.get('distance');
            } else {
              let featureGeometry = a.getGeometry();
              distanceA = this.getDistance(toLonLat(position), toLonLat(featureGeometry.getCoordinates()));
              a.set('distance', distanceA);
            }
            if (b.get('distanceMatrix') || b.get('distance')) {
              distanceB = b.get('distanceMatrix') || b.get('distance');
            } else {
              let featureGeometry = b.getGeometry();
              distanceB = this.getDistance(toLonLat(position), toLonLat(featureGeometry.getCoordinates()));
              b.set('distance', distanceB);
            }
            return distanceA - distanceB;
          }
        );

    }
    return features;
  }

  render() {
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close");
    }

    return (
      <div className={cssConstants.STARBOARD_WRAPPER}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-starboardscope-header"} headerClass={"c4g-starboardscope-headline"}
                    header={this.langConstants.ELEMENTS_SCOPE} closeBtnClass={"c4g-starboardscope-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}/>
        </Suspense>
        <div className={"c4g-starboardscope-content-container"}>
          <ul>
            {this.state.features.map((feature, index) => {
              if (index < 20) {
                return <StarboardScopeItem mapController={this.props.mapController} langConstants={this.langConstants}
                                            index={index} key={index} feature={feature}/>
              }
            })}
          </ul>
        </div>
      </div>
    );
  }

  open() {
    this.setState({open: true}, () => {
      let evt = {};
      evt.target = this.view;
      this.getFeaturesInScope();
    });
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }
  componentDidMount() {
    this._isMounted = true;
    this.geolocation = new Geolocation({
      projection: this.view.getProjection(),
      tracking: true
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mapController.data.caching && !this.state.open) {
      let panelVal = utils.getValue('panel');
      if (panelVal === this.constructor.name) {
        utils.storeValue('panel', "");
      }
    }
  }
}