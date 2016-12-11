define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		this.uid;
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.uid = event.params.uid;
		
		this.getFriend();
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
	
	Model.prototype.getFriend = function (){
		var data = this.comp("friend");
		justep.Baas.sendRequest({
			"url" : "/ssh/user",
			"action" : "getFriend",
			"async" : true,
			"params" : {
				uid : this.uid
			},
			"success" : function(obj) {
				data.loadData(obj, false);
			},
			"error" : function(obj){
			}
		});
	}
		
	Model.prototype.div_tuijianClick = function(event){
		var url = require.toUrl("./userList.w");
		var params = {
	        from : "friend",
	        uid : this.uid,
	    }

		justep.Shell.showPage(url, params);
	};
		
	return Model;
});