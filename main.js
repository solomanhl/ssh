define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		
		this.loginState = 0;
		this.uid = 0; 
		this.username = "admin";//临时
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		//baassend alt+/
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getUser",
			"async" : true,	//异步：true
			"params" : {
				"username" : this.username
			},
			"success" : function(data) {
				if (data != undefined){
					var user = me.comp("user");
					user.loadData(data, false);
					user.first();
					me.uid = user.val("uid");
				}
			}
		});

		//话题数量
		//baassend alt+/
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getPids",
			"async" : true,	//异步：true
			"params" : {},
			"success" : function(data) {
				if (data != undefined){
					me.comp("output_huati").set("value", data.count);
				}
			}
		})
		
		
	};

	//发新帖
	Model.prototype.button_newClick = function(event){
		var url = require.toUrl('./threads/newThread.w');
		var params = {
	        from : "main",
	        uid : this.uid,
	        data : {
	        	//这里要传当前用户id
	        }
	    }
		justep.Shell.showPage(url, params);
	};


	Model.prototype.scrollView1PullDown = function(event){
		this.comp("windowContainer_topnews").refresh();
		this.comp("windowContainer_threads").refresh();
	};

	//相册
	Model.prototype.button3Click = function(event){
		var url = require.toUrl('./album/picList.w');
		var params = {
	        from : "main",
	        uid : this.uid,
	        data : {
	        	//这里要传当前用户id
	        }
	    }
		justep.Shell.showPage(url, params);
	};


	Model.prototype.button4Click = function(event){
		var url = require.toUrl('./user/ucenter.w');
		var params = {
	        from : "main",
	        uid : this.uid,
	    }
		justep.Shell.showPage(url, params);
	};


	return Model;
});