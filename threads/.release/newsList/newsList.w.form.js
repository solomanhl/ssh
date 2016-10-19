define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jyt/news/newsList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyuaAje';
	this._flag_='5b3df2adf271fa4a0f055619399181ae';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"closed":{"define":"closed","name":"closed","relation":"closed","rules":{"integer":true},"type":"Integer"},"create_date":{"define":"create_date","name":"create_date","relation":"create_date","rules":{"integer":true},"type":"Integer"},"fid":{"define":"fid","label":"论坛id","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"files":{"define":"files","label":"附件","name":"files","relation":"files","rules":{"integer":true},"type":"Integer"},"firstpid":{"define":"firstpid","name":"firstpid","relation":"firstpid","type":"String"},"images":{"define":"images","label":"图片","name":"images","relation":"images","rules":{"integer":true},"type":"Integer"},"last_date":{"define":"last_date","name":"last_date","relation":"last_date","rules":{"integer":true},"type":"Integer"},"lastpid":{"define":"lastpid","name":"lastpid","relation":"lastpid","type":"String"},"lastuid":{"define":"lastuid","name":"lastuid","relation":"lastuid","type":"String"},"mods":{"define":"mods","name":"mods","relation":"mods","rules":{"integer":true},"type":"Integer"},"posts":{"define":"posts","label":"回复","name":"posts","relation":"posts","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","label":"标题","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","label":"主题id","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"top":{"define":"top","label":"置顶","name":"top","relation":"top","rules":{"integer":true},"type":"Integer"},"uid":{"define":"uid","label":"用户id","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"},"userip":{"define":"userip","label":"ip","name":"userip","relation":"userip","rules":{"integer":true},"type":"Integer"},"views":{"define":"views","label":"查看","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"tid","limit":20,"xid":"threads"});
}}); 
return __result;});