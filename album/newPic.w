<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:10px;left:206px;height:auto;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_album" limit="-1" idColumn="aid"><column name="aid" type="Integer" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <column name="brief" type="String" xid="xid3"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data_attach" idColumn="id" limit="-1"><column name="id" type="Integer" xid="xid4"></column>
  <column name="Json" type="String" xid="xid5"></column>
  <data xid="default1">[{&quot;id&quot;:1}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div xid="div_album"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data_album">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" bind-click="li1Click"><label xid="label_forum" bind-text='val("name")'><![CDATA[]]></label></li></ul> </div></div>
  <div xid="div_subject">
  <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea_subject" placeHolder="说点什么吧..."></textarea></div>
  <div xid="div_send"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="上传" xid="button_send" onClick="button_sendClick">
   <i xid="i1"></i>
   <span xid="span1">上传</span></a></div><div xid="div_attach"><div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="/baas/ssh/attachment/simpleFileStore_Album" xid="attachmentSimple1" bind-ref='$model.data_attach.ref("Json")' accept="image/*">
   <div class="x-attachment" xid="div3">
    <div class="x-attachment-content x-card-border" xid="div4">
     <div class="x-doc-process" xid="div5">
      <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar1"></div></div> 
     <div data-bind="foreach:$attachmentItems" xid="div6">
      <div class="x-attachment-cell" xid="div7">
       <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div8">
        <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a1"></a></div> </div> </div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div9">
      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'" xid="div10"></div></div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div11">
      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')" xid="div12"></div></div> 
     <div style="clear:both;" xid="div13"></div></div> </div> </div></div>
  </div>
   </div></div>