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
var __parent0=require('$model/UI2/ssh/user/tongzhi'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEv6JRb';
	this._flag_='0c1639afac905bd6bb667e7ecb738ada';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"category":{"define":"category","label":" 提醒分类 1坛友互动 2系统消息","name":"category","relation":"category","rules":{"integer":true},"type":"Integer"},"dateline":{"define":"dateline","label":"时间","name":"dateline","relation":"dateline","rules":{"integer":true},"type":"Integer"},"from_id":{"define":"from_id","name":"from_id","relation":"from_id","rules":{"integer":true},"type":"Integer"},"from_type":{"define":"from_type","label":"0本地，1第三方平台用户表","name":"from_type","relation":"from_type","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"new":{"define":"new","label":"是否新消息","name":"new","relation":"new","type":"Boolean"},"note":{"define":"note","label":"内容","name":"note","relation":"note","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data_msg"});
}}); 
return __result;});