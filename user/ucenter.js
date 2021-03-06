define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("../golbal_js");

	var Model = function(){
		this.callParent();
		this.uid;
	};
	
	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.uid = event.params.uid;
	};
	
	Model.prototype.modelLoad = function(event){
		//监听返回键
 		document.addEventListener('backbutton', function(){
 			justep.Shell.closePage();
 		}, false);
 		$(window).on('beforeunload', function(){
 			document.removeEventListener('backbutton', listener, false);
 	    });
	};

	// 打开页面
	Model.prototype.openPageClick = function(event) {
		/*
		 * 1、点击组件增加算定义属性：pagename 2、获取自定义属性，打开 对应页面
		 */
		var pageName = event.currentTarget.getAttribute('pagename');
		var params = {
	        from : "ucenter",
	        uid : this.uid,
	    }
		if (pageName)
			justep.Shell.showPage(require.toUrl(pageName), params);
	};

	return Model;
});