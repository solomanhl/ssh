define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		this.aid = 0;
		this.uid = 0;
		this.shouldShowAlbumList = justep.Bind.observable(false);
	};


	Model.prototype.modelLoad = function(event){

	};
	
	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.aid = event.params.aid;
		this.uid = event.params.uid;

		var data_album = this.comp("data_album");
		justep.Baas.sendRequest({
			"url" : "/ssh/album",
			"action" : "getAlbum_name",
			"async" : true,
			"params" : {},
			"success" : function(data) {
				data_album.loadData(data, false);
			},
			"error" : function(data){
			}
		});
			
		if (this.aid==0){
			this.shouldShowAlbumList.set(true);
		}else{
			this.shouldShowAlbumList.set(false);
		}
	};


	Model.prototype.button_sendClick = function(event){
		var me = this;
		
		var subject = this.comp("textarea_subject").val();
		
		//图片
		var ownerID = 1;
		var attach = this.comp("data_attach");
		var subject = this.comp("textarea_subject").val();
		var row = attach.getCurrentRow();
        var jsonStr = attach.getValue("Json");
        var jsonObj;
//        alert(jsonStr);
        if (jsonStr != "" && jsonStr !== undefined){
        	jsonObj = JSON.parse(jsonStr);
//        	alert(JSON.stringify(jsonObj));
        	if (this.aid == 0){
        		var s = "请选择相册！";
	        	if ( justep.Browser.isX5App ){
					window.plugins.toast.show(s, "long", "center");
				}else{
					 justep.Util.hint(s);
				}
        	}else{
        		//提交
				justep.Baas.sendRequest({
					"url" : "/ssh/album",
					"action" : "newPics",
					"async" : true,
					"params" : {
						aid: this.aid,
						uid : this.uid,
						subject: subject,
						ownerID: ownerID,
						imgs: jsonObj,
					},
					"success" : function(data) {
						justep.Shell.closePage();	
					}
				});
        	}
        	
        }else{
        	var s = "至少要有一张图片吧...";
        	if ( justep.Browser.isX5App ){
				window.plugins.toast.show(s, "long", "center");
			}else{
				 justep.Util.hint(s);
			}
        }
        
	};


	//点击相册
	Model.prototype.li1Click = function(event){
		var row = event.bindingContext.$object;//获得当前行
		this.aid = row.val("aid");
	};

	return Model;
});