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
		
		this.getUserList();
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
	
	Model.prototype.getUserList = function (){
		var data = this.comp("userlist");
		justep.Baas.sendRequest({
			"url" : "/ssh/user",
			"action" : "getUserList",
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
	
	Model.prototype.getSex = function (s){
		if (s){
			return "男";
		}else{
			return "女";
		}
	}

	Model.prototype.button_addClick = function(event){
		var row = event.bindingContext.$object;
		var fuid = row.val("uid");
		
		//申请好友
		this.addFriend(fuid);
	};

	//申请好友
	Model.prototype.addFriend = function(fuid){
	
	}
	
	return Model;
});