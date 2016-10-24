define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("../golbal_js")
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button_newClick = function(event){
		var url = require.toUrl('./newPic.w');
		var params = {
	        from : "picList",
	        aid:0
	    }
		justep.Shell.showPage(url, params);
	};

	//
	Model.prototype.serverImg = function(img){
		return global.server + "upload/album/" + img;
	}
	
	//
	Model.prototype.modelLoad = function(event){
		var data_album = this.comp("data_album");
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "getAlbum_last",
			"async" : true,
			"params" : {},
			"success" : function(data) {
				data_album.loadData(data, false);
			},
			"error" : function(data){
			}
		});
	};
	
	//点击相册
	Model.prototype.li1Click = function(event){
		var row = event.bindingContext.$object;//获得当前行
		var url = require.toUrl('./picView.w');
		var params = {
	        from : "picList",
	        aid : row.val("aid"),
	        name : row.val("name"),
	        cover : row.val("cover"),
	        views : row.val("views")
	    }
		justep.Shell.showPage(url, params);
	};
	return Model;
});