(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{2324:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(1347),i=n.n(a),c=n(2296),u=Object(c.a)({channelTypes:{color:"Color",fontFamily:"Category",fontSize:"Numeric",fontWeight:"Category",text:"Text"},defaultEncoding:{color:{value:"black"},fontFamily:{value:"Helvetica"},fontSize:{value:20},fontWeight:{value:"bold"},text:{value:""}}});function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?p(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"ROTATION",(function(){return b})),n.d(e,"default",(function(){return g}));var b={flat:function(){return 0},random:function(){return 30*Math.floor(6*Math.random()-3)},square:function(){return 90*Math.floor(2*Math.random())}},g=function(t){function e(){var t,n;l(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return m(p(n=d(this,(t=h(e)).call.apply(t,[this].concat(r)))),"isMounted",!1),m(p(n),"state",{words:[]}),m(p(n),"createEncoder",u.createSelector()),m(p(n),"setWords",(function(t){n.isMounted&&n.setState({words:t})})),n}var n,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){this.isMounted=!0,this.update()}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.data,o=e.encoding,r=e.width,a=e.height,i=e.rotation;t.data===n&&t.encoding===o&&t.width===r&&t.height===a&&t.rotation===i||this.update()}},{key:"componentWillUnmount",value:function(){this.isMounted=!1}},{key:"update",value:function(){var t=this.props,e=t.data,n=t.width,o=t.height,r=t.rotation,a=t.encoding,c=this.createEncoder(a);c.setDomainFromDataset(e),i()().size([n,o]).words(e).padding(5).rotate(b[r]||b.flat).text((function(t){return c.channels.text.getValueFromDatum(t)})).font((function(t){return c.channels.fontFamily.encodeDatum(t,"Helvetica")})).fontWeight((function(t){return c.channels.fontWeight.encodeDatum(t,"normal")})).fontSize((function(t){return c.channels.fontSize.encodeDatum(t,0)})).on("end",this.setWords).start()}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,o=t.encoding,a=this.state.words,i=this.createEncoder(o);return i.channels.color.setDomainFromDataset(a),r.a.createElement("svg",{width:e,height:n},r.a.createElement("g",{transform:"translate(".concat(e/2,",").concat(n/2,")")},a.map((function(t){return r.a.createElement("text",{key:t.text,fontSize:"".concat(t.size,"px"),fontWeight:t.weight,fontFamily:t.font,fill:i.channels.color.encodeDatum(t,""),textAnchor:"middle",transform:"translate(".concat(t.x,", ").concat(t.y,") rotate(").concat(t.rotate,")")},t.text)}))))}}])&&s(n.prototype,o),a&&s(n,a),e}(r.a.PureComponent);m(g,"defaultProps",{encoding:{},rotation:"flat"})}}]);