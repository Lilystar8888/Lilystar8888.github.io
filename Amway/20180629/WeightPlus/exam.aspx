<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="體重管理評估檢測";
        META_DESCRIPTION = @"紐崔萊與專業團隊合作，將過去的諮詢經驗系統化，共同設計出一套體重管理系統，讓每個人能針對自己的體質吃對營養、用對方法，自然擁有完美體態。";
        META_IMAGE = "~/images/fb_exam.jpg";
        
	    base.Render(writer);
	}
</script>
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
</head>
<body class="index">
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="kv kv-exam">
            <div class="kv-area">
            <h1>紐崔萊結合專業團隊<br>歸納出五大體重管理類型</h1>
            <p>想要健康享瘦，得先搞懂自己的發胖體質。紐崔萊與專業團隊合作，<br>
將過去的諮詢經驗系統化，共同設計出一套體重管理系統，<br>
讓每個人能針對自己的體質吃對營養、用對方法，<br>
自然擁有完美體態。</p>
            </div>
        </div>
        <div class="content">
            <div class="tab-exam">
                <a href="exam.aspx" class="act">評估我的類型</a>
                <a href="exam-typelist.aspx">認識五大類型</a>
            </div>
            <div class="exam-q">
                <p class="title26">在您作答之前…</p>
                <p>提醒您，此問卷並非以診斷為目的，而是為了找出您脂肪囤積的潛在原因。</p>
                <p>問卷共有40題，填寫問卷的時間約為5分鐘。</p>
                <p>請根據您平時的生活習慣，仔細思考後再作答，這樣才有助於您找出最接近個人狀況的潛在原因！</p>
                <a href="exam-step.aspx" class="start-exam">體重管理評估START</a>
            </div>
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
