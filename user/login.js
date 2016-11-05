define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-x-toast");
	
	var Model = function(){
		this.callParent();
		
		this.uid=0;
		this.username="";
	};

	Model.prototype.button_loginClick = function(event){
		var uname = this.comp("input_name").val();
		var pwd = this.comp("password1").val();
		
		if ($.trim(uname) != "" && $.trim(pwd) != ""){
			this.login(uname, pwd);
		}else{
			var str = "请输入用户名和密码";
			if (justep.Browser.isX5App){
				window.plugins.toast.show(str, "short", "center");
			}else{
				justep.Util.hint(str);
			}
		}
	};
	
	Model.prototype.login = function (uname, pwd){
		justep.Baas.sendRequest({
			"url" : "/ssh/user",
			"action" : "login",
			"async" : true,
			"params" : {
				username : uname,
				pwd : pwd
			},
			"success" : function(data) {
				var status = data.status;
				var str = "";
				switch (status){
					case 1: str = "登录成功";
						break;
					case 2: str = "用户名或密码不正确";
						break;
					case 0: str = "用户不存在";
						break;
					case -1: str = "帐号已禁用";
						break;
					default : str = "登录异常";
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

	Model.prototype.span_regClick = function(event){
		var url = require.toUrl('./regist.w');
		var params = {
	        from : "login",
	    }
		justep.Shell.showPage(url, params);
	};

	return Model;
});