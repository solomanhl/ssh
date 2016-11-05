<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div xid="div_icon"><img src="$UI/ssh/img/user_pic.png" alt="" xid="image_icon"></img></div>
  <div xid="div2"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input_name" placeHolder="请输入用户名"></input>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="password1" placeHolder="请输入密码"></input></div>
  <div xid="div3"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="登录" xid="button_login" onClick="button_loginClick">
   <i xid="i1"></i>
   <span xid="span1">登录</span></a></div>
  <div xid="div_other"><span xid="span_reg" bind-click="span_regClick"><![CDATA[新用户注册]]></span><span xid="span_forget"><![CDATA[忘记密码]]></span>
  <span xid="span_wx"><![CDATA[微信登录]]></span>
  </div></div>
   </div></div>