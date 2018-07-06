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
            <div class="kv-article"><img src="images/article/article-kv-pic0000005@2x.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000013@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第1招 甩掉大腿肉
</span></h3>
                    <p>夏天還沒結束，小姐時期的熱褲請掛在
衣櫃顯眼處，小孩抱起來，就是「現成
啞鈴」，雙腿打開比肩稍寬，膝蓋和
腳尖微微向外，想像屁屁下方有張椅子
往下坐，記住，頭頂、背到屁屁要呈一
直線。透過深蹲，能助你重返蜜大腿行
列，蝴蝶袖也在小孩啞鈴的加持下變緊
實，小孩還會以為你在跟他玩遊戲，包
準樂得呵呵笑！</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000014@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第2招 小腹掰掰囉</h3>
                    <p>生過小孩的媽咪都知道，小腹會變魔術，稍微吃多了
點，立馬凸出4個月的孕肚！快來試試可鍛鍊腹部核
心肌群的棒式，手肘放在肩膀正下方，膝蓋與臀部同
寬，膝蓋可採跪式，想增加強度則可離地。媽咪可以
把寶寶放在墊子上，和心愛的寶寶深情對望，或請剛
學會數數的寶貝幫助讀秒，有小寶貝在旁鼓勵，動力
指數5顆星，媽咪的甩肉大業指日可待！

</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000015@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第3招 霹靂腰包Out</h3>
                    <p>揮之不去的腰間肉、環狀游泳圈，是媽咪心中的
痛，只好拚命穿著深色寬鬆衣物遮掩…… 其實
解方很簡單。請坐在床上或地板上，膝蓋靠攏，
雙手環抱小寶貝，收緊腹部，左
右小幅度慢慢扭轉，感覺腰間肌
肉有使力拉伸的感覺就對了。一
有機會就做，S型腰線很快就來
報到囉！
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
