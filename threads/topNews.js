define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		//置顶4帖
		var threadsData = this.comp("threads");
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getTop",
			"async" : true,
			"params" : {},
			"success" : function(data) {
				if (data != undefined){
					var Obj = data.threads;
		        	json={"@type" : "table","threads" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :Obj };
		        	threadsData.loadData(json, false);
//		        	alert(threadsData.count());
				}
			}
		});
	};

	Model.prototype.li1Click = function(event){
		var current = event.bindingContext.$object;//获得当前行
		var url = require.toUrl('./threadView.w');
		var params = {
	        from : "topNews",
	        data : {
	            // 将data中的一行数据传给对话框
	            tid : current.val("tid"),
	            username : current.val("username"),
	            subject : current.val("subject"),
	            create_date : current.val("create_date"),
	            last_date : current.val("last_date"),
	            fid : current.val("fid"),
	            views : current.val("views")
	        }
	    }
		justep.Shell.showPage(url, params);
	};

	return Model;
});