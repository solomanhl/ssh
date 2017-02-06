define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
//	alert("load");
		this.getInfo();
	};

	Model.prototype.getInfo = function (){
		var me = this;
		var data_info = this.comp("data_info");
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "mainInfo",
			"async" : true,
			"params" : {
				
			},
			"success" : function(data) {
//				alert(JSON.stringify(data));
//				debugger;
				var info = data.info;
	        	json={"@type" : "table","data_info" : {"idColumnName" : "threads","idColumnType" : "Integer", },"rows" :info };
	        	data_info.loadData(json, false);    
//	        	alert(data_info.count());
	        	data_info.first();	        	
			}
		});
	}
			
	return Model;
});