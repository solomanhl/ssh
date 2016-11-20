define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button_submitClick = function(event){
		var uname = $.trim(this.comp("input_uname").val());
		var pwd1 = $.trim(this.comp("password1").val());
		var pwd2 = $.trim(this.comp("password2").val());
		var mobile = $.trim(this.comp("input_phone").val());
		var str = "";
		
		if (uname != "" && pwd1 != "" && pwd2 != "" && mobile != ""){
			if (pwd1 == pwd2){
				this.reg(uname, pwd1, mobile);
			}else{
				str = "两次密码输入不一致";
				if (justep.Browser.isX5App){
					window.plugins.toast.show(str, "short", "center");
				}else{
					justep.Util.hint(str);
				}
			}
		}else{
			str = "请填完信息";
			if (justep.Browser.isX5App){
				window.plugins.toast.show(str, "short", "center");
			}else{
				justep.Util.hint(str);
			}
		}
	};
	
	Model.prototype.reg = function(uname, pwd1, mobile){
		justep.Baas.sendRequest({
			"url" : "/ssh/user",
			"action" : "reg",
			"async" : true,
			"params" : {
				username : uname,
				pwd : pwd1,
				mobile : mobile
			},
			"success" : function(data) {
				var status = data.status;
				var str = "";
				switch (status){
					case 1: str = "注册成功";
						break;
					case 2: str = "该用户已注册";
						break;
					case 3: str = "该手机已注册";
						break;
					case 0: str = "注册失败";
						break;
					default : str = "注册失败";
						break;
				}
				if (justep.Browser.isX5App){
					window.plugins.toast.show(str, "short", "center");
				}else{
					justep.Util.hint(str);
				}
			}
		});
	}

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