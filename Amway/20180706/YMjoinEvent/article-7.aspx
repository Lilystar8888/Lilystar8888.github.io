<%@ Page Language="C#" %>

<!DOCTYPE html>
<!--[if IE 7]> <html class="hover ie ie7 ie-static"> <![endif]-->
<!--[if IE 8]> <html class="hover ie ie8 ie-static"> <![endif]-->
<!--[if IE 9]> <html class="hover ie ie9 ie-static"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="zh-TW" class="hover"> <!--<![endif]-->
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="css/owl.carousel2.css">
    <link href="http://fonts.googleapis.com/earlyaccess/notosanstc.css" rel="stylesheet">
    <!-- #include file="~/ga.aspx" -->
</head>
<body>
    <div id="wrap">
        <div class="nav">
            <div class="nav-content">
                <a href="index.aspx" class="nav-item nav-item--logo misc textNone">漾媽姐妹淘</a>
                <a href="index.aspx" class="nav-item nav-item--home">首頁</a>
                <a href="video-list.aspx" class="nav-item">漾媽學堂</a>
                <a href="data.aspx?tab=ocr" class="nav-item">加入漾媽FB</a>
                <a href="data.aspx" class="nav-item">漾媽驗證</a>
                <a href="javascript:;" class="nav-item nav-item--fb misc textNone">FB分享</a>
                <%--<a href="javascript:;" class="nav-item nav-item--line misc textNone" >LINE分享</a>--%>
                <div class="nav-item nav-item--line">
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/index.aspx") %>" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div class="content">
            <h1 class="h1-title h1-title--page">漾媽專欄</h1>
            <div class="content-share">
                <a href="javascript:;" class="nav-item nav-item--fb misc textNone">FB分享</a>
                <div class="nav-item nav-item--line">
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/article-7.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-article"><img src="images/article/article-kv-pic0000007.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000019.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox" style="color: #559534;">Tip1・罩健康！5分鐘搞定營養早餐</span></h3>
                    <p>匆匆忙忙的早晨，最容易跳過的就是早餐！研究發現，24%青少年餓著肚子上學，長期下來不僅透支健康，也影響成長發育。尤其現在小朋友若給零用錢買早餐，大多選擇「好吃」而非「營養」的食物，媽咪一定要抓回早餐的主控權。想為全家人開啟一天健康的開始，優質蛋白質要充足攝取，聰明媽咪可善用調理機，為自己和老公打杯優質蛋白素堅果飲，小朋友可加入水果和優質蛋白素打成果汁，一杯即刻補足早餐所需營養，一整天都朝氣十足！
                    </p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000020.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">Tip2・找幫手！全家人都是得力助手</h3>
                    <p>猶如千手觀音的媽咪，每天面對的事情多又雜，尤其工作和家庭兩頭忙的職業婦女，若沒照顧好自己，怎有能量顧及家人？每天不妨早一點起床，給自己一段完整的Me Time，來杯咖啡、梳妝保養，先醒醒腦。別忘了全家人都是妳的得力助手，告訴孩子起床是自己的事，遲到自己承擔後果；請老公幫忙準備早點，或協助確認出門前的準備工作，公公婆婆的資源也可以多加善用，當個運籌帷幄的聰明媽咪，才能完美掌握晨光節奏！
                    </p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000021.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox" style="color: #5f67ae;">Tip3・早準備！聰明善用前一晚</h3>
                    <p>有時候，小孩和老公慣當「伸手牌」，常是媽咪們寵出來的！妳得先訓練他們獨立自主，不要什麼事情都幫他們處理好。例如整理書包、隔天要穿的衣服、該帶的東西…… 帶著孩子一起建立SOP流程，前一晚就提醒他們自行做好準備。萬一真的忘記帶，也不要急著幫忙當快遞，因為這是訓練他們負責任的好機會！
					</p>
                </li>
            </ul>
            <div class="article--back">
                <a href="article-list.aspx" class="addGroup addGroup--pink">回專欄清單頁</a>
            </div>
        </div>
        <div class="footer">
            <div class="footer-content">
                <div class="footer-logo misc"><a href="https://www.amway.com.tw/" target="_blank" class="footer-logo--link"></a></div>
                <p class="footer-p">安麗日用品股份有限公司 版權所有 © 2018 Amway Taiwan Company Limited. All Rights Reserved. <br>客服專線 03-353-7800 週一至週五 08:30 - 18:00</p>
            </div>
        </div>
        <a href="javascript:;" class="btn-top misc textNone">TOP</a>
    </div>
    <!-- #include file="~/amnet.aspx" -->
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
 <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
</body>
</html>
