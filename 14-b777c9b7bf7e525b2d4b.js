webpackJsonp([14],{2208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2521);n.d(t,"default",function(){return r.a})},2473:function(e,t,n){"use strict";function r(){return i.a.createElement("div",null,i.a.createElement(o.a,null,"Access denied!"),i.a.createElement("p",null,"Unfortunately you do not have access to this functionality."))}t.a=r;var a=n(0),i=n.n(a),o=n(205)},2521:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return e}function s(e,t){F.take(1).subscribe(function(e){var r=[],a=e.selectedLeft.map(function(e){return e.id}).indexOf(t.id);r=a>=0?e.selectedLeft.slice(0,a).concat(e.selectedLeft.slice(a+1)):e.selectedLeft.concat([t]),n.i(O.c)({hierarchy:H({},e,{reload:[],selectedLeft:r})})})}function c(e,t){n.i(O.c)({hierarchy:H({},e,{isProcessing:t})})}function l(e){return F.take(1).combineLatest(D).flatMap(function(t){var n=B(t,2),r=n[0],a=n[1];e.parent={id:r.selectedRight[0]&&r.selectedRight[0].id};var i=e.save().then(function(){return a.i18n.getTranslation("successfully_moved_$$ouName$$",{ouName:e.displayName})}).catch(function(t){return a.i18n.getTranslation("failed_to_move_$$ouName$$_($$errorMessage$$)",{ouName:e.displayName,errorMessage:t})});return M.Observable.fromPromise(i)})}function u(){F.take(1).do(function(e){return c(e,!0)}).map(function(e){return(e.selectedLeft||[]).map(function(e){return e.id})}).flatMap(function(e){return M.Observable.fromPromise(W(e)).flatMap(o)}).map(l).concatAll().subscribe(function(e){$.a.show({message:e,translate:!1})},function(e){c(O.b.state.hierarchy,!1)},function(){n.i(O.c)({hierarchy:H({},O.b.state.hierarchy,{selectedLeft:[],selectedRight:[],initiallySelected:[],moveTargetPath:O.b.state.hierarchy.selectedRight[0].path,reload:[].concat(O.b.state.hierarchy.selectedRight.map(function(e){return e.id})).concat(O.b.state.hierarchy.selectedLeft.map(function(e){return e.parent&&e.parent.id?e.parent.id:O.b.state.hierarchy.leftRoots.concat(O.b.state.hierarchy.rightRoots).map(function(e){return e.id}).filter(function(t){return new RegExp(t).test(e.path)}).reduce(function(e){return e})}))})}),setTimeout(function(){c(O.b.state.hierarchy,!1)},0)})}function d(e,t){F.take(1).subscribe(function(e){return n.i(O.c)({hierarchy:H({},e,{reload:[],selectedRight:[t],moveTargetPath:null})})})}function f(e,t){var n={title:{color:"#666",marginBottom:".5rem"},message:{color:"#666",padding:".5rem",display:"block"},list:{paddingLeft:"1.5rem"}},r=e.organisationUnits.map(function(e){return b.a.createElement("li",{key:e.id},e.displayName)}),a=b.a.createElement("span",{style:n.message},t.d2.i18n.getTranslation(e.noOrganisationUnitsMessage));return b.a.createElement("div",{style:e.style},b.a.createElement("div",{style:n.title},t.d2.i18n.getTranslation(e.title)),r.length?b.a.createElement("ul",{style:n.list},r):a)}function h(e,t,n){return e.map(n).some(function(e){return t.map(n).indexOf(e)>=0})}function m(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("/").filter(function(e){return e})}function g(e,t){if(e.some(function(e){return!e.path})||t.some(function(e){return!e.path}))return I.a.warn("No path found, so can not run hierarchy validation"),!0;if(1!==t.length)return I.a.warn("More than/less than 1 target found, can not move."),!0;var n=t[0];return e.some(function(e){return m(n.path).indexOf(e.id)>=0})}function p(e){return e.isProcessing||!e.selectedLeft.length||!e.selectedRight.length||h(e.selectedLeft,e.selectedRight,function(e){return e&&e.id})||g(e.selectedLeft,e.selectedRight)}function y(e,t){var n={wrap:{flex:1,display:"flex",flexOrientation:"row",margin:"1rem 0"},ouTreeLeft:{flex:1,marginRight:"2rem",padding:"1rem"},ouTreeRight:{flex:1,padding:"1rem"},moveButton:{width:"100%",marginBottom:"1rem",marginTop:"1rem"},pendingOperationsWrap:{padding:"1rem",margin:"1rem 0"},pendingOperationsListsWrap:{display:"flex",flexDirection:"row"},pendingOperationsList:{flex:1,padding:".5rem"},errorMessage:{color:"orange",lineHeight:"1.5rem",padding:"1rem 0",display:"flex",alignItems:"flex-end"},errorIcon:{color:"orange"}};if(!t.d2.currentUser.authorities.has("F_ORGANISATIONUNIT_MOVE"))return b.a.createElement(j.a,null);var a=t.d2.i18n.getTranslation("move_$$ouCount$$_organisation_units",{ouCount:e.selectedLeft&&e.selectedLeft.length||0}),i=t.d2.i18n.getTranslation("hierarchy_operations"),o=t.d2.i18n.getTranslation("you_can_not_move_higher_level_organisation_units_to_its_descendants"),c=e.moveTargetPath?[].concat(r(e.initiallyExpanded),[e.moveTargetPath]):e.initiallyExpanded;return b.a.createElement("div",null,b.a.createElement(A.a,null,i),b.a.createElement("div",{style:n.wrap},b.a.createElement(R.a,{style:n.ouTreeLeft},b.a.createElement(E.a,{roots:e.leftRoots,initiallyExpanded:e.initiallyExpanded,selected:e.selectedLeft.map(function(e){return e.path}),onSelectClick:s,onUpdateInput:function(e){return J(e)},idsThatShouldBeReloaded:e.reload,noHitsLabel:t.d2.i18n.getTranslation("no_matching_organisation_units"),forceReloadChildren:!0})),b.a.createElement(R.a,{style:n.ouTreeRight},b.a.createElement(E.a,{roots:e.rightRoots,selected:e.selectedRight.map(function(e){return e.path}),initiallyExpanded:c,onSelectClick:d,onUpdateInput:function(e){return G(e)},idsThatShouldBeReloaded:e.reload,noHitsLabel:t.d2.i18n.getTranslation("no_matching_organisation_units"),hideCheckboxes:!0,hideMemberCount:!0,forceReloadChildren:!0}))),b.a.createElement(R.a,{style:n.pendingOperationsWrap},b.a.createElement("div",{style:n.pendingOperationsListsWrap},b.a.createElement(q,{style:n.pendingOperationsList,organisationUnits:e.selectedLeft,noOrganisationUnitsMessage:"select_organisation_units_to_move_from_the_left_tree",title:"move"}),b.a.createElement(q,{style:n.pendingOperationsList,organisationUnits:e.selectedRight,noOrganisationUnitsMessage:"select_new_parent_for_organisation_units_from_the_right_tree",title:"new_parent"}))),e.selectedLeft.length&&e.selectedRight.length&&g(e.selectedLeft||[],e.selectedRight||[])?b.a.createElement("div",{style:n.errorMessage},b.a.createElement(C.a,{style:n.errorIcon,className:"material-icons"},"warning"),o):null,b.a.createElement(w.a,{primary:!0,style:n.moveButton,label:a,onClick:u,disabled:p(e)}))}var v=n(0),b=n.n(v),_=n(206),R=n.n(_),E=n(927),L=n(883),O=n(86),T=n(64),x=n(128),w=n.n(x),P=n(62),U=n(17),M=(n.n(U),n(23)),$=(n.n(M),n(63)),A=n(205),k=n(926),N=n(18),I=n.n(N),S=n(466),C=n.n(S),j=n(2473),B=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(U.getInstance)();case 2:return r=e.sent,e.next=5,r.models.organisationUnit.list({filter:["id:in:["+t.join(",")+"]"],fields:":owner,href,id,parent,displayName,path,children[id,displayName,path]"});case 5:return a=e.sent,e.abrupt("return",a.toArray());case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),D=M.Observable.fromPromise(n.i(U.getInstance)()),F=O.b.map(function(e){return e.hierarchy||{}}),G=T.a.create("rightTreeSearch","Hierarchy"),J=T.a.create("leftTreeSearch","Hierarchy");M.Observable.merge(J.map(function(e){return H({},e,{side:"left"})}).debounceTime(400),G.map(function(e){return H({},e,{side:"right"})}).debounceTime(400)).filter(function(e){return e.data}).map(function(e){var t=e.complete,r=e.error,a=e.data,i=e.side;return M.Observable.fromPromise(n.i(k.a)(a,50)).map(function(e){return{complete:t,error:r,organisationUnits:e,side:i}})}).concatAll().flatMap(function(e){return M.Observable.of(e).combineLatest(F.take(1),function(e,t){return{result:e,hierarchy:t}})}).subscribe(function(e){var t=e.result;e.hierarchy;n.i(O.c)({hierarchy:H({},O.b.state.hierarchy,i({},t.side+"Roots",t.organisationUnits))})}),M.Observable.merge(J.filter(function(e){return!e.data}).map(function(){return"left"}),G.filter(function(e){return!e.data}).map(function(){return"right"})).flatMap(function(e){return O.b.take(1).map(function(t){return{side:e,state:t}})}).subscribe(function(e){var t=e.side,r=e.state;n.i(O.c)({hierarchy:H({},r.hierarchy,i({},t+"Roots",r.userOrganisationUnits.toArray()))})});var V=O.b.map(function(e){var t=e.hierarchy,n=void 0===t?{}:t,r=e.userOrganisationUnits;return{roots:r.toArray(),leftRoots:n.leftRoots,rightRoots:n.rightRoots,initiallyExpanded:r.toArray().map(function(e){return e.path}),moveTargetPath:n.moveTargetPath||null,selectedLeft:n.selectedLeft||[],selectedRight:n.selectedRight||[],isProcessing:n.isProcessing,reload:n.reload}});f.defaultProps={organisationUnits:[]};var q=n.i(P.a)(f);y.defaultProps={selectedLeft:[],selectedRight:[]},t.a=n.i(L.a)(V,n.i(P.a)(y))}});
//# sourceMappingURL=14-b777c9b7bf7e525b2d4b.js.map