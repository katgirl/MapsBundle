(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["Resources_public_js_components_c4g-consent-banner_jsx"],{"./node_modules/@babel/runtime/helpers/assertThisInitialized.js":e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/classCallCheck.js":e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/createClass.js":e=>{function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/getPrototypeOf.js":e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/inherits.js":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/setPrototypeOf.js");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/typeof.js").default,n=r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");e.exports=function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/setPrototypeOf.js":e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(r,o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},"./Resources/public/js/components/c4g-consent-banner.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),a=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=s?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),c=r("./Resources/public/js/c4g-maps-i18n.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var d=function(e){(0,l.default)(n,e);var t,r,o=(t=n,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,i.default)(t);if(r){var n=(0,i.default)(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return(0,a.default)(this,e)});function n(e){var t;return(0,s.default)(this,n),(t=o.call(this,e)).language=(0,c.getLanguage)(e.mapData),t}return(0,u.default)(n,[{key:"render",value:function(){var e=this,t=this.props.mapData.cookie;return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"c4g-maps-consent-overlay"},p.default.createElement("div",{className:"c4g-maps-consent-info",dangerouslySetInnerHTML:{__html:t.info}}),p.default.createElement("button",{className:"c4g-maps-consent-button btn",onClick:function(){return e.clickEvent(e)}}," ",this.language.ACCEPT)))}},{key:"clickEvent",value:function(e){var t=e.props.mapData.cookie;e.setCookie(t.name,t.value),window.initMap(this.props.mapData)}},{key:"setCookie",value:function(e,t){document.cookie=e+"="+t+"; Session"}}]),n}(p.Component);t.default=d}}]);