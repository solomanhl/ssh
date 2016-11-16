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
		
		this.picDataArray  = new Array();//接收上页服务器返回的照片json对象数组
	};
	

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		
		this.picDataArray = event.params.picDataArray;
		this.aid = event.params.aid;
		this.uid = event.params.uid;
		this.name = event.params.name;
		this.tid = event.params.tid;
		this.pics = event.params.pics;
		this.position = event.params.position;
		this.filename = event.params.filename;
		this.create_date = event.params.create_date;
		
		this.comp("output_name").set({"value" : this.name});
		this.comp("output_count").set({"value" : this.position+1 + "/" + this.pics});
//		$(this.getElementByXid("image1")).attr("src", this.imgUrl(this.filename));
		this.comp("output_date").set({"value" : this.create_date});
		
//		alert(this.picDataArray);
		var pics = this.comp("pics");
		this.picDataArray.forEach(function(e){
			pics.loadData(e, true);//载入图片集合
		});
		this.showPic();//加载carosel
		this.getPosts(this.tid, false);//获取评论
		this.viewAlbumPic(this.tid);//查看次数+1
	};
	
	Model.prototype.showPic = function (){
		var me = this;
		var carousel = this.comp("carousel1");
		var data = this.comp("pics");
		
		var fImgUrl;
		var tid;
		var i;
		data.each(function(param){
			fImgUrl = me.imgUrl(param.row.val('filename'));
			tid = param.row.val('tid');
			i = param.index;
			if (me.comp('contentsImg').getLength() > i) {
				$(carousel.domNode).find("img").eq(i).attr({
					"src" : fImgUrl,
					"tid" : tid
				});
				
			} else {
				carousel.add('<img src="' + fImgUrl + '" style="width:100%;" forcusid="' + tid + '"/>');
			}
		});
		
		carousel.to(this.position);
	}
	
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
	
	//查看次数+1
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

//	Model.prototype.backBtnClick = function(event){
//		justep.Shell.closePage();
//	};

	Model.prototype.modelLoad = function(event){
		//监听返回键
 		document.addEventListener('backbutton', function(){
 			justep.Shell.closePage();
 		}, false);
 		$(window).on('beforeunload', function(){
 			document.removeEventListener('backbutton', listener, false);
 	    });
	};

	Model.prototype.contentsImgActiveChanged = function(event){
		this.position = this.comp("contentsImg").getActiveIndex();
		this.comp("output_count").set({"value" : this.position+1 + "/" + this.pics});
		
		var data = this.comp("pics");
		data.first();
		//移动到this.position行
		for (var i = 0; i<this.position; i++){
			data.next();
		}
		
		this.tid = data.val('tid');
		this.create_date = data.val('create_date');
//		alert(this.position + "/" + this.tid);
		
		//照片时间
		this.comp("output_date").set({"value" : this.create_date});
		//通过tid获取评论
		this.getPosts(this.tid, false);//获取评论
		this.viewAlbumPic(this.tid);//查看次数+1
	};

	return Model;
});