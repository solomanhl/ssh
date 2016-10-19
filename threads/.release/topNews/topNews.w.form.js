define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/threads/topNews'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cZRR7j2';
	this._flag_='4ce0579ee36cebed07ec0e7c9fb16e55';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"create_date":{"define":"create_date","name":"create_date","relation":"create_date","type":"String"},"fid":{"define":"fid","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"last_date":{"define":"last_date","name":"last_date","relation":"last_date","type":"String"},"subject":{"define":"subject","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"top":{"define":"top","name":"top","relation":"top","type":"String"},"uid":{"define":"uid","name":"uid","relation":"uid","type":"String"},"username":{"define":"username","name":"username","relation":"username","type":"String"},"views":{"define":"views","name":"views","relation":"views","type":"String"}},"directDelete":false,"events":{},"idColumn":"tid","limit":20,"xid":"threads"});
}}); 
return __result;});