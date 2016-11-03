define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var g = require("../golbal_js");
	require("cordova!cordova-plugin-x-toast");
	
	var Model = function(){
		this.callParent();
		
		this.uid = 0;
		this.aid = 0;//相册
		this.name = "";//相册名，大一班
		this.pics = 0; //相片总数
		this.position = 0;//第几幅照片
		this.tid = 0;//相片id
		this.filename = "";//图片路径
		this.create_date = "";//相片上传时间
	};
	

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.aid = event.params.aid;
		this.uid = event.params.uid;
		this.name = event.params.name;
		this.tid = event.params.tid;
		this.pics = event.params.pics;
		this.position = event.params.position;
		this.filename = event.params.filename;
		this.create_date = event.params.create_date;
		
		this.comp("output_name").set({"value" : this.name});
		this.comp("output_count").set({"value" : this.position + "/" + this.pics});
//		$(this.getElementByXid("image1")).attr("src", this.imgUrl(this.filename));
		this.comp("output_date").set({"value" : this.create_date});
		
		this.getPosts(this.tid, false);
		this.viewAlbumPic(this.tid);
	};
	
	Model.prototype.imgUrl = function(img){
		return g.server + "upload/album/" + img;
	}
	
	Model.prototype.getPosts = function(tid, isApend){
		var post = this.comp("post");
		var list1 = this.comp("list1");
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "getPosts",
			"async" : true,
			"params" : {
				"tid" : this.tid
			},
			"success" : function(data) {
				post.loadData(data, isApend);
//				alert(data_thread.count());
			}
		});
	}
	
	Model.prototype.viewAlbumPic = function(tid, isApend){
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "viewAlbumPic",
			"async" : true,
			"params" : {
				"tid" : this.tid
			},
			"success" : function(data) {
//				alert(data_thread.count());
			}
		});
	}

	//发送评论
	Model.prototype.button_sendClick = function(event){
		var input1 = this.comp("input1");
		var msg = input1.val();
		if (msg!=null && msg!="" && msg!=undefined){
			justep.Baas.sendRequest({
				"url" : "/ssh/album",
				"action" : "postAlbumPic",
				"async" : true,
				"params" : {
					"uid" : this.uid,
					"tid" : this.tid,
					"msg" : msg
				},
				"success" : function(data) {
	//				alert(data_thread.count());
					input1.val("");
					var s = "回复成功！";
		        	if ( justep.Browser.isX5App ){
						window.plugins.toast.show(s, "long", "center");
					}else{
						 justep.Util.hint(s);
					}
				}
			});
		}

	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.modelLoad = function(event){
		//监听返回键
 		document.addEventListener('backbutton', function(){
 			justep.Shell.closePage();
 		}, false);
 		$(window).on('beforeunload', function(){
 			document.removeEventListener('backbutton', listener, false);
 	    });
	};

	return Model;
});