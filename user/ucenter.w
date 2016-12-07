<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="个人中心"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">个人中心</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><table class="table tb-menu" component="$UI/system/components/bootstrap/table/table" xid="table1">
   
   <tbody class="x-list-template" xid="listTemplate1">
    <tr xid="tr1">
     <td xid="td1" bind-click="openPageClick" pagename="./minpian.w"><div xid="div1" class="text-center"><img src="$UI/ssh/img/logo.png" alt="" xid="image1" class="center-block img-responsive tb-img5"></img>
  <span xid="span1"><![CDATA[兴趣名片]]></span></div></td>
     <td xid="td2" bind-click="openPageClick" pagename="./tongzhi.w"><div xid="div2" class="text-center"><img src="$UI/ssh/img/logo.png" alt="" xid="image2" class="center-block img-responsive tb-img5"></img>
  <span xid="span2"><![CDATA[消息通知]]></span></div></td>
     <td xid="td3" bind-click="openPageClick" pagename="./ziliao.w"><div xid="div3" class="text-center"><img src="$UI/ssh/img/logo.png" alt="" xid="image3" class="center-block img-responsive tb-img5"></img>
  <span xid="span3"><![CDATA[个人资料]]></span></div></td>
     </tr> 
  <tr xid="tr2">
  	<td xid="td4" bind-click="openPageClick" pagename="./friend.w"><div xid="div4" class="text-center"><img src="$UI/ssh/img/logo.png" alt="" xid="image4" class="center-block img-responsive tb-img5"></img>
  <span xid="span4"><![CDATA[我的好友]]></span></div></td>
  	<td xid="td5" bind-click="openPageClick" pagename="./favourite.w"><div xid="div5" class="text-center"><img src="$UI/ssh/img/logo.png" alt="" xid="image5" class="center-block img-responsive tb-img5"></img>
  <span xid="span5"><![CDATA[我的收藏]]></span></div></td>
  	<td xid="td6" bind-click="openPageClick" pagename="./yijian.w"><div xid="div6" class="text-center"><img src="$UI/ssh/img/logo.png" alt="" xid="image6" class="center-block img-responsive tb-img5"></img>
  <span xid="span6"><![CDATA[意见反馈]]></span></div></td>
  </tr></tbody> 
  </table></div>
  </div> 
</div>