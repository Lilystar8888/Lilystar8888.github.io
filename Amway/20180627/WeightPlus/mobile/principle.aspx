<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="用對方法-3大原則";
		META_DESCRIPTION=@"三大原則：照著吃、勤紀錄、動一動 ";
        META_IMAGE = "~/images/fb_principle.jpg";
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
        <div class="kv-principle">
            <h1>用對方法-3大原則</h1>
        </div>
        <ul class="principle-content">
            <li class="principle01">
                <div class="chart"></div>
                <p>依循紐崔萊營養體重管理，加強4大階段建議的重點營養素及遵照「<a href="detail.aspx?no=59">5143均衡飲食原則</a>」。</p>
                <ul class="cookbook"><b>五大類型飲食示範菜單：</b>
                    <li><a href="../pdf/示範菜單_健康樂活型.pdf" target="_blank" data-tracking="ga('send','event','mobile','download.pdf','健康樂活型-菜單');">健康樂活型(PDF)</a></li>
                    <li><a href="../pdf/示範菜單_壓力多吃型.pdf" target="_blank" data-tracking="ga('send','event','mobile','download.pdf','壓力多吃型-菜單');">壓力多吃型(PDF)</a></li>
                    <li><a href="../pdf/示範菜單_暴飲暴食型.pdf" target="_blank" data-tracking="ga('send','event','mobile','download.pdf','暴飲暴食型-菜單');">暴飲暴食型(PDF)</a></li>
                    <li><a href="../pdf/示範菜單_糖心型.pdf" target="_blank" data-tracking="ga('send','event','mobile','download.pdf','糖心型-菜單');">糖心型(PDF)</a></li>
                    <li><a href="../pdf/示範菜單_代謝偏低型.pdf" target="_blank" data-tracking="ga('send','event','mobile','download.pdf','代謝偏低型-菜單');">代謝偏低型(PDF)</a></li>
                </ul>
            </li>
            <li class="principle02">
                <div class="chart"></div>
                <p>利用記錄表詳細記錄每天三餐的飲食內容，同時檢查重點營養素是否有確實補充。<a href="../pdf/飲食紀錄手冊_簡易版.pdf"  target="_blank">下載紀錄表</a></p>
            </li>
            <li class="principle03">
                <div class="chart"></div>
                <p>養成良好及規律的運動習慣。<a href="detail.aspx?no=51">紐崔萊健康操</a>以4321的原則設計，讓你只花10分鐘就可以讓全身動一動！</p>
            </li>
        </ul>
        <!-- #include file="footer.aspx" -->
    </div>
    <a href="javascript:;" class="top btn">TOP</a>
    <div class="box-exam-area">
        <div class="tips">
            <p>尚有題目未回答！</p>
            <a href="javascript:;" class="btn-ok">確定</a>
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