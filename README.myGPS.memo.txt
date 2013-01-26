=========================================================
http://www.besoul.com.cn/gps.php

周末完成：
1)exlive项目开源服务器
  端口映射 开四个端口 http://www.doc88.com/p-773445246984.html
  android 安装：豌豆荚->搜索exlive ，安装人员定位
  8080映射出来 给BlackBerry老手机用 
4 测试blackberry
	下载地址 升级地址：写在my.workforce.js
		http://shanghai.springworks.info/ota/mobileworkforce/MobileWorkforce.jad
	服务地址写在 my.workforce.js
		server1.exlive.springworks.info
	index.html: shanghai.springworks.info
C:\Users\jiyang\Documents\GitHub\exlivemobileclient
	

============================

private int LINK_INTERVAL = 20000; //10秒，生产环境20-30秒
private static int _interval = 6; //6秒，生产环境60秒


测试帐号：
user03 9850 张三
user04 9930 李四
C:\RIM\BlackBerry WebWorks SDK 2.3.1.5
=========================================================
服务工单：push到手机上

安装界面：jad 下载界面中文乱码 
 主页：欢迎用户 XXX

不激活能否取得室内GPS ?

增加About : 姓名，邮件，下载地址，说明

9930主屏屏幕滚动问题！还是两次滚动

功能：
	NFC读 北京交通卡
	NFC 会员卡
	BI：

城市漫步：360元
泰比特：330元
gt03b ： 240
天琴泰山I型
珠海天琴泰山GPS定位器追踪器 item.taobao.com/item.htm?spm=a1z10.1.w7262761.1.c2b25e&id=19584192808
镇江傲世星网导航科技有限公司

购买gps 车载 自带电池的 跟踪 180元
测试，学习车载跟踪

音乐播放器
	http://4.qdemo.sinaapp.com/html5/chrome/
后台程序  进行GPS连续上报
后台程序  进行签到
后台程序  进行签出

应用升级：自动检查升级
拍照上传
bug report: 截图
首页：footer: 信息居中
检查推送 信箱
 手机程序接收数据
手机状态栏提示：banner: https://developer.blackberry.com/html5/apis/blackberry.app.html#.showBannerIndicator
 图标：https://developer.blackberry.com/html5/apis/blackberry.app.html#.setHomeScreenIcon
构造mail msg
		https://developer.blackberry.com/html5/apis/blackberry.message.message.html
 手机邮箱 点击打开 程序
 保存到数据库里面
程序中读取数据库，列表显示数据

2. 报位置 精度纬度 数据不对
上传图片  

=========================================================
google map marker
  搜索  marker png，下载，做透明处理
 gmap图标：https://maps.gstatic.com/mapfiles/markers2/red_markers_A_J2.png  
跨域访问
	jQuery.support.cors = true;
	checkSIGNIN_url = "http://shanghai.springworks.info:89/pgps/empPr/empParamAction_sendEmpParam.action?phone=" + gPhone;
	$.getJSON(checkSIGNIN_url, checkSIGNIN_callback);
	http://blog.csdn.net/qq578933760/article/details/7566002

局部更新显示：注意：不能自己click事件里面处理自己的显示！
	但是可以 按钮A  修改按钮B的显示
		$("#signin_button").text("签到3");  
		$('#signin_button').button('refresh');
	参考：http://andymatthews.net/read/2011/12/14/Refreshing-jQuery-Mobile-listviews,-buttons,-select-dropdowns,-and-input-fields

检查帐号是否正确
	用户名口令传给ExliveThread: server ip, username, password
	正确：用户名口令传给MOVE, LOGIN代码：blackberry.system.log.exliveCreateInstance("datagram://shanghai.springworks.info:7878;deviceside=true","02100000004", "111111");
检查SIGN状态
如果判断是否signin过？
	http://192.168.100.110:89/pgps/empPr/empParamAction_sendEmpParam.action?phone=02100000004
	{"empId":3,"signInTime":"","signOutTime":"","staticDate":"","empIcon":"http://192.168.100.110:89/pgps/images/employee/7.png","reIntval":60,"powerBoot":1,"nohup":1,"SITR":"08:30","SOTR":"18:30","pmsReIntval":1,
	
	广州-开发(1217791695)  
	$('#signin_button').text('签出');
$('#signin_button').button('refresh');
	
根据帐号， SIGN，GPS信息决定SIGNIN按钮信息
	动态改 SIGN按钮状态：
		签到 （浮动提示：上次签退时间，地点google）
		签出（浮动提示：上次签到时间，地点 google）
		未定位，已模糊定位，已GPS定位

签到页面里面：没有GPS数据的时候，Geo数据过期
	签到按钮点下，提示：先刷新

GPS定位必须用室外的数据
	后台程序定期发消息处理
室内的数据：只用于签到
	手工

webworks应用，手机上http请求数据 有cache怎么搞？
	我连续取两次URL获得用户的登录状态信息就老实一样，没有变化
	解决办法：config.xml <rim:cache disableAllCache="true" />

2. 帐号注册页面
	保存时候，提示用户帐号是否正确
	正确，则保存， LOGIN, MOVE
	不正确，不保存 

trimstring
	http://stackoverflow.com/questions/498970/how-do-i-trim-a-string-in-javascript
9930主屏屏幕滚动问题！两次滚动  加一个滚动条
	http://blog.csdn.net/berryreload/article/details/7198038

改LOADING动画
	http://www.zcool.com.cn/gfx/ZNTU0NzI=.html
		点击进去 http://preview.zcool.com.cn/png/gif/20070622/png_06225622007.html
定时检查网络状态
	if (navigator.onLine) {
	updateLocationStatus('网络连接正常');  
  } else {  
	updateLocationStatus('没有网络连接');  
  }    
  
选项：
	使用google 图片，google v3可缩放
后台程序  进行GPS连续跟踪
webworks 发message
webworks 监听message处理

首页滚动：要滚两次才起作用
http://blog.csdn.net/berryreload/article/details/7198038


$("span .ui-btn-text", $("#signin_button")).html("已签到");
"span .ui-btn-text"这是查找的目标
, $("#signin_button"这里记到范围的意思
广州-尚方轩(190848285)  2:30:08 PM
就是在id为signin_button元素下面查找
这样用的意思是，不用到整个body里找span .ui-btn-text元素


配置页面
    校验按钮
		<a onclick="signin();" href="#" data-icon="plus" class="ui-btn-right">签到</a>

1. html 5 GPS改为Java GPS
    加一个刷新按钮
  -> JavaScript -> 调用Java -> 取得结果 -> 调用 JavaScript -> 检查数据 -> 更新数据
2. 签到
   加一个签到按钮
  -> JavaScript -> 调用Java -> 检查数据 -> 更新数据
1. 签到还是有问题，数据没有进数据库，网页没有显示出来
  服务器地址 端口
 是否自动上传位置
页面导航　- bug 修正：JQM pageshow事件触发有点晚了 - 页面完全显示正常后才出发该事件
Push 中文乱码
 	exlive web UI:POST数据到tomcat 中文 %E4%B8%AD%E6%96%87
    tomcat filter取数据 正确取到
         推送数据为 ASCII格式的经过base 64转码的中文(UTF8)
 	base64界面的javascript库：
 		不好 https://github.com/dankogai/js-base64/
 		好 http://www.webtoolkit.info/javascript-base64.html
 		中文 的base64编码：5Lit5paH
 		<html>的base64编码：PGh0bWw+
    在线base64工具：http://maclife.net/tools/base64/
    	http://www.mxcz.net/
 手机程序接收数据
  ok 	接收数据 参考：https://developer.blackberry.com/html5/api/blackberry.push.html#.openBESPushListener
home 不能用的模块 用灰色字体
	使用一个新的css style ..icon-label-disable 
9900 字体大小设置 缺省字体太大
修改 index.html <meta name="viewport" content="width=device-width,target-densitydpi=device-dpi,user-scalable=no,initial-scale=1.0">﻿
  参考：http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/9900-9930-display-issues/td-p/1285017
  http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/WebWorks-Content-Rendering-on-High-Resolution-Devices/ta-p/1344439
Jquery mobile图片问题
  下载zip 包 
  ZIP File:
	If you want to host the files yourself you can download 
	a zip of all the files:
	Zip File: jquery.mobile-1.2.0.zip (JavaScript, CSS, and images)
    http://jquerymobile.com/download/
    
	<link rel="stylesheet" href="jqm/jquery.mobile-1.2.0.min.css" /> 
	<script type="text/javascript" src="jqm/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="jqm/jquery.mobile-1.2.0.js"></script>

	<link rel="stylesheet" href="jqm/jquery.mobile-1.1.1.min.css" /> 
	<script type="text/javascript" src="jqm/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="jqm/jquery.mobile-1.1.1.min.js"></script>
home  黑莓返回键提示
程序升级后，由于存储对象定义变化
	try	{
	  mysettings_theme_retrieve();
	} catch(err) {
		mysettings_theme_reset();
	}
JavaScript突然不能工作了
	firefox调试工具，检查javascript  
程序启动 背景色或者
  Webworks weather config.xml
  jqm http://blog.csdn.net/lgd5979/article/details/7018256
  loading图片要做透明化处理
程序版本：config.xml version="1.0.1" rim:backButton="exit">
  jad下载描述信息：	<description>1.0.1: theme feature, page transition, application loading screen; 1.0.0 GPS position, map, push listener. </description>
  	暂时不能用中文
条码扫描：
	点击图片扫描img click事件被JQM屏蔽掉了，或者在手机上和ontouch事件是不同的，要处理一下
		http://forums.asp.net/t/1576674.aspx/1
设置主题一种方法：需要在home page里面调用javascript设置
  $('#mylocation').attr("data-theme", theme);
  $('#mysettings').attr("data-theme", theme);
  $('#mysettings_account').attr("data-theme", theme);
  $('#mysettings_theme').attr("data-theme", theme);
  $('#mysettings_alert').attr("data-theme", theme);
  $('#mysettings_network').attr("data-theme", theme);
首页 9930
  问题：动态设置theme后，content和footer之间留白
  这个是由于你的content高度不够
  JQM不会帮你把content自适应到设备，我以前也遇到过这种问题
  style="height:900px;"
  style="background : #000;"
  { background : #000; }
   思路：content高度设置为 屏幕高度 - header - footer
 土鳖一下：9930设置所有的content高度为343px，修改index.html里面所有的
 	<div data-role="content" style="height : 340px;" >
 	地图宽度 workforce.js 	var gMapSize = "620x340";  
  参考：
  http://stackoverflow.com/questions/8929786/jquery-mobile-page-height
  http://forum.jquery.com/topic/jquery-mobile-white-area-when-changing-orientation
=========================================================
完成：
调整图片大小：9900，9850
	javascript根据浏览器动态导入css  
条码扫描
	closePlayer(); //Jiang Yang
设置应用图标 - GPSDemo的图标
修改为WebWorks程序
下载最新的WebWorks SDK, Ripple, JDK 1.6 32bit
Webworks 真机开发测试
         参考：http://blog.csdn.net/berryreload/article/details/7200410
cancel key的处理
   使用WebWorks JavaScript监控，注意config.xml中的access字段的写法
  例子config.xml
  Sample configuration documents
  https://developer.blackberry.com/html5/documentation/code_sample_creating_a_bb_widget_config_document_834683_11.html
   
  
横屏处理，修改WebWorks SDK代码
我的位置 显示Google图片
重新定位按钮
禁止主页的放大缩小功能：加一个fixed footer  <div data-role="footer" data-position="fixed">
html 5定位不准确，使用BlackBerry WebWorks API定位
首页图标 替换为 exlive android应用图标：  位置 信箱  日志, 拍照 签到 设置 添加客户 添加标注 退出
配置界面
    服务器地址 用户名 口令 保存 提取
 reset按钮,状态条 提示保存成功
GLOBAL 对象 比如当前page名称
页面导航　- bug 修正：9850手机上，在二级页面中，当有输入方法屏幕弹出的时候, 按黑莓返回键会直接引发blackberry.app.event.onExit事件，造成应用退出。
		原因：原型是在js中使用 
		1）mypage = $.mobile.activePage.attr('id');
		2）function fn_HandleExit() {
	if (gStrActivePage == 'home') {	
		fn_HandleBackKey();
		return;
	}  //解决bug：9850手机上，在二级页面中，当有输入方法屏幕弹出的时候, 按黑莓返回键会直接引发blackberry.app.event.onExit事件，造成应用退出。
禁用 黑莓菜单close/关闭，禁用黑莓返回键。请使用程序界面中最下面的 退出 按钮。
    blackberry.app.event.onExit(fn_HandleExit); 事件处理方法中屏蔽了黑莓菜单“关闭”和  黑莓返回键。		    
WebWorks 在未激活,纯wifi环境下面不能访问网络内容？
	好像不能 - 待以后详细测试
html/javascript纠错：
	firefox + firebug	
WebWorks 在纯wifi + BES环境下面不能访问网络内容？
	可以, 走BES通道慢
WebWorks 在纯BES环境下面不能访问网络内容？
           可以, 走BES通道慢
 数据内容：维修单xml
	 现成的服务器推送 数据(web页面 UI)
服务器推送Java代码	 
注入代码：C:\exlive\gserver\tomcat-6.0.18\webapps\pgps\WEB-INF\classes\cn\exlive\pgps
		\sendcmd\action>jad SendcmdAction.class
   	考虑用servlet filter来做
自动启动WebWorks app
 	confifig.xml 
 	<!-- one foreground app, one background app -->
  	<content src="http://shanghai.springworks.info/ota/mobileworkforce/www/index.html">
  		<rim:background src="http://shanghai.springworks.info/ota/mobileworkforce/www/listener.html"  runOnStartup="true" />
  	</content>
    	注意：开发环境中，该html只能放在本地，不能放在web服务器上
   	https://developer.blackberry.com/html5/documentation/rim_background_element_1265316_11.html
页面切换效果 
    $.mobile.changePage('#mysettings', { transition: "slide", reverse: true});
radio button bug:
	1）在页面显示之前设置
	$('input:radio[name="choice_alert_msg"]').get(0).checked = true;
动态theme设置：
	$('#mylocation').attr("data-theme", theme);
	只能设置一次，再次设置不生效；建议设置后重新启动应用。	    
网络连接设置<rim:connection timeout="30000">
  http://stackoverflow.com/questions/5934397/help-needed-for-getting-the-blackberry-webworks-push-demo-to-work-with-urban-air
  <rim:connection timeout="25000">
    <id>TCP_WIFI</id>
    <id>MDS</id>
    <id>BIS-B</id>
    <id>TCP_CELLULAR</id>
    <id>WAP2</id>
    <id>WAP</id>
  </rim:connection>
意见反馈：自动取得手机型号，版本号，应用版本号，时间，发邮件给jiyang@rim.com
主题在JQuery Mobile初始化的时候做全局设置
	 $(document).bind('mobileinit', function(){ 中设置
webworks使用 blackberry.ext.system.log 扩展
	修改一下 
		EventLogger.logEvent(myGuid, logMessage, EventLogger.ALWAYS_LOG);	//Jiang changed	 
后台程序 完成作业后收message
	扩展：blackberry.system.log
	  PhoneGapExtension.getBrowserField().getScriptEngine();
	call back browser on javascript: scriptEngine.executeCompiledScript
检查地图位置，每30秒更新地图
	setInterval(checkGPSLocationToUpdateMap, gCheckGPSLocationToUpdateMapInterval);
				方法							时间间隔
bb7/bb10屏幕一直亮？
	手机上面安装一个bblight应用
 检查地图位置
  	如果有GPS信息（实际是1分钟内的），那么进入mylocation界面时候 ，直接load GPS地图
  	如果有GPS信息（实际是1分钟内的），位置和上次位置没有变化，不做操作
		if (gGPSLocation != gLastDisplayedGPSLocation) {
					gLastDisplayedGPSLocation = gGPSLocation;  		
=========================================================
TODO
jquery在线测试 ！！ 非常好的调试工具
http://jsfiddle.net/dH69J/2/

jquery mobile change dynamically footer on multipage
	http://stackoverflow.com/questions/10072865/jquery-mobile-change-dynamically-footer-on-multipage

Jquery 获得设置字段的值
http://www.electrictoolbox.com/jquery-get-set-form-values/

Jquery 设置字段的值 radio
http://www.mkyong.com/jquery/how-to-select-a-radio-button-with-jquery/

browserfield2 network error handing
	http://dev.tuyennguyen.ca/wp-content/uploads/2011/02/DEV49.pdf
	http://supportforums.blackberry.com/t5/Java-Development/BrowserField-Sample-Code-Using-the-BrowserFieldListener-class/ta-p/496213

=========================================================
tips

BlackBerry WebWorks tips
http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712

WebWorks API reference
https://developer.blackberry.com/html5/api/
WebWorks API documentation
https://developer.blackberry.com/html5/documentation/

html 特殊字符
http://www.w3school.com.cn/js/js_special_characters.asp
===========================
WebWorks back/escape button处理
https://developer.blackberry.com/html5/apis/blackberry.system.event.html
http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Back-button-in-BB-OS-5/m-p/1611047
http://stackoverflow.com/questions/9109891/inconsistent-behavior-of-the-blackberry-hardware-back-button-on-phonegap-jquerym
下面的代码也可以工作，fyi
		window.onload=trapForBackKey;
		
		$(document).ready(function() {
			//alert("ready a1");
		});
===========================
How to disable landscape orientation in Blackberry WebWorks application
http://www.mindfiresolutions.com/How-to-disable-landscape-orientation-in-Blackberry-WebWorks-application-1930.php
add 
 
   int directions = net.rim.device.api.system.Display.DIRECTION_NORTH;
   net.rim.device.api.ui.Ui.getUiEngineInstance().setAcceptableDirections(directions);
 
   after 
 
    public Widget( WidgetConfig wConfig, String locationURI ) {
        _wConfig = wConfig;
        initialize();
        _locationURI = locationURI;
 
in Widget.java which is generally located at C:\Program Files\Research In Motion\BlackBerry WebWorks Packager\device_templates\blackberry\web\widget directory.
===========================
Building a jQuery Mobile Application with the PlayBook WebWorks SDK
http://blog.digitalbackcountry.com/2011/03/building-a-jquery-mobile-application-with-the-playbook-webworks-sdk/

google maps v3集成
http://stackoverflow.com/questions/5208583/displaying-a-google-map-in-a-blackberry-webworks-application

=========================================================
Static Maps API V2 Developer Guide
 静态图片API
key要申请
https://developers.google.com/maps/documentation/staticmaps/#api_key

API说明
https://developers.google.com/maps/documentation/staticmaps/#api_key

测试：
NY
http://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=290x360&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&sensor=false
上海市
http://maps.googleapis.com/maps/api/staticmap?center=Shanghai+Hai,SH&zoom=13&size=290x360&key=AIzaSyBP24UOltpPGbNYDa-sS7YXKEvkxuPHfNs&sensor=false
   

我的家
31.229465,121.430050
https://maps.googleapis.com/maps/api/staticmap?center=31.229465,121.430050&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C31.229465,121.430050&markers=color:red%7Clabel:C%7C31.229465,121.430050&sensor=false
外滩 the bund
31.241462,121.490893
崇明岛
31.38047,121.72112
https://maps.googleapis.com/maps/api/staticmap?center=31.38047,121.72112&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C31.38047,121.72112&markers=color:red%7Clabel:C%7C31.38047,121.72112&sensor=false
=========================================================
Using HTML5 Geolocation in your Web or BlackBerry WebWorks applications
http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Using-HTML5-Geolocation-in-your-Web-or-BlackBerry-WebWorks/ta-p/630406

 BlackBerry WebWorks API GPS定位例子程序
https://github.com/blackberry/WebWorks-Samples/blob/master/kitchenSink/html/browser/gps.html
=========================================================
Storing Objects in HTML5 localStorage
http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage


JSON 学习
http://wangcheng.iteye.com/blog/71343
=========================================================
GPS    ----------->msg(GPS change)
UI     ----------->msg(CFG change)

Exlive
UI     ------------>msg(CFG change)  
	read/write ---->DATA


每次LINK前重新建立网络连接吗？
	尽量复用UDP连接30秒LINK一次
UDP连接：每次连接后关闭，还是保持连接？
	保持
=========================================================
	