<!-- begin of scripts                  ************************ -->
function drawBar (){
	var canvas = document.getElementById('bar1');
	var context = canvas.getContext('2d');
	
	var bar2 = new RGraph.Bar('bar1', [140, 150, 160, 150, 120, 150, 160, 140, 120, 160]);
	
    bar2.Set('chart.background.barcolor1', 'white');
    bar2.Set('chart.background.barcolor2', 'white');
    bar2.Set('chart.title', '二季度销售情况');
    bar2.Set('chart.title.vpos', 0.6);
    bar2.Set('chart.labels', ['张清', '刘明辉', '刘大勇','林城','顾小红', '方天', '韩刊', '泰永民', '蔡红', '邓建']);
    bar2.Set('chart.text.angle', 45);
    bar2.Set('chart.gutter', 35);
    bar2.Set('chart.shadow', true);
    bar2.Set('chart.shadow.blur', 15);
    bar2.Set('chart.shadow.color', '#ffa0a0');
    bar2.Set('chart.shadow.offsetx', 0);
    bar2.Set('chart.shadow.offsety', 0);
    bar2.Set('chart.colors', ['#FF6060']);
    bar2.Set('chart.key.position', 'gutter');
    bar2.Set('chart.text.size', 20);
    bar2.Set('chart.text.font', 'Georgia');
    bar2.Set('chart.text.angle', 45);
    bar2.Set('chart.grouping', 'stacked');
    bar2.Set('chart.highlight.stroke', 'red');
    bar2.Set('chart.highlight.fill', 'rgba(255,255,255,0.2)');
    
    if (!RGraph.isIE8()) {
        bar2.Set('chart.tooltips', ['张清', '刘明辉', '刘大勇','林城','顾小红', '方天', '韩刊', '泰永民', '蔡红', '邓建']);
            }
    bar2.Draw();
}

function drawLine (){
	var canvas = document.getElementById('line1');
	var context = canvas.getContext('2d');
	
    var scatter9 = new RGraph.Scatter('line1',
                                                  [[25,24], [55,25], [85,27],[115,31], [145,39],[175,39], [205,32],[235,26], [265,25],[295,22], [315,29], [345,39]],
                                                  [[25,21], [55,22], [85,24],[115,34], [145,35],[175,33], [205,31],[235,22], [265,20],[295,21], [315,28], [345,35]]);
    scatter9.Set('chart.title', '2010,2009业务完成情况');
    scatter9.Set('chart.labels', ['Q1', 'Q2', 'Q3', 'Q4']);
    scatter9.Set('chart.xmax', 365);
    scatter9.Set('chart.ymax', 50);
    scatter9.Set('chart.line', true);
    scatter9.Set('chart.line.stepped', [false, false]);
    scatter9.Set('chart.line.linewidth', [2,2]);
    scatter9.Set('chart.line.colors', ['red', 'blue']);
    scatter9.Set('chart.ticksize', 5);
    scatter9.Set('chart.key', ['2010', '2009']);
    scatter9.Set('chart.key.position', 'gutter');
    scatter9.Set('chart.key.position.y', scatter9.canvas.height - scatter9.Get('chart.gutter') - 20);
    scatter9.Set('chart.text.size', 20);
    scatter9.Set('chart.text.font', 'Georgia');
    scatter9.Set('chart.text.angle', 45);
    
    scatter9.Draw();
}

function drawPie (){
	var canvas = document.getElementById('pie1');
	var context = canvas.getContext('2d');
	
    var pie2 = new RGraph.Pie('pie1', [2,29,45,17,7]); // Create the pie object
    pie2.Set('chart.gutter', 45);
    pie2.Set('chart.title', "客户发展情况");
    pie2.Set('chart.linewidth', 1);
    pie2.Set('chart.strokestyle', '#333');
    pie2.Set('chart.shadow', true);
    pie2.Set('chart.shadow.blur', 3);
    pie2.Set('chart.shadow.offsetx', 3);
    pie2.Set('chart.shadow.offsety', 3);
    pie2.Set('chart.shadow.color', 'rgba(0,0,0,0.5)');
    pie2.Set('chart.colors', ['red', 'pink', '#6f6', 'blue', 'yellow']);
    //pie2.Set('chart.contextmenu', [['Clear', function () {RGraph.Clear(pie2.canvas); pie2.Draw();}]]);
    pie2.Set('chart.key', ['王浩 (2%)', '石天超 (29%)', '刘飞 (45%)', '马建业 (17%)', '方立夫 (7%)']);
    pie2.Set('chart.key.background', 'white');
    pie2.Set('chart.key.shadow', true);
    pie2.Set('chart.annotatable', true);
    pie2.Set('chart.align', 'left');
	pie2.Set('chart.text.size', 20);
    pie2.Set('chart.text.font', 'Georgia');
    pie2.Set('chart.text.angle', 45);
    pie2.Draw();
}

$('#page_BIDetail_bar').live('pageshow', function () {
	var canvas = document.getElementById('bar1');
	if (canvas.getContext){
		drawBar();
	}
});

$('#page_BIDetail_line').live('pageshow', function () {
	var canvas = document.getElementById('line1');
	if (canvas.getContext){
		drawLine();
	}
});

$('#page_BIDetail_pie').live('pageshow', function () {
	var canvas = document.getElementById('pie1');
	if (canvas.getContext){
		drawPie();
	}
});

<!-- end of scripts                    ************************ -->