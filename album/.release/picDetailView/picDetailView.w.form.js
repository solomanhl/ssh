define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/album/picDetailView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqqyEbm';
	this._flag_='3fecb78b2d9129cb32687ee756388208';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"create_date":{"define":"create_date","name":"create_date","relation":"create_date","type":"String"},"isfirst":{"define":"isfirst","name":"isfirst","relation":"isfirst","rules":{"integer":true},"type":"Integer"},"message":{"define":"message","name":"message","relation":"message","type":"String"},"pid":{"define":"pid","name":"pid","relation":"pid","rules":{"integer":true},"type":"Integer"},"quote_pid":{"define":"quote_pid","name":"quote_pid","relation":"quote_pid","rules":{"integer":true},"type":"Integer"},"tid":{"define":"tid","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"uid":{"define":"uid","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"pid","limit":20,"xid":"post"});
}}); 
return __result;});