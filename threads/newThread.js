define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-x-toast");
	
	var Model = function(){
		this.callParent();
		this.fid = 0;
		this.uid = 0;
	};

	Model.prototype.button_sendClick = function(event){
		var me = this;
		
		var subject = this.comp("textarea_subject").val();
		var message = this.comp("textarea_msg").val();
	
		//图片
		var ownerID = 0;
		var attach = this.comp("attach");
		var row = attach.getCurrentRow();
        var jsonStr = attach.getValue("Json");
        var jsonObj;
//        alert(jsonStr);
        if (jsonStr != "" && jsonStr !== undefined){
        	jsonObj = JSON.parse(jsonStr);
//        	alert(JSON.stringify(jsonObj));
        }
       
//        for(var o in jsonObj){  
//        	alert("realFileName:"+jsonObj[o].realFileName+" storeFileName:"+jsonObj[o].storeFileName );  
//        }  
        if (this.fid == 0){
        	var s = "请选择版块！";
        	if ( justep.Browser.isX5App ){
				window.plugins.toast.show(s, "long", "center");
			}else{
				 justep.Util.hint(s);
			}
        }else{
        	if (subject == "" || subject == undefined || subject.length < 4 || subject.length > 25){
	        	var s = "请输入4-25字标题！";
	        	if ( justep.Browser.isX5App ){
					window.plugins.toast.show(s, "long", "center");
				}else{
					 justep.Util.hint(s);
				}
	        }else {
	        	if (message == "" || message == undefined || message.length < 10 || message.length > 700){
		        	var s = "请输入10-700字内容！";
		        	if ( justep.Browser.isX5App ){
						window.plugins.toast.show(s, "long", "center");
					}else{
						 justep.Util.hint(s);
					}
		        }else{
		        	//标题、正文都满足，可以提交数据
		        	//修改换行标识，段落前后加p
		        	message = "<p>" + message;
	//	        	message = message.replace(/\n/g, "</p><br/><p>");
		        	message = message.replace(/\n/g, "</p><p>");//p本身有换行效果
		        	message = message + "</p>";
		        	//提交
					justep.Baas.sendRequest({
						"url" : "/ssh/baseinfo",
						"action" : "newThread",
						"async" : true,
						"params" : {
							uid: this.uid,
							fid:this.fid,
							subject: subject,
							message: message,
							ownerID: ownerID,
							imgs: jsonObj,
						},
						"success" : function(data) {
							justep.Shell.closePage();	
						}
					});
		        }
	        }
        }
        
        
	};

	//点击版块列表
	Model.prototype.li1Click = function(event){
		var row = event.bindingContext.$object;//获得当前行
		this.fid = row.val("fid");
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		//版块列表
		justep.Baas.sendRequest({
			"url" : "/ssh/baseinfo",
			"action" : "getForum",
			"async" : true,
			"params" : {
			},
			"success" : function(data) {
				me.comp("forum").loadData(data, false);
			}
		});
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
		this.uid = event.params.uid;
	};

	return Model;
});