<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:115px;left:19px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="ziliao" idColumn="uid"><column name="uid" type="Integer" xid="xid1"></column>
  <column name="username" type="String" xid="xid7"></column>
  <column label="学段" name="xueduan" type="String" xid="xid2"></column>
  <column name="mobile" type="String" xid="xid3"></column>
  <column name="address" type="String" xid="xid4"></column>
  <column name="sex" type="Boolean" xid="xid6"></column>
  <column name="sign" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="我的资料"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">我的资料</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-card" xid="panel2">

   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[用户名]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='$model.ziliao.ref("username")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[学段]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='$model.ziliao.ref("xueduan")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[手机号]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='$model.ziliao.ref("mobile")'></div></div></div><div component="$UI/system/components/justep/panel/panel" class="x-panel x-card" xid="panel3">

   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
   <label class="x-label" xid="label4"><![CDATA[我的地址]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref='$model.ziliao.ref("address")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label5"><![CDATA[性别]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref='$model.ziliao.ref("sex")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[个性签名]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='$model.ziliao.ref("sign")'></div></div></div></div>
  </div> 
</div>