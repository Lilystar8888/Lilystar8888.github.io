<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="用對方法-3大原則";
		META_DESCRIPTION=@"三大原則：照著吃、勤紀錄、動一動";
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="format-detection" content="telephone=no" />
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
</head>
<body>
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="kv kv-principle">
            <div class="kv-area">
                <h1>用對方法-3大原則</h1>
                <p>要徹底落實「照著吃」、「勤記錄」、「動一動」3 大原則，<br>打造健康不復胖的易瘦體質其實很簡單！</p>
            </div>
            <div class="kv-shadow"></div>
        </div>
        <div class="content">
            <div class="principle-eat box-inline">
                <h2 class="none">照著吃</h2>
                <p>依循紐崔萊營養體重管理，加強4大階段建議的重點營養素及遵照「<a href="detail.aspx?no=59" class="txt-green">5143均衡飲食原則</a>」。</p>
                <ul class="cookbook"><div class="txt-strong">五大類型飲食示範菜單：</div>
                    <li><a href="pdf/示範菜單_健康樂活型.pdf"  target="_blank" data-tracking="ga('send','event','pc','download.pdf','健康樂活型-菜單');">健康樂活型(PDF)</a></li>
                    <li><a href="pdf/示範菜單_壓力多吃型.pdf"  target="_blank" data-tracking="ga('send','event','pc','download.pdf','壓力多吃型-菜單');">壓力多吃型(PDF)</a></li>
                    <li><a href="pdf/示範菜單_暴飲暴食型.pdf"  target="_blank" data-tracking="ga('send','event','pc','download.pdf','暴飲暴食型-菜單');">暴飲暴食型(PDF)</a></li>
                    <li><a href="pdf/示範菜單_糖心型.pdf" target="_blank" data-tracking="ga('send','event','pc','download.pdf','糖心型-菜單');">糖心型(PDF)</a></li>
                    <li><a href="pdf/示範菜單_代謝偏低型.pdf" target="_blank" data-tracking="ga('send','event','pc','download.pdf','代謝偏低型-菜單');">代謝偏低型(PDF)</a></li>
                </ul>
            </div>
            <div class="principle-note box-inline">
                <h2 class="none">勤記錄</h2>
                <p>利用記錄表詳細記錄每天三餐的飲食內容，同時檢查重點營養素是否有確實補充。<a href="pdf/飲食紀錄手冊_簡易版.pdf" class="txt-orange"  target="_blank">下載紀錄表</a></p>
            </div>
            <div class="notes-motion box-inline">
                <h2 class="none">動一動</h2>
                <p>養成良好及規律的運動習慣。<a href="detail.aspx?no=51" class="txt-green">紐崔萊健康操</a>以活力有氧幫助啟發身體的動能，讓全身動一動！</p>
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
