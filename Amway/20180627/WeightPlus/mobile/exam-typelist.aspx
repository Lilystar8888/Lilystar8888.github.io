<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="認識五大類型易胖體質";
        META_DESCRIPTION = @"想要健康享瘦，得先搞懂自己的發胖體質。紐崔萊與專業團隊合作，將過去的諮詢經驗系統化，共同設計出一套體重管理系統，讓每個人能針對自己的體質吃對營養、用對方法， 自然擁有完美體態。";
		
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
        <div class="exam-tab-typelist">
            <a href="exam.aspx" class="btn-estimate">評估我的類型</a>
        </div>
        <ul class="typelist">
            <li class="typelist04">
                <div class="typelist-pic"></div>
                <div class="typelist-txt">
                    <a href="exam-type.aspx?type=04" class="category">第1類-糖心型</a>
                    <a href="exam-type.aspx?type=04" class="typelist-detail">熱愛含糖飲料、甜點、零食，也可能會喝烈酒糖類與脂肪攝取過多...</a>
                </div>
            </li>
            <li class="typelist05">
                <div class="typelist-pic"></div>
                <div class="typelist-txt">
                    <a href="exam-type.aspx?type=05" class="category">第2類-代謝偏低型</a>
                    <a href="exam-type.aspx?type=05" class="typelist-detail">飲食節制、進食量少，卻可能有營養素不足、體脂肪超標的情況...</a>
                </div>
            </li>
            <li class="typelist02">
                <div class="typelist-pic"></div>
                <div class="typelist-txt">
                    <a href="exam-type.aspx?type=02" class="category">第3類-壓力多吃型</a>
                    <a href="exam-type.aspx?type=02" class="typelist-detail">生活不規律，吃飯時間非早即晚，以「吃」解決壓力，尋求慰藉，導致體重節節攀升...</a>
                </div>
            </li>
            <li class="typelist03">
                <div class="typelist-pic"></div>
                <div class="typelist-txt">
                    <a href="exam-type.aspx?type=03" class="category">第4類-暴飲暴食型</a>
                    <a href="exam-type.aspx?type=03" class="typelist-detail">不管自以為吃的多不多攝取的熱量都超標，但蔬果攝取量卻不足，易有營養不均的狀況...</a>
                </div>
            </li>
            <li class="typelist01">
                <div class="typelist-pic"></div>
                <div class="typelist-txt">
                    <a href="exam-type.aspx?type=01" class="category">第5類-健康樂活型</a>
                    <a href="exam-type.aspx?type=01" class="typelist-detail">飲食節制，或是工作關係會大量消耗熱量。注重健康，有運動習慣...</a>
                </div>
            </li>
        </ul>
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