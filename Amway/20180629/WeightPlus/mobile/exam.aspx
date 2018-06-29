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
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="format-detection" content="telephone=no">
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="../css/owl.carousel2.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="kv-exam">
            <h1>紐崔萊結合專業團隊<br>歸納出五大體重管理類型</h1>
        </div>
        <div class="exam-tab">
            <a href="exam-typelist.aspx" class="btn-exam-type">認識五大類型</a>
        </div>
        <div class="exam">
            <form id="form1" runat="server">
            <h2 class="title-exam">在您作答之前…</h2>
            <p class="txt-gray">提醒您，此問卷並非以診斷為目的，而是為了找出您脂肪囤積的潛在原因。</p>
            <p class="txt-gray">問卷共有40題，填寫問卷的時間約為5分鐘。</p>
            <p class="txt-gray">請根據您平時的生活習慣，仔細思考後再作答，這樣才有助於您找出最接近個人狀況的潛在原因！</p>
            <a href="exam-step.aspx" class="btn-start">體重管理評估<p>START</p></a>
            </form>
        </div>
        <!-- #include file="footer.aspx" -->
    </div>
    <a href="javascript:;" class="top btn">TOP</a>

    <script src="<%:Url.Resolve("~/js/config.js")%>" type="text/javascript"></script>
    <script src="<%:Url.Resolve("~/js/lib/requirejs/require-2.1.20.min.js")%>" data-main="<%:MainJs%>" type="text/javascript" async></script>
</html>