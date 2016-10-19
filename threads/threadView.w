<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:11px;left:280px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="t_info" idColumn="tid"><column label="主题id" name="tid" type="Integer" xid="xid1"></column>
  <column name="username" type="String" xid="xid2"></column>
  <column name="subject" type="String" xid="xid3"></column>
  <column name="create_date" type="String" xid="xid4"></column>
  <column name="last_date" type="String" xid="xid5"></column>
  <column name="fid" type="String" xid="xid6"></column>
  <column name="views" type="Integer" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="post" idColumn="pid"><column name="tid" type="String" xid="xid18"></column>
  <column name="pid" type="Integer" xid="xid8"></column>
  <column name="uid" type="Integer" xid="xid9"></column>
  <column name="isfirst" type="String" xid="xid10"></column>
  <column name="create_date" type="String" xid="xid11"></column>
  <column name="userip" type="String" xid="xid12"></column>
  <column name="images" type="String" xid="xid13"></column>
  <column name="files" type="String" xid="xid14"></column>
  <column name="doctype" type="String" xid="xid15"></column>
  <column name="quotepid" type="String" xid="xid16"></column>
  <column name="message" type="String" xid="xid17"></column>
  <column name="message_fmt" type="String" xid="xid19"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_subject" bind-ref='$model.t_info.ref("subject")'></div><div xid="div_time_user"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_time" bind-text='$model.datelineToDate( $model.t_info.val("create_date"))'></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_uname" bind-ref='$model.t_info.ref("username")'></div></div>
  <div xid="div_guanzhu"><img src="$UI/ssh/img/views.png" alt="" xid="image1"></img>
  <label xid="label1"><![CDATA[点蓝字关注我们哦]]></label></div>
  <div xid="div_msg"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_msg"></div></div>
  <div xid="div_zan"><label xid="label_zan"><![CDATA[这么好的文章，赶紧点赞↓分享↑呗~]]></label><img src="$UI/ssh/img/views.png" alt="" xid="image_zan"></img>
  <img src="$UI/ssh/img/views.png" alt="" xid="image_sign"></img>
  </div>
  <div xid="div_comments"><img src="$UI/ssh/img/views.png" alt="" xid="image4"></img>
  <label xid="label3"><![CDATA[全部评论]]></label>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="post" filter=' $row.val("isfirst") == 0'>
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div class="media" xid="media1">
   <div class="media-left" xid="mediaLeft1">
    <a href="#" xid="a1">
     <img class="media-object" src="$UI/ssh/img/user_pic.png" alt="" xid="image5" style="width:64px;height:63px;"></img></a> </div> 
   <div class="media-body" xid="mediaBody1">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_com_uname" bind-ref='ref("uid")'></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_com_msg" bind-html=' $model.showMessage( val("message"))'></div>
  <div xid="div4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_com_time" bind-text=' $model.datelineToBeforeDay( val("create_date"))'></div>
  <img src="$UI/ssh/img/views.png" alt="" xid="image_ding"></img>
  <img src="$UI/ssh/img/views.png" alt="" xid="image_pinlun"></img>
  <img src="$UI/ssh/img/views.png" alt="" xid="image_genduo"></img>
  </div></div> </div></li></ul> </div></div></div>
   <div class="x-panel-bottom" xid="bottom1"><div xid="div5">
  
  
  
  
  <div xid="div_pinlun"><img src="$UI/ssh/img/views.png" alt="" xid="image9"></img><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_pinlun" bind-text="1"></div></div>
  <div xid="div7"><img src="$UI/ssh/img/views.png" alt="" xid="image10"></img>
  <label xid="label4"><![CDATA[赞]]></label></div>
  <div xid="div_zhuanfa"><img src="$UI/ssh/img/views.png" alt="" xid="image11"></img>
  <label xid="label_zhuanfa"><![CDATA[转发]]></label></div></div></div></div></div>