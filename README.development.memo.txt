Q: 列表
Q: 列表滚动
Q:support both BB10, iPad, iTouch, Android

Q: 九宫格 触摸图标的反应
   m.google.com的栏目touch/hover后，会有个按下去的效果 - 文字变色
  
Q: home screen could scroll on BB 10
  底部有留白，20像素
  my.style.blackberry.webkit.scroll.css
  参考: http://blog.csdn.net/berryreload/article/details/7198038

Q: Damon 首页阻尼滚动效果  

Q: 缺省的右侧闪出menu 选择/复制链接什么的要去掉
=================================================================================
Q: footer 返回 ，黑莓样式
 显示英文Back，国际化如何做？ 中文应该显示 上一步
https://github.com/blackberry/jQueryMobile-BB10-Theme/blob/master/docs/README.md

		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.css" />
		<link rel="stylesheet" href="../dist/latest/BlackBerry-JQM.css" />
		<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script> 
		    $(document).bind("mobileinit", function() {
		        $.mobile.page.prototype.options.backBtnText = "后退";
		    });
		</script>
		<script src="../dist/latest/BlackBerry-JQM-Init.js"></script>
		<script src="http://code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.js"></script>
		<script src="../dist/latest/BlackBerry-JQM.js" type="text/javascript"></script>
		<script>
	        var meta = document.createElement("meta");
	        meta.setAttribute('name','viewport');
	        meta.setAttribute('content','initial-scale='+ (1/window.devicePixelRatio) + ',user-scalable=no');
	        document.getElementsByTagName('head')[0].appendChild(meta);
   		</script>


=================================================================================
Q: footer 返回 ，黑莓样式
 显示英文 Back
		<div data-role="footer" data-position="fixed">
				<div id="action-bar-area" data-role="actionbar">
					<div data-role="back"></div>
				</div>
		</div>
=================================================================================
Q: JQM Graph支持
charts API参考：http://www.rgraph.net/docs/charts-index.html
JQM 页面注意<canvas id="bar1"
		<script src="assets/web/js/RGraph.common.core.js" ></script>
    	<script src="assets/web/js/RGraph.common.annotate.js" ></script>
    	<script src="assets/web/js/libraries/RGraph.common.context.js" ></script>
	    <script src="assets/web/js/RGraph.common.tooltips.js" ></script>
    	<script src="assets/web/js/RGraph.common.resizing.js" ></script>
    	<script src="assets/web/js/RGraph.bar.js" ></script>
    	
<div style="width: 450px; float: left">
            		<canvas id="bar1" width="590" height="440">[No canvas support]</canvas>
                </div>
脚本：

<!-- begin of scripts                  ************************ -->
function drawBar1 (){
    var bar = new RGraph.Bar('bar1', [140, 150, 160, 150, 120, 150, 160, 140, 120, 160]);
    bar.Set('chart.background.barcolor1', 'white');
    bar.Set('chart.background.barcolor2', 'white');
    bar.Set('chart.title', '二季度销售情况');
    bar.Set('chart.title.vpos', 0.6);
    bar.Set('chart.labels', ['张清', '刘明辉', '刘大勇','林城','顾小红', '方天', '韩刊', '泰永民', '蔡红', '邓建']);
    bar.Set('chart.text.angle', 45);
    bar.Set('chart.gutter', 35);
    bar.Set('chart.shadow', true);
    bar.Set('chart.shadow.blur', 15);
    bar.Set('chart.shadow.color', '#ffa0a0');
    bar.Set('chart.shadow.offsetx', 0);
    bar.Set('chart.shadow.offsety', 0);
    bar.Set('chart.colors', ['#FF6060']);
    bar.Set('chart.key.position', 'gutter');
    bar.Set('chart.text.size', 10);
    bar.Set('chart.text.font', 'Georgia');
    bar.Set('chart.text.angle', 45);
    bar.Set('chart.grouping', 'stacked');
    bar.Set('chart.highlight.stroke', 'red');
    bar.Set('chart.highlight.fill', 'rgba(255,255,255,0.2)');
	bar.Draw();
}

$('#page_bar').live('pageshow', function () {
	var canvas = document.getElementById('bar1');
	if (canvas.getContext){
		drawBar1();
	}
});


<!-- end of scripts                    ************************ -->              
=================================================================================
title 区域设置背景图片
花费了一个小时，原来是data-theme="a"不行，因为BlackBerry theme定义的a theme背景是黑色的！覆盖了图片。
  b 字体白色，不用。c显示不出图片，也不行。
  d e 可以。
 part 1:
			<div data-role="header" data-theme="d">
				<h1>BB10商务演示应用</h1>
			</div>
 part 2:
 .ui-header
{
height : 110px; 	
background: url(assets/images/top.png) no-repeat;
background-size:100% 100%;
text-align: center;
}

=================================================================================
Q: home screen should not scroll on BB 10
A: .ui-header height + .content-springboard height = 1260 < 1280

Reference:
BlackBerry® 10 Dev Alpha Device has a resolution of 1280 by 768 pixels - 355 pixels per inch (ppi). 
The BlackBerry® PlayBook™ on the other hand has a resolution of 1024 by 600 with 169 ppi. 
http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-to-set-up-the-viewport-for-a-BlackBerry-WebWorks-application/ta-p/1943807 

=================================================================================

JQM content的背景图片要缩放全部显示  background-size:100% 100%;
.content-springboard { height : 1180px ; background:url(assets/images/background.png) no-repeat;  background-size:100% 100%;}

=================================================================================
application icon
config.xml <icon src="assets/images/appiconread.png"/>

application title: i18n
<name>BBOA</name>
  <name xml:lang="zh">黑莓移动OA</name>

=================================================================================
regarding the viewport
	https://github.com/blackberry/jQueryMobile-BB10-Theme/blob/master/docs/README.md
How to set up the viewport for a BlackBerry WebWorks application for BlackBerry 10
	http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-to-set-up-the-viewport-for-a-BlackBerry-WebWorks-application/ta-p/1943807
code snip:
		<link rel="stylesheet" href="BlackBerry-JQM-all.min.css" />
		<script src="BlackBerry-JQM-all.min.js"></script>
		<script>
	        var meta = document.createElement("meta");
	        meta.setAttribute('name','viewport');
	        meta.setAttribute('content','initial-scale='+ (1/window.devicePixelRatio) + ',user-scalable=no');
	        document.getElementsByTagName('head')[0].appendChild(meta);
   		</script>
=================================================================================
Q: screen dark too offen, inconvinient for my development testing
BB 10 系统设置 -> 显示屏  -> 高级 -> 屏幕锁定 
  修改 30秒 为 5分钟

=================================================================================
Test in Aptana Studio with built-in web server and chrome browser
good: new cache as Ripple
  Aptana Studio Project -> Run As -> Run Configurations -> Web Browser -> Firefox Internal Server
  C:\Users\jiyang\AppData\Local\Google\Chrome\Application\chrome.exe
  /BBOA/index.html
  
  http://127.0.0.1:8020/BBOA/index.html
=================================================================================
Test in Ripple
bad:  page cache :(
  create BBOA directory in C:/Users/jiyang/RippleSites
  Aptana Studio Project -> right mouse menu -> Publish -> Upload
  	to C:/Users/jiyang/RippleSites/BBOA
  Chrome browser url:   http://localhost:9910/BBOA/index.html
=================================================================================

Compile on Macbook using Ripple plugin for Chrome browser
SDK Home
  /Developer/SDKs/Research In Motion/BlackBerry 10 WebWorks SDK 1.0.4.5
Project Root
  /Users/kk/RippleSites/BBOA
Archive Name
  BBOA
Output Folder
  /Users/kk/out
Bundle Number
  63

=================================================================================
Compile on Windows using Ripple plugin for Chrome browser
SDK Home
  C:\RIM\BlackBerry 10 WebWorks SDK 1.0.4.5
Project Root
  C:\BACKUP\workspaces.dev.bb10.html5\BBOA
Archive Name
  BBOA
Output Folder
  c:\temp\out
Bundle Number
  63
=================================================================================

