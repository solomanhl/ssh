define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		//baassend alt+/
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getUser",
			"async" : true,	//异步：true
			"params" : {
				"username" : "admin"
			},
			"success" : function(data) {
				if (data != undefined){
					var user = me.comp("user");
					user.loadData(data, false);
					user.first();
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


	return Model;
});