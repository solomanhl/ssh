define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		this.uid = 0;
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		this.uid = this.getParent().uid;
//		alert(this.getParent().uid);
		//帖子列表
		var threadsData = this.comp("threads");
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getThreads",
			"async" : true,
			"params" : {
				"pageNo": 1
			},
			"success" : function(data) {
				var Obj, pageNo, totalPage;	
	        	pageNo = data.pageNo;
	        	totalPage = data.totalPage;
	        	Obj = data.threads;
	        	
	        	if (pageNo > 0){
		        	json={"@type" : "table","threads" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :Obj };
		        	threadsData.loadData(json, false);
//		        	alert(threadsData.count());
	        	}
			}
		});
	};

	//dateline转换
	Model.prototype.datelineToBeforeDay = function(dateline){
//		var mydate = new Date();//Tue Jul 26 2016 09:24:38 GMT+0800(中国标准时间)
//		mydate.toLocaleDateString(); //获取当前日期，如2016/7/26
//		var mytime=mydate.toLocaleTimeString(); //获取当前时间,如上午9：35：35
		
		var timestampNow = new Date().getTime();//结果：1280977330748获取了当前毫秒的时间戳。
		var timestampPost = dateline * 1000; //帖子时间转成毫秒级

		var time1 = new Date(timestampPost)//发帖标准时间
		var year1 = time1.getUTCFullYear();
		var mounth1 = time1.getUTCMonth()+1;
		var day1 = time1.getUTCDate();
		var hour1 = time1.getUTCHours();
		var minite1 = time1.getUTCMinutes() ;
		var second1 = time1.getUTCSeconds();
		
		var time2 = new Date(timestampNow)//当前标准时间
		var year2 = time2.getUTCFullYear();
		var mounth2 = time2.getUTCMonth()+1;
		var day2 = time2.getUTCDate();
		var hour2 = time2.getUTCHours();
		var minite2 = time2.getUTCMinutes() ;
		var second2 = time2.getUTCSeconds();

		var rtn = "";
		
		if (year2 - year1 > 0){
			rtn = (year2 - year1) + "年前";
		}else if(mounth2 - mounth1 > 0){
			rtn = (mounth2 - mounth1) + "个月前";
		}else if(day2 - day1 > 0){
			rtn = (day2 - day1) + "天前";
		}else if(hour2 - hour1 > 0){
			rtn = (hour2 - hour1) + "小时前";
		}else if(minite2 - minite1 > 0){
			rtn = (minite2 - minite1) + "分钟前";
		}else if(second2 - second1 > 0){
			rtn = (second2 - second1) + "秒前";
		}
		
		return rtn;
	};
	
	Model.prototype.li1Click = function(event){
		var current = event.bindingContext.$object;//获得当前行
		var url = require.toUrl('./threadView.w');
		var params = {
	        from : "threadList",
	        uid : this.uid,//本机用户的id
	        data : {
	            // 将data中的一行数据传给对话框
	            tid : current.val("tid"),
	            firstpid : current.val("firstpid"),
	            username : current.val("username"),//主题作者的用户名
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