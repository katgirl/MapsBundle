(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(24),r=(a=o)&&a.__esModule?a:{default:a},l=n(44),i=n(170),c=n(1),p=n(45),u=n(87),m=n(88);
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=n,s=document.createElement("div"),o=document.createElement("button"),r=(0,u.getLanguage)(e.mapController.data);o.title=r.CTRL_PERMALINK,s.className="c4g-permalink-control ol-unselectable ol-control ",e.open?s.className+="c4g-open":s.className+="c4g-close",e.external&&(s.className+=" c4g-external"),s.appendChild(o),jQuery(s).on("click",(function(e){a.state.open?a.close():a.open()}));var l=e.mapController,i=new m.Control({element:s,target:e.target});return l.mapsControls.controls.horizontalPanel=i,l.map.addControl(i),n.open=n.open.bind(n),n.close=n.close.bind(n),n.langConstants=(0,u.getLanguage)(n.props.mapController.data),n.state={open:!1,link:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"c4g-permalink-wrapper"},r.default.createElement(i.Titlebar,{wrapperClass:"c4g-permalink-header",headerClass:"c4g-permalink-header-headline",header:"Permalink",closeBtnClass:"c4g-permalink-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),r.default.createElement("div",{className:"c4g-permalink-content"},r.default.createElement("textarea",{cols:"50",rows:"2",id:"permalink-text",value:this.state.link,readOnly:!0}),r.default.createElement("button",{className:l.cssConstants.COPY+" "+l.cssConstants.ICON,title:this.langConstants.COPY_TO_CLIPBOARD,"data-clipboard-target":"#permalink-text"}),r.default.createElement("button",{className:l.cssConstants.REFRESH+" "+l.cssConstants.ICON,title:this.langConstants.REFRESH,onMouseUp:function(){return e.generateLinkFromCurrentState({target:e.textfield})}})))}},{key:"componentDidUpdate",value:function(e,t,n){(t.open===this.state.open&&t.link===this.state.link||this.generateLinkFromCurrentState({target:this.textfield}),t.open&&!this.state.open&&jQuery(".c4g-permalink-container").removeClass(l.cssConstants.OPEN).addClass(l.cssConstants.CLOSE),this.props.mapController.data.caching&&!this.state.open)&&(p.utils.getValue("panel")===this.constructor.name&&p.utils.storeValue("panel",""));this.state.open&&jQuery(".c4g-permalink-container").addClass(l.cssConstants.OPEN).removeClass(l.cssConstants.CLOSE)}},{key:"componentDidMount",value:function(){this.textField=document.querySelector("#permalink-text");var e=document.querySelector("."+l.cssConstants.COPY+"."+l.cssConstants.ICON);try{new ClipboardJS(e)}catch(e){console.warn("Permalink is currently not supported in backend mode..")}}},{key:"open",value:function(){jQuery(this.element).addClass(l.cssConstants.OPEN),jQuery(".c4g-permalink-container").removeClass(l.cssConstants.CLOSE).addClass(l.cssConstants.OPEN),this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){jQuery(this.element).removeClass(l.cssConstants.OPEN),jQuery(".c4g-permalink-container").removeClass(l.cssConstants.OPEN).addClass(l.cssConstants.CLOSE),this.setState({open:!1})}},{key:"toggle",value:function(){jQuery(this.popup).hasClass(l.cssConstants.CLOSE)?this.open():this.close()}},{key:"generateLinkFromCurrentState",value:function(e){var t,n,a,s,o,r;(!(t=e||{}).paramCount||6!==t.paramCount&&2!==t.paramCount&&1!==t.paramCount)&&(t.paramCount=6),s=[],a=this.props.mapController.map.getView(),n=this.props.mapController.proxy,r=a.getCenter(),r=(0,c.transform)([r[0],r[1]],"EPSG:3857","EPSG:4326"),s.push(+r[0].toFixed(6)),s.push(+r[1].toFixed(5)),s.push(a.getZoom()),s.push(+a.getRotation().toFixed(2)),n.activeBaselayerId?s.push(n.activeBaselayerId):s.push(0);var l=[],i=this.props.mapController.state.arrLayerStates;for(var u in i)i.hasOwnProperty(u)&&(l=l.concat(this.getActiveLayerIds(i[u])));l=l.length>1?(l=p.utils.deltaEncode(l)).join(":"):l[0]||"0",s.push(l),s=s.join("/"),o=p.utils.setUrlParam(s,this.props.mapController.data.permalink.getParameter),this.setState({link:o})}},{key:"generateLink",value:function(e){return!(!e||6!==e.length&&2!==e.length&&1!==e.length)&&p.utils.setUrlParam(e.join("/"),this.props.mapController.data.permalink.getParameter)}},{key:"getActiveLayerIds",value:function(e){var t=[];for(var n in e.active&&t.push(e.id),e.childStates)e.childStates.hasOwnProperty(n)&&(t=t.concat(this.getActiveLayerIds(e.childStates[n])));return t}}]),t}(o.Component);t.default=d}}]);