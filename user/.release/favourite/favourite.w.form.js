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
var __parent0=require('$model/UI2/ssh/user/favourite'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyqmm2y';
	this._flag_='837064fd873c919b06b716b71d287ad4';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"author":{"define":"author","label":"作者","name":"author","relation":"author","type":"String"},"authorid":{"define":"authorid","label":"作者id","name":"authorid","relation":"authorid","type":"String"},"fid":{"define":"fid","label":"收藏的id","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"subject":{"define":"subject","label":"标题","name":"subject","relation":"subject","type":"String"},"time":{"define":"time","label":"发表时间","name":"time","relation":"time","rules":{"integer":true},"type":"Long"},"type":{"define":"type","name":"type","relation":"type","type":"String"},"views":{"define":"views","label":"查看次数","name":"views","relation":"views","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"favor"});
}}); 
return __result;});