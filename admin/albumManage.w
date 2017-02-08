<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_album" idColumn="id" limit="-1"><column name="id" type="Integer" xid="xid1"></column>
  <column label="相册id" name="aid" type="Integer" xid="xid2"></column>
  <column label="相册名称" name="name" type="String" xid="xid3"></column>
  <column label="照片数量" name="pics" type="Integer" xid="xid4"></column>
  <column label="默认0，删除2" name="status" type="Integer" xid="xid5"></column>
  <data xid="default1">[]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><label xid="label1"><![CDATA[相册管理]]></label></div>
   <div class="x-panel-content" xid="content1"><div xid="div1" style="width:90%;"><div component="$UI/system/components/fragment/list/listTable" xid="listTable1" data="data_album">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data_album" filter=' $row.val("status") !=2'>
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1">
     <thead xid="thead1">
      <tr class="danger" xid="tr1">
       <th xid="col1" bind-text='$model.data_album.label("aid")'>
        </th> 
       <th xid="col2" bind-text='$model.data_album.label("name")'>
        </th> 
  <th xid="col3" bind-text='$model.data_album.label("pics")'><![CDATA[]]></th>
  <th xid="col4"><![CDATA[删除]]></th></tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <label xid="label4" bind-text='val("aid")'><![CDATA[]]></label></td> 
       <td xid="td2">
        <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" bind-ref='ref("name")' onChange="input2Change"></input></td> 
  <td xid="td3"><label xid="label5" bind-text='val("pics")'><![CDATA[]]></label></td>
  <td xid="td4"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="删除" xid="button3" bind-click="button3Click">
   <i xid="i3"></i>
   <span xid="span3">删除</span></a></td>
  </tr> </tbody> </table> </div> </div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="添加相册" xid="button_add" onClick="button_addClick">
   <i xid="i1"></i>
   <span xid="span1">添加相册</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="保存" xid="button_save" onClick="button_saveClick">
   <i xid="i2"></i>
   <span xid="span2">保存</span></a></div></div>
   </div></div>