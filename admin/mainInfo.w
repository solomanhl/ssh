<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_info" idColumn="threads"><column label="主题数" name="threads" type="Integer" xid="xid2"></column>
  <column label="帖子数" name="posts" type="Integer" xid="xid3"></column>
  <column label="附件数" name="attachs" type="Integer" xid="xid4"></column>
  <column label="用户数" name="users" type="Integer" xid="xid5"></column>
  <data xid="default1">[]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><label xid="label1"><![CDATA[后台首页]]></label></div>
   <div class="x-panel-content" xid="content1">
  
  
  <div xid="div2" style="width:90%;"><div xid="div1"><label xid="label2"><![CDATA[站点统计信息]]></label></div><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row1">
   <div class="col col-xs-4" xid="col5"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit_themes">
   <label class="x-label" xid="label3"><![CDATA[主题数]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output_themes" bind-ref='$model.data_info.ref("threads")'></div></div></div>
   <div class="col col-xs-4" xid="col6"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit_fujian">
   <label class="x-label" xid="label4"><![CDATA[附件数]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output_fujian" bind-ref='$model.data_info.ref("attachs")'></div></div></div>
   <div class="col col-xs-4" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit_tiezi">
   <label class="x-label" xid="label_tiezi"><![CDATA[帖子数]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output_tiezi" bind-ref='$model.data_info.ref("posts")'></div></div></div></div><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row2">
   <div class="col col-xs-4" xid="col8"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit_yonghu">
   <label class="x-label" xid="label6"><![CDATA[用户数]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output_yonghu" bind-ref='$model.data_info.ref("users")'></div></div></div>
   <div class="col col-xs-4" xid="col9"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit_zaixian">
   <label class="x-label" xid="label7"><![CDATA[在线人数]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output_zaixian"></div></div></div>
   <div class="col col-xs-4" xid="col10"></div></div></div></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div></div>