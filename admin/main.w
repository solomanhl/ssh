<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:77px;left:58px;height:auto;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_fenlei" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="名称" name="name" type="String" xid="xid2"></column>
  <column label="指向" name="link" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;后台首页&quot;,&quot;link&quot;:&quot;./mainInfo.w&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;版块管理&quot;,&quot;link&quot;:&quot;./forumManage.w&quot;},{&quot;id&quot;:3,&quot;name&quot;:&quot;主题管理&quot;},{&quot;id&quot;:4,&quot;name&quot;:&quot;用户管理&quot;,&quot;link&quot;:&quot;&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="后台管理"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn" bind-visible="false"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="菜单" xid="button_wingLeft" onClick="button_wingLeftClick">
   <i xid="i1"></i>
   <span xid="span1">菜单</span></a></div>  
          <div class="x-titlebar-title">后台管理</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/wing/wing" class="x-wing" xid="wing1" display="compress">
   <div class="x-wing-left" xid="left1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data_fenlei">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("name")'></div></li></ul> </div></div>
   <div class="x-wing-content" xid="content2">
    <div xid="div1"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="./mainInfo.w" style="height:100%;width:100%;"></div>
  </div></div> 
   <div class="x-wing-right" xid="right1"></div></div></div>
  </div> 
</div>