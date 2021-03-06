<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:142px;left:91px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_album" idColumn="aid" limit="-1"><column label="相册id" name="aid" type="Integer" xid="xid1"></column>
  <column name="name" type="String" xid="xid5"></column>
  <column label="显示图片" name="filename" type="String" xid="xid2"></column>
  <column label="是否有新" name="isNew" type="Boolean" xid="xid3"></column>
  <column label="有多少图片" name="pics" type="Integer" xid="xid4"></column>
  <column name="views" type="Integer" xid="xid6"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="相册">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="backBtn" icon="icon-chevron-left" onClick="{operation:'window.close'}">
   <i xid="i3" class="icon-chevron-left"></i>
   <span xid="span3"></span></a></div>
   <div class="x-titlebar-title" xid="title1">相册</div>
   <div class="x-titlebar-right reverse" xid="right1"></div>
  </div></div><div class="x-panel-content  x-scroll-view" xid="content1" _xid="C74599CDEBC00001E0E019481C12D8D0">
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div2">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div3"><div xid="div_new"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="上传图片" xid="button_new" onClick="button_newClick">
   <i xid="i2"></i>
   <span xid="span2">上传图片</span></a></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data_album">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="col-xs-6" bind-click="li1Click"><img src="$UI/ssh/img/views.png" alt="" xid="image_new" bind-visible=' val("isNew")'></img><img src="" alt="" xid="image_main" bind-attr-src=' $model.serverImg(val("filename"))' class="img-responsive"></img>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_name" bind-ref='ref("name")'></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_pics" bind-text=' val("pics") + "张"'></div>
  </li></ul> </div>
  </div>
   </div></div>
   </div></div>