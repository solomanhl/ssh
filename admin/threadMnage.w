<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:pc;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:3px;left:202px;height:auto;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_thread" idColumn="id" confirmDelete="false"><column name="id" type="Integer" xid="xid1"></column>
  <column label="主题ID" name="tid" type="Integer" xid="xid2"></column>
  <column label="论坛id" name="fid" type="Integer" xid="xid3"></column>
  <column label="论坛" name="name" type="String" xid="xid4"></column>
  <column label="用户id" name="uid" type="Integer" xid="xid5"></column>
  <column label="用户名" name="username" type="String" xid="xid6"></column>
  <column label="标题" name="subject" type="String" xid="xid7"></column>
  <column label="创建时间" name="create_date" type="Long" xid="xid8"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_forum" idColumn="id"><column name="id" type="Integer" xid="xid9"></column>
  <column name="fid" type="Integer" xid="xid10"></column>
  <column name="name" type="String" xid="xid11"></column></div></div> 

  
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content  x-scroll-view" xid="content2" _xid="C76C386FB7A00001307310B7AA862F70"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div3"><div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel_search">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[主题管理]]></h4></div> 
   <div class="panel-body" xid="body1"><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row1">
   <div class="col col-xs-2" xid="col6"><label xid="label1"><![CDATA[版块]]></label><select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." class="form-control" xid="select_forum" bind-options="data_forum" bind-optionsValue="fid" bind-optionsLabel="name" onChange="select_forumChange"></select>
  </div>
   <div class="col col-xs-4" xid="col7"><label xid="label2"><![CDATA[开始时间]]></label>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input_startDate" format="yyyy-MM-dd" dataType="Date" max="js:new Date()" onChange="input_startDateChange"></input></div>
   <div class="col col-xs-4" xid="col8"><label xid="label3"><![CDATA[结束时间]]></label>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input_endDate" dataType="Date" format="yyyy-MM-dd" max="js:new Date()" onChange="input_endDateChange"></input></div>
  <div class="col col-xs-2" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="条件查询" xid="button_search" bind-click="button_searchClick">
   <i xid="i2"></i>
   <span xid="span2">条件查询</span></a></div></div>
  </div>
   </div><div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel_threads">
   <div class="panel-heading" xid="heading2">
    <h4 class="panel-title x-scroll-view" xid="h42" bind-text='"共" + "条记录"'><![CDATA[]]>
  </h4></div> 
   <div class="panel-body" xid="body2">
  <div component="$UI/system/components/fragment/list/listTable" xid="listTable1" data="data_thread">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data_thread">
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1">
     <thead xid="thead1">
      <tr class="danger" xid="tr1">
       <th xid="col1" bind-text='$model.data_thread.label("tid")'>
        </th> 
       <th xid="col2" bind-text='$model.data_thread.label("name")'>
        </th> 
  <th xid="col3" bind-text='$model.data_thread.label("subject")'><![CDATA[]]></th>
  <th xid="col10" bind-text='$model.data_thread.label("create_date")'><![CDATA[]]></th><th xid="col4" bind-text='$model.data_thread.label("username")'><![CDATA[]]></th>
  <th xid="col5"><![CDATA[操作]]></th>
  </tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_tid" bind-ref='ref("tid")'></div></td> 
       <td xid="td2">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_forum" bind-ref='ref("name")'></div></td> 
  <td xid="td3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_subject" bind-ref='ref("subject")'></div></td>
  <td xid="td6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_createDate" bind-text=' $model.datelineToDay( val("create_date"))'></div></td><td xid="td4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_user" bind-ref='ref("username")'></div></td>
  <td xid="td5"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="删除" xid="button_del" onClick="button_delClick">
   <i xid="i1"></i>
   <span xid="span1">删除</span></a></td>
  </tr> </tbody> </table> </div> </div></div>
   </div></div>
   <div class="x-content-center x-pull-up" xid="div4">
    <span class="x-pull-up-label" xid="span3">加载更多...</span></div> </div></div>
   </div>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" style="top:14px;left:146px;" onOK="messageDialog1OK" title="提示" message="确定要删除？" type="OKCancel"></span></div>