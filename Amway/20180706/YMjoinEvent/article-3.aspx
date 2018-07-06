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
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/article-3.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-article"><img src="images/article/article-kv-pic0000003@2x.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic0000007@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第1招 吃的對 腸道垃圾Out</span></h3>
                    <p>寶貝有時乖的像Dora，有時又「番」的像小新，辛苦的媽咪不只生活忙碌，心情也常被搞得想淚奔海邊喊出心中的逼哀……無暇好好照顧自己，嘗到環境常被壞菌佔領，此時不只腸塞車，人老得快，容易生病，皮膚也常出狀況！吃進甚麼是關鍵：記得多喝好水，拉抬隨年齡降低的代謝循環；多吃富含纖維的蔬果與全穀類食物，幫助排便排毒；搭配複合活性乳酸菌，幫助好菌擴大勢力範圍，讓腸道更健康！</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic0000008@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第2招 動一動 腰瘦快快來</h3>
                    <p>別忘了每天給自己固定時段醞釀便意，腸道消化代謝順暢，自然不會大腹便便！若遇如廁卡卡，可用掌心繞著肚臍外3公分，從右下方以順時針方向按摩，幫助排解難纏宿便：搭配核心肌群訓練，增加身體的協調性，讓腹部更緊實有力。此外，吃完飯後，別急著坐下來滑手機，可以出門散散步，才能鞭策腸胃加緊工作，讓身體代謝維持好的循環！</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic0000009@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第3招 心情好 腸道跟著好</h3>
                    <p>腸道如同人的第二「大腦」，有上億個神經細胞控制著讓我們心情愉悅的激素，最近調查發現，超過5成便秘的上班族特別易怒，可見精神壓力影響排便，便秘也左右了情緒好壞。面對生活中的柴米油鹽醬醋茶，媽咪們可以學習轉念，讓自己更快活，例如想像掃地時正在消耗卡路里，把洗碗當玩水，摺衣服可以配音樂……為生活加點正向能量，心不累，腸道才能鬆口氣，一起告別小腹婆人生！</p>
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
