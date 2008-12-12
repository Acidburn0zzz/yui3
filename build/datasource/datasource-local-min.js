YUI.add("datasource-local",function(C){var A=C.Lang,B=function(){B.superclass.constructor.apply(this,arguments);};C.mix(B,{NAME:"datasource",TYPE_UNKNOWN:-1,TYPE_JSARRAY:0,TYPE_JSFUNCTION:1,TYPE_XHR:2,TYPE_JSON:3,TYPE_XML:4,TYPE_TEXT:5,TYPE_HTMLTABLE:6,TYPE_SCRIPTNODE:7,TYPE_LOCAL:8,TYPE_LOCAL:8,Parser:{string:function(E){if(!A.isValue(E)){return null;}var D=E+"";if(A.isString(D)){return D;}else{return null;}},number:function(E){var D=E*1;if(A.isNumber(D)){return D;}else{return null;}},date:function(E){var D=null;if(!(E instanceof Date)){D=new Date(E);}else{return E;}if(D instanceof Date){return D;}else{return null;}}},ATTRS:{liveData:{},dataType:{value:B.TYPE_UNKNOWN},responseType:{value:B.TYPE_UNKNOWN},responseSchema:{value:{}},ERROR_DATAINVALID:{value:"Invalid data"},ERROR_DATANULL:{value:"Null data"}}});C.extend(B,C.DataSource.Base,{_queue:null,_intervals:null,_initEvents:function(){var D=["dataErrorEvent","requestEvent","responseEvent","responseParseEvent"];C.each(D,function(F,E){this.publish(F,{type:F,emitFacade:true,bubbles:true,preventable:false,queuable:true});},this);},initializer:function(){this._queue={interval:null,conn:null,requests:[]};this._intervals=[];},destructor:function(){}});C.namespace("DataSource");C.DataSource.Local=B;},"@VERSION@",{requires:["datasource-base"]});
