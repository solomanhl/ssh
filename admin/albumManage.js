define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		this.getAlbum();
	};
	
	Model.prototype.getAlbum = function(){
		var me = this;
		var data_album = this.comp("data_album");
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "getAlbum",
			"async" : true,
			"params" : {
				
			},
			"success" : function(data) {
//				alert(JSON.stringify(data));
//				debugger;	        
	        	data_album.loadData(data, false);    
//	        	alert(data_info.count());
       	
			}
		});
	};

	Model.prototype.input2Change = function(event){
		var name = event.source.val(); //当前行input控件的值
		data_album = this.comp("data_album");
		data_album.setValue("name", name);
	};

	Model.prototype.button_addClick = function(event){
		data_album = this.comp("data_album");
		var aid = 1;
		if ( data_album.count() > 0 ){
			data_album.last();
			aid = data_album.val("aid") + 1;			
		}
		data_album.add({
			"aid" : aid,
			"name" : "",
			"pics" : 0,
			"status" : 0
		});
	};

	//保存到baas服务器
	Model.prototype.button_saveClick = function(event){
		var me = this;
		var data_album = this.comp("data_album");
		var json = data_album.toJson();
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "updateAlbum",
			"async" : true,
			"params" : {
				json : json,
			},
			"success" : function(data) {
				me.getAlbum();//刷新一次
			}
		});
	};

	Model.prototype.button3Click = function(event){
		var current = event.bindingContext.$object;//获得绑定数据库的当前行
		data_album = this.comp("data_album");
		data_album.setValue("status", 2, current);//2代表本行要删除
	};

	return Model;
});