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
		var me = this;
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
				if (status == 1){
					me.saveLocal(data.uid, data.gid, data.username, data.password, data.status);
//					alert(require.toUrl('../main.w'));
//					justep.Shell.showPage(require.toUrl('../main.w'));
//					justep.Shell.closePage(require.toUrl('./login.w'));
//					justep.Shell.closePage();
					me.owner.close();
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

	Model.prototype.modelLoad = function(event){
		//监听返回键
 		document.addEventListener('backbutton', function(){
 			justep.Shell.closePage();
 		}, false);
 		$(window).on('beforeunload', function(){
 			document.removeEventListener('backbutton', listener, false);
 	    });
	};

	//保存到本地
	Model.prototype.saveLocal = function (uid,gid, username, password, loginState){
		localStorage.setItem('uid',uid); 
		localStorage.setItem('gid',gid); 
		localStorage.setItem('username',username); 
		localStorage.setItem('password',password);
		localStorage.setItem('loginState',loginState); 
	};
	
	return Model;
});