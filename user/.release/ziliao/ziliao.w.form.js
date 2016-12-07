define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/user/ziliao'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='czyAVZv';
	this._flag_='6b63511d8cb390668caf5724f2dba0c7';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","name":"address","relation":"address","type":"String"},"mobile":{"define":"mobile","name":"mobile","relation":"mobile","type":"String"},"sex":{"define":"sex","name":"sex","relation":"sex","type":"Boolean"},"sign":{"define":"sign","name":"sign","relation":"sign","type":"String"},"uid":{"define":"uid","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"},"username":{"define":"username","name":"username","relation":"username","type":"String"},"xueduan":{"define":"xueduan","label":"学段","name":"xueduan","relation":"xueduan","type":"String"}},"directDelete":false,"events":{},"idColumn":"uid","limit":20,"xid":"ziliao"});
}}); 
return __result;});