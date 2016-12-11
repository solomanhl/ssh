<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:30px;left:146px;height:auto;" onParamsReceive="modelParamsReceive" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="friend" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="uid" type="Integer" xid="xid2"></column>
  <column label="好友id" name="fuid" type="Integer" xid="xid3"></column>
  <column label="好友名字" name="fname" type="String" xid="xid4"></column>
  <column name="note" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="我的好友"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">我的好友</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C74E89B351C00001EC541F9183194750" style="bottom: 0px;"><div xid="div1"><span xid="span1"><![CDATA[我关注的好友]]></span></div>
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div3">
  <div xid="div_tuijian" bind-click="div_tuijianClick"><img src="$UI/ssh/img/user_pic.png" alt="" xid="image2"></img>
  <label xid="label1"><![CDATA[推荐好友]]></label>
  <img src="$UI/ssh/img/views.png" alt="" xid="image3"></img></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="friend">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div class="media" xid="media1">
   <div class="media-left" xid="mediaLeft1">
    <a href="#" xid="a1">
     <img class="media-object" src="$UI/ssh/img/user_pic.png" alt="" xid="image1"></img></a> </div> 
   <div class="media-body" xid="mediaBody1">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_name" bind-ref='ref("fname")'></div></div> </div></li></ul> </div>
  </div>
   <div class="x-content-center x-pull-up" xid="div4">
    <span class="x-pull-up-label" xid="span3">加载更多...</span></div> </div></div>
  </div> 
</div>