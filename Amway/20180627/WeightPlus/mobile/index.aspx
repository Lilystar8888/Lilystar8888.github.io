<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<%
    var obj = GetNewArticle();
    var NewArticle = obj != null ? obj.First() : new WebSite.Modules.ArticleInfo();
    var KV = GetKeyVisual();
%>
<!DOCTYPE html>
<!--[if IE 7]> <html class="hover ie ie7"> <![endif]-->
<!--[if IE 8]> <html class="hover ie ie8"> <![endif]-->
<!--[if IE 9]> <html class="hover ie ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="zh-TW" class="hover"> <!--<![endif]-->
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="format-detection" content="telephone=no">
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="../css/owl.carousel2.css" rel="stylesheet" type="text/css" />
</head>
<body class="index">
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="advertisement">
            <div class="owl-carousel">
                <!--圖片640*690-->
                <%foreach (var kv in KV)%>
                <%{%>
                  <div class="item"><a href="<%:kv.URL %>" target="<%:kv.IsBlank ? "_blank" :"" %>"><img src="../API/GetPic.ashx?Token=<%:GetToken() %>&Type=KeyVisual&FileName=<%:kv.SmallPicName %>" /></a></div>
                <%}%>
<%--                <div class="item"><a href="javascript:;"><img src="images/index-kv1.jpg" /></a></div>
                <div class="item"><a href="javascript:;"><img src="images/index-kv2.jpg" /></a></div>
                <div class="item"><a href="javascript:;"><img src="images/index-kv3.jpg" /></a></div>--%>
            </div> 
            <div class="news">
                <span>最新</span>
                <a href="detail.aspx?no=<%:NewArticle.UNO %>" data-uno="<%:NewArticle.UNO %>"><%:NewArticle.Title == null ? "" : NewArticle.Title.Length>13?string.Format("{0}...",NewArticle.Title.Substring(0,13)):NewArticle.Title %></a>
            </div>
        </div>
        <a href="exam.aspx" class="estimate-start-find"><img src="images/icon-go-exam@3x.png">找出發福原因</a>
        <div class="stage exam-entry">
            <div class="owl-carousel none">
                <div class="item steps0">依循四大階段打造完美體態，STEP1.淨化期 > STEP2.打底期 > STEP3.代謝期 > STEP4.美型期</div>
                <div class="item steps1">
                    <h2>STEP1.淨化</h2>
                    <h3>協助身體排出老舊廢物和毒素</h3>
                    <p>乳酸菌</p>
                    <p>維生素B群</p>
                    <p>纖維</p>
                </div>
                <div class="item steps2">
                    <h2>STEP2.打底</h2>
                    <h3>均衡營養，調整成為易瘦體質</h3>
                    <p>均衡代餐</p>
                    <p>優質蛋白質</p>
                    <p>綜合營養素</p>
                    <p>纖維</p>
                </div>
                <div class="item steps3">
                    <h2>STEP3.代謝</h2>
                    <h3>促進體內循環，加速新陳代謝幫助熱量消耗</h3>
                    <p>優質蛋白質</p>
                    <p>綠茶磷脂質</p>
                    <p>共軛亞麻油酸</p>
                    <p>維生素B群</p>
                </div>
                <div class="item steps4">
                    <h2>STEP4.美型</h2>
                    <h3>提升肌肉量，雕塑完美曲線</h3>
                    <p>共軛亞麻油酸</p>
                    <p>優質蛋白質</p>
                    <p>維生素C</p>
                </div>
           </div> 
        </div>
        <div class="exam-entry">
            <h2>找出發福原因<br>認識我的類型</h2>
            <div class="kv-estimate"></div>
            <a href="exam.aspx" class="estimate-start"><img src="images/icon-estimate-start@3x.png">馬上做評估</a>
        </div>
        <!-- #include file="footer.aspx" -->
    </div>
    <a href="javascript:;" class="top btn">TOP</a>

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