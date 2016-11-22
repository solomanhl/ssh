<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_msg" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="是否新消息" name="new" type="Integer" xid="xid2"></column>
  <column name="from_id" type="Integer" xid="xid3"></column>
  <column label="0本地，1第三方平台用户表" name="from_type" type="Integer" xid="xid4"></column>
  <column label=" 提醒分类 1坛友互动 2系统消息" name="category" type="Integer" xid="xid5"></column>
  <column label="内容" name="note" type="String" xid="xid6"></column>
  <column label="时间" name="dateline" type="Integer" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="消息通知"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">消息通知</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C74D9F0967C00001FDE219901954159A" style="bottom: 0px;">
  
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-scroll-content" xid="div2"><img src="$UI/ssh/img/logo.png" alt="" xid="image1"></img><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_msg"></div></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
</div>