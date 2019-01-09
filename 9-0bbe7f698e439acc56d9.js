webpackJsonp([9],{1972:function(e,t,n){"use strict";function r(e){return i.a.createElement("div",null,e.sections.filter(function(e){return e.items.length>0}).map(function(e){return i.a.createElement("div",{key:e.key},i.a.createElement(s.a,null,e.name),i.a.createElement(o.a,{menuItems:e.items}))}))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a),o=n(2386),s=n(1979),c=n(2387),u=n(793),l=c.a.map(function(e){return{sections:e}});r.defaultProps={sections:[]},t.default=n.i(u.a)(l,r)},1979:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){var t=e.level,n=e.text,a=e.style,i=e.children,s=r(e,["level","text","style","children"]),c={type:t<=6?"h"+t:"span"},l=u({fontSize:24,fontWeight:300,color:"rgba(0, 0, 0, 0.87)",padding:"16px 0 5px 0",margin:0},a);return o.a.createElement(c.type,u({},s,{style:l}),i||n)}var i=n(0),o=n.n(i),s=n(1),c=n.n(s),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a.propTypes={level:c.a.oneOf([1,2,3,4,5,6]),text:c.a.string},a.defaultProps={level:1},t.a=a},1986:function(e,t,n){"use strict";var r=n(0),a=(n.n(r),n(1)),i=n.n(a),o={contextTypes:{d2:i.a.object.isRequired},getTranslation:function(e){return this.context.d2.i18n.getTranslation(e)}};t.a=o},2386:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(839),o=n.n(i),s=n(427),c=n.n(s),u=n(428),l=n.n(u),p=n(426),m=n.n(p),d=n(392),f=n.n(d),y=n(1986);t.a=a.a.createClass({displayName:"MenuCards.component",propTypes:{menuItems:a.a.PropTypes.arrayOf(a.a.PropTypes.shape({name:a.a.PropTypes.string,description:a.a.PropTypes.string}))},mixins:[y.a],getDefaultProps:function(){return{menuItems:[]}},renderCard:function(e,t){var n={padding:"0",margin:".5rem",float:"left",width:"230px"},r={padding:"1rem",height:"auto",borderBottom:"1px solid #ddd",cursor:"pointer"},i={height:"85px",padding:".5rem 1rem"},s={textAlign:"right"},u={cardHeaderText:{paddingRight:0}},p=[];return e.canCreate&&p.push(a.a.createElement(f.a,{key:"add",iconClassName:"material-icons",tooltip:this.getTranslation("add"),tooltipPosition:"top-center",onClick:e.add},"")),p.push(a.a.createElement(f.a,{key:"list",iconClassName:"material-icons",tooltip:this.getTranslation("list"),tooltipPosition:"top-center",onClick:e.list},"")),a.a.createElement(o.a,{key:t,style:n},a.a.createElement(c.a,{onClick:e.list,style:r,title:e.name,textStyle:u.cardHeaderText}),a.a.createElement(l.a,{style:i},e.description),a.a.createElement(m.a,{style:s},p))},render:function(){return a.a.createElement("div",null,this.props.menuItems.map(this.renderCard),a.a.createElement("div",{style:{clear:"both"}}))}})},2387:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}var a=n(81),i=n(124),o=n.n(i),s=n(28),c=(n.n(s),n(24)),u=(n.n(c),n(106)),l=function(){var e=r(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(c.getInstance)();case 2:return r=e.sent,e.abrupt("return",t.map(function(e){return{key:e.name,name:r.i18n.getTranslation(o()(e.name)),items:e.items.map(function(t){var a=t.key;return{name:t.label,description:r.i18n.getTranslation("intro_"+o()(a)),canCreate:r.currentUser.canCreate(r.models[a]),add:function(){return n.i(u.a)("/edit/"+e.name+"/"+a+"/add")},list:function(){return n.i(u.a)("/list/"+e.name+"/"+a)}}})}}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.a=a.b.map(function(e){return e.sideBar.mainSections.map(function(e){return e.key}).reduce(function(t,n){return t.concat([{name:n,items:e.sideBar[n]||[]}])},[])}).take(1).map(function(e){return s.Observable.fromPromise(l(e))}).concatAll()}});
//# sourceMappingURL=9-0bbe7f698e439acc56d9.js.map