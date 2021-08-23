"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["Resources_public_js_components_c4g-editor-view_jsx"],{"./Resources/public/js/c4g-popup-controller.js":(e,t,n)=>{var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gPopupController=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/typeof.js")),r=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=n("./Resources/public/js/c4g-maps-constant.js"),l=n("./node_modules/ol/index.js"),p=n("./Resources/public/js/c4g-maps-misc-spinner.js"),u=n("./Resources/public/js/c4g-maps-utils.js"),c=o(n("./node_modules/react-dom/index.js")),d=o(n("./node_modules/react/index.js")),h=n("./Resources/public/js/components/c4g-popup-container.jsx"),f=function(){function e(t){(0,r.default)(this,e),this.mapController=t.options.mapController,this.mapData=t.options.mapController.data,this.popupHandling=parseInt(this.mapData.popupHandling,10),this.external=!!this.mapData.popupDiv,this.currentPopup=null,this.containerOpen=!1}return(0,a.default)(e,[{key:"addPopUp",value:function(e){var t,n,o,s,r={open:this.containerOpen,alwaysExtended:!1,hideOther:this.mapController.hideOtherBottomComponents,mapData:this.mapData,mapController:this.mapController};if(window.c4gMapsPopup&&window.c4gMapsPopup.popup&&this.mapController.map.removeOverlay(window.c4gMapsPopup.popup),3===this.popupHandling)this.popupContainer&&(c.default.unmountComponentAtNode(this.popupContainer),delete this.mapController.components.popup,this.external||this.popupContainer.parentNode.removeChild(this.popupContainer)),r.external=this.external,this.popupContainer=this.external?document.querySelector("."+this.mapData.popupDiv):document.createElement("div"),this.popupComponent=c.default.render(d.default.createElement(h.PopupContainer,r),this.popupContainer),this.external||this.mapController.$overlaycontainer_stopevent.append(this.popupContainer),this.currentPopup=this.popupComponent,this.external||this.mapController.hideOtherComponents(this.currentPopup),this.mapController.components.popup=this.popupComponent,window.c4gMapsPopup={},window.c4gMapsPopup.popup=this;else{if((t=document.createElement("div")).setAttribute("id","c4g_popup_"+this.mapData.mapId),t.className="c4g-popup-wrapper",(n=document.createElement("button")).className="c4g-popup-close c4g-icon",(o=document.createElement("div")).className="c4g-popup-content",t.appendChild(n),t.appendChild(o),jQuery(n).click((function(e){e.preventDefault(),window.c4gMapsPopup.$popup&&window.c4gMapsPopup.$popup.removeClass(i.cssConstants.ACTIVE)})),1===this.popupHandling||0===this.popupHandling){var a=1===this.popupHandling;s=new l.Overlay({element:t,positioning:"bottom-left",offset:[-50,0],autoPan:a,autoPanAnimation:{duration:250},autoPanMargin:20})}else 2===this.popupHandling&&($(t).addClass("c4g-popup-wrapper-nonose"),s=new l.Overlay({element:t,positioning:"center-center",offset:[-50,0],autoPan:!1}));window.c4gMapsPopup&&window.c4gMapsPopup.popup&&window.c4gMapsPopup.popup.currentPopup&&this.mapController.map.removeOverlay(window.c4gMapsPopup.popup.currentPopup),window.c4gMapsPopup={},window.c4gMapsPopup.popup=this,window.c4gMapsPopup.spinner=new p.Spinner({target:t}),s&&(this.mapController.map.addOverlay(s),this.currentPopup=s),window.c4gMapsPopup.$popup=jQuery(this.getElement()),window.c4gMapsPopup.$content=jQuery(".c4g-popup-content",window.c4gMapsPopup.$popup)}}},{key:"setPopup",value:function(e){var t,n,o,r=this;if(t=e.feature,n=e.layer,t.get("features"))for(var a=t.get("features"),l=0;l<a.length;l++)o+=u.utils.replaceAllPlaceholders(e.popup.content,a[l],n,this.mapController.data.lang);else o=u.utils.replaceAllPlaceholders(e.popup.content,t,n,this.mapController.data.lang);if(3!==this.popupHandling){if(2!==parseInt(this.mapData.popupHandling,10)&&1===parseInt(this.mapData.popupHandling,10)){var p="#"+this.mapController.data.mapDiv+" canvas",c=document.querySelector(p).offsetHeight-50;$(window.c4gMapsPopup.popup.element).css("max-height",c)}if(o.trim()){if(window.c4gMapsPopup.$content&&window.c4gMapsPopup.$content.html(o),t.getGeometry()&&"Point"===t.getGeometry().getType())r.mapData.popupHandling&&"2"!==r.mapData.popupHandling?window.c4gMapsPopup.popup.setPosition(t.getGeometry().getCoordinates()):window.c4gMapsPopup.popup.setPosition(r.mapController.map.getView().getCenter());else if(t.getGeometry()&&"Polygon"===t.getGeometry().getType()){var d=t.getGeometry().getExtent(),h=[(d[0]+d[2])/2,(d[1]+d[3])/2];window.c4gMapsPopup.popup.setPosition(h)}}else window.c4gMapsPopup.$popup.removeClass(i.cssConstants.ACTIVE);window.c4gMapsPopup.$popup.removeClass(i.cssConstants.LOADING),window.c4gMapsPopup.spinner.hide()}else t.get("popup")?parseInt(t.get("popup").routing_link,10):n.get("popup")&&parseInt(n.get("popup").routing_link,10),this.currentPopup.setState({content:o,open:!0});void 0!==window.c4gMapsHooks&&"object"===(0,s.default)(window.c4gMapsHooks.proxy_appendPopup)&&u.utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup,{popup:e,content:o,mapController:this.mapController,comp:this.popupComponent||null})}},{key:"close",value:function(){this.popupHandling<3?this.currentPopup.close():this.currentPopup&&this.currentPopup.setState({open:!1})}},{key:"show",value:function(){this.popupHandling<3?this.currentPopup.show():console.log("show")}},{key:"hide",value:function(){this.popupHandling<3&&this.currentPopup.hide()}},{key:"getContent",value:function(){if(this.popupHandling<3)return this.currentPopup.getContent()}},{key:"getPosition",value:function(){if(this.popupHandling<3)return this.currentPopup.getPosition()}},{key:"setContent",value:function(e){this.popupHandling,this.currentPopup.setContent(e)}},{key:"setPosition",value:function(e){this.popupHandling<3?this.currentPopup.setPosition(e):this.containerOpen=!0}},{key:"getElement",value:function(){if(this.popupHandling<3)return this.currentPopup.getElement()}}]),e}();t.C4gPopupController=f},"./Resources/public/js/components/c4g-editor-view.jsx":(e,t,n)=>{var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=o(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),p=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n("./node_modules/react/index.js")),d=(n("./node_modules/ol/layer.js"),n("./node_modules/ol/source.js"),n("./node_modules/ol/format.js")),h=n("./node_modules/ol/index.js"),f=n("./node_modules/ol/geom.js"),m=n("./node_modules/ol/interaction.js"),g=n("./Resources/public/js/components/c4g-starboard-style.jsx"),y=(n("./Resources/public/js/c4g-popup-controller.js"),n("./Resources/public/js/c4g-maps-utils.js"));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}var b=function(e){(0,l.default)(s,e);var t,n,o=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,u.default)(t);if(n){var s=(0,u.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,p.default)(this,e)});function s(e){var t;return(0,r.default)(this,s),t=o.call(this,e),(0,i.default)(t),t.state={freehand:!1,selectedFeature:!1,features:"[]",activeElement:e.elements[0]?e.elements[0].id:0,activeStyle:e.elements[0]?e.elements[0].styleId:0,selectMode:"modify"},t.interaction=null,t.changeJSON=t.changeJSON.bind((0,i.default)(t)),t.resetInteraction=t.resetInteraction.bind((0,i.default)(t)),t}return(0,a.default)(s,[{key:"render",value:function(){var e=this;if("select"!==this.props.mode&&this.props.active){var t;switch(this.resetInteraction(),this.props.mode){case"Point":t=new f.Point(0,0);break;case"LineString":t=new f.LineString([[0,0],[1,1]]);break;case"Polygon":t=new f.Polygon([[0,0],[1,1]])}var n=new h.Feature(t);n.set("locstyle",this.state.activeStyle),this.interaction=new m.Draw({source:this.props.editorLayer.getSource(),type:this.props.mode,stopClick:!1,snapTolerance:0,style:this.props.styleFunction(n),freehand:this.state.freehand}),this.interaction.on("drawend",(function(t){var n;if(t.feature.set("editorId",e.props.editorId),t.feature.set("locstyle",e.state.activeStyle),t.feature.set("elementId",e.state.activeElement),"Circle"===e.props.mode){var o=t.feature.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCenter(),s=t.feature.getGeometry().getRadius();n={type:"Feature",geometry:{type:"Point",coordinates:o},properties:{editorId:e.props.editorId,elementId:e.state.activeElement,locstyle:e.state.activeStyle,radius:s}}}else n=(new d.GeoJSON).writeFeatureObject(t.feature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});e.props.addFeature(n),e.props.countEditorId()})),this.props.mapController.map.addInteraction(this.interaction)}else"select"===this.props.mode&&this.props.active?(this.resetInteraction(),this.interaction=[],this.interaction.push(new m.Select({layers:[this.props.editorLayer],hitTolerance:20})),this.interaction.push(new m.Modify({features:this.state.selectedFeature?new h.Collection([this.state.selectedFeature]):new h.Collection([new h.Feature]),pixelTolerance:20})),this.interaction[0].on("select",(function(t){var n=t.selected[0];e.setState({selectedFeature:n})})),this.interaction[1].on("modifyend",(function(t){var n=t.features.getArray()[0],o=(new d.GeoJSON).writeFeatureObject(n,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});e.props.modifyFeature(o)})),this.props.mapController.map.addInteraction(this.interaction[0]),this.props.mapController.map.addInteraction(this.interaction[1])):this.resetInteraction();var o=null;this.props.elements&&this.props.elements.length>1&&(o=this.props.elements.map((function(t){var n,o,s=e.props.styleData.arrLocStyles[t.styleId],r=s.locStyleArr,a=r?r.styletype:"default";if(!r||"cust_icon"!==a&&"cust_icon_svg"!==a&&"photo"!==a){var i=s.style&&s.style(new h.Feature({geometry:new f.Point(0,0)}),"EPSG:4326")?s.style(new h.Feature({geometry:new f.Point(0,0)}),"EPSG:4326"):null,l=Array.isArray(i)?i[0]:i;l&&l.getFill()&&l.getStroke()?n=l.getFill().getColor():r&&r.fillcolor&&r.strokecolor&&(n=y.utils.getRgbaFromHexAndOpacity(r.fillcolor[0],r.fillcolor[1])),o=c.default.createElement("span",{title:t.name,className:"c4g-editor-locstyle",style:{backgroundColor:n}})}else o=c.default.createElement(g.C4gStarboardStyle,{tooltip:t.name,styleData:e.props.styleData,styleId:t.styleId});return c.default.createElement("button",{key:t.id,style:{height:"32px",width:"32px"},onMouseUp:function(){e.setState({activeElement:t.id,activeStyle:t.styleId})}},o)})));var s=null;if("LineStringPolygon".includes(this.props.mode)){var r="c4g-editor-view ";r+=this.state.freehand?"c4g-active":"c4g-inactive",s=c.default.createElement("a",{className:r,title:this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND,onMouseUp:function(){e.changeFreehand()}},this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND)}var a=[];if(this.state.selectedFeature&&"select"===this.props.mode)for(var i in s=c.default.createElement("div",{className:"c4g-editor-mode-switcher"},c.default.createElement("button",{title:this.props.lang.EDITOR_FEATURE_DELETE,className:"c4g-editor-feature-delete "+("remove"===this.state.selectMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){e.removeActiveFeature()}})),this.props.editorVars)if(this.props.editorVars.hasOwnProperty(i)){var l=this.props.editorVars[i];if(l.caption&&l.key){var p=this.state.selectedFeature.get(l.key)?this.state.selectedFeature.get(l.key):"";a.push(c.default.createElement("form",{className:"c4g-editor-vars-input",key:i,onSubmit:function(e){e.preventDefault()}},c.default.createElement("label",null,l.caption,":",c.default.createElement("input",{type:"text",value:p,name:l.key,onChange:function(t){e.handleVarChange(t)}}))))}}return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,s,c.default.createElement("div",{className:"c4g-editor-element-selection"},o)),c.default.createElement("div",{className:"c4g-editor-vars"},a))}},{key:"resetInteraction",value:function(){this.interaction&&(Array.isArray(this.interaction)?(this.props.mapController.map.removeInteraction(this.interaction[0]),this.props.mapController.map.removeInteraction(this.interaction[1])):this.props.mapController.map.removeInteraction(this.interaction))}},{key:"removeActiveFeature",value:function(){var e=(new d.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.removeFeature(e),this.props.editorLayer.getSource().removeFeature(this.state.selectedFeature),this.setState({selectedFeature:!1})}},{key:"componentDidUpdate",value:function(e,t,n){var o=this;this.props.elements[0]&&e.mode!==this.props.mode&&(0===this.state.activeElement?this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}):this.props.elements.find((function(e){return e.id===o.state.activeElement}))||this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}))}},{key:"changeSelectMode",value:function(e){this.setState({selectMode:e})}},{key:"handleVarChange",value:function(e){var t=e.target.value,n=e.target.name;this.state.selectedFeature.set(n,t);var o=(new d.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.modifyFeature(o),this.setState({selectedFeature:this.state.selectedFeature})}},{key:"changeFreehand",value:function(){this.setState({freehand:!this.state.freehand})}},{key:"changeJSON",value:function(e){this.setState({features:e.target.value})}}]),s}(c.Component);t.default=b},"./Resources/public/js/components/c4g-popup-container.jsx":(e,t,n)=>{var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.PopupContainer=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=o(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),p=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n("./node_modules/react/index.js")),d=n("./Resources/public/js/c4g-maps-i18n.js");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var f=c.default.lazy((function(){return n.e("Resources_public_js_components_c4g-titlebar_jsx").then(n.bind(n,"./Resources/public/js/components/c4g-titlebar.jsx"))})),m=function(e){(0,l.default)(s,e);var t,n,o=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,u.default)(t);if(n){var s=(0,u.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,p.default)(this,e)});function s(e){var t;return(0,r.default)(this,s),(t=o.call(this,e)).state={content:"",open:e.open,detailsOpen:!1,conststr:!1},e.hideOther((0,i.default)(t)),t.routeButtons="",t.language=(0,d.getLanguage)(t.props.mapData),t.close=t.close.bind((0,i.default)(t)),t.toggleDetails=t.toggleDetails.bind((0,i.default)(t)),t}return(0,a.default)(s,[{key:"render",value:function(){var e=this.props.external?"c4g-popup-container ":"c4g-sideboard c4g-popup-container ";this.state.open?e+="c4g-open ":e+="c4g-close",this.props.alwaysExtended||this.state.detailsOpen?e+=" c4g-details-open":e+=" c4g-details-closed";var t="c4g-popup-header",n=c.default.createElement("div",null);return this.state.conststr&&(t+=" c4g-routing",n=c.default.createElement(this.state.conststr,{config:this.state.config})),c.default.createElement("div",{className:e},c.default.createElement("div",{className:"c4g-popup-wrapper"},c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",null,"Loading...")},c.default.createElement(f,{wrapperClass:t,headerClass:"c4g-popup-header-headline",header:this.props.mapData.popupHeadline||"",closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.language.CLOSE,detailBtnClass:"",detailBtnCb:""},n)),c.default.createElement("div",{className:"c4g-popup-content",dangerouslySetInnerHTML:{__html:this.state.content}})))}},{key:"setAddButtons",value:function(e,t){this.setState({config:t,conststr:e})}},{key:"setContent",value:function(e){this.setState({content:e})}},{key:"open",value:function(){this.setState({open:!0})}},{key:"close",value:function(){var e={open:!1,content:this.props.external?"":this.state.content};this.setState(e)}},{key:"toggleDetails",value:function(){this.setState({detailsOpen:!this.state.detailsOpen})}}]),s}(c.Component);t.PopupContainer=m},"./Resources/public/js/components/c4g-starboard-style.jsx":(e,t,n)=>{var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n("./node_modules/react/index.js")),c=o(n("./node_modules/ol/Feature.js")),d=n("./node_modules/ol/geom.js"),h=n("./Resources/public/js/c4g-maps-constant.js"),f=n("./Resources/public/js/c4g-maps-utils.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var g=function(e){(0,i.default)(s,e);var t,n,o=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,p.default)(t);if(n){var s=(0,p.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,l.default)(this,e)});function s(e){return(0,r.default)(this,s),o.call(this,e)}return(0,a.default)(s,[{key:"enterEvent",value:function(e){13===e.which&&this.props.clickEvent(e)}},{key:"render",value:function(){var e=this,t=null,n=this.props.styleData.arrLocStyles[this.props.styleId],o=n.locStyleArr,s=n.style&&n.style(new c.default({geometry:new d.Point(0,0)}),"EPSG:4326")?n.style(new c.default({geometry:new d.Point(0,0)}),"EPSG:4326"):null,r=Array.isArray(s)?s[0]:s,a=o?o.styletype:"default",i=this.props.tooltip||"";if(!o||"cust_icon"!==a&&"cust_icon_svg"!==a&&"photo"!==a){var l,p,m;switch(a){case"point":l=h.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":l=h.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":l=h.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":l=h.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":l=h.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":l=h.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:l=h.cssConstants.STARBOARD_LOCSTYLE}r&&r.getFill()&&r.getStroke()?(p=r.getFill().getColor(),m=r.getStroke().getColor()):o&&o.fillcolor&&o.strokecolor&&(p=f.utils.getRgbaFromHexAndOpacity(o.fillcolor[0],o.fillcolor[1]),m=f.utils.getRgbaFromHexAndOpacity(o.strokecolor[0],o.strokecolor[1]));var g={"--var-color":p,"--var-bordercolor":m};t=this.props.clickEvent?u.default.createElement("span",{className:l,style:g,title:i,onMouseUp:function(t){return e.props.clickEvent(t)}}):u.default.createElement("span",{className:l,style:g,title:i})}else{var y,v=null;if(o.icon_src&&-1!==o.icon_src.indexOf(".")||o.svgSrc&&-1!==o.svgSrc.indexOf("."))y="cust_icon"===a||"photo"===a?o.icon_src:o.svgSrc,v=u.default.createElement("img",{src:y,style:{height:25,width:25}});else if(r){var b=r.getImage&&"function"==typeof r.getImage&&r.getImage()?r.getImage():null;if(!b||!b.getSrc())return null;v=u.default.createElement("img",{src:b.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent?u.default.createElement("span",{tabIndex:1,className:h.cssConstants.STARBOARD_LOCSTYLE,title:i,onKeyPress:function(t){return e.enterEvent(t)},onMouseUp:function(t){return e.props.clickEvent(t)}},v):u.default.createElement("span",{className:h.cssConstants.STARBOARD_LOCSTYLE,title:i},v)}return t}}]),s}(u.Component);t.C4gStarboardStyle=g}}]);