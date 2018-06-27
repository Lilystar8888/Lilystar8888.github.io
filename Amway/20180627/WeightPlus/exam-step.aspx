<%@ Page Language="C#" AutoEventWireup="true" CodeFile="exam-step.aspx.cs" Inherits="exam_step" %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="體重管理評估檢測";
        META_DESCRIPTION = @"紐崔萊與專業團隊合作，將過去的諮詢經驗系統化，共同設計出一套體重管理系統，讓每個人能針對自己的體質吃對營養、用對方法，自然擁有完美體態。";
		
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
        <div class="content">
            <div class="tab-exam">
                <a href="exam.aspx" class="act">評估我的類型</a>
                <a href="exam-typelist.aspx">認識五大類型</a>
            </div>
            <div class="steps-bar">
                <div class="bar-area">
                    <div class="rate">
                    <!--區間
                    Page1:   0 %
                    Page2:  20 %
                    Page3:  40 %
                    Page4:  60 %
                    Page5:  80 %
                    -->
                    </div>
                </div>
                <p class="percentage">0%</p>
            </div>
            <div class="sex-exam">
                <p>請問你的性別？</p>
                <!--選到的性別請在a上加act >  class="btn-men btn-inline act"-->
                <a href="javascript:;" class="btn-men btn-inline">男性</a>
                <a href="javascript:;" class="btn-women btn-inline">女性</a>
            </div>
            <table class="box-step page1">
                <%for (int i = 0; i <= 7; i++){ %>
                <tr qType="<%=stringArrayQuestionType[i] %>">
                    <td width="561" class="title-indent"><%=stringArrayQuestion[i]%></td>
                    <td width="235">
                        <!--選到該答案，請加上act > class="ans act"-->
                        <a href="javascript:;" class="ans"  value="1">從不</a>
                        <a href="javascript:;" class="ans"  value="2">很少</a>
                        <a href="javascript:;" class="ans"  value="3">偶爾</a>
                        <a href="javascript:;" class="ans"  value="4">經常</a>
                        <a href="javascript:;" class="ans"  value="5">總是</a>
                    </td>
                </tr>
                <%} %>
            </table>
            <table class="box-step page2">
                <%for (int i = 8; i <= 15; i++){ %>
                <tr qType="<%=stringArrayQuestionType[i] %>">
                    <td width="585"><%=stringArrayQuestion[i]%></td>
                    <td width="235">
                        <!--選到該答案，請加上act > class="ans act"-->
                        <a href="javascript:;" class="ans"  value="1">從不</a>
                        <a href="javascript:;" class="ans"  value="2">很少</a>
                        <a href="javascript:;" class="ans"  value="3">偶爾</a>
                        <a href="javascript:;" class="ans"  value="4">經常</a>
                        <a href="javascript:;" class="ans"  value="5">總是</a>
                    </td>
                </tr>
                <%} %>
            </table>
            <table class="box-step page3">
                <%for (int i = 16; i <= 23; i++){ %>
                <tr qType="<%=stringArrayQuestionType[i] %>">
                    <td width="585"><%=stringArrayQuestion[i]%></td>
                    <td width="235">
                        <!--選到該答案，請加上act > class="ans act"-->
                        <a href="javascript:;" class="ans"  value="1">從不</a>
                        <a href="javascript:;" class="ans"  value="2">很少</a>
                        <a href="javascript:;" class="ans"  value="3">偶爾</a>
                        <a href="javascript:;" class="ans"  value="4">經常</a>
                        <a href="javascript:;" class="ans"  value="5">總是</a>
                    </td>
                </tr>
                <%} %>
            </table>
            <table class="box-step page4">
                <%for (int i = 24; i <= 31; i++){ %>
                <tr qType="<%=stringArrayQuestionType[i] %>">
                    <td width="585"><%=stringArrayQuestion[i]%></td>
                    <td width="235">
                        <!--選到該答案，請加上act > class="ans act"-->
                        <a href="javascript:;" class="ans"  value="1">從不</a>
                        <a href="javascript:;" class="ans"  value="2">很少</a>
                        <a href="javascript:;" class="ans"  value="3">偶爾</a>
                        <a href="javascript:;" class="ans"  value="4">經常</a>
                        <a href="javascript:;" class="ans"  value="5">總是</a>
                    </td>
                </tr>
                <%} %>
            </table>
            <table class="box-step page5">
                <%for (int i = 32; i <= 39; i++){ %>
                <tr qType="<%=stringArrayQuestionType[i] %>">
                    <td width="585"><%=stringArrayQuestion[i]%></td>
                    <td width="235">
                        <!--選到該答案，請加上act > class="ans act"-->
                        <a href="javascript:;" class="ans"  value="1">從不</a>
                        <a href="javascript:;" class="ans"  value="2">很少</a>
                        <a href="javascript:;" class="ans"  value="3">偶爾</a>
                        <a href="javascript:;" class="ans"  value="4">經常</a>
                        <a href="javascript:;" class="ans"  value="5">總是</a>
                    </td>
                </tr>
                <%} %>
            </table>
            <div class="btn-area">
                <!--當全部都有答題，請將lightgray拿掉-->
                <a href="javascript:;" class="prev-page">上一頁(1/5)</a>
                <a href="javascript:;" class="next-page lightgray">下一頁(2/5)</a>
                <a href="javascript:;" class="btn-finish lightgray">完成</a>
            </div>
        </div>
    </div>
    <!-- #include file="footer.aspx" -->
    <div class="box-exam-area">
        <div class="tips">
            <div class="icon-i">
                <img src="images/icon-i.png">
                <p>尚有題目未回答！</p>
            </div>
            <a href="javascript:;" class="btn-ok">繼續測驗</a>
        </div>
    </div>

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
