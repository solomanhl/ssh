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
			}
		});
	}

	return Model;
});