define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var g = require("../golbal_js");
	
	var Model = function(){
		this.callParent();
		this.aid = 0;
		this.uid = 0;
		this.name = ""
		this.views = 0;
		this.pics = 0;
	};
	
	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.aid = event.params.aid;
		this.uid = event.params.uid;
		this.name = event.params.name;
		this.cover = event.params.cover;
		this.views = event.params.views;
		this.pics = event.params.pics;
		
		this.comp("output_name").set({"value":this.name});
		this.comp("output_views").set({"value":"共" +this.pics + "张照片，浏览量 " + this.views});
		
		this.viewAlbum();
		this.getAlbumDate();
	};
	
	Model.prototype.imgUrl = function(img){
		return g.server + "upload/album/" + img;
	}
	
	Model.prototype.bindDate = function(date){
		return "— " + date + " —";
	}

	Model.prototype.viewAlbum = function (){
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "viewAlbum",
			"async" : true,
			"params" : {
				"aid" : this.aid
			},
			"success" : function(data) {
			}
		});
	}
	
	Model.prototype.getAlbumDate = function (){
		var me = this;
		var data_date = this.comp("data_date");
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "getAlbumDate",
			"async" : true,
			"params" : {
				"aid" : this.aid
			},
			"success" : function(data) {
				data_date.loadData(data, false);
				data_date.each(
						function(param){
						  me.getAlbumPics(param.row.val('create_date'), true);
						}
				);
			}
		});
	}
	
	Model.prototype.getAlbumPics = function (create_date, isApend){
		var data_thread = this.comp("data_thread");
		var list1 = this.comp("list1");
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "getAlbumPics",
			"async" : true,
			"params" : {
				"aid" : this.aid,
				"create_date" : create_date
			},
			"success" : function(data) {
				data_thread.loadData(data, isApend);
//				alert(data_thread.count());
			}
		});
	}
	
	Model.prototype.button_newClick = function(event){
		var url = require.toUrl('./newPic.w');
		var params = {
	        from : "picView",
	        aid:this.aid,
	        uid : this.uid
	    }
		justep.Shell.showPage(url, params);
	};
	
	//点图片放大显示，可以评论
	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;//获得当前行
		var url = require.toUrl('./picDetailView.w');
		var params = {
	        from : "picView",
	        uid : this.uid,
	        aid : this.aid,
	        name : this.name,//相册名字，大一班
	        pics : this.pics,//相册照片总数
	        position : row.index() + 1,//第几个图片，index从0开始，需要+1
	        tid : row.val("tid"),
	        filename : row.val("filename"),//图片路径
	        create_date : row.val("create_date")//相片上传时间/
	    }
		justep.Shell.showPage(url, params);
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