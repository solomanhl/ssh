<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="top:9px;left:142px;height:auto;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_thread" idColumn="tid" limit="-1" isTree="false"><column name="tid" type="Integer" xid="xid1"></column>
  <column name="subject" type="String" xid="xid2"></column>
  <column name="create_date" type="String" xid="xid3"></column>
  <column name="last_date" type="String" xid="xid4"></column>
  <column name="posts" type="Integer" xid="xid5"></column>
  <column name="views" type="String" xid="xid6"></column>
  <column name="filename" type="String" xid="xid7"></column>
  <treeOption nodeKindRelation="create_date" parentRelation="create_date" xid="default1"></treeOption>
  <master xid="default2"></master></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_date" limit="-1" idColumn="create_date"><column name="create_date" type="String" xid="xid8"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content x-scroll-view" xid="content1" _xid="C745D3362800000164D973001A4911F3" style="top: 0px; bottom: 0px;">
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="backBtn" icon="icon-chevron-left" onClick="{operation:'window.close'}">
   <i xid="i3" class="icon-chevron-left"></i>
   <span xid="span3"></span></a><div xid="div_cover"><img src="$UI/ssh/img/album.jpg" alt="" xid="image_cover" style="width:100%;"></img>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_name"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_views"></div></div>
  <div xid="div_new"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="上传图片" xid="button_new" onClick="button_newClick">
   <i xid="i2"></i>
   <span xid="span2">上传图片</span></a></div><div xid="div_pics">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list_date" data="data_date" dataItemAlias='data_dateRow'>
   <ul class="x-list-template" xid="listTemplateUl_date">
    <li xid="li_date"><h5 xid="h51" class="text-muted" bind-text='$model.bindDate(  val("create_date"))'><![CDATA[]]></h5><div component="$UI/system/components/justep/list/list" class="x-list clearfix" xid="list_pic" data="data_thread" filter='$row.val("create_date")==data_dateRow.val("create_date")'>
   <ul class="x-list-template" xid="listTemplateUl_pic" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li2" class="col-xs-4 tb-listBox" bind-click="li2Click">
   <div xid="div5">
    <img src="" alt="" xid="image2" bind-attr-src='$model.imgUrl(val("filename"))' class="img-responsive"></img></div> </li></ul> </div>
  </li></ul> </div>
  </div>
  </div>
   </div></div>
   </div></div>