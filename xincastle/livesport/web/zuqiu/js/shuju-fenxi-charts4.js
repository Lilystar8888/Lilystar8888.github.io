$(function(){var d=function(){$("#columnsNav li").sort(function(a,f){return $($(a).find("a").attr("href")).index()-$($(f).find("a").attr("href")).index()}).appendTo($("#columnsNav"));var a=$("#columns").children().map(function(){return($(this).is(":visible")?1:-1)*$(this).data("index")});$.cookie("columns",a.get().join(","),{expires:3})};$("#columns").sortable({stop:function(){d()},scrollSensitivity:10,delay:150,axis:"y",distance:10,handle:".title-box",create:function(a,c){$("#columns .content-wrap .close").click(function(){var a=
$(this).parents(".content-wrap"),b=a.index();$(".tool-box ul li").eq(b).addClass("disabled");a.hide();d()});$(".tool-box ul li").click(function(){var a=$(this).index();$(this).hasClass("disabled")&&($(this).removeClass("disabled"),$(".shuju-main-content .content-wrap").eq(a).show());d()})}});$(".title-box").on("click",".go-up",function(){var a=$(this).parents(".content-wrap");0<a.prev().size()&&(a.prev().before(a),d())});$(".title-box").on("click",".go-down",function(){var a=$(this).parents(".content-wrap");
0<a.next().size()&&(a.next().after(a),d())});$("#recent-saiguo-vsl, #recent-panlu-vsl, #recent-daxiao-vsl, #recent-danshuang-vsl, #recent-saiguo-vsr, #recent-panlu-vsr, #recent-daxiao-vsr, #recent-danshuang-vsr").each(function(){var a=$(this).data("percent"),c=$(this).data("team");$(this).highcharts({chart:{type:"pie",width:280,height:280,backgroundColor:"rgba(255, 255, 255, 0.0)"},title:null,colors:["rgb(241,92,128)","rgb(124,181,236)","rgb(144,237,125)"],credits:{enabled:!1},exporting:{enabled:!1},
plotOptions:{pie:{size:200,allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,distance:4,style:{color:"#333",fontFamily:"Helvetica Neue, Microsoft YaHei, Helvetica, Tahoma, sans-serif",fontSize:"12px",fontWeight:"500"},formatter:function(){return Highcharts.numberFormat(this.percentage,1)+"%"}},startAngle:-90,endAngle:90,center:["50%","75%"],showInLegend:!0}},legend:{align:"left",verticalAlign:"bottom",x:0,y:0,labelFormatter:function(){return this.name+" "+Highcharts.numberFormat(this.y,
0,",")+"\u573a"}},series:[{type:"pie",innerSize:"50%",name:c,data:a}]})});$(".recent-score").each(function(){var a=eval($(this).data("score")),c=function(a){for(var b=[],e=0;e<a.length;e++){var c=a[e][0][0]-a[e][0][1];0>c?b.push(1):0==c?b.push(2):0<c&&b.push(3)}return b}(a),f=$(this).data("label");$(this).highcharts({chart:{type:"area",marginTop:70,marginBottom:60,height:260,backgroundColor:"#fff"},title:null,subtitle:{text:f,y:220,align:"left",x:10,style:{fontSize:"14px",fontWeight:"bolder"}},legend:{enabled:!1},
credits:{enabled:!1},exporting:{enabled:!1},xAxis:{allowDecimals:!1,tickInterval:1,labels:{enabled:!1},tickLength:0},yAxis:{title:{text:null},minRange:1,maxRange:1,max:3,tickInterval:1,labels:{useHTML:!0,formatter:function(){var a="";switch(this.value){case 1:a='<b style="color:#83cb00">\u8d1f</b>';break;case 2:a='<b style="color:#0180ff">\u5e73</b>';break;case 3:a='<b style="color:#de1e30">\u80dc</b>'}return a}}},tooltip:{useHTML:!0,headerFormat:"",style:{"text-align":"center"},pointFormatter:function(){var b=
a[this.index];return'<p">'+b[1][0]+" vs "+b[1][1]+'</p><p style="text-align: center">'+b[0][0]+":"+b[0][1]+"</p>"}},plotOptions:{area:{marker:{symbol:"circle",radius:5,states:{hover:{enabled:!0}}}}},series:[{name:"\u6bd4\u8d5b\u7ed3\u679c",data:c,marker:{fillColor:"white",lineWidth:2,lineColor:Highcharts.getOptions().colors[0]}}]})});$(".odds-chart").each(function(){var a=eval($(this).data("odds")),c=null,f=null;!function(a){for(var b=[],e=[],d=0;d<a.length;d++){var g=a[d];0>g?(b.push(1),e.push("\u8f93\u76d8")):
0==g?(b.push(2),e.push("\u8d70\u76d8")):0<g&&(b.push(3),e.push("\u8d62\u76d8"))}c=b;f=e}(a);$(this).highcharts({chart:{type:"area",marginTop:70,marginBottom:30,height:200,backgroundColor:"#fff"},title:null,legend:{enabled:!1},credits:{enabled:!1},exporting:{enabled:!1},xAxis:{allowDecimals:!1,tickInterval:1,labels:{enabled:!1},tickLength:0},yAxis:{title:{text:null},minRange:1,maxRange:1,max:3,tickInterval:1,labels:{useHTML:!0,formatter:function(){var a="";switch(this.value){case 1:a='<b style="color:#83cb00">\u8f93\u76d8</b>';
break;case 2:a='<b style="color:#0180ff">\u8d70\u76d8</b>';break;case 3:a='<b style="color:#de1e30">\u8d62\u76d8</b>'}return a}}},tooltip:{useHTML:!0,headerFormat:"",style:{"text-align":"center"},pointFormatter:function(){return f[this.index]}},plotOptions:{area:{marker:{symbol:"circle",radius:5,states:{hover:{enabled:!0}}}}},series:[{name:"\u76d8\u8def",data:c,marker:{fillColor:"white",lineWidth:2,lineColor:Highcharts.getOptions().colors[0]}}]})});$("tspan.highcharts-text-outline").css("fill","none");
$("tspan.highcharts-text-outline").css("stroke","none")});