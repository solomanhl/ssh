define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		this.uid;
		var shell = new ShellImpl(this, {
			"contentsXid" : "pages",
			pageMappings : {
				"admin_login" : {
					url : require.toUrl('./admin/login.w')	
				},
				"main" : {
					url : require.toUrl('./main.w')	
				},
				"login" : {
					url : require.toUrl('./user/login.w')
				},
				"regist" : {
					url : require.toUrl('./user/regist.w')
				}
			}
		});

	};

	Model.prototype.modelLoad = function(event){
//		debugger;
//		var weixinCode = this.getContext().getRequestParameter("code");
//		if (weixinCode != ""){
//			justep.Baas.sendRequest({
//				"url" : "/weixinSSH/weixin",
//				"action" : "UserInfo",
//				"async" : false,
//				"params" : {
//					code : weixinCode
//				},
//				"success" : function(wxUser) {
//					alert(wxUser.nickname + wxUser.openid);
//				}
//			});
//		}
	
//		debugger;
//		alert(justep.Browser.deviceType + justep.Browser.isMobile + justep.Browser.isX5App);
		if (justep.Browser.isPC){
			justep.Shell.showPage("admin_login");
		}else{
			justep.Shell.showPage("main");
		}
				
	};



	return Model;
});