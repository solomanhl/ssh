define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c6JRnEb';
	this._flag_='d4a2a8df57054cef96290e9be935dd77';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"gid":{"define":"gid","label":"用户组编号","name":"gid","relation":"gid","rules":{"integer":true},"type":"Integer"},"posts":{"define":"posts","label":"发表数量","name":"posts","relation":"posts","rules":{"integer":true},"type":"Integer"},"realname":{"define":"realname","label":"真实姓名","name":"realname","relation":"realname","type":"String"},"threads":{"define":"threads","label":"主题数量","name":"threads","relation":"threads","rules":{"integer":true},"type":"Integer"},"uid":{"define":"uid","label":"用户编号","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"},"username":{"define":"username","label":"用户名","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"idColumn":"uid","initData":"[]","limit":20,"xid":"user"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"pids":{"define":"pids","label":"话题数量","name":"pids","relation":"pids","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"pids","limit":20,"xid":"baseinfo"});
}}); 
return __result;});