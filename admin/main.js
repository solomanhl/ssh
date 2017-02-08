define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button_wingLeftClick = function(event){
		this.comp("wing1").toggleLeft();
	};

	Model.prototype.li1Click = function(event){
		this.comp("wing1").toggleLeft();
		var row = event.bindingContext.$object;//获得当前行
		var url = require.toUrl(row.val("link"));
		var windowContainer1 = this.comp("windowContainer1");
		windowContainer1.setSrc(url);
		windowContainer1.refresh();
	};

	return Model;
});