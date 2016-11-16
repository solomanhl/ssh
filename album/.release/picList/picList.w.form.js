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
var __parent0=require('$model/UI2/ssh/album/picList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQveEV3';
	this._flag_='5304e3e996a575fe4f0f17265abc67bc';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"aid":{"define":"aid","label":"相册id","name":"aid","relation":"aid","rules":{"integer":true},"type":"Integer"},"filename":{"define":"filename","label":"显示图片","name":"filename","relation":"filename","type":"String"},"isNew":{"define":"isNew","label":"是否有新","name":"isNew","relation":"isNew","type":"Boolean"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"pics":{"define":"pics","label":"有多少图片","name":"pics","relation":"pics","rules":{"integer":true},"type":"Integer"},"views":{"define":"views","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"aid","limit":-1,"xid":"data_album"});
}}); 
return __result;});