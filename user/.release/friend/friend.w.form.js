define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/user/friend'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmYRNre';
	this._flag_='006ea7d5f5db917980ad56d27fdcdfad';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fname":{"define":"fname","label":"好友名字","name":"fname","relation":"fname","type":"String"},"fuid":{"define":"fuid","label":"好友id","name":"fuid","relation":"fuid","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"note":{"define":"note","name":"note","relation":"note","type":"String"},"uid":{"define":"uid","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"friend"});
}}); 
return __result;});