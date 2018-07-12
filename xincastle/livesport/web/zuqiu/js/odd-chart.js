var OddChart=function(){function g(f,c,d){this.element=f;this.w=c;this.h=d}return g.prototype.draw=function(f){var c=this.w,d=this.h;this.element.width=c;this.element.height=d;c/=f.length;var b=this.element.getContext("2d");d={"-1":d/6*5,0:d/2,1:d/6};b.lineWidth=.1;b.strokeStyle="#ccc";for(var a in d)b.beginPath(),b.moveTo(0,d[a]),b.lineTo(this.element.width,d[a]),b.stroke();for(a=0;a<f.length;a++)b.beginPath(),b.moveTo(a*c+c/2,d[1]+10),b.lineTo(a*c+c/2,d[-1]-10),b.stroke();b.beginPath();b.lineJoin=
"round";b.lineWidth=1;b.strokeStyle="#666";b.moveTo(c/2,d[f[1]]);for(a=1;a<f.length;a++)b.lineTo(c/2+c*a,d[f[a]]);b.stroke()},g.prototype.stop=function(){},g}();
$(function(){function g(a,b,e,d){var c,f="<table>",g='<tr class="round"><td><span>\u8f6e\u6b21</span></td>',q="<tr><td>\u5bf9\u624b</td>",n="<tr><td>\u6bd4\u5206</td>",p="<tr><td>\u76d8\u8def</td>",r=[],k=0,l=0,m=0,h=0;1==e?c=function(a,c){var b,d=a[0]-a[1]-c;return.25<d?(b=1,k++):-.25>d?(b=-1,m++):(b=0,l++),b}:2==e&&(c=function(a,c){var b,d=a[0]+a[1]-c;return 0<d?(b=1,k++):-0>d?(b=-1,m++):(b=0,l++),b});for(e=0;e<a.period.length;e++)if("undefined"==typeof b||a.home[e]==b)(g+="<td><span>"+a.period[e]+
"</span></td>",q+="undefined"!=typeof d?'<td><span class="cutLen" title="'+a.team[e].name[d]+'">'+a.team[e].name[d]+"</span></td>":'<td><span class="cutLen" title="'+a.team[e].name[1]+'">'+a.team[e].name[1]+"</span></td>",0==a.score[e].length)?(n+="<td>-</td>",p+="<td></td>"):(n+="<td>"+a.score[e][0]+"-"+a.score[e][1]+"</td>",h=Number(a.handicap[e]),p+="<td>"+h+"</td>",h=c(a.score[e],h),r.push(h));h=k+l+m;g+="</tr>";q+="</tr>";n+="</tr>";p+="</tr>";$("#odd-summary").empty().append("<li>\u76d8\u8def\u8d70\u52bf\u56fe</li><li>\u8d62\u76d8"+
k+"\u6b21</li><li>\u8d70\u76d8"+l+"\u6b21</li><li>\u8f93\u76d8"+m+"\u6b21</li><li>\u8d62\u76d8\u7387"+(k/h*100).toFixed(2)+"%</li><li>\u8d70\u76d8\u7387"+(l/h*100).toFixed(2)+"%</li><li>\u8f93\u76d8\u7387"+(m/h*100).toFixed(2)+"%</li>");f=f+g+q+n+p+'<tr><td><span class="odd-win">\u8d62\u76d8</span></td><td id="oddchart"  colspan="'+h+'" rowspan="3"></td></tr><tr><td><span class="odd-draw"></span>\u8d70\u6c34</td></tr><tr><td><span class="odd-lose">\u8f93\u76d8</span></td></tr></table>';$("#panlu-chart-table").empty().append($(f));
a=$("#oddchart").get(0);b=a.clientWidth;d=a.clientHeight;window.HTMLCanvasElement?(c=document.createElement("canvas"),c.style.width="100%",c.style.height="100%",a.appendChild(c),a.firstChild&&a.removeChild(a.firstChild),a.appendChild(c),(new OddChart(c,b,d)).draw(r)):(c=document.createElement("img"),c.src="/db/oddChart?w="+b+"&h="+d+"&data="+r.join(","),a.appendChild(c))}function f(a,b,c,d){$.ajax({url:"/api/teamscore/?tid="+a+"&stid="+b+"&ot="+c,dataType:"jsonp",success:function(a){window.oddData=
a;g(a,d,c)}})}var c=$("#panlu-chart").data("ot");$("#home-tab li").click(function(){g(oddData,$(this).data("home"),c)});$("#team-seleter li").click(function(){var a=$(this).data("tid"),b=$(this).data("stid"),d=$("#panlu-chart").data("tid"),g=$("#panlu-chart").data("stid");d==a&&b==g||f(a,b,c,$("#home-tab li.active").data("home"))});var d=$("#panlu-chart").data("tid"),b=$("#panlu-chart").data("stid");f(d,b,c)});