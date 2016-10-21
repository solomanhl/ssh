define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ssh/threads/threadView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cueA36j';
	this._flag_='34696fc4084015121721818506dfc2b8';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"create_date":{"define":"create_date","name":"create_date","relation":"create_date","type":"String"},"fid":{"define":"fid","name":"fid","relation":"fid","type":"String"},"last_date":{"define":"last_date","name":"last_date","relation":"last_date","type":"String"},"subject":{"define":"subject","name":"subject","relation":"subject","type":"String"},"tid":{"define":"tid","label":"主题id","name":"tid","relation":"tid","rules":{"integer":true},"type":"Integer"},"username":{"define":"username","name":"username","relation":"username","type":"String"},"views":{"define":"views","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"tid","limit":20,"xid":"t_info"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"create_date":{"define":"create_date","name":"create_date","relation":"create_date","type":"String"},"doctype":{"define":"doctype","name":"doctype","relation":"doctype","type":"String"},"files":{"define":"files","name":"files","relation":"files","type":"String"},"images":{"define":"images","name":"images","relation":"images","type":"String"},"isfirst":{"define":"isfirst","name":"isfirst","relation":"isfirst","type":"String"},"message":{"define":"message","name":"message","relation":"message","type":"String"},"message_fmt":{"define":"message_fmt","name":"message_fmt","relation":"message_fmt","type":"String"},"pid":{"define":"pid","name":"pid","relation":"pid","rules":{"integer":true},"type":"Integer"},"quotepid":{"define":"quotepid","name":"quotepid","relation":"quotepid","type":"String"},"tid":{"define":"tid","name":"tid","relation":"tid","type":"String"},"uid":{"define":"uid","name":"uid","relation":"uid","rules":{"integer":true},"type":"Integer"},"userip":{"define":"userip","name":"userip","relation":"userip","type":"String"}},"directDelete":false,"events":{},"idColumn":"pid","limit":20,"xid":"post"});
}}); 
return __result;});