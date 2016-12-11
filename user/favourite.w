<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:45px;left:117px;height:auto;" onParamsReceive="modelParamsReceive" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="favor" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="收藏的id" name="fid" type="Integer" xid="xid2"></column>
  <column name="type" type="String" xid="xid3"></column>
  <column label="标题" name="subject" type="String" xid="xid4"></column>
  <column label="作者" name="author" type="String" xid="xid5"></column>
  <column label="作者id" name="authorid" type="String" xid="xid8"></column>
  <column label="发表时间" name="time" type="Long" xid="xid6"></column>
  <column label="查看次数" name="views" type="Integer" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="我的收藏"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">我的收藏</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C74E8AC46ED00001D8E37D50173A1C27" style="bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="favor">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div xid="div4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_title" bind-ref='ref("subject")'></div>
  </div>
  <div xid="div5"><span xid="span3"><![CDATA[作者：]]></span><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_author" bind-ref='ref("author")'></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_time" bind-text=' $model.datelineToBeforeDay( val("time"))'></div>
  <img src="$UI/ssh/img/views.png" alt="" xid="image1"></img>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output_view" bind-ref='ref("views")'></div></div></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
</div>