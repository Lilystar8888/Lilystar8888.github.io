<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<%
    var obj = GetNewArticle();
    var KV = GetKeyVisual();
%>
<!DOCTYPE html>
<!--[if IE 7]> <html class="hover ie ie7"> <![endif]-->
<!--[if IE 8]> <html class="hover ie ie8"> <![endif]-->
<!--[if IE 9]> <html class="hover ie ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="zh-TW" class="hover"> <!--<![endif]-->
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="format-detection" content="telephone=no" />
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="css/owl.carousel2.css" rel="stylesheet" type="text/css" />
</head>
<body class="index">
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="advertisement">
            <div class="owl-carousel">
                <!--圖片1000*400-->
                <%foreach (var kv in KV)%>
                <%{%>
                  <div class="item"><a href="<%:kv.URL %>" target="<%:kv.IsBlank ? "_blank" :"" %>"><img src="API/GetPic.ashx?Token=<%:GetToken() %>&Type=KeyVisual&FileName=<%:kv.LargePicName %>" /></a></div>
                <%}%>
<%--                <div class="item"><a href="javascript:;"><img src="images/index-kv1.jpg" /></a></div>
                <div class="item"><a href="javascript:;"><img src="images/index-kv2.jpg" /></a></div>
                <div class="item"><a href="javascript:;"><img src="images/index-kv3.jpg" /></a></div>--%>
            </div> 
            <div class="news">
                <span>最新</span>
                <%foreach (var NewArticle in obj)%>
                <%{%>
                    <a href="detail.aspx?no=<%:NewArticle.UNO %>" data-uno="<%:NewArticle.UNO %>"><%:NewArticle.Title.Length>15?string.Format("{0}...",NewArticle.Title.Substring(0,15)):NewArticle.Title %></a>
                <%}%>
<%--                <a href="javascript:;" class="news01"><!--限15字加...-->晚餐高熱量誘惑！降食慾少吃享瘦...</a>
                <a href="javascript:;" class="news02"><!--限15字加...-->晚餐高熱量誘惑！降食慾少吃享瘦...</a>
                <a href="javascript:;" class="news03"><!--限15字加...-->晚餐高熱量誘惑！降食慾少吃享瘦...</a>--%>
            </div>
        </div>
        <div class="portal">
            <div class="portal-left">
                <a href="javascript:;">依循四大階段<br>打造完美體態<div class="icon-down"></div></a>
                <span class="hide">淨化期</span><span class="hide">打底期</span><span class="hide">代謝期</span><span class="hide">美型期</span>
            </div>
            <div class="portal-right">
                <a href="javascript:;">體重管理評估<br>認識五大類型<div class="icon-down"></div></a>
            </div>
            <div class="line-portal"></div>
        </div>
        <div class="stage">
            <div class="stage-content none">
                <h2>STEP1.淨化</h2>
                <h3>協助身體排出老舊廢物和毒素</h3>
                <p>不復胖計畫的第一步就是幫身體排毒！利用淨化期，排除身體累積已久的廢物，不只身體會感覺到輕盈，也讓你覺得很有成就感！</p>
                <p>乳酸菌</p>
                <p>維生素B群</p>
                <p>纖維</p>
                <h2>STEP2.打底</h2>
                <h3>均衡營養，調整成為易瘦體質</h3>
                <p>老舊廢物淨化排除後，想順利恢復身體機能，迅速燃燒身體脂肪，就得要好好打底！</p>
                <p>均衡代餐</p>
                <p>優質蛋白質</p>
                <p>綜合營養素</p>
                <p>纖維</p>
                <h2>STEP3.代謝</h2>
                <h3>促進體內循環，加速新陳代謝幫助熱量消耗</h3>
                <p>提高代謝是減重成功與否的關鍵。在代謝期，紐崔萊幫助你藉由對的營養、正確習慣與加強運動，促進血液循環、增加新陳代謝，達到加速熱量消耗的目的。</p>
                <p>優質蛋白質</p>
                <p>綠茶磷脂質</p>
                <p>共軛亞麻油酸</p>
                <p>維生素B群</p>
                <h2>STEP4.美型</h2>
                <h3>提升肌肉量，雕塑完美曲線</h3>
                <p>美型期重點在於利用營養素，提升體內肌肉量，也幫助減重後的身材提昇緊實感，雕塑完美曲線。</p>
                <p>共軛亞麻油酸</p>
                <p>優質蛋白質</p>
                <p>維生素C</p>
            </div>
        </div>
        <div class="examine">
            <div class="kv-examine"></div>
            <h2>體重管理評估，認識五大類型</h2>
            <p>想要健康享瘦，得先搞懂自己的發胖體質。紐崔萊與國內醫療大學團隊合作，將過去的諮詢經驗系統化，共同設計出一套體重管理系統，讓每個人能針對自己的體質吃對營養、用對方法，自然擁有完美體態。</p>
            <a href="exam.aspx" class="btn-exam-go"><img src="images/icon-go-exam.png" height="37" width="50">馬上做評估</a>
        </div>
    </div>
    <!-- #include file="footer.aspx" -->

    <%-- 存放本頁前端會用到的全域變數 
    --%><script type="text/javascript">
        var Config = <%=new {                
    Token = GetToken()
            }.ToJson() %>;
    </script>
    <script src="<%:Url.Resolve("~/js/config.js")%>" type="text/javascript"></script>
    <%-- 當要引用第三方 js module (其 source 中無 define 依存 module 時, 請依以下設定方式加入第三方 js 模組
        <script type="text/javascript">
            require.paths.MODULE_NAME = JSLibPath('jquery/FILE_NAME_NO_EXT_JS');
            require.shim.MODULE_NAME = ['jquery'];
        </script>
    --%><script src="<%:Url.Resolve("~/js/lib/requirejs/require-2.1.20.min.js")%>" data-main="<%:MainJs%>" type="text/javascript" async></script>
</body>
</html>
