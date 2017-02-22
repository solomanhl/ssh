<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_user" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="用户id" name="uid" type="Integer" xid="xid2"></column>
  <column label="用户组id" name="gid" type="Integer" xid="xid3"></column>
  <column label="用户名" name="username" type="String" xid="xid4"></column>
  <column label="用户组" name="name" type="String" xid="xid5"></column>
  <column label="手机" name="mobile" type="String" xid="xid6"></column>
  <column label="主题数" name="threads" type="Integer" xid="xid7"></column>
  <column label="回帖数" name="posts" type="Integer" xid="xid8"></column>
  <column label="注册时间" name="create_date" type="Long" xid="xid9"></column>
  <column label="上次登录" name="login_date" type="Long" xid="xid10"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C76CC317A0800001B69416A069101592" style="top: 0px; bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div2"><div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel_search">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[用户管理]]></h4></div> 
   <div class="panel-body" xid="body1"><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row1">
   <div class="col col-xs-2" xid="col10"><label xid="label3"><![CDATA[用户名]]></label>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input_username" onChange="input_usernameChange"></input></div>
   <div class="col col-xs-4" xid="col11"><label xid="label4"><![CDATA[开始时间]]></label>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input_startTime" dataType="Date" format="yyyy-MM-dd" max="js:new Date()" onChange="input_startTimeChange"></input></div>
   <div class="col col-xs-4" xid="col12"><label xid="label5"><![CDATA[结束时间]]></label>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input5" dataType="Date" format="yyyy-MM-dd" max="js:new Date()" onChange="input5Change"></input></div>
  <div class="col col-xs-2" xid="col13"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="查询" xid="button_search" onClick="button_searchClick">
   <i xid="i2"></i>
   <span xid="span3">查询</span></a></div></div></div>
   </div>
  <div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel3">
   <div class="panel-heading" xid="heading2">
    <h4 class="panel-title" xid="h42" bind-text='"共" +  $model.data_user.count() + "条记录"'><![CDATA[]]></h4></div> 
   <div class="panel-body" xid="body2"><div component="$UI/system/components/fragment/list/listTable" xid="listTable1" data="data_user">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data_user">
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1">
     <thead xid="thead1">
      <tr class="danger" xid="tr1">
       <th xid="col1" bind-text='$model.data_user.label("uid")'>
        </th> 
       <th xid="col2" bind-text='$model.data_user.label("username")'>
        </th> 
  <th xid="col3" bind-text='$model.data_user.label("name")'><![CDATA[]]></th>
  <th xid="col4" bind-text='$model.data_user.label("mobile")'><![CDATA[]]></th>
  <th xid="col5" bind-text='$model.data_user.label("threads")'><![CDATA[]]></th>
  <th xid="col6" bind-text='$model.data_user.label("posts")'><![CDATA[]]></th>
  <th xid="col7" bind-text='$model.data_user.label("create_date")'><![CDATA[]]></th>
  <th xid="col8" bind-text='$model.data_user.label("login_date")'><![CDATA[]]></th>
  <th xid="col9"><![CDATA[操作]]></th></tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("uid")'></div>
  
  
  
  
  
  </td> 
       <td xid="td2">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("username")'></div></td> 
  <td xid="td3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("name")'></div></td>
  <td xid="td4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("mobile")'></div></td>
  <td xid="td5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("threads")'></div></td>
  <td xid="td6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("posts")'></div></td>
  <td xid="td7"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-text=' $model.datelineToDay( val("create_date"))'></div></td>
  <td xid="td8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output8" bind-text=' $model.datelineToDay( val("login_date"))'></div></td>
  <td xid="td9"></td></tr> </tbody> </table> </div> </div></div>
   </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
   </div></div>