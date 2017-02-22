define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		
		this.dateStart = parseInt(new Date("2016-10-01").getTime() / 1000);
		this.dateEnd = parseInt(new Date().getTime() / 1000);
		this.unamefilter = ""; //不按用户名搜索
	};

	Model.prototype.modelLoad = function(event){
		this.getUsers();
	};
	
	Model.prototype.getUsers = function(){
		var me = this;
		var data_forum = this.comp("data_user");
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "getUsers",
			"async" : true,
			"params" : {
				startTime : me.dateStart,
				endTime : me.dateEnd,
				username : me.unamefilter
			},
			"success" : function(data) {
//				alert(JSON.stringify(data));
//				debugger;	        
	        	data_forum.loadData(data, false);    
//	        	alert(data_info.count());
       	
			}
		});
	};

	Model.prototype.input_usernameChange = function(event){
		this.unamefilter = event.source.get("value");
	};
	
	Model.prototype.input_startTimeChange = function(event){
		var date = event.source.get("value");
		var dateTime = parseInt( new Date(date).getTime() / 1000);
		this.dateStart = dateTime;
	};

	Model.prototype.input5Change = function(event){
		var date = event.source.get("value");
		var dateTime = parseInt( new Date(date).getTime() / 1000);
		this.dateEnd = dateTime;
	};

	Model.prototype.button_searchClick = function(event){
		if (this.dateEnd == 0){
			this.dateEnd = parseInt(new Date().getTime() / 1000);
		}
		
		this.getUsers();
	};

	//dateline转换
	Model.prototype.datelineToDay = function(dateline){
		var timestampPost = dateline * 1000; //帖子时间转成毫秒级

		var time1 = new Date(timestampPost)//发帖标准时间

		var rtn = time1.toLocaleDateString();
		
		return rtn;
	};
	
	return Model;
});