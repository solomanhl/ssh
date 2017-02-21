define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		
		this.dateStart = parseInt(new Date("2016-10-01").getTime() / 1000);
		this.dateEnd = parseInt(new Date().getTime() / 1000);
		this.fidfilter = 0; //0所有版块
	};

	Model.prototype.modelLoad = function(event){
		this.getThreads();
		this.getForum();
	};
	
	Model.prototype.getThreads = function(){
		var me = this;
		var data_forum = this.comp("data_thread");
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "getThreads",
			"async" : true,
			"params" : {
				startTime : me.dateStart,
				endTime : me.dateEnd,
				fid : me.fidfilter
			},
			"success" : function(data) {
//				alert(JSON.stringify(data));
//				debugger;	        
	        	data_forum.loadData(data, false);    
//	        	alert(data_info.count());
       	
			}
		});
	};

	Model.prototype.getForum = function(){
		var me = this;
		var data_forum = this.comp("data_forum");
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getForum",
			"async" : true,
			"params" : {
			},
			"success" : function(data) {
	        	data_forum.loadData(data, false);    
			}
		});
	};

	Model.prototype.input_startDateChange = function(event){
		var date = event.source.get("value");
		var dateTime = parseInt( new Date(date).getTime() / 1000);
		this.dateStart = dateTime;
//		alert("date:" + date + "\r\ndatetime:" + dateTime);
	};

	Model.prototype.input_endDateChange = function(event){
		var date = event.source.get("value");
		var dateTime = parseInt( new Date(date).getTime() / 1000);
		this.dateEnd = dateTime;
	};

	Model.prototype.button_searchClick = function(event){
//		alert(this.dateStart + "-" + this.dateEnd);
		if (this.dateEnd == 0){
			this.dateEnd = parseInt(new Date().getTime() / 1000);
		}
//		alert(this.dateStart + "-" + this.dateEnd);

		this.getThreads();
	};

	//dateline转换
	Model.prototype.datelineToDay = function(dateline){
		var timestampPost = dateline * 1000; //帖子时间转成毫秒级

		var time1 = new Date(timestampPost)//发帖标准时间

		var rtn = time1.toLocaleDateString();
		
		return rtn;
	};

	Model.prototype.select_forumChange = function(event){
		var value_fid = event.source.get("value");
		this.fidfilter = value_fid;
		if (value_fid == ""){
			this.fidfilter = 0;
		}
//		alert(value_fid);
	};

	Model.prototype.messageDialog1OK = function(event){
		var tid = event.source.inputValue;
		this.delBytid(tid);
	};

	Model.prototype.button_delClick = function(event){
		var current = event.bindingContext.$object;//获得绑定数据库的当前行
		var tid = current.val("tid"); //数据库当前行数据
		this.comp("messageDialog1").show({
			inputValue : tid
	    });
	};
	
	Model.prototype.delBytid = function(tid){
		
		//删远程
		justep.Baas.sendRequest({
			"url" : "/ssh/admin",
			"action" : "delThread",
			"async" : true,
			"params" : {
				tid : tid
			},
			"success" : function(data) {
			}
		});
		
		//删本地
		var data_thread = this.comp("data_thread");
		data_thread.deleteData();//默认当前行
	}

	return Model;
});