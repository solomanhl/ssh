define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var g = require("../golbal_js");
	
	var Model = function(){
		this.callParent();
		
		this.uid = 0;
		this.aid = 0;//相册
		this.name = "";//相册名，大一班
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
		this.filename = event.params.filename;
		this.create_date = event.params.create_date;
		
		this.comp("output_name").set({"value" : this.name});
		this.comp("output_count").set({"value" : "0/0"});
		$(this.getElementByXid("image1")).attr("src", this.imgUrl(this.filename));
		this.comp("output_date").set({"value" : this.create_date});
		
		this.getPosts(this.tid, false);
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

	return Model;
});