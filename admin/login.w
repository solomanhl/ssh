<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:pc;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="管理员登录"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">管理员登录</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div xid="div1"><label xid="label1"><![CDATA[管理员登录]]></label>
  <label xid="label2"><![CDATA[为了您的安全，请输入管理员帐号和密码：]]></label></div>
  <span xid="span1"><img src="$UI/ssh/img/views.png" alt="" xid="image1"></img>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" placeHolder="用户名"></input></span>
  <span xid="span2"><img src="$UI/ssh/img/views.png" alt="" xid="image2"></img>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" placeHolder="密码"></input></span>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="登录" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span3">登录</span></a></div>
  </div> 
</div>