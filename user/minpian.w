<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="兴趣名片"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">兴趣名片</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div xid="div_backgroud"><img src="$UI/ssh/img/album.jpg" alt="" xid="image1" style="width:100%;"></img></div>
  <div xid="div2_head"><img src="$UI/ssh/img/user_pic.png" alt="" xid="image_head"></img></div>
  <div xid="div_name"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_name"></div></div>
  <div xid="div_guanzhu"><label xid="label1"><![CDATA[关注]]></label><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_guanzhu"></div>
  <label xid="label2"><![CDATA[粉丝]]></label><div component="$UI/system/components/justep/output/output" class="x-output" xid="output_fensi"></div>
  
  </div></div>
  </div> 
</div>