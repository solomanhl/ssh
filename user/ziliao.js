define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("../golbal_js");

	var Model = function(){
		this.callParent();
		this.uid;
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


	Model.prototype.getUserInfo = function (){
		var data = this.comp("ziliao");
		justep.Baas.sendRequest({
			"url" : "/ssh/user",
			"action" : "getUserInfo",
			"async" : true,
			"params" : {
				uid : this.uid
			},
			"success" : function(obj) {
				data.loadData(obj, false);
				data.first();
			},
			"error" : function(obj){
			}
		});
	}
	
	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.uid = event.params.uid;
		
		this.getUserInfo();
	};
	return Model;
});