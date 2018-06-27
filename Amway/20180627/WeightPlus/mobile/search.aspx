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
        <div class="content">
            <h2 class="search-title">搜尋結果</h2>
            <div class="searchbar">
                <input type="text" placeholder=""  required />
                <a href="javascript:;" class="search-btn btn">搜尋</a>
            </div>
<%--            <h2 class="search-subtitle"><a href="javascript:;"><span>植物營養素</span>協助身體排出老舊廢物和毒素</a></h2>
            <p class="search-content"><a href="javascript:;">不復胖計畫的第一步就是<span class="txt-green">植物營養素</span>幫身體排毒！利用淨化期，排除身體累積已久的廢物，<span class="txt-green">植物營養素</span>會感到輕盈...</a></p>
            <h2 class="search-subtitle"><a href="javascript:;">協助身體排出老舊廢物和毒素協助身體排出老舊廢物和毒素</a></h2>
            <p class="search-content"><a href="javascript:;">不復胖計畫的第一步就是<span class="txt-green">植物營養素</span>幫身體排毒！利用淨化期，排除身體累積已久的廢物，<span class="txt-green">植物營養素</span>會感到輕盈...</a></p>
            <h2 class="search-subtitle"><a href="javascript:;">協助身體排出老舊廢物和毒素協助身體排出老舊廢物和毒素</a></h2>
            <p class="search-content"><a href="javascript:;">不復胖計畫的第一步就是<span class="txt-green">植物營養素</span>幫身體排毒！利用淨化期，排除身體累積已久的廢物，<span class="txt-green">植物營養素</span>會感到輕盈...</a></p>--%>
        </div>
        <div id="selector"></div>
        <!-- #include file="footer.aspx" -->
    </div>
    <a href="javascript:;" class="top btn">TOP</a>

    <%-- 存放本頁前端會用到的全域變數 
    --%><script type="text/javascript">
        var Config = <%=new {                

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
