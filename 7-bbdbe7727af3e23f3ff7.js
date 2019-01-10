webpackJsonp([7],{1204:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){g.a.saveOrganisationUnitLevels().subscribe(function(){return E.a.show({message:e.getTranslation("organisation_unit_levels_save_success")})},function(){return E.a.show({message:e.getTranslation("organisation_unit_levels_save_failed"),action:"ok"})})}function s(e,t){var n=t.d2.currentUser.canUpdate(t.d2.models.organisationUnitLevel);if(e.isLoading)return c.a.createElement(v.a,null);var a={paperWrap:{padding:"4rem 5rem",maxWidth:700,marginTop:"2rem"},rowStyle:{display:"flex",flexDirection:"row",height:"5rem"},formWrapStyle:{flex:1,display:"flex",flexDirection:"row"},fieldWrapStyle:{flex:1,paddingRight:"1rem"},translateButtonWrap:{alignItems:"flex-end",display:"flex",flex:"5rem",height:"5rem",verticalAlign:"middle"}},r=e.fieldsForOrganisationUnitLevel.map(function(t,r){var i=null;return t.organisationUnitLevel.id&&n&&(i=c.a.createElement("div",{style:a.translateButtonWrap},c.a.createElement(h.a,{iconClassName:"material-icons",onClick:function(){return e.onTranslateClick(t.organisationUnitLevel)}},"translate"))),c.a.createElement("div",{key:r,style:a.rowStyle},c.a.createElement(m.a,{style:a.formWrapStyle,fieldWrapStyle:a.fieldWrapStyle,fields:t.map(function(e){return j({},e,{props:j({},e.props,{disabled:!n})})}),onUpdateField:function(e,n){g.a.fieldUpdate({organisationUnitLevel:t.organisationUnitLevel,fieldName:e,fieldValue:n})},onUpdateFormStatus:function(e){return g.a.updateFormStatus({levelIndex:r,formStatus:e})}}),i)});return c.a.createElement("div",null,c.a.createElement(L.a,null,t.d2.i18n.getTranslation("organisation_unit_level_management")),c.a.createElement(T.a,{style:a.paperWrap},r,c.a.createElement(O.a,null,n?c.a.createElement(S.a,{onClick:function(){return o(t.d2.i18n)},isValid:e.formStatus.every(function(e){return e}),isSaving:e.isSaving}):[])))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),c=n.n(l),u=n(60),p=n(1690),d=n(146),f=n(234),v=n.n(f),m=n(1236),g=n(1783),y=n(232),h=n.n(y),b=n(466),T=n.n(b),S=n(1353),O=n(1578),E=n(61),L=n(1206),w=n(1297),P=(n(1632),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};s.defaultProps={fieldsForOrganisationUnitLevel:[],formStatus:[!1],isLoading:!0,isSaving:!1},s.propTypes={fieldsForOrganisationUnitLevel:l.PropTypes.array,formStatus:l.PropTypes.array,isLoading:l.PropTypes.bool,isSaving:l.PropTypes.bool};var C=p.a,k=n.i(d.a)(C,n.i(u.a)(s));t.default=n.i(u.a)(function(e){function t(){var e;a(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return s.state={translation:{open:!1}},s._onTranslateClick=s._onTranslateClick.bind(s),s._closeTranslationDialog=s._closeTranslationDialog.bind(s),s._translationSaved=s._translationSaved.bind(s),s._translationErrored=s._translationErrored.bind(s),s}return i(t,e),P(t,[{key:"componentDidMount",value:function(){g.a.initOrgUnitLevels()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,{onTranslateClick:this._onTranslateClick}),this.state.translation.model?c.a.createElement(w.a,{objectToTranslate:this.state.translation.model,objectTypeToTranslate:this.state.translation.model&&this.state.translation.model.modelDefinition,open:this.state.translation.open,onTranslationSaved:this._translationSaved,onTranslationError:this._translationErrored,onRequestClose:this._closeTranslationDialog,fieldsToTranslate:["name"]}):null)}},{key:"_onTranslateClick",value:function(e){var t=this.context.d2.models.organisationUnitLevel.create(e);this.setState({translation:{open:!0,model:t}})}},{key:"_translationSaved",value:function(){E.a.show({message:this.context.d2.i18n.getTranslation("translation_saved")})}},{key:"_translationErrored",value:function(){E.a.show({message:this.context.d2.i18n.getTranslation("translation_save_error"),action:"ok"})}},{key:"_closeTranslationDialog",value:function(){this.setState({translation:{open:!1,model:void 0}})}}]),t}(c.a.Component))},1206:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){var t=e.level,n=e.text,r=e.style,i=e.children,s=a(e,["level","text","style","children"]),l={type:t<=6?"h"+t:"span"},u=c({fontSize:24,fontWeight:300,color:"rgba(0, 0, 0, 0.87)",padding:"16px 0 5px 0",margin:0},r);return o.a.createElement(l.type,c({},s,{style:u}),i||n)}var i=n(0),o=n.n(i),s=n(2),l=n.n(s),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};r.propTypes={level:l.a.oneOf([1,2,3,4,5,6]),text:l.a.string},r.defaultProps={level:1},t.a=r},1229:function(e,t,n){"use strict";var a=new Map([["dataElement",["name","shortName","code","description","formName","domainType","valueType","aggregationType","zeroIsSignificant","url","categoryCombo","optionSet","commentOptionSet","legendSets","aggregationLevels"]],["dataElementGroup",["name","shortName","code","description","dataElements"]],["dataElementGroupSet",["name","shortName","code","description","compulsory","dataDimension","dataElementGroups"]],["category",["name","shortName","code","description","dataDimensionType","dataDimension","categoryOptions"]],["categoryOption",["name","shortName","code","description","startDate","endDate","organisationUnits"]],["categoryCombo",["name","shortName","code","dataDimensionType","skipTotal","categories"]],["categoryOptionGroup",["name","shortName","code","description","dataDimensionType","categoryOptions"]],["categoryOptionGroupSet",["name","description","dataDimension","dataDimensionType","categoryOptionGroups"]],["indicator",["name","shortName","code","description","annualized","decimals","indicatorType","legendSets","url","aggregateExportCategoryOptionCombo","aggregateExportAttributeOptionCombo"]],["indicatorGroup",["name","indicators"]],["indicatorType",["name","factor"]],["indicatorGroupSet",["name","description","compulsory","indicatorGroups"]],["dataSet",["name","shortName","code","description","expiryDays","openFuturePeriods","timelyDays","periodType","dataInputPeriods","categoryCombo","notificationRecipients","notifyCompletingUser","workflow","mobile","fieldCombinationRequired","validCompleteOnly","noValueRequiresComment","legendSets","skipOffline","dataElementDecoration","renderAsTabs","renderHorizontally","compulsoryFieldsCompleteOnly","dataSetElements","indicators","organisationUnits"]],["dataSetNotificationTemplate",["name","code","dataSets","messageTemplate","dataSetNotificationTrigger","relativeScheduledDays","sendStrategy","notificationRecipient","recipientUserGroup","deliveryChannels"]],["organisationUnit",["name","shortName","code","description","openingDate","closedDate","comment","url","contactPerson","address","email","phoneNumber","coordinates","dataSets","programs"]],["organisationUnitGroup",["name","shortName","code","description","color","symbol","organisationUnits"]],["organisationUnitGroupSet",["name","shortName","code","description","compulsory","dataDimension","includeSubhierarchyInAnalytics","organisationUnitGroups"]],["organisationUnitLevel",["name","offlineLevels"]],["constant",["name","shortName","code","description","value"]],["attribute",["name","shortName","code","description","valueType","optionSet","sortOrder","mandatory","unique","dataElementAttribute"]],["optionSet",["name","code","description","valueType"]],["legendSet",["name","code","legends"]],["eventProgram",["name","shortName","code","description","version","categoryCombo","workflow","completeEventsExpiryDays","expiryPeriodType","expiryDays"]],["eventProgramStage",["blockEntryForm","captureCoordinates","validCompleteOnly","preGenerateUID","executionDateLabel"]],["trackerProgram",["name","shortName","code","description","version","trackedEntityType","categoryCombo","workflow","displayFrontPageList","useFirstStageDuringRegistration","completeEventsExpiryDays","expiryPeriodType","expiryDays","programAttributes","minAttributesRequiredToSearch","maxTeiCountToReturn"]],["enrollment",["selectEnrollmentDatesInFuture","selectIncidentDatesInFuture","onlyEnrollOnce","displayIncidentDate","incidentDateLabel","enrollmentDateLabel","ignoreOverdueEvents","captureCoordinates","relationshipType","relationshipText","relationshipFromA","relatedProgram"]],["programStage",["name","description","minDaysFromStart","repeatable","periodType","displayGenerateEventBox","standardInterval","autoGenerateEvent","openAfterEnrollment","reportDateToUse","blockEntryForm","remindCompleted","allowGenerateNextVisit","generatedByEnrollmentDate","hideDueDate","captureCoordinates","validCompleteOnly","preGenerateUID","executionDateLabel","dueDateLabel"]],["trackedEntityAttribute",["name","shortName","code","description","optionSet","valueType","aggregationType","unique","orgunitScope","generated","pattern","inherit","confidential","displayInListNoProgram","legendSets"]],["trackedEntityAttributeGroup",["name","shortName","code","description","trackedEntityAttributes"]],["relationshipType",["name","code","aIsToB","bIsToA"]],["trackedEntityType",["name","description","minAttributesRequiredToSearch","maxTeiCountToReturn","trackedEntityTypeAttributes"]],["programIndicator",["program","name","shortName","code","description","decimals","aggregationType","analyticsType","analyticsPeriodBoundaries","displayInForm","legendSets","aggregateExportCategoryOptionCombo","aggregateExportAttributeOptionCombo","expression","filter"]],["programIndicatorGroup",["name","code","programIndicators"]],["validationRule",["name","shortName","code","description","instruction","importance","ruleType","importance","ruleType","periodType","leftSide","operator","rightSide","organisationUnitLevels","skipFormValidation"]],["validationRuleGroup",["name","shortName","code","description","validationRules"]],["predictor",["name","shortName","code","description","output","periodType","organisationUnitLevels","generator","sampleSkipTest","sequentialSampleCount","annualSampleCount","sequentialSkipCount"]],["pushAnalysis",["name","code","title","message","dashboard","recipientUserGroups","schedulingFrequency","enabled"]],["externalMapLayer",["name","code","mapService","imageFormat","url","attribution","mapLayerPosition","legendSet","legendSetUrl"]],["validationNotificationTemplate",["name","code","validationRules","recipientUserGroups","sendStrategy","notifyUsersInHierarchyOnly","messageTemplate"]],["programRule",["program","name","description","priority","condition","programRuleActions"]],["programRuleVariable",["program","name","useCodeForOptionSet","programRuleVariableSourceType","programStage","dataElement","trackedEntityAttribute"]],["dataApprovalLevel",["name","orgUnitLevel","categoryOptionGroupSet"]],["dataApprovalWorkflow",["name","periodType","dataApprovalLevels"]]]);t.a={for:function(e){return e&&a.has(e)?a.get(e):["name","shortName","code"]}}},1236:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),u=n(2),p=n.n(u),d=n(1301),f=(n.n(d),n(1359)),v=n(463),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(){},h=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.initState(e),n.asyncValidators=n.createAsyncValidators(e),n.asyncValidationRunner=e.asyncValidationRunner||new f.a,n.getFieldProp=n.getFieldProp.bind(n),n.getStateClone=n.getStateClone.bind(n),n}return s(t,e),g(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.asyncValidators=this.createAsyncValidators(e);var n=this.getStateClone();e.fields.filter(function(e){return t.state&&t.state.fields&&t.state.fields[e.name]}).filter(function(e){return e.value!==t.state.fields[e.name].value}).forEach(function(e){n.fields[e.name].value=e.value,t.validateField(n,e.name,e.value)}),this.setState(n)}},{key:"getStateClone",value:function(){var e=this;return{form:{pristine:this.state.form.pristine,valid:this.state.form.valid,validating:this.state.form.validating},fields:Object.keys(this.state.fields).reduce(function(t,n){return t[n]={pristine:e.state.fields[n].pristine,validating:e.state.fields[n].validating,valid:e.state.fields[n].valid,value:e.state.fields[n].value,error:e.state.fields[n].error},t},{})}}},{key:"renderFields",value:function(){var e=this,t={field:{position:"relative"},progress:this.props.validatingProgressStyle,validatingErrorStyle:{color:"orange"}};return this.props.fields.map(function(n){var a=n.props||{},i=a.errorTextProp,o=r(a,["errorTextProp"]),s=e.state.fields[n.name]||{},l=e.handleFieldChange.bind(e,n.name),u="onBlur"===o.changeEvent?function(t){var a=e.updateFieldState(e.getStateClone(),n.name,{value:t.target.value});e.validateField(a,n.name,t.target.value),e.setState(a)}:void 0,p=s&&s.validating?n.validatingLabelText||e.props.validatingLabelText:i;return c.a.createElement("div",{key:n.name,style:Object.assign({},t.field,e.props.fieldWrapStyle)},s.validating?c.a.createElement(v.a,{mode:"indeterminate",size:.33,style:t.progress}):void 0,c.a.createElement(n.component,m({value:s.value,onChange:o.changeEvent&&"onBlur"===o.changeEvent?u:l,onBlur:o.changeEvent&&"onBlur"===o.changeEvent?l:void 0,errorStyle:s.validating?t.validatingErrorStyle:void 0,errorText:s.valid?p:s.error},o)))})}},{key:"render",value:function(){return c.a.createElement("div",{style:this.props.style},this.renderFields())}},{key:"initState",value:function(e){var t=this,n={fields:e.fields.reduce(function(e,n){var r=t.state&&t.state.fields&&t.state.fields[n.name];return Object.assign(e,a({},n.name,{value:void 0===r||r.pristine?n.value:r.value,pristine:void 0===r||r.value===n.value,validating:void 0!==r&&r.validating,valid:void 0===r||r.valid,error:r&&r.error||void 0}))},{})};return n.form={pristine:Object.keys(n.fields).reduce(function(e,t){return e&&n.fields[t].pristine},!0),validating:Object.keys(n.fields).reduce(function(e,t){return e||n.fields[t].validating},!1),valid:Object.keys(n.fields).reduce(function(e,t){return e&&n.fields[t].valid},!0)},n}},{key:"createAsyncValidators",value:function(e){var t=this;return e.fields.filter(function(e){return Array.isArray(e.asyncValidators)&&e.asyncValidators.length}).reduce(function(e,n){return e[n.name]=t.asyncValidators&&t.asyncValidators[n.name]||void 0,e},{})}},{key:"cancelAsyncValidators",value:function(e){this.asyncValidators[e]&&(this.asyncValidators[e].unsubscribe(),this.asyncValidators[e]=void 0)}},{key:"updateFieldState",value:function(e,t,n){var a=this.getFieldProp(t);e.fields[t]={pristine:void 0!==n.pristine?!!n.pristine:e.fields[t].value===a.value,validating:void 0!==n.validating?!!n.validating:e.fields[t].validating,valid:void 0!==n.valid?!!n.valid:e.fields[t].valid,error:n.error,value:void 0!==n.value?n.value:e.fields[t].value};var r=Object.keys(e.fields);return e.form={pristine:r.reduce(function(t,n){return t&&e.fields[n].pristine},!0),validating:r.reduce(function(t,n){return t||e.fields[n].validating},!1),valid:r.reduce(function(t,n){return t&&e.fields[n].valid},!0)},e}},{key:"handleFieldChange",value:function(e,t){var a=this,r=t.target.value,i=this.getFieldProp(e);if(!i.props||"onBlur"!==i.props.changeEvent||r!==i.value){var o=this.getStateClone();this.setState(this.updateFieldState(o,e,{pristine:!1,value:r}),function(){if(!n.i(d.isObject)(r)&&r===(i.value?i.value:""))return void a.props.onUpdateField(e,r);a.asyncValidators[e]&&(a.cancelAsyncValidators(e),a.setState(a.updateFieldState(o,e,{validating:!1})));var t=a.validateField(o,e,r);!0===t?a.runAsyncValidators(i,o,e,r):a.setState(a.updateFieldState(o,e,{valid:!1,error:t}),function(){a.props.onUpdateFormStatus(a.state.form),a.props.onUpdateField(e,r)})})}}},{key:"runAsyncValidators",value:function(e,t,n,a){var r=this;(e.asyncValidators||[]).length>0?this.setState(this.updateFieldState(t,n,{validating:!0}),function(){r.props.onUpdateFormStatus(r.state.form),r.props.onUpdateField(n,a),r.asyncValidators[n]=r.asyncValidationRunner.listenToValidatorsFor(n,t).subscribe(function(e){r.setState(r.updateFieldState(r.getStateClone(),e.fieldName,{validating:!1,valid:e.isValid,error:e.message}),function(){r.cancelAsyncValidators(e.fieldName),r.props.onUpdateFormStatus(r.state.form)})}),r.asyncValidationRunner.run(n,e.asyncValidators,a)}):this.setState(this.updateFieldState(t,n,{valid:!0}),function(){r.props.onUpdateFormStatus(r.state.form),r.props.onUpdateField(n,a)})}},{key:"validateField",value:function(e,t,n){var a=this.getFieldProp(t),r=(a.validators||[]).reduce(function(t,a){return!0===t?!0===a.validator(n,e)||a.message:t},!0);return this.updateFieldState(e,t,{valid:!0===r,error:!0===r?void 0:r}),r}},{key:"getFieldProp",value:function(e){return this.props.fields.filter(function(t){return t.name===e})[0]}}]),t}(c.a.Component);h.propTypes={fields:p.a.arrayOf(p.a.shape({name:p.a.string.isRequired,value:p.a.any,component:p.a.func.isRequired,props:p.a.shape({changeEvent:p.a.oneOf(["onChange","onBlur"])}),validators:p.a.arrayOf(p.a.shape({validator:p.a.func.isRequired,message:p.a.string.isRequired})),asyncValidators:p.a.arrayOf(p.a.func.isRequired),validatingLabelText:p.a.string})).isRequired,validatingLabelText:p.a.string,validatingProgressStyle:p.a.object,onUpdateField:p.a.func.isRequired,onUpdateFormStatus:p.a.func,style:p.a.object,fieldWrapStyle:p.a.object},h.defaultProps={validatingLabelText:"Validating...",validatingProgressStyle:{position:"absolute",right:-12,top:16},onUpdateFormStatus:y},t.a=h},1297:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),s=n.n(o),l=n(2),c=n.n(l),u=n(19),p=(n.n(u),n(470)),d=n.n(p),f=n(1316),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(e,i){a(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return o.i18n=i.d2.i18n,o.state={TranslationForm:n.i(f.a)(o.props.objectToTranslate)},o.translationSaved=o.translationSaved.bind(o),o.translationError=o.translationError.bind(o),o.closeTranslationDialog=o.closeTranslationDialog.bind(o),o}return i(t,e),m(t,[{key:"render",value:function(){return s.a.createElement(d.a,v({title:this.i18n.getTranslation("translation_dialog_title"),autoDetectWindowHeight:!0,autoScrollBodyContent:!0},this.props),s.a.createElement(this.state.TranslationForm,{onTranslationSaved:this.translationSaved,onTranslationError:this.translationError,onCancel:this.closeTranslationDialog,fieldsToTranslate:this.props.fieldsToTranslate}))}},{key:"componentWillReceiveProps",value:function(e){e.objectToTranslate&&this.setState({TranslationForm:n.i(f.a)(e.objectToTranslate)})}},{key:"closeTranslationDialog",value:function(){this.props.onRequestClose()}},{key:"translationSaved",value:function(e){this.props.onTranslationSaved(e),this.closeTranslationDialog()}},{key:"translationError",value:function(e){this.props.onTranslationError(e)}}]),t}(o.Component);g.propTypes={objectToTranslate:c.a.shape({id:c.a.string.isRequired}).isRequired,onTranslationSaved:c.a.func.isRequired,onTranslationError:c.a.func.isRequired,open:c.a.bool,onRequestClose:c.a.func.isRequired,fieldsToTranslate:c.a.array},g.contextTypes={d2:c.a.object},t.a=g},1315:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),s=n.n(o),l=n(2),c=n.n(l),u=n(235),p=n.n(u),d=n(113),f=n.n(d),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(e,n){a(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));i.onLocaleChange=function(e,t,n){i.setState({locale:n}),i.props.onChange(n,e)};var o=i.context.d2.i18n;return i.getTranslation=o.getTranslation.bind(o),i}return i(t,e),m(t,[{key:"render",value:function(){var e=[{payload:"",text:""}].concat(this.props.locales).map(function(e,t){return s.a.createElement(f.a,{key:t,primaryText:e.name,value:e.locale})});return s.a.createElement(p.a,v({fullWidth:!0},this.props,{value:this.state&&this.state.locale,hintText:this.getTranslation("select_locale"),onChange:this.onLocaleChange}),e)}}]),t}(o.Component);g.propTypes={value:c.a.string,locales:c.a.arrayOf(c.a.shape({name:c.a.string.isRequired,locale:c.a.string.isRequired})).isRequired,onChange:c.a.func.isRequired},g.contextTypes={d2:c.a.object},t.a=g},1316:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){var t=O.a.create();return n.i(T.a)(e).subscribe(function(e){t.setState(e)}),h.Observable.combineLatest(n.i(T.b)(),t,function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object.assign.apply(Object,[{objectToTranslate:e,setTranslations:function(e){t.setState({translations:e})}}].concat(a))})}function s(e){return n.i(S.a)(o(e),w)}t.a=s;var l=n(0),c=n.n(l),u=n(2),p=n.n(u),d=n(461),f=n.n(d),v=n(88),m=n.n(v),g=n(462),y=n.n(g),h=n(18),b=(n.n(h),n(1315)),T=n(1317),S=n(146),O=n(29),E=n(463),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=function(e){function t(e,i){a(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));o.state={loading:!0,translations:{},translationValues:{},currentSelectedLocale:""},o.setCurrentLocale=function(e){o.setState({currentSelectedLocale:e})},o.setValue=function(e,t){var n=[].concat(o.props.translations),a=n.find(function(t){return t.locale===o.state.currentSelectedLocale&&t.property.toLowerCase()===m()(e)});a?t.target.value?a.value=t.target.value:n=n.filter(function(e){return e!==a}):(a={property:m()(e).toUpperCase(),locale:o.state.currentSelectedLocale,value:t.target.value},n.push(a)),o.props.setTranslations(n)},o.saveTranslations=function(){n.i(T.c)(o.props.objectToTranslate,o.props.translations).subscribe(o.props.onTranslationSaved,o.props.onTranslationError)};var s=o.context.d2.i18n;return o.getTranslation=s.getTranslation.bind(s),o}return i(t,e),L(t,[{key:"getLoadingdataElement",value:function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(E.a,{mode:"indeterminate"}))}},{key:"renderFieldsToTranslate",value:function(){var e=this;return this.props.fieldsToTranslate.filter(function(e){return e}).map(function(t){return c.a.createElement("div",{key:t},c.a.createElement(f.a,{floatingLabelText:e.getTranslation(m()(t)),value:e.getTranslationValueFor(t),fullWidth:!0,onChange:e.setValue.bind(e,t)}),c.a.createElement("div",null,e.props.objectToTranslate[t]))})}},{key:"renderForm",value:function(){return c.a.createElement("div",null,this.renderFieldsToTranslate(),c.a.createElement(y.a,{label:this.getTranslation("save"),primary:!0,onClick:this.saveTranslations}),c.a.createElement(y.a,{style:{marginLeft:"1rem"},label:this.getTranslation("cancel"),onClick:this.props.onCancel}))}},{key:"renderHelpText",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,this.getTranslation("select_a_locale_to_enter_translations_for_that_language")))}},{key:"render",value:function(){return this.props.locales||this.props.translations?c.a.createElement("div",{style:{minHeight:250}},c.a.createElement(b.a,{locales:this.props.locales,onChange:this.setCurrentLocale}),this.state.currentSelectedLocale?this.renderForm():this.renderHelpText()):this.getLoadingdataElement()}},{key:"getTranslationValueFor",value:function(e){var t=this,n=this.props.translations.find(function(n){return n.locale===t.state.currentSelectedLocale&&n.property.toLowerCase()===m()(e)});if(n)return n.value}}]),t}(l.Component);w.propTypes={onTranslationSaved:p.a.func.isRequired,onTranslationError:p.a.func.isRequired,objectToTranslate:p.a.shape({id:p.a.string.isRequired}),fieldsToTranslate:p.a.arrayOf(p.a.string)},w.defaultProps={fieldsToTranslate:["name","shortName","description"]},w.contextTypes={d2:p.a.object}},1317:function(e,t,n){"use strict";function a(){return a.localePromise||(a.localePromise=n.i(o.getInstance)().then(function(e){return e.Api.getApi().get("locales/db")}).then(function(e){return{locales:e}})),s.Observable.fromPromise(a.localePromise)}function r(e){return e.href?e.href:e.modelDefinition.apiEndpoint+"/"+e.id}function i(e){return s.Observable.of(e).flatMap(function(e){var t=e.modelDefinition;return t||t.name?n.i(o.getInstance)().then(function(t){return t.Api.getApi().get(r(e)+"/translations")}):Promise.reject(new Error("Can not find modelDefinition for "+e.id))})}t.b=a,t.a=i,n.d(t,"c",function(){return u});var o=n(19),s=(n.n(o),n(18)),l=(n.n(s),n(72)),c=function(){function e(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=l.a.create("saveTranslations");u.subscribe(function(e){var t=c(e.data,2),a=t[0],i=t[1],s=e.complete,l=e.error,u=r(a)+"/translations";n.i(o.getInstance)().then(function(e){e.Api.getApi().update(u,{translations:i},{dataType:"text"}).then(function(){return s(i)}).catch(l)})})},1353:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.d2,r=e.isValid,i=e.isSaving,s=e.onClick,c=a(e,["isValid","isSaving","onClick"]),p=i?n.i18n.getTranslation("saving"):n.i18n.getTranslation("save");return o.a.createElement(l.a,u({},c,{primary:!0,onClick:s,label:p,disabled:i||!r}))}var i=n(0),o=n.n(i),s=n(462),l=n.n(s),c=n(60),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};r.propTypes={isSaving:o.a.PropTypes.bool,isValid:o.a.PropTypes.bool,onClick:o.a.PropTypes.func.isRequired},t.a=n.i(c.a)(r)},1359:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n){return Promise.all(e.map(function(e){return e.call(null,t,n)})).then(function(){return{isValid:!0}}).catch(function(e){return{isValid:!1,message:e}})}var i=n(18),o=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),s=function(){function e(t){a(this,e),this.scheduler=t,this.validatorPipeline=new i.Subject,this.debounceTimeInMs=400}return o(e,[{key:"run",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return this.validatorPipeline.next({fieldName:e,asyncValidators:t,value:n}),this}},{key:"listenToValidatorsFor",value:function(e,t){return this.validatorPipeline.filter(function(t){return t.fieldName===e}).debounceTime(this.debounceTimeInMs,this.scheduler).map(function(e){return i.Observable.fromPromise(r(e.asyncValidators,e.value,t)).map(function(t){return Object.assign(t,{fieldName:e.fieldName,value:e.value})})}).concatAll()}}],[{key:"create",value:function(t){return new e(t)}}]),e}();t.a=s},1578:function(e,t,n){"use strict";function a(e){var t={marginTop:"1rem"},n={marginRight:"1rem",width:"10rem"},a=s()(e.children)?e.children:[e.children];return i.a.createElement("div",{style:Object.assign(t,e.style)},a.map(function(e,t){return i.a.cloneElement(e,{style:n,key:t})}))}t.a=a;var r=n(0),i=n.n(r),o=n(64),s=n.n(o);a.propTypes={style:i.a.PropTypes.object,children:i.a.PropTypes.oneOfType([i.a.PropTypes.array,i.a.PropTypes.object]).isRequired,isFormValid:i.a.PropTypes.func}},1632:function(e,t,n){"use strict";function a(){return i.a.createElement("div",null,i.a.createElement(o.a,null,"Access denied!"),i.a.createElement("p",null,"Unfortunately you do not have access to this functionality."))}t.a=a;var r=n(0),i=n.n(r),o=n(1206)},1690:function(e,t,n){"use strict";var a=n(29);t.a=a.a.create()},1783:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,i){try{var o=t[r](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}return a("next")})}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e){var t=e.options,n=r(e,["options"]),a=[{value:void 0,text:"Default",label:" "}].concat(t.map(function(e){return{value:e,text:e,label:e}})).map(function(e,t){return p.a.createElement(S.a,{key:t,primaryText:e.text,value:e.value,label:e.label})});return p.a.createElement(b.a,w({},n,{onChange:function(t,n,a){return e.onChange({target:{value:a}})}}),a)}function o(e){return m.a.state.fieldsForOrganisationUnitLevel.map(function(t){return t.filter(function(e){return"name"===e.name}).some(function(t){return t.value===e})}).every(function(e){return!1===e})}function s(e,t){return e.map(function(e){var n=t.map(function(t){return Object.assign({},t,{value:e[t.name]})});return n.organisationUnitLevel=e,n})}function l(e){var t=e.data;return m.a.getState().formStatus.map(function(e,n){return n===t.levelIndex?t.formStatus.valid:e})}function c(e){var t=e.organisationUnitLevels,a=e.complete,r=e.error;return n.i(v.getInstance)().then(function(e){return e.Api.getApi()}).then(function(e){return e.post("filledOrganisationUnitLevels",{organisationUnitLevels:t},{dataType:"text"})}).then(function(){return a}).catch(function(){return r})}var u=n(0),p=n.n(u),d=n(72),f=n(18),v=(n.n(f),n(19)),m=(n.n(v),n(1690)),g=n(461),y=n.n(g),h=n(235),b=n.n(h),T=n(113),S=n.n(T),O=n(1229),E=n(88),L=n.n(E),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P=function(){var e=a(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(v.getInstance)();case 2:return t=e.sent,a=t.Api.getApi(),e.next=6,a.get("filledOrganisationUnitLevels");case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=a(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(v.getInstance)();case 2:return t=e.sent,e.abrupt("return",C.map(function(e){var n=F.get(e)||{};return{name:e,component:n.component||y.a,props:Object.assign({floatingLabelText:t.i18n.getTranslation(L()(e))},n.props),validators:[{validator:o,message:t.i18n.getTranslation("value_not_unique")}]}}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),C=O.a.for("organisationUnitLevel"),k=d.a.createActionsFromNames(["initOrgUnitLevels","fieldUpdate","updateFormStatus","saveOrganisationUnitLevels"]);i.propTypes={options:u.PropTypes.array};var F=new Map([["name",{component:y.a}],["offlineLevels",{component:i,props:{options:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}}]]),x=f.Observable.fromPromise(j());k.updateFormStatus.map(l).subscribe(function(e){m.a.setState(Object.assign({},m.a.getState(),{formStatus:e}))}),k.initOrgUnitLevels.flatMap(function(){return f.Observable.combineLatest(f.Observable.fromPromise(P()),x,function(e,t){return{organisationUnitLevels:e,organisationUnitLevelFormFields:t}})}).map(function(e){var t=e.organisationUnitLevels;return{fieldConfigsForAllLevels:s(t,e.organisationUnitLevelFormFields),organisationUnitLevels:t}}).subscribe(function(e){var t=e.fieldConfigsForAllLevels,n=e.organisationUnitLevels;m.a.setState({isSaving:!1,isLoading:!1,fieldsForOrganisationUnitLevel:t,formStatus:t.map(function(){return!0}),organisationUnitLevels:n})});var _=new f.ReplaySubject(1);k.fieldUpdate.subscribe(function(e){return _.next(e)}),f.Observable.combineLatest(_,x,function(e,t){return{action:e,organisationUnitLevelFormFields:t}}).map(function(e){var t=e.action,n=e.organisationUnitLevelFormFields;return w({},t.data,{storeState:m.a.getState(),organisationUnitLevelFormFields:n})}).subscribe(function(e){var t=e.storeState,n=void 0===t?{organisationUnitLevels:[]}:t,a=e.fieldName,r=e.fieldValue,i=e.organisationUnitLevel,o=e.organisationUnitLevelFormFields,l=n.organisationUnitLevels.find(function(e){return e===i});l&&a&&(l[a]=r),m.a.setState(Object.assign({},n,{organisationUnitLevels:n.organisationUnitLevels,fieldsForOrganisationUnitLevel:s(n.organisationUnitLevels,o)}))}),k.saveOrganisationUnitLevels.map(function(e){return w({organisationUnitLevels:m.a.getState().organisationUnitLevels.map(function(e){return{name:e.name,level:e.level,offlineLevels:e.offlineLevels}})},e)}).do(function(){m.a.setState(w({},m.a.getState(),{isSaving:!0}))}).flatMap(function(e){return f.Observable.fromPromise(c(e))}).subscribe(function(e){e.call(),k.initOrgUnitLevels()}),t.a=k}});
//# sourceMappingURL=7-bbdbe7727af3e23f3ff7.js.map