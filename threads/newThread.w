<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:57px;left:242px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="attach" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="Json" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:0,&quot;realFileName&quot;:&quot;view.png&quot;,&quot;storeFileName&quot;:&quot;view.png&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="forum" idColumn="fid"><column name="fid" type="Integer" xid="xid3"></column>
  <column name="name" type="String" xid="xid4"></column>
  <column label="版块介绍" name="col2" type="String" xid="xid5"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="发表">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="backBtn" icon="icon-chevron-left" onClick="{operation:'window.close'}">
   <i xid="i2" class="icon-chevron-left"></i>
   <span xid="span2"></span></a></div>
   <div class="x-titlebar-title" xid="title1">发表</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div><div class="x-panel-content" xid="content1">
  
  <div xid="div_forum"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list_forum" data="forum">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click"><label xid="label_forum" bind-text='ref("name")'><![CDATA[]]></label></li></ul> </div></div><div xid="div_subject">
  <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea_subject" placeHolder="标题，4-25个字"></textarea></div>
  <div xid="div_msg"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea_msg" placeHolder="内容，10-700个字"></textarea></div>
  <div xid="div_send"><img src="$UI/ssh/img/views.png" alt="" xid="image_pic"></img><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="发表" xid="button_send" onClick="button_sendClick">
   <i xid="i1"></i>
   <span xid="span1">发表</span></a>
  </div>
  <div xid="div_attach"><div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="/baas/ssh/attachment/simpleFileStore" xid="attachmentSimple1" accept="image/*" bind-ref='$model.attach.ref("Json")'>
   <div class="x-attachment" xid="div5">
    <div class="x-attachment-content x-card-border" xid="div6">
     <div class="x-doc-process" xid="div7">
      <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar1"></div></div> 
     <div data-bind="foreach:$attachmentItems" xid="div8">
      <div class="x-attachment-cell" xid="div9">
       <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div10">
        <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a1"></a></div> </div> </div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div11">
      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'" xid="div12"></div></div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div13">
      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')" xid="div14"></div></div> 
     <div style="clear:both;" xid="div15"></div></div> </div> </div></div>
  </div>
   </div></div>