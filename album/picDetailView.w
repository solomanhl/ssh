<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="top:70px;left:17px;height:auto;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="post" idColumn="pid"><column name="pid" type="Integer" xid="xid1"></column>
  <column name="tid" type="Integer" xid="xid2"></column>
  <column name="uid" type="Integer" xid="xid3"></column>
  <column name="isfirst" type="Integer" xid="xid4"></column>
  <column name="create_date" type="String" xid="xid5"></column>
  <column name="quote_pid" type="Integer" xid="xid6"></column>
  <column name="message" type="String" xid="xid7"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div xid="div_top"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick">
   <i xid="i1" class="icon-chevron-left"></i>
   <span xid="span1"></span></a><div xid="div_info"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_name"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_count"></div></div></div></div><div class="x-panel-content  x-scroll-view" xid="content1" _xid="C747359B4E400001ACAB18FAC8106220" style="top: 0px;">
  
  
  
  
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div14"><div xid="div_pic"><img src="" alt="" xid="image1"></img></div><div xid="div_subject"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_date"></div></div><div xid="div_pinlun"><label xid="label_pinlun"><![CDATA[最新评论]]></label>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="post">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_pinlun" bind-ref='ref("message")'></div></li></ul> </div></div></div>
   <div class="x-content-center x-pull-up" xid="div15">
    <span class="x-pull-up-label" xid="span13">加载更多...</span></div> </div></div>
   <div class="x-panel-bottom" xid="bottom1">
  
  <div xid="div1"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" placeHolder="评论..."></input><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="发送" xid="button_send" onClick="button_sendClick">
   <i xid="i3"></i>
   <span xid="span3">发送</span></a></div></div></div>
  </div>