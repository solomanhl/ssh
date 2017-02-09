<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:3px;left:202px;height:auto;"/> 
<div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel_search">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[主题管理]]></h4></div> 
   <div class="panel-body" xid="body1"><div xid="div2" style="width:90%;"></div></div>
   </div>
  <div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel_threads">
   <div class="panel-heading" xid="heading2">
    <h4 class="panel-title" xid="h42" bind-text='"共" + "条记录"'><![CDATA[]]></h4></div> 
   <div class="panel-body  x-scroll-view" xid="body2"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_id"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_forum"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_subject"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_user"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_views"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_posts"></div></div>
   <div class="x-content-center x-pull-up" xid="div5">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
   </div></div>