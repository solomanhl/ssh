<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="top:71px;left:4px;height:auto;">
    <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="threads" idColumn="tid">
  	<column name="fid" type="Integer" xid="xid2"></column>
  <column name="tid" type="Integer" xid="xid9"></column>
  <column name="top" type="String" xid="xid10"></column>
  <column name="uid" type="String" xid="xid11"></column>
  <column name="subject" type="String" xid="xid13"></column>
  <column name="create_date" type="String" xid="xid14"></column>
  <column name="views" type="String" xid="xid16"></column>
  <column name="username" type="String" xid="xid24"></column>
  <column name="last_date" type="String" xid="xid1"></column></div>  
  </div> 
<div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="threads" limit="4">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click"><img src="$UI/ssh/img/views.png" alt="" xid="image1"></img>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("subject")'></div></li></ul> </div></div>