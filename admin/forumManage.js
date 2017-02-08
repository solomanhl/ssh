define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		this.getForum();
	};

	Model.prototype.getForum = function(){
		var me = this;
		var data_forum = this.comp("data_forum");
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "getForum",
			"async" : true,
			"params" : {
				
			},
			"success" : function(data) {
//				alert(JSON.stringify(data));
//				debugger;	        
	        	data_forum.loadData(data, false);    
//	        	alert(data_info.count());
       	
			}
		});
	};
	
	Model.prototype.input2Change = function(event){
//		var current = event.bindingContext.$object;//获得绑定数据库的当前行
//		var name = current.val("name"); //数据库当前行数据
		var name = event.source.val(); //当前行input控件的值
		data_forum = this.comp("data_forum");
		data_forum.setValue("name", name);
//		data_forum.applyUpdates();
//		debugger;
	};
	
	Model.prototype.button_addClick = function(event){
		data_forum = this.comp("data_forum");
		var fid = 1;
		if ( data_forum.count() > 0 ){
			data_forum.last();
			fid = data_forum.val("fid") + 1;			
		}
		data_forum.add({
			"fid" : fid,
			"name" : "",
			"threads" : 0,
			"brief" : "",
			"status" : 0
		});
//		debugger;
	};
	
	//保存到baas服务器
	Model.prototype.button_saveClick = function(event){
		var me = this;
		var data_forum = this.comp("data_forum");
		var json = data_forum.toJson();
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "updateForum",
			"async" : true,
			"params" : {
				json : json,
			},
			"success" : function(data) {
				me.getForum();//刷新一次
			}
		});
	};
	
	Model.prototype.button_delClick = function(event){
		var current = event.bindingContext.$object;//获得绑定数据库的当前行
//		var fid = current.val("fid"); //数据库当前行数据
		data_forum = this.comp("data_forum");
		data_forum.setValue("status", 2, current);//2代表本行要删除
	};
	
	return Model;
});