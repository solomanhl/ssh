<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:232px;left:81px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="user" idColumn="uid"><column label="用户编号" name="uid" type="Integer" xid="xid3"></column>
  <data xid="default1">[]</data>
  <column label="用户组编号" name="gid" type="Integer" xid="xid1"></column>
  <column label="用户名" name="username" type="String" xid="xid4"></column>
  <column label="真实姓名" name="realname" type="String" xid="xid5"></column>
  <column label="主题数量" name="threads" type="Integer" xid="xid6"></column>
  <column label="发表数量" name="posts" type="Integer" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="baseinfo" idColumn="pids"><column label="话题数量" name="pids" type="Integer" xid="xid8"></column></div>
  
  </div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1">
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div2">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div3"><div class="media" xid="media_head">
   <div class="media-left" xid="mediaLeft1">
    <a href="#" xid="a1">
     <img class="media-object" src="$UI/ssh/img/logo.png" alt="" xid="logo" style="width:64px;height:65px;"></img></a> </div> 
   <div class="media-body" xid="mediaBody1">
    <div xid="div1"><label xid="label1"><![CDATA[话题]]></label><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_huati"></div>
  <label xid="label2"><![CDATA[关注]]></label>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_add" bind-text="0"></div></div></div> 
  </div>
  <div xid="div_head"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup_head"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="通告" xid="button1">
   <i xid="i2"></i>
   <span xid="span3">通告</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="最新动态" xid="button2">
   <i xid="i3"></i>
   <span xid="span4">最新动态</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="更多" xid="button3">
   <i xid="i4"></i>
   <span xid="span5">更多</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="相册" xid="button4">
   <i xid="i5"></i>
   <span xid="span6">相册</span></a></div></div>
  
  <div xid="div_new"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="发新帖" xid="button_new" onClick="button_newClick">
   <i xid="i6"></i>
   <span xid="span7">发新帖</span></a></div><div xid="div_top4"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer_topnews" src="$UI/ssh/threads/topNews.w"></div></div>
  <div xid="div_list"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer_threads" src="$UI/ssh/threads/threadList.w"></div></div></div>
   <div class="x-content-center x-pull-up" xid="div4">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> 
  </div></div>
   </div></div>