(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1022:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(87),i={bottom:16,left:16,right:16,top:16};function a(e){return void 0===e&&(e=i),Object(r.a)((function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.right}),(function(e){return e.top}),(function(t,n,r,i){return void 0===t&&(t=e.bottom),void 0===n&&(n=e.left),void 0===r&&(r=e.right),void 0===i&&(i=e.top),{bottom:t,left:n,right:r,top:i}}))}},1023:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(87);function i(e){return Object(r.a)((function(e){return e.encoding}),(function(e){return e.options}),(function(t,n){return new e({encoding:t,options:n})}))}},1024:function(e,t,n){"use strict";function r(e){return void 0!==e&&0<e.length&&("string"==typeof e[0]||"number"==typeof e[0])}function i(e){var t,n=e.type,i=e.domain,a=e.range,o=e.nice,c=e.paddingInner,l=e.paddingOuter;if("linear"===n||"time"===n||"band"===n)t=n;else{if("utc"!==n)throw new Error("Unsupported scale type: "+n);t="timeUtc"}var u={type:t};return r(i)&&(u.domain=i),r(a)&&(u.range=a),void 0!==o&&(u.nice=o),void 0!==c&&(u.paddingInner=c),void 0!==l&&(u.paddingOuter=l),u}n.d(t,"a",(function(){return i}))},1025:function(e,t,n){"use strict";var r=n(1),i=n.n(r),a=n(1054),o=8,c={display:"inline-block"};function l(e){var t=e.item,n=e.MarkRenderer,r=e.LabelRenderer;return i.a.createElement(a.a,{key:"legend-item-"+t.field+"-"+t.value,margin:"0 5px"},void 0===n?i.a.createElement("svg",{width:o,height:o,style:c},i.a.createElement("circle",{fill:t.encodedValues.color||t.encodedValues.stroke||t.encodedValues.fill||"#ccc",stroke:t.encodedValues.stroke||"none",r:o/2,cx:o/2,cy:o/2})):i.a.createElement(n,{item:t}),void 0===r?i.a.createElement(a.b,{align:"left",margin:"0 0 0 4px"},t.value):i.a.createElement(r,{item:t}))}function u(){return(u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var d={display:"flex",flexBasis:"auto",flexDirection:"row",flexGrow:1,flexShrink:1,flexWrap:"wrap",fontSize:"0.8em",justifyContent:"flex-end",padding:8};function s(e){var t=e.items,n=e.ItemRenderer,r=void 0===n?l:n,a=e.ItemMarkRenderer,o=e.ItemLabelRenderer,c=e.style,s=void 0===c?d:u({},d,{},c);return i.a.createElement("div",{style:s},t.map((function(e){return i.a.createElement(r,{key:"legend-item-"+e.field+"-"+e.value,item:e,MarkRenderer:a,LabelRenderer:o})})))}function h(){return(h=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var f={display:"flex",flexBasis:"auto",flexGrow:1,flexShrink:1,maxHeight:100,overflowY:"auto",position:"relative"},m=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.groups,n=e.LegendGroupRenderer,r=void 0===n?s:n,a=e.LegendItemRenderer,o=e.LegendItemMarkRenderer,c=e.LegendItemLabelRenderer,l=e.style,u=void 0===l?f:h({},f,{},l);return i.a.createElement("div",{style:u},t.map((function(e){return i.a.createElement(r,{key:e[0].field,items:e,ItemRenderer:a,ItemMarkRenderer:o,ItemLabelRenderer:c})})))},t}(r.PureComponent);function p(e,t,n){if(e.hasLegend()){var r=n.LegendRenderer,a=void 0===r?m:r,o=n.LegendGroupRenderer,c=n.LegendItemRenderer,l=n.LegendItemLabelRenderer,u=n.LegendItemMarkRenderer;return function(){return i.a.createElement(a,{groups:e.getLegendInfos(t),LegendGroupRenderer:o,LegendItemRenderer:c,LegendItemMarkRenderer:u,LegendItemLabelRenderer:l})}}}n.d(t,"a",(function(){return p}))},1026:function(e,t,n){"use strict";var r=n(1),i=n.n(r),a=n(1858),o=n(1859),c=n(1856),l=n(1857);function u(){return(u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function s(e){var t=e.axisWidth,n=e.labelAngle,r=e.labelFlush,a=e.labelOverlap,o=e.orient,c=e.tickLabels,l=e.tickLabelDimensions,s=e.tickTextAnchor,h=void 0===s?"middle":s;if("rotate"===a&&0!==n){var f=0<n?-6:6;"top"===o&&(f=0);var m="top"===o?-3:0;return function(e){var t=e.x,r=e.y,a=(e.dy,e.formattedValue),o=void 0===a?"":a,c=d(e,["x","y","dy","formattedValue"]);return i.a.createElement("g",{transform:"translate("+(t+f)+", "+(r+m)+")"},i.a.createElement("text",u({transform:"rotate("+n+")"},c,{textAnchor:h}),o))}}if(!0===r||"number"==typeof r){var p=new Map;return c.forEach((function(e,t){p.set(e,l[t])})),function(e){var n=e.x,a=e.y,o=(e.dy,e.formattedValue),c=void 0===o?"":o,l=d(e,["x","y","dy","formattedValue"]),s=p.get(c),f=void 0===s?0:s.width,m=h,y=0;return 0>n-f/2?(m="start","number"==typeof r&&(y-=r)):n+f/2>t&&(m="end","number"==typeof r&&(y+=r)),i.a.createElement("text",u({x:n+y,y:a},l,{textAnchor:m}),c)}}return null}var h=n(278);function f(){return(f=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=8,y=function(){function e(e){m(this,"chartWidth",void 0),m(this,"chartHeight",void 0),m(this,"containerWidth",void 0),m(this,"containerHeight",void 0),m(this,"margin",void 0),m(this,"xEncoder",void 0),m(this,"xLayout",void 0),m(this,"yEncoder",void 0),m(this,"yLayout",void 0);var t=e.width,n=e.height,r=e.minContentWidth,i=void 0===r?0:r,a=e.minContentHeight,o=void 0===a?0:a,l=e.margin,u=e.xEncoder,d=e.xTickSize,s=e.xTickTextStyle,h=e.autoAdjustXMargin,f=e.yEncoder,y=e.yTickSize,g=e.yTickTextStyle,v=e.autoAdjustYMargin;this.xEncoder=u,this.yEncoder=f,void 0!==f.axis&&(this.yLayout=f.axis.computeLayout({axisWidth:Math.max(n-l.top-l.bottom),tickSize:f.axis.config.tickSize||y,tickTextStyle:g}));var b=this.yLayout&&(void 0===v||v)?Object(c.a)(l,this.yLayout.minMargin):l,x=Math.max(t-b.left-b.right,i);void 0!==u.axis&&(this.xLayout=u.axis.computeLayout({axisWidth:x,labelAngle:this.recommendXLabelAngle(u.axis.config.orient),tickSize:u.axis.config.tickSize||d,tickTextStyle:s}));var k=this.xLayout&&(void 0===h||h)?Object(c.a)(b,this.xLayout.minMargin):b,O=Math.max(n-k.top-k.bottom,o),E=Math.round(x+k.left+k.right),L=Math.round(O+k.top+k.bottom),w=E>t,j=L>n;w&&(k.bottom+=p),j&&(k.right+=p),this.chartWidth=w?E+p:E,this.chartHeight=j?L+p:L,this.containerWidth=t,this.containerHeight=n,this.margin=k}var t=e.prototype;return t.recommendXLabelAngle=function(e){void 0===e&&(e="bottom");var t=this.yEncoder.axis;return!this.yLayout||void 0!==t&&("right"===t.config.orient&&"bottom"===e||"left"===t.config.orient&&"top"===e)?h.a:-h.a},t.renderChartWithFrame=function(e){return i.a.createElement(l.a,{width:this.containerWidth,height:this.containerHeight,contentWidth:this.chartWidth,contentHeight:this.chartHeight,renderContent:e})},t.renderXAxis=function(e){var t=this.xEncoder.axis;return t&&this.xLayout?i.a.createElement(a.a,f({label:t.getTitle(),labelOffset:this.xLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickComponent:s(this.xLayout),tickFormat:t.getFormat()},e)):null},t.renderYAxis=function(e){var t=this.yEncoder.axis;return t&&this.yLayout?i.a.createElement(o.a,f({label:t.getTitle(),labelOffset:this.yLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickFormat:t.getFormat()},e)):null},e}();function g(e){var t=e.width,n=e.height,r=e.minContentWidth,i=e.minContentHeight,a=e.margin,o=e.xEncoder,c=e.yEncoder,l=e.theme;return new y({height:n,margin:a,minContentHeight:i,minContentWidth:r,width:t,xEncoder:o,xTickSize:l.xTickStyles.length||l.xTickStyles.tickLength,xTickTextStyle:l.xTickStyles.label.bottom||l.xTickStyles.label.top,yEncoder:c,yTickSize:l.yTickStyles.length||l.yTickStyles.tickLength,yTickTextStyle:l.yTickStyles.label.left||l.yTickStyles.label.right})}n.d(t,"a",(function(){return g}))},1871:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1),o=n.n(a),c=n(912),l=n(1862),u=n(1865),d=n(1860),s=n(909),h=n(1854),f=n(1855);var m=n(285);var p=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t}(Object(m.a)({channelTypes:{color:"Color",x:"XBand",y:"YBand"},defaultEncoding:{color:{value:"#222"},x:{field:"x",type:"nominal"},y:{field:"y",type:"quantitative"}}})),y=n(1022),g=n(1024),v=n(1026),b=n(1023),x=n(1025);function k(){return(k=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return w}));var L={className:"",margin:y.a,theme:u.a,TooltipRenderer:function(e){var t=e.datum,n=e.color,r=e.encoder,i=t.label,a=t.min,c=t.max,l=t.median,u=t.firstQuartile,d=t.thirdQuartile,m=t.outliers,p=r.channels,y="nominal"===p.y.definition.type?p.x.formatValue:p.y.formatValue,g=[];return Object(s.a)(a)&&g.push({key:"Min",valueColumn:y(a)}),Object(s.a)(c)&&g.push({key:"Max",valueColumn:y(c)}),Object(s.a)(l)&&g.push({key:"Median",valueColumn:y(l)}),Object(s.a)(u)&&g.push({key:"1st Quartile",valueColumn:y(u)}),Object(s.a)(d)&&g.push({key:"3rd Quartile",valueColumn:y(d)}),Object(s.a)(m)&&0<m.length&&g.push({key:"# Outliers",valueColumn:m.length}),o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement("strong",{style:{color:n}},i)),0<g.length&&o.a.createElement("br",null),o.a.createElement(f.a,{data:g}))}},w=function(e){function t(t){var n;return E(O(n=e.call(this,t)||this),"createEncoder",Object(b.a)(p)),E(O(n),"createMargin",Object(y.b)()),n.renderChart=n.renderChart.bind(O(n)),n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.renderChart=function(e){var t=e.width,n=e.height,r=this.props,i=r.data,a=r.margin,u=r.theme,d=r.TooltipRenderer,s=this.createEncoder(this.props),h=s.channels,f="nominal"===h.y.definition.type;if(void 0!==h.x.scale){var m=h.x.getDomain(i);h.x.scale.setDomain(m)}if(void 0!==h.y.scale){var p=h.y.getDomain(i);h.y.scale.setDomain(p)}var y=Object(v.a)({width:t,height:n,margin:this.createMargin(a),theme:u,xEncoder:h.x,yEncoder:h.y});return y.renderChartWithFrame((function(e){return o.a.createElement(c.a,{width:e.width,height:e.height,ariaLabel:"BoxPlot",margin:y.margin,renderTooltip:function(e){var t=e.datum,n=e.color;return o.a.createElement(d,{datum:t,color:n,encoder:s})},showYGrid:!0,theme:u,xScale:Object(g.a)(h.x.scale.config),yScale:Object(g.a)(h.y.scale.config)},y.renderXAxis(),y.renderYAxis(),o.a.createElement(l.a,{key:h.x.definition.field,animated:!0,data:f?i.map((function(e){return k({},e,{y:h.y.get(e)})})):i.map((function(e){return k({},e,{x:h.x.get(e)})})),fill:function(e){return h.color.encode(e,"#55acee")},fillOpacity:.4,stroke:function(e){return h.color.encode(e)},strokeWidth:1,widthRatio:.6,horizontal:"nominal"===h.y.definition.type}))}))},n.render=function(){var e=this.props,t=e.className,n=e.data,r=e.width,i=e.height,a=this.createEncoder(this.props);return o.a.createElement(d.a,{className:"superset-chart-box-plot "+t,width:r,height:i,position:"top",renderLegend:Object(x.a)(a,n,this.props),renderChart:this.renderChart})},t}(o.a.PureComponent);E(w,"propTypes",{className:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]).isRequired,height:i.a.oneOfType([i.a.string,i.a.number]).isRequired,margin:i.a.any,data:i.a.any.isRequired,theme:i.a.any,TooltipRenderer:i.a.func}),E(w,"defaultProps",L)}}]);