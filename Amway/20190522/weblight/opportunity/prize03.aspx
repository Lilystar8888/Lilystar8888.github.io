<%@ Page Title="" Language="C#" MasterPageFile="~/PublicSite.Master" AutoEventWireup="true"
    CodeBehind="prize01.aspx.cs" Inherits="Amway.Taiwan.Web.AmwayASP4.weblight.opportunity.prize01" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="amway taiwan official amway taiwan site amway.com.tw Amway Taiwan Official Amway Taiwan Site Amway.com.tw AMWAY TAIWAN">
    <meta name="description" content="Amway Taiwan - Official Amway Taiwan Site at Amway.com.tw. Amway Taiwan is part of the Amway Global Community, the official Taiwan Affiliate of Amway, the global leader in multilevel marketing.  Visit Amway Taiwan at www.Amway.com.tw.">
    <title>安麗台灣全球資訊網 - 獎勵制度</title>
    <link href="css/indexcss.css" rel="stylesheet" type="text/css" />
    <link href="css/all.css" rel="stylesheet" type="text/css" />
   
     
    <script src="../../include/functions.js" type="text/javascript"></script>
      <!-- 手機版網頁
================================================== -->
<script type="text/javascript">
/*
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
{
    window.location = 'https://www.amway.com.tw/wwwmobile/bo/prize01.aspx';
}

if(navigator.userAgent.match(/Android/i))
{
    window.location = 'https://www.amway.com.tw/wwwmobile/bo/prize01.aspx';
} 
*/
</script> 


    <style type="text/css">
<!--
body {
	margin-top: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	margin-right: 0px;
}


.sub1{
	color:#3a83dc;
	font-size:13px;
	font-family:Arial;
	font-weight: bold;
}


.sub1 a:hover{
	text-decoration:none;
}


.tablebg2{
	height: 30px;
	font-weight: bold;
	/*background-color: #ffffff;*/
	background-image: url(file:///V|/Amwaywww/weblight/images/images/tablebg.gif);
	background-repeat: repeat-x;
	background-position: bottom;
}


.tablebg3{ background-color:#89aecd;}

.txtStrong{font-weight:bold;}
.txtWhite{color:#ffffff;}
.txtGray{color:#999999;}
.txtRed{color:#b00002;}
.fl{float:left;}
.lineD{border-bottom:1px dashed #999999; width:100%; height: 5px; margin-bottom:5px;}
.kk{color: #575EA6;}
-->
</style>

<!--slideup/down-->  
<style type="text/css">
#qaContent {
	width: 100%;
}
#qaContent h3 {
	width: 100%;
	
}



#qaContent DIV.accordionPart div .qa_title {
	
	cursor: pointer;
}
#qaContent DIV.accordionPart div .qa_title_on {
	text-decoration: none;
}
#qaContent DIV.accordionPart div .qa_content {

	
	
	
}
</style>

<!--slideup/down-->  
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
	$(function(){
		// 幫 div.qa_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.qa_content 隱藏起來
		$('#qaContent DIV.accordionPart div div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();

		$('#qaContent DIV.accordionPart div div.qa_content').hide();
	});
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <table width="960" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <img src="../images/top_opportunity.jpg" width="960" height="93" />
            </td>
        </tr>
        <tr>
            <td>
                <table width="960" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td width="19" valign="top">
                            <img src="../images/a_line3.jpg" width="19" height="550" />
                        </td>
                        <td width="206" valign="top">
                          <!-- #Include virtual="inc/menu.html" -->
                        </td>
                        <td width="735" valign="top">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>&nbsp;
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="../images/o_tit3.jpg" width="735" height="213" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td height="25" background="../images/a_line2.jpg" style="background-position: center;
                                                    background-repeat: no-repeat; background-position: bottom;">
                                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="cg13">
                                                        <tr>
                                                            <td width="30">&nbsp;</td>
                                                            <td width="68" height="25" ><a href="prize01.aspx" class="b13">獎金制度</a></td>
                                                            <td width="20"></td>
                                                            <td width="68">
                                                                <a href="prize02.aspx" class="cg13">獎銜制度</a></td>
                                                            <td width="20"></td>
                                                            <td width="1" bgcolor="#CECDCD"></td>
                                                            <td width="98" align="center" background="../images/a_m.jpg" style="padding-top: 3px;background-repeat: repeat-x;">
                                                                <a href="prize03.aspx" class="cg13">獎金計算方式</a></td>
                                                            <td width="1" bgcolor="#CECDCD"></td>
                                                            <td width="20"></td>
                                                            <td width="98"><a target="_blank" href="https://www.amway.com.tw/AmwayASP4/coreplusincentive/index.html" class="cg13">核心加碼計畫</a></td>
                                                            <td width="20"></td>
                                                            <td width="68"><a href="https://www.amway.com.tw/AmwayASP4/incentivetrip/index.html" class="cg13">海外旅遊</a></td>
                                                            <td width="20"></td>
                                                            <td width="310"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center">&nbsp;
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="cg12">
                                                
                                                        <tr>
                                                          <td width="30">&nbsp;
                                                                
                                                          </td>
                                                          <td colspan="3" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">
   
  <tr>
    <td colspan="3"> <span class="txtStrong">生產力指數（PV/BV比值）</span><BR>
售貨額（B V）是業績獎金計算基準，而積分額（P V）則是用以計算每個月獎金百分比的數額；目前兩者之間的比率為 PV：BV
＝ 1：50。<br /><br />
為何需要積分額（P V）的換算比率
呢？因為隨著通貨膨脹、生活指數與市場需求等因素，安麗公司需要視情況調整產品價格與售貨額，以及售貨額跟積分額之間的比率；意即，浮動的因素會影響業績與獎金計算基準，因此需要以積分額
（PV）為業績獎金比的計算標準。</td>
    </tr>
  <tr>
    <td colspan="3" >&nbsp;</td>
    </tr>
  <tr>
    <td colspan="3" ><span class="txtStrong">安麗事業獎金分為下列三大類：</span></td>
    </tr>
    
     <tr>
       <td width="20" >1. </td>
       <td colspan="2" >月結（以月為單位結算的獎金）包括：</td>
     </tr>
    <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 業績獎金：6％~21％ 不等</td>
    </tr>
     <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 領導獎金：6％</td>
    </tr>
     <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 紅寶石獎金：2％</td>
    </tr>
     <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 明珠獎金：1％</td>
    </tr>
    
     <tr>
    <td width="20" >2. </td>
    <td colspan="2" >年結（以年為單位結算的獎金）</td>
    </tr>
    <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 翡翠獎金：0.25％</td>
    </tr>
     <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 鑽石獎金：0.25％</td>
    </tr>
     <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 執行專才鑽石獎金：0.25％</td>
    </tr>
     <tr>
    <td width="20" ></td>
    <td width="20" >●</td>
    <td > 單次獎金：從雙鑽石到創辦人皇冠大使等獎銜，可領取1,125,000元到5,250,000元不等的單次獎金。</td>
    </tr>
      <tr>
    <td width="20" ></td>
    <td width="20" valign="top" >●</td>
    <td > 成長獎勵辦法獎金。（此獎金為安麗公
司依循業務發展之需求所定期或不定期制定頒布之獨立的獎勵計畫，施行細則根據各年度公告）</td>
    </tr>
   
    <tr>
    <td colspan="3" >&nbsp;</td>
    </tr>
    <tr>
    <td colspan="3" ><span class="sub1">業績獎金</span></td>
    </tr>
     <tr>
    <td colspan="3" >》業績獎金表</td>
    </tr>
     <tr>
    <td colspan="3" >
    <table width="50%" border="0" cellpadding="1" cellspacing="1" bgcolor="#999999" class="g11">
                                                              <tr>
                                                                <td width="50%" bgcolor="#666666"><span class="txtWhite">&nbsp;如果您當月的積分額為：</span></td>
                                                                <td width="50%" bgcolor="#ebebeb">&nbsp;您的業績獎金則為：</td>
                                                              </tr>
                                                              <tr>
                                                                <td bgcolor="#FFFFFF">&nbsp;10,000或以上</td>
                                                                <td bgcolor="#FFFFFF">&nbsp;售貨額的21%</td>
                                                              </tr>
                                                              <tr>
                                                                <td bgcolor="#FFFFFF">&nbsp;7,000~9,999</td>
                                                                <td bgcolor="#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18%</td>
                                                              </tr>
                                                              <tr>
                                                                <td bgcolor="#FFFFFF">&nbsp;4,000~6,999</td>
                                                                <td bgcolor="#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15%</td>
                                                              </tr>
                                                              <tr>
                                                                <td bgcolor="#FFFFFF">&nbsp;2,000~3,999</td>
                                                                <td bgcolor="#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12%</td>
                                                              </tr>
                                                              <tr>
                                                                <td bgcolor="#FFFFFF">&nbsp;1,000~1,999</td>
                                                                <td bgcolor="#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9%</td>
                                                              </tr>
                                                              <tr>
                                                                <td bgcolor="#FFFFFF">&nbsp;500~999</td>
                                                                <td bgcolor="#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6%</td>
                                                              </tr>
                                                            </table>
    
    </td>
    </tr>
     <tr>
    <td colspan="3" ><span class="g11">＊台灣市場生產力指數（PV/BV比值）自2015年3月1日起調整為1:50。</span></td>
    </tr>
     <tr>
    <td colspan="3" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="3" >在你成為直系直銷商（DD）之前，主要收入為業績獎金；之後，隨著組織擴展與獎銜資格的提升，你開始可以領取各階段獎銜不同比例的獎金。<br /><br />
業績獎金的計算基準不僅根據直銷商自己的售貨額計算，同時也包括該名直銷商所推薦的下手直銷商所銷售的產品售貨額與推薦的下手會員消費的產品售貨額計算。<br /><br />
以下簡單範例，可以讓你在經營安麗事業之初，清楚獎金計算領取方式；若有疑問，可向上手領導人請教或是致電安麗公司客服組。</td>
    </tr>
     <tr>
    <td colspan="3" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="3" >範例設定說明：</td>
    </tr>
     <tr>
    <td colspan="2" width="20">一、 </td>
    <td >生產力指數（PV/BV比值）為1：50</td>
     </tr>
      <tr>
    <td colspan="2" width="20" >二、 </td>
    <td >因會員無法享有業績獎金之回饋，直接併入推薦直銷商的個人業績計算，
故範例中所有舉例皆以直銷商為主。</td>
     </tr>
     <tr>
    <td colspan="3" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="3" >業績獎金計算簡式：</td>
    </tr>
     <tr>
    <td colspan="3" >業績額×（售貨額／積分額比率）×業績獎金％
=（PV ×50）×業績獎金％
= BV×業績獎金％</td>
    </tr>
   
     <tr>
    <td colspan="3" >&nbsp;</td>
    </tr>
    
    

    
                </table>
                                                                
                                                          </td>
                                                          <td width="30">&nbsp;
                                                              
                                                          </td>
                                                        </tr>
                                                       
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><div id="qaContent">
	
	<DIV class="accordionPart">
		
		<div>
			<div class="qa_title">
<span class="txtGray">更多範例圖解說明 》</span>
                </div>
			<div class="qa_content">
				<table width="100%" border="0" cellpadding="1" cellspacing="1" class="tablew">
  
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 1</span></td>
    </tr>
     <tr>
    <td colspan="2">&nbsp;</td>
    </tr>
 
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><img class="fl" src="../images/menual/menual1.jpg" width="276" height="95" />你個人業績獎金<br />
0＋500＝500PV<br />
500PV×50×6％＝1500元</td>
    </tr>
     <tr>
    <td height="20" colspan="2"><div class="lineD"></div></td>
    </tr>
     <tr>
    <td colspan="2" ><img class="fl" src="../images/menual/menual2.jpg" /><br />你個人業績獎金<br />
500＋500×4＝2,500PV<br />
2,500PV×50×12％＝15,000元</td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 2</span></td>
    </tr>
     <tr>
    <td colspan="2" >1、2、3 整組小組業績皆為600PV，但是領取獎金的計算卻不同。</td>
    </tr>
     <tr>
    <td width="20" valign="top" >1）</td>
    <td ><img class="fl" src="../images/menual/menual3.jpg" /><br />
    你
600PV×50×6％＝1,800元</td>
     </tr>
      <tr>
    <td height="20" colspan="2" ><div class="lineD"></div></td>
    </tr>
       <tr>
    <td width="20" valign="top" >2）</td>
    <td ><p><img class="fl" src="../images/menual/menual4.jpg" /><br />
      500PV＋500PV＝1,000PV<br />
      1,000PV×50×9％　 <span class="kk">個人與小組獎金</span><br />
      －（500PV×50）× 6％　 <span class="kk">A 可領取的獎金</span><br />
      ＝3,000元　 <span class="kk">你可領取的獎金</span></p></td>
     </tr>
     <tr>
    <td height="20" colspan="2" ><div class="lineD"></div></td>
    </tr>
         <tr>
    <td width="20" valign="top" >3）</td>
    <td ><img class="fl" src="../images/menual/menual5.jpg" width="258" height="260" /><br />
      你可領取的獎金：<br />
1,500PV×50×9％－（A）500PV×50×6％<br />
－（B）500PV×50 ×6％＝3,750元</td>
     </tr>
     <tr>
    <td colspan="2" ><span class="txtRed">● 制度公平，多勞多得；你可領取個人努力的業績獎金與輔導下手的差額獎金。</span></td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 3</span></td>
    </tr>
    <tr>
    <td colspan="2" ><img class="fl" src="../images/menual/menual6.jpg" width="329" height="523" />
    <span>
    <br />
    D可領取的獎金： <br />
1,600＋600×7＝5,800PV <br />
5,800PV×50×15％－（600PV×50×6％）×7＝ <br />
43,500－12,600＝30,900元 <br /> <br />
A、B、C各自領取的獎金 <br />
1,600PV×50×9％＝7,200元 <br /> <br />
你可領取的獎金： <br />
500＋1,600×3（ABC）＋5,800（D整組）<br />
＝11,100PV <br /> <br />
11,100PV×50×21％ <br />
－1,600PV×50×9％×3<span class="kk">　ABC領取的獎金</span> <br />
－5,800PV×50×15％<span class="kk">　　D整組領取的獎金</span> <br />
＝116,550－21,600－43,500 <br />
＝51,450
    </span>
    </td>
    </tr>
    <tr>
    <td colspan="2" ><span class="txtRed">● 持續推薦直銷商、輔導直銷商，加深加廣的組織佈局，累計整體業績，將自己與下
手推向更高層次的事業階段。</span></td>
    </tr>
    <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
    <tr>
    <td colspan="2" ><span class="txtStrong">範例 4</span></td>
    </tr>
    <tr>
    <td colspan="2" ><img class="fl" src="images/menual/menual7.jpg" width="306" height="143" />
    <br />
    （A）10,000PV＝500,000BV<br />
你可領取的6％獎金為<br />
500,000×6％＝30,000元<br />
    </td>
    </tr>
    <tr>
    <td colspan="2" ><div class="lineD"></div></td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 5</span></td>
    </tr>
     <tr>
    <td colspan="2" ><p><img class="fl" src="../images/menual/menual8.jpg" width="283" height="261" />
      <br />
      （ABC）各10,000PV<br />
      10,000PV×50×6％×3＝90,000元
     </p>
      <p> （D）15,000PV<br />
        15,000PV×50×6％＝45,000元<br /><br />
        你可領取的6％領導獎金為<br />
        90,000＋45,000＝135,000元<br />
      </p>
    </td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtRed">● 輔導下手達成21％，協助越多人達成目標，就能獲得安麗公司越多的獎勵。但若要更上層樓，必須培育人才。</span></td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 6</span></td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtRed">● 安麗是倍增的事業。</span></td>
    </tr>
     <tr>
    <td colspan="2" ><img class="fl" src="../images/menual/menual9.jpg" width="336" height="816" />
    </td>
    </tr>
     <tr>
    <td height="20" colspan="2" ><div class="lineD"></div></td>
    </tr>
     <tr>
       <td colspan="2" >&nbsp;</td>
     </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 7</span></td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtRed">● 安麗是自己的事業，下線可以超越上線。</span></td>
    </tr>
     <tr>
       <td colspan="2" ><img class="fl" src="../images/menual/menual10.jpg" width="241" height="356" /> <br />
         整組獎金： <br />
         3,600PV × 50 × 12％ ＝ 21,600元 <br />
         <br />
         上線的獎金： <br />
         21,600－（2,700PV×50×12％）＝5,400元 <br />
         <br />
         你的獎金（ 10,800元）
         ＞ 上線獎金（5,400元）</td>
     </tr>
     <tr>
       <td colspan="2" ><div class="lineD"></div></td>
     </tr>
     <tr>
    <td colspan="2" ><p><img class="fl" src="../images/menual/menual11.jpg" width="304" height="369" />
      <br />
      整組獎金：<br />
      （0＋3,000＋3,000＋2,000＋2,000）PV
      ×50×21％＝105,000元<br /><br />
      A組獎金：<br />
      （3,000＋2,000＋2,000）PV×50×18％
      ＝63,000元</p>
      <p>        B組獎金：<br />
        3,000PV×50×12％＝18,000元</p>
      <p>        你的獎金：<br />
        整組獎金－（A組獎金＋B組獎金）
        ＝24,000元</p>
      <p>        A的獎金：<br />
        63,000－（2,000PV×2×50×12％）
        ＝39,000元<br /><br />
        A的獎金（39,000元）＞你的獎金（24,000元）</p></td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtRed">● 安麗是公平公開、多勞多得的事業，沒有業績壓力，能夠保障收入。</span></td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" >以上所舉的例子，只是安麗事業的開端而已。當你自己所推薦的直銷商也達到
21％業績獎金標準時，你應繼續銷售、推
薦、服務的工作，以保持不斷的成長，進而符合紅寶石直系直銷商、明珠直系直銷商、翡翠直系直銷商、鑽石直系直銷商或更高的獎銜資格。你可以將事業擴展至你所希望的層次⋯⋯安麗事業計畫正是為了幫助你達成目標而設計的。安麗公司致力於提供你所需要的全部支援，協助你邁向成功之路。</td>
    </tr>
                </table>
			</div>
		</div>
	</DIV>
</div>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><span class="sub1">領導獎金</span>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">領導獎金是每月由安麗日用品股份有限公司支付給合格的銀獎章直銷商；金額由他個人所推薦的21％ 小組的售貨額
決定。在建立安麗事業的過程裡，推薦人
與其下手直銷商共同努力，直到他們達到最高業績獎金標準。達此標準時，推薦人與被推薦的21％ 直銷商同樣屬於21％ 小組。因此，為了酬謝推薦人對於該21％ 直銷商業務擴展所付出的心力，安麗事業計畫提供了6％領導獎金給推薦人，金額是根據該推薦人個人所推薦的21％ 小組的售貨額來計算。<br /><br />
在這個獎金制度下，只要被推薦的直銷商能維持21％的業績獎金標準，而推薦人的小組積分額也至少維持最低的標準，
那麼推薦人就可以在合格的月份裡獲取6％的領導獎金。<br /><br />
當你推薦的對象達到21％業績獎金標準時，你也有資格領取6％領導獎金：<br />
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td width="20" colspan="2" align="left" valign="top">■
                                                                
                                                            </td>
                                                            <td align="left">
															只要你每個月符合銀獎章資格且個人小組積分額達4, 000分以上，
															安麗日用品股份有限公司將依照你所推薦的21％小組的售貨額，按月支付你6％領導獎金，以酬謝你輔導與服務下手直銷商及會員所花費的時間和努力。</td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">
                                                            <div id="qaContent">
	
	<DIV class="accordionPart">
		
		<div>
			<div class="qa_title"><span class="txtGray">更多範例圖解說明 》</span>
                </div>
			<div class="qa_content">
				<table width="100%" border="0" cellpadding="1" cellspacing="1" class="tablew">
  
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 1</span></td>
    </tr>
     <tr>
    <td colspan="2">當你個人推薦了一位直銷商或會員， 他的小組積分達到10,000分以上時，而且你自己的小組積分額也保持在
10,000分以上，你就有資格領取該月的全部6 ％ 領導獎金，最低至少有30,000 元
（500,000BV×6％），這份領導獎金將加進你的收入之中。</td>
    </tr>
 
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><img class="fl" src="../images/menual/menual12.jpg" width="251" height="107" /></td>
    </tr>
     <tr>
       <td colspan="2" >&nbsp;</td>
     </tr>
     <tr>
       <td colspan="2" ><span class="txtStrong">範例 2</span></td>
     </tr>
     <tr>
    <td colspan="2">如果你推薦了7位直銷商，他們每一
位當月小組積分額皆為10,000分，而且你小組的積分額也維持在10,000分以上，你就能夠領取6 ％ 領導獎金即210,000元
（500,000BV×6％×7），一年所得的6％
獎金共為2,520,000元。</td>
    </tr>
    
     
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
      <tr class="tablebg3">
        <td colspan="2" bgcolor="#FFFFFF" ><img class="fl" src="../images/menual/menual13.jpg" width="349" height="343" /></td>
      </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">領導獎金最低保障金額</span></td>
    </tr>
     <tr>
    <td colspan="2" >一位合格推薦人所賺取的6 ％ 領導獎金是依照他個人推薦的2 1 ％ 小組的售貨額來決定其獎金。安麗事業計畫提供推薦
人6 ％ 領導獎金，同時，他也產生了6 ％
領導獎金給他的推薦人，此稱為「保障金額」。<br />
<br />
「最低保障金額」由安麗日用品股份有限公司所訂定和公布，當產品積分額
（PV）和售貨額（BV）比值變動時將予調
整，調整時最新的「最低保障金額」會刊
登在安麗月刊中。只要是領取2 1％業績獎
金的上手直銷商，其所領取的6％領導獎金不低於此「最低保障金額」，因此，若他的個人小組售貨額未達到對他推薦人的6％
領導獎金「最低保障金額」時，安麗公司就會調整他原可領取的6％領導獎金，以對他的合格推薦人維持「保障金額」。<br />
<br />
在下列三個例子中，為了便於計算，
已先假設產品的售貨額和積分額的比率是
50：1，而在此情況下，「最低保障金額」
是30,000 元，但這項保障金額可能因產品的積分額和售貨額間的比率變化而調整。
</td>
    </tr>
     <tr>
    <td  width="20" valign="top">1.</td>
    <td > 倘若你小組積分額大於或等於10,000
分，你可以保有你個人推薦21％小組所
產生的6％領導獎金的全部。如例1：</td>
     </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 1</span></td>
    </tr>
     <tr>
    <td colspan="2" ><img class="fl"src="../images/menual/menual14.jpg" width="253" height="98" /><br />
    由於你小組積分額已達10,000分，你可以得到下手直銷商所產生的全數6％領導獎金，亦即550,000BV×6％＝33,000元。</td>
    </tr>
      <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
      <tr>
    <td  width="20" valign="top">2.</td>
    <td > 倘若你的小組積分額介於4 , 0 0 0 分和
10,000分之間，則你可以獲得你個人推
薦的21％小組所產生的6 ％ 領導獎金的一部分，因你本人須保障上線合格直銷商至少領取30,000 元的領導獎金，<br />如例2：</td>
    </tr>
      <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
      <tr>
    <td colspan="2" ><span class="txtStrong">範例 2</span></td>
    </tr>
      <tr>
    <td colspan="2" ><p><img class="fl" src="../images/menual/menual15.jpg" width="253" height="103" /><br />
      • 你下手直銷商產生的6 ％ 領導獎金
      為：500,000BV×6％＝30,000元</p>
      <p>        • 你本人產生的6 ％
        獎金為200,000BV ×
        6％＝12,000元</p></td>
    </tr>
      <tr>
    <td colspan="2" >由於你本人必須保障上手合格直銷商領取30,000元領導獎金，所以你必須將你下線產生的6 ％ 領導獎金扣除18,000元，以補足你產生的12,000元，成為30,000元給你的上手合格直銷商。因此，你本人可獲得12,000元的領導獎金。</td>
    </tr>
      <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
      <tr>
    <td  width="20" valign="top">3.</td>
    <td > 倘若你推薦兩個2 1 ％ 小組，雖然你的小組積分額小於4,000分，你仍可得到下線兩組2 1 ％ 所產生的6 ％ 領導獎金的部分，同時你也要保障上手合格直銷商
領取6 ％ 領導獎金最低保障額30,000
元，<br>如例3：</td>
    </tr>
      <tr>
    <td colspan="2" ><p><img class="fl" src="../images/menual/menual16.jpg" width="270" height="236" /><br />
      • 你下手直銷商產生的6％ 領導獎金：<br />
      A：500,000BV×6％＝30,000 元<br />
      B：500,000BV×6％＝30,000 元<br />
      A＋B＝60,000元</p>
      <p>        • 你本人產生的6 ％ 領導獎金為：<br />
        75,000BV×6％＝4,500元</p></td>
    </tr>
     <tr>
    <td colspan="2" >由於你必須保障上手合格直銷商領
取30,000元領導獎金，所以你必須將下線
產生的60,000元領導獎金扣除25,500元，
以補足你產生的4,500元領導獎金，成為
30,000元給你的上手合格直銷商。<br />
因此你本人可獲得獎金如下：
60,000－25,500＝34,500 元</td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" >安麗事業是可繼承的事業，若本人不幸逝世，則該直銷商應得的獎金，可由繼承人領取，但繼承人必須也是安麗直銷
商，且為遵守安麗直銷商營業守則正常營運的直銷商。有關安麗直銷商的繼承，須遵照中華民國民法繼承篇及其他相關規定。這方面的問題，安麗公司建議你向你的法律顧問諮詢。</td>
    </tr>
   
                </table>
			</div>
		</div>
	</DIV>
</div>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><span class="sub1">紅寶石獎金</span>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">當任何一個月紅寶石積分達20,000PV
時，紅寶石獎金等於直銷商該月紅寶石售貨額的2％，頒給合格的直銷商，不論其是否已達到直系直銷商的資格。紅寶石售貨額不包括下列業績：
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="2" align="left" width="20">1.
                                                                
                                                            </td>
                                                            <td align="left">所有符合領取21％業績獎金的下手直銷商業績。</td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td width="20" colspan="2" align="left" valign="top">2.
                                                                
                                                            </td>
                                                            <td align="left">下手直系直銷商小組的業績，不論該直系直銷商是否達21％業績獎金標準，其業績一律不列入上手直銷商的紅寶石積
分中。</td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td width="20" colspan="2" align="left" valign="top">3.
                                                                
                                                            </td>
                                                            <td align="left">達
21％最高業績標準的代推薦小組及其所有上手推薦人的業績，均不計入此項積
分中。</td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">
                                                            <div id="qaContent">
	
	<DIV class="accordionPart">
		
		<div>
			<div class="qa_title"><span class="txtGray">更多範例圖解說明 》</span>
                </div>
			<div class="qa_content">
				<table width="100%" border="0" cellpadding="1" cellspacing="1" class="tablew">
  
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 1</span></td>
    </tr>
 
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><img class="fl" src="../images/menual/menual17.jpg" width="334" height="365" /><br />
    說 明：<br />
A、D 是直系直銷商，B、C、E、F 及
G 則是一般直銷商。A 的紅寶石積分不包括下列3 項：<br />
1. 領取21％業績獎金的F及其上線E。<br />
2. 下手直系直銷商小組D的業績。<br />
3. 達21％獎金標準的代推薦小組C 及其上
線B。<br />
因此，A 直系直銷商的紅寶石積分為：<br />
A＋G＝19,000PV＋1,000PV＝20,000PV</td>
    </tr>
 
   
                </table>
			</div>
		</div>
	</DIV>
</div>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><span class="sub1">明珠獎金</span>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">安麗公司每月支付的明珠獎金，係所有第2 層以下的21％ 小組，一直計算到下一位明珠獎金合格者的業績，再加上獲得該明珠獎金者個人推薦的21％ 小組的總售貨額，乘上1 ％ 的結果。如果某位合格的明珠獎金領取者，個人推薦或代推薦另一
位明珠獎金領取人，則推薦者可得的明珠獎金將僅限於該被推薦者個人推薦或代推
薦的21％ 小組的業績。<br /><br />
明珠獎金只根據直系直銷商在中華民國的合格小組支付。所有合格的明珠直系直銷商必須同時是合格的直系直銷商，並且在該月份中個人推薦或代推薦3 個或3 個
以上合乎21％ 業績獎金標準的小組，便有資格接受這份獎金。所有超過本資格的直系直銷商，如翡翠、鑽石直系直銷商，亦可同時領取本獎金，唯其條件必須是一位合格的直系直銷商。
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                           <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><div id="qaContent">
	
	<DIV class="accordionPart">
		
		<div>
			<div class="qa_title"><span class="txtGray">更多範例圖解說明 》</span>
                </div>
			<div class="qa_content">
				<table width="100%" border="0" cellpadding="1" cellspacing="1" class="tablew">
  
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">明珠獎金最低保障金額</span></td>
    </tr>
     <tr>
    <td colspan="2" >如同一位合格領取6 ％ 領導獎金的直銷商，必須保障其可領取6％領導獎金的上手直銷商有不低於「最低保障金額」規定
一樣，明珠獎金亦有「明珠獎金最低保障
金額」的領取規定。<br /><br />
假設產品的售貨額（ B V ）和積分額
（PV）的比率是50：1，每一2 1％ 小組保障其上手直銷商的「明珠獎金最低保障金額」是5,000 元。</td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 1</span></td>
    </tr>
 
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><p><img class="fl" src="../images/menual/menual18.jpg" width="289" height="559" /><br />
      明珠獎金計算並不包括第一代的21％
      小組A、B、C的售貨額在內。</p>
      <p>這是由於該售貨額已經作為計算6％領導獎金。</p>
      <p>而你所領取的明珠獎金是等於：D、E、F、G 組售
        貨額的1％，也就是（500,000＋500,000
        ＋500,000＋500,000）×1％＝20,000元。 </p>
      <p>因此，你當月的明珠獎金是20,000元。</p>
      <p>而這個月E明珠直系直銷商並不能接受明珠
        獎金，因為D、G、F 等組沒有合格的下線
        21％小組，但E可得6％ 領導獎金。</p></td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 2</span></td>
    </tr>
 
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><p><img class="fl" src="../images/menual/menual19.jpg" width="296" height="911" /><br />
      此處A、B、C 等組產生的業績正是你的6％領導獎金的依據。<br /><br />
      你的明珠獎金等於D、E、F、G、H、
      I、J等組售貨額的1％，你並不能接受基於
      K 組業績而得的明珠獎金。因為G 明珠直系直銷商才有資格取得基於K 組業績而得
      的明珠獎金。
      </p>
      <p>你的明珠獎金：<br />
        （60,000＋75,000＋15,000＋500,000＋
        5000,000＋500,000＋500,000）×1％
        ＝21,500元</p></td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 3</span></td>
    </tr>
  <tr>
    <td colspan="2" >你是明珠直系直銷商，你直接推薦的B
直銷商以及B直接推薦的E直銷商，也同樣符合明珠直系直銷商的資格。此時你所能領取的明珠獎金即是扣除第一代21％，即
A、B、C三組的業績，用第二代的D、E、F
三組之業績總和的1％為你的明珠獎金（不
含D、E、F三組以下，因為E本身符合明珠，E以下的G、H、I 的業績乃是據以計算
B的明珠獎金之基準）。</td>
    </tr>
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><img class="fl" src="../images/menual/menual20.jpg" width="293" height="447" /><br />
   你的明珠獎金：<br />
（D、E、F三組業績總和）×1％＝（500,000
＋500,000＋500,000）×1％＝15,000元<br />
B直銷商的明珠獎金：<br />
（G、H、I 三組業績總和）×1％＝（500,000
＋500,000＋500,000）×1％＝15,000 元<br />
E直銷商的明珠獎金：<br />
E直銷商扣除第一代21％ 的業績後已無任何業績，故其明珠獎金為0。</td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 4</span></td>
    </tr>
  <tr>
    <td colspan="2" >範例4 中，你、B、E皆為明珠直系直
銷商。B 原領取的明珠獎金等於D、E、F
等售貨額的1％，但因E組產生的明珠獎金未達最低保障金額，不足的部份便會從你
的明珠獎金扣除。</td>
    </tr>
     <tr class="tablebg3">
    <td colspan="2" bgcolor="#FFFFFF" ><img class="fl" src="../images/menual/menual21.jpg" width="294" height="447" /><br />
  所以B的明珠獎金等於：〔（500,000＋
250,000＋500,000）×1％〕＋〔最低保障金額
5,000－（250,000×1％）〕＝15,000元。<br />
你的明珠獎金等於G、H、I等組的售
貨額的1％，再扣除E 組未達最低保障金
額的差額也就是〔（500,000＋500,000＋
500,000）×1％〕－〔最低保障金額5,000－
（250,000×1％）〕＝12,500元。<br />
E直銷商的明珠獎金，在扣除第一代21％的
業績後，已無任何業績，故明珠獎金為0。</td>
    </tr>
 
   
                </table>
			</div>
		</div>
	</DIV>
</div>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><span class="sub1">翡翠獎金</span>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">目的與獲獎者資格欲建立廣闊的直系直銷商小組，是需
要相當努力的。通常，一位已推薦許多個人小組的直銷商，可能會被他所推薦的直系直銷商要求前去協助這些小組，以擴展更高的業績。<br /><br />
沒有推薦任何直系直銷商的直銷商，
也同時需要協助他組內的所有直銷商。他所獲得的業績獎金減去他付給組內直銷商後剩下的獎金，就是他所獲得的酬勞。當一個小組中的許多人皆達到直系直銷商的身分時，情況就改變了，一位發展3 個或3
個以上的直系直銷商小組的優秀領導人，
將收到一份獎金。這些領導人確實是支持他們所推薦的直系直銷商；因此，這些領導人是相當重要的，而且也會常常被要求來協助一些區域性業務研習會、訓練課
程、特殊情況的應對、供貨及鼓勵下線士氣等。<br /><br />
安麗公司設立翡翠獎金，用以支付翡翠直系直銷商。直銷商在中華民國因個人推薦或代推薦3 個或3 個以上的2 1％ 小
組，每一組要有6 個月達21％ 業績獎金標準，雖不需要6個月有連續月份，但須在安麗公司的會計年度中完成。
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                         <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">
                                                             <div id="qaContent">
	
	<DIV class="accordionPart">
		
		<div>
			<div class="qa_title"><span class="txtGray">更多獎金計算說明 》</span>
                </div>
			<div class="qa_content">
				<table width="100%" border="0" cellpadding="1" cellspacing="1" class="tablew">
  
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">獎金計算</span></td>
    </tr>
  <tr>
    <td colspan="2" >翡翠獎金計算期間開始於每一會計年
度的9月1日，截止於該會計年度的8月31
日，並於會計年度結束後的12 月底支付，
合格的翡翠直系直銷商皆有資格參與翡翠獎金的分配。總金額是從國內每位翡翠獎金得主其所有下手直銷商全年總售貨額中提出0.25％，計算方法如下：<br /><br />
翡翠直系直銷商之每一小組符合最高
業績獎金標準月份的售貨額，全部加在一
起。第一個1,250,000 售貨額每1,000 售
貨額算4分；1,250,001到3,750,000售貨
額每1,000 售貨額算2 分；3,750,001售貨
額到6,250,000售貨額每1,000售貨額算1
分；6,250,001售貨額以後則每10,000售
貨額算1分，每組以此計算，請參考下表。</td>
    </tr>
     <tr>
    <td colspan="2"><br><table width="95%" border="0" cellspacing="1" cellpadding="1" class="tablebg3">
      <tr>
        <td colspan="5" align="center"><span class="txtWhite">安麗公司會計年度─9月1日至次年8月31日</span></td>
        </tr>
      <tr>
        <td align="center" bgcolor="#FFFFFF">售貨額</td>
        <td align="center" bgcolor="#FFFFFF">1,250,000以下</td>
        <td align="center" bgcolor="#FFFFFF">1,250,001到 <br />3,750,000</td>
        <td align="center" bgcolor="#FFFFFF">3,750,001到 <br />6,250,000</td>
        <td align="center" bgcolor="#FFFFFF">6,250,001以上</td>
      </tr>
      <tr>
        <td align="center" bgcolor="#FFFFFF">得 分</td>
        <td align="center" bgcolor="#FFFFFF">每1,000售貨額<br />算4分</td>
        <td align="center" bgcolor="#FFFFFF">每1,000售貨額<br />算2分</td>
        <td align="center" bgcolor="#FFFFFF">每1,000售貨額<br />算1分</td>
        <td align="center" bgcolor="#FFFFFF">每10,000售貨額<br />算1分</td>
      </tr>
      <tr>
        <td align="center" bgcolor="#FFFFFF">項 目</td>
        <td align="center" bgcolor="#FFFFFF">A</td>
        <td align="center" bgcolor="#FFFFFF">B</td>
        <td align="center" bgcolor="#FFFFFF">C</td>
        <td align="center" bgcolor="#FFFFFF">D</td>
      </tr>
    </table>
    <br />&nbsp;&nbsp;個人翡翠獎金總分 = A+B+C+D<br />
    <img src="../images/menual/menual22.jpg" width="319" height="57" /></td>
    </tr>
      <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
      <tr>
    <td colspan="2" >安麗日用品股份有限公司將從所有翡翠獎金得主其下線之全年售貨額中提出
0.25％做獎金。<br /><br />
國際推薦達最高業績獎金小組也可算
在翡翠獎金內，只要該直銷商在其國內符合領取翡翠直系直銷商獎金資格。在這種
情況下，安麗公司將支付兩次翡翠獎金，
一次付給代推薦人，一次付給國際推薦人。（也包括所有外國分公司能溯源台灣所推薦的售貨額，經他國國際推薦者不屬此例。）<br /><br />
每一翡翠直系直銷商其所有直銷網小組的得分先要加起來，然後各翡翠直系直銷商的得分也加起來成為總分，再把總獎金除以總分即可得到平均每一分的獎金金額。而翡翠獎金就是由每一位翡翠直系直銷商的積分乘以平均每一分的獎金金額所得而決定。</td>
    </tr>
  
 
   
                </table>
			</div>
		</div>
	</DIV>
</div>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><span class="sub1">鑽石獎金</span>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">合格參與鑽石獎金分配的直銷商，可分享國內所有鑽石直系直銷商下線的總售貨額0.25％為獎金，其分配方式與翡翠獎金付予的方式相同。<br /><br />
鑽石獎金是由安麗公司每年支付合乎鑽石資格的直系直銷商，其個人必須在中華民國個人推薦或代推薦至少6 個21％ 業績小組，每一小組在會計年度內的12個月份裡，至少有6 個月能維持21％業績獎金
的標準。<br /><br />
國際推薦最高業績獎金小組也可算在鑽石獎金內，只要該直銷商在其國內符合領取鑽石直系直銷商獎金資格即可。在這種情況之下，同一售貨額安麗公司將支付兩次鑽石獎金，一次付給代推薦人，一次付給國際推薦人。<br /><br />
鑽石獎金也包括台灣直銷商所推薦的國外直銷網售貨額的0.25％，唯國外直銷網的售貨額僅以該國者為限，不包括在第3
國的售貨額。<br /><br />
某鑽石直系直銷商若個人推薦或代推薦至少7個21％ 小組，每一小組在同一會計年度中至少有6 個月達到最高業績獎金標準，該鑽石直系直銷商亦可領取「執行專才鑽石獎金」。
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left"><span class="sub1">執行專才鑽石獎金</span>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">在同一會計年度內，一位直系直銷商
若在中華民國個人推薦或代推薦至少7 個
21％ 小組，這些小組在同一會計年度至少有6 個月的業績合乎資格，就能獲得執行專才鑽石獎金。執行專才鑽石獎金的計算
與支付不包括國際推薦小組。獎金支付的
辦法如下：<br /><br />
每組合乎21％ 標準之資格者，其合格之每月份可分配到「基數」（units），每月分配各組基數如下所述：<br /><br />
每一會計年度，安麗公司均由全國鑽石直系直銷商及更高階直系直銷商下線
的全部21％ 小組產生的售貨額中，提出
0 . 2 5 ％作基金。每位執行專才鑽石獎金合格者一經分配基數後，以此總基數除基金，即得每基數的金額。此數金額既定，
用以乘上各組的基數，即得該組應得的獎金，此獎金於該年12月31日前頒發。
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">&nbsp;
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="30">&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left">
                                                             <div id="qaContent">
	
	<DIV class="accordionPart">
		
		<div>
			<div class="qa_title"><span class="txtGray">更多範例說明 》</span>
                </div>
			<div class="qa_content">
				<table width="100%" border="0" cellpadding="1" cellspacing="1" class="tablew">
  
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 1</span></td>
    </tr>
  <tr>
    <td colspan="2" >如果你是一位合格的鑽石直系直銷商，並擁有8個小組，每一小組在會計年度
內有8個月合乎資格，你的執行專才鑽石獎金的基數就是：<br />
8 組× 8 月×100 基數等於6,400 基數。
如果該年每基數的平均獎額是20元
（這個金額將根據每年的總售貨額及合格
者的數目而變化），那麼你的執行專才鑽石獎金就是128,000元（6,400×20）。</td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2" ><span class="txtStrong">範例 2</span></td>
    </tr>
  <tr>
    <td colspan="2" >你個人推薦了18 個21％小組，在一年
中，其中有3組維持了4個月21％的標準，
另有5組維持了6個月21％的標準，還有5
組維持了9個月21％的標準，另有5組維持
了1 2 個月21％ 的標準。就執行專才鑽石獎金的資格來看，你已達到參鑽石級的資格標準，因為你擁有15個小組合乎21％標
準，且至少維持了6 個月。你可以從這15
個小組中，每組每個符合21％ 標準資格的月份，得到300個基數：<br />
5（組）× 6（月）× 300 基數＝ 9,000 基數
5（組）× 9（月）× 300 基數＝ 13,500 基數
5（組）× 12（月）× 300 基數＝18,000 基數<br /><br />
假如該年每個基數的平均獎額為2 0
元，則你的獎金就是810,000元。<br />
（9,000＋13,500＋18,000＝40,500，
40,500 × 20元＝ 810,000）</td>
    </tr>
     <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     <tr>
    <td colspan="2"><table width="95%" border="0" cellspacing="1" cellpadding="1" class="tablebg3">
      <tr>
        <td colspan="3" align="center"><span class="txtWhite">執行專才鑽石獎金分配辦法</span></td>
        </tr>
      <tr>
        <td align="center" bgcolor="#f3f7fa">資格標準</td>
        <td align="center" bgcolor="#f3f7fa">合格的小組數</td>
        <td align="center" bgcolor="#f3f7fa">基數計算</td>
      </tr>
      <tr>
        <td align="center" bgcolor="#FFFFFF">鑽石級</td>
        <td align="center" bgcolor="#FFFFFF">7至11個21％小組</td>
        <td align="center" bgcolor="#FFFFFF">每組100基數Ｘ合格月份數</td>
      </tr>
      <tr>
        <td align="center" bgcolor="#FFFFFF">雙鑽石級</td>
        <td align="center" bgcolor="#FFFFFF">12至14個21％小組</td>
        <td align="center" bgcolor="#FFFFFF">每組200基數Ｘ合格月份數</td>
      </tr>
       <tr>
        <td align="center" bgcolor="#FFFFFF">參鑽石級</td>
        <td align="center" bgcolor="#FFFFFF">15至17個21％小組</td>
        <td align="center" bgcolor="#FFFFFF">每組300基數Ｘ合格月份數</td>
      </tr>
       <tr>
        <td align="center" bgcolor="#FFFFFF">皇冠級</td>
        <td align="center" bgcolor="#FFFFFF">18至19個21％小組</td>
        <td align="center" bgcolor="#FFFFFF">每組400基數Ｘ合格月份數</td>
      </tr>
       <tr>
        <td align="center" bgcolor="#FFFFFF">皇冠大使級</td>
        <td align="center" bgcolor="#FFFFFF">至少20個21％小組以上</td>
        <td align="center" bgcolor="#FFFFFF">每組500基數Ｘ合格月份數</td>
      </tr>
    </table>
   </td>
    </tr>
      <tr>
    <td colspan="2" >&nbsp;</td>
    </tr>
     
  
 
   
                </table>
			</div>
		</div>
	</DIV>
</div>
                                                                
                                                            </td>
                                                            <td width="30">&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>&nbsp;
                                                                
                                                            </td>
                                                            <td colspan="3" align="left" class="b12">&nbsp;
                                                                
                                                            </td>
                                                            <td>&nbsp;
                                                              
                                                            </td>
                                                        </tr>
                                                     
                                                        <tr>
                                                            <td height="7" colspan="5">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="5" align="center">
                                                                <a href="#top" class="g11">- 回上方 -</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;
                                        
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</asp:Content>
