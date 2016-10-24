define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/album/picView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caiE3ma';
	this._flag_='ad39983182e05637c4e9f08fc6c9ae30';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"create_date":{"define":"create_date","name":"create_date","relation":"create_date","type":"String"},"filename":{"define":"filename","name":"filename","relation":"filename","type":"String"},"last_date":{"define":"last_date","name":"last_date","relation":"last_date","type":"String"},"posts":{"define":"posts","name":"posts","relation":"posts","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"views":{"define":"views","name":"views","relation":"views","type":"String"}},"directDelete":false,"events":{},"idColumn":"tid","limit":-1,"xid":"data_thread"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"create_date":{"define":"create_date","name":"create_date","relation":"create_date","type":"String"}},"directDelete":false,"events":{},"idColumn":"create_date","limit":-1,"xid":"data_date"});
}}); 
return __result;});