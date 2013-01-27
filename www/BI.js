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

$('#page_BIDetail_bar').live('pageshow', function () {
	var canvas = document.getElementById('bar1');
	if (canvas.getContext){
		drawBar();
	}
});


<!-- end of scripts                    ************************ -->