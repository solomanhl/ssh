define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("../golbal_js");
	
	var Model = function(){
		this.callParent();
		
		this.tid;
		this.firstpid;
		this.username;
		this.subject;
		this.create_date;
		this.last_date;
		this.fid;
		this.views;
		this.quotepid
	};

	Model.prototype.modelLoad = function(event){
		
	};
	
	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		var me = this;
//		var data_forum = event.params.data.data_forum;
		this.tid = event.params.data.tid;
		this.firstpid = event.params.data.firstpid;
		this.username = event.params.data.username;
		this.subject = event.params.data.subject;
		this.create_date = event.params.data.create_date;
		this.last_date = event.params.data.last_date;
		this.fid = event.params.data.fid;
		this.views = event.params.data.views;
		
		
		var str = "[{\"tid\":" + this.tid + ","
			+ "\"username\":\"" + this.username + "\","
			+ "\"subject\":\"" + this.subject + "\","
			+ "\"create_date\":" + this.create_date + ","
			+ "\"last_date\":" + this.last_date + ","
			+ "\"fid\":" + this.fid + ","
			+ "\"views\":" + this.views + "}]";
//			alert(str);
		json={"@type" : "table","t_info" : {"idColumnName" : "tid","idColumnType" : "Integer", },"rows" :JSON.parse(str) };
		var t_info = this.comp("t_info");
		t_info.loadData(json, false);
		t_info.refreshData();
		
		this.getPost(this.tid);
		this.addViews(this.tid);//查看数+1
	};

	Model.prototype.getPost = function(tid){
		var me = this;
		//baassend alt+/
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getPost",
			"async" : true,	//异步：true
			"params" : {
				"tid" : tid
			},
			"success" : function(data) {
				if (data != undefined){
					var post = me.comp("post");
					post.loadData(data, false);
//					alert(post.count());
					var str = me.showMessage(post.getFirstRow().val("message"));//显示首贴正文
					me.comp("output_msg").set({"value":str});
				}
			}
		});
	}
	
	Model.prototype.addViews = function(tid){
		var me = this;
		//baassend alt+/
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "addViews",
			"async" : true,	//异步：true
			"params" : {
				"tid" : tid
			},
			"success" : function(data) {
			}
		});
	}
	
	Model.prototype.showMessage = function(msg){
//		var msg = this.comp("post").getFirstRow().val("message");
//		alert(msg);
		var msg_new = msg.replace(/<img src=\"/g, "<img src=\"" + global.server);
//		alert(msg_new);
		return msg_new;
	};
	
//dateline转换
	Model.prototype.datelineToDate = function(dateline){
		var mydate = new Date(dateline * 1000);//Tue Jul 26 2016 09:24:38 GMT+0800(中国标准时间)
		var rtn = mydate.toLocaleDateString(); //获取当前日期，如2016/7/26
//		var mytime=mydate.toLocaleTimeString(); //获取当前时间,如上午9：35：35
		
		
		return rtn;
	};
	
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
	
	//打开回复楼主窗口
	Model.prototype.div_pinlunClick = function(event){
		this.comp("popOver_pinlun").show();
		this.comp("textarea_pinlun").set({"placeHolder":"回复楼主..."});
		alert("楼主");
	};
	
	//回复
	Model.prototype.button_submitClick = function(event){
		alert("楼层");
		var me = this;
		var msg = this.comp("textarea_pinlun").val();
		if (this.firstpid != this.quotepid){
			this.quotepid = this.firstpid;
		}
		if(msg.length > 0){
			//修改换行标识，段落前后加p
        	msg = "<p>" + msg;
//	        	message = message.replace(/\n/g, "</p><br/><p>");
        	msg = msg.replace(/\n/g, "</p><p>");//p本身有换行效果
        	msg = msg + "</p>";
			//baassend alt+/
			justep.Baas.sendRequest({
				"url" : "/ssh/baseinfo",
				"action" : "pinlun",
				"async" : true,	//异步：true
				"params" : {
					"tid" : this.tid,
					"quotepid": this.quotepid,//
					"message" : msg
				},
				"success" : function(data) {
					me.comp("popOver_pinlun").hide();
				}
			});
		}
	};
	
	//评论楼层
	Model.prototype.image_pinlunClick = function(event){
		var row = event.bindingContext.$object;//获得当前行
		this.comp("popOver_pinlun").show();
		this.comp("textarea_pinlun").set({"placeHolder":"回复"+ row.val("username") +"..."});
		this.quotepid = row.val("pid");
	};
	
	//赞楼主
	Model.prototype.div7Click = function(event){
		this.zan(this.firstpid);
	};
	//赞楼层
	Model.prototype.image_dingClick = function(event){
		var row = event.bindingContext.$object;//获得当前行
		this.zan(row.val("pid"));
	};
	//赞
	Model.prototype.zan = function(pid){
		//baassend alt+/
			justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "zan",
			"async" : true,	//异步：true
			"params" : {
				"pid" : pid
			},
			"success" : function(data) {
				
			}
		});
	}
	
	//是否显示引用区域
	Model.prototype.isShowQuote =  function (quotepid){
	
	}
	
	//得到引用消息
	Model.prototype.getQuote = function(quotepid){
		var data = this.comp("post");
		var rows = data.find(['pid'], [quotepid], true, true, false, true);
		if (rows.length > 0){
			if (rows[0].val('isfirst')!=1){
				return rows[0].val('username') + "  " + rows[0].val('message');
			}else{
				return "hide";
			}
		}else{
			return "hide";
		}
	}
	
	return Model;
});