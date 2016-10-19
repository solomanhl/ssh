<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="top:216px;left:15px;height:auto;">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="threads" idColumn="tid"><column label="论坛id" name="fid" type="Integer" xid="xid2"></column>
  <column label="主题id" name="tid" type="Integer" xid="xid1"></column>
  <column label="置顶" name="top" type="Integer" xid="xid2"></column>
  <column label="用户id" name="uid" type="Integer" xid="xid3"></column>
  <column label="ip" name="userip" type="Integer" xid="xid4"></column>
  <column label="标题" name="subject" type="String" xid="xid5"></column>
  <column name="create_date" type="Integer" xid="xid6"></column>
  <column name="last_date" type="Integer" xid="xid7"></column>
  <column label="查看" name="views" type="Integer" xid="xid8"></column>
  <column label="回复" name="posts" type="Integer" xid="xid9"></column>
  <column label="附件" name="files" type="Integer" xid="xid11"></column>
  <column name="mods" type="Integer" xid="xid12"></column>
  <column name="closed" type="Integer" xid="xid13"></column>
  <column name="firstpid" type="String" xid="xid14"></column>
  <column name="lastuid" type="String" xid="xid15"></column>
  <column name="lastpid" type="String" xid="xid16"></column>
  <column label="作者名" name="username" type="String" xid="xid17"></column>
  <column label="正文" name="message" type="String" xid="xid18"></column>
  <column label="图片数量" name="images" type="Integer" xid="xid19"></column>
  <column label="第一幅图片路径" name="img1" type="String" xid="xid20"></column>
  <column name="img2" type="String" xid="xid21"></column>
  <column name="img3" type="String" xid="xid22"></column></div>
  </div> 
<div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="threads">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click"><div class="media" xid="media_head">
   <div class="media-left" xid="mediaLeft1">
    <a href="#" xid="a1">
     <img class="media-object" src="$UI/ssh/img/user_pic.png" alt="" xid="image1" style="width:58px;height:59px;"></img></a> </div> 
   <div class="media-body" xid="mediaBody1">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_uname" bind-ref='ref("username")'></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_time" bind-text='$model.datelineToBeforeDay( val("create_date"))'></div>
  <img src="$UI/ssh/img/views.png" alt="" xid="image_view"></img><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_view" bind-ref='ref("views")'></div>
  </div> </div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_subject" bind-ref='ref("subject")'></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_msg" bind-ref='ref("message")'></div>
  <div xid="div_img"><img src="" alt="" xid="image3" bind-attr-src=' val("img1")'></img>
  <img src="" alt="" xid="image4" bind-attr-src=' val("img2")'></img>
  <img src="" alt="" xid="image5" bind-attr-src=' val("img3")'></img></div></li></ul> 
  </div></div>