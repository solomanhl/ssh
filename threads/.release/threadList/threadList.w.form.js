define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/threads/threadList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQFfEfq';
	this._flag_='8f861e631fd51fe5aa7cac14a3c17682';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"closed":{"define":"closed","name":"closed","relation":"closed","rules":{"integer":true},"type":"Integer"},"create_date":{"define":"create_date","name":"create_date","relation":"create_date","rules":{"integer":true},"type":"Integer"},"fid":{"define":"fid","label":"论坛id","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"files":{"define":"files","label":"附件","name":"files","relation":"files","rules":{"integer":true},"type":"Integer"},"firstpid":{"define":"firstpid","name":"firstpid","relation":"firstpid","type":"String"},"images":{"define":"images","label":"图片数量","name":"images","relation":"images","rules":{"integer":true},"type":"Integer"},"img1":{"define":"img1","label":"第一幅图片路径","name":"img1","relation":"img1","type":"String"},"img2":{"define":"img2","name":"img2","relation":"img2","type":"String"},"img3":{"define":"img3","name":"img3","relation":"img3","type":"String"},"last_date":{"define":"last_date","name":"last_date","relation":"last_date","rules":{"integer":true},"type":"Integer"},"lastpid":{"define":"lastpid","name":"lastpid","relation":"lastpid","type":"String"},"lastuid":{"define":"lastuid","name":"lastuid","relation":"lastuid","type":"String"},"message":{"define":"message","label":"正文","name":"message","relation":"message","type":"String"},"mods":{"define":"mods","name":"mods","relation":"mods","rules":{"integer":true},"type":"Integer"},"posts":{"define":"posts","label":"回复","name":"posts","relation":"posts","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","label":"标题","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","label":"主题id","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"top":{"define":"top","label":"置顶","name":"top","relation":"top","rules":{"integer":true},"type":"Integer"},"uid":{"define":"uid","label":"用户id","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"},"userip":{"define":"userip","label":"ip","name":"userip","relation":"userip","rules":{"integer":true},"type":"Integer"},"username":{"define":"username","label":"作者名","name":"username","relation":"username","type":"String"},"views":{"define":"views","label":"查看","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"tid","limit":20,"xid":"threads"});
}}); 
return __result;});