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
            <h1 class="h1-title h1-title--page">漾媽分享</h1>
            <!--漾媽分享內容start-->
            <div class="stage4-owlItem" id="momshare0003">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-share-pic/mom-share-pic201706003.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">關於孩子的一切，我特別講究，只選擇最好的！</h2>
                <p>當醫生告訴我：「妳的體質只能生一個孩子」時，我非常沮喪，但我很快收拾心情，更加珍惜媽媽的角色與得來不易的寶貝。關於孩子的一切，我都特別講究，只選擇最好的，例如從小打預防針就選擇較無副作用的自費預防針，蔬果選擇來自天然有機的產地……能這樣守護著孩子的健康，看著他快樂的成長，心中就覺得好滿足！為了讓小孩喝到乾淨安心的好水，問了很多朋友，後來裝了益之源淨水器，孩子變得很喜歡喝水，他告訴我：「幼兒園的水有怪怪的味道，家裡的水好甜喔！」因為孩子還小，吃東西常掉到地上，這時只要用淨水器的水沖一下，就能安心的入口，既方便又不浪費。後來我和這群朋友一起加入「漾媽姐妹淘」，關於孩子的一切，我有了更好的諮詢對象！</p>
            </div>
            <!--漾媽分享內容end-->
            <!--漾媽分享內容start-->
            <div class="stage4-owlItem" id="momshare0002">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-share-pic/mom-share-pic201706002.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">有快樂的媽媽，才有快樂的孩子！</h2>
                <p>當一個新生命從妳身體裡蹦出來，那種感覺好奇妙，會突然覺得自己多了一份很重要的責任。還記得孩子誕生前一兩年，我總是周旋於泡牛奶和換尿布之間，想要好好睡個覺壓根兒是做夢。後來有機會認識一群有經驗的媽咪，我們會分享養兒育女的點滴，我才發現有快樂的媽媽，才有快樂的孩子，因此我開始懂得對自己好一點，當我臉上的笑容變多了，家裡的氣氛也歡樂多了，原來媽咪自己快樂這麼重要呢！透過她們，我還學到很多關於兒童營養、家中飲用水和空氣的保健常識，我把這些應用在照顧孩子上，沒想到孩子真的很少看醫生，不用為了孩子生病而操心，也讓我有更多時間做自己想做的事！現在有了「漾媽姐妹淘」這個社團，感覺多了更多軍師，也更能自信面對當媽的「重責大任」。</p>
            </div>
            <!--漾媽分享內容end-->
            <!--漾媽分享內容start-->
            <div class="stage4-owlItem" id="momshare0001">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-share-pic/mom-share-pic201706001.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">可以陪伴孩子成長，還有「漾媽姐妹淘」相伴覺得好幸福！</h2>
                <p>自從有了孩子後，我不得不fire掉必須經常加班的工作，開始我的全職媽媽生活，一開始有點不適應，因為生活圈突然縮得好小，可以分享心情點滴的人屈指可數。後來我遇見了「漾媽姐妹淘」，這裡的PO文都好實用喔，像最近天氣開始變冷，就教我們如何自製天然的紅豆暖暖包，還有營養小百科、保養新知、親子教養等分享，讓我隨時都能長知識，透過其他漾媽咪的回覆與交流，感覺就像有一群很懂妳的好姐妹呢！「漾媽姐妹淘」還會依據我們的需求，精心設計一些專屬於漾媽咪的活動，讓我有種被「照顧」到的感覺。現在的我，很享受全職媽媽的生活，可以陪伴孩子快樂成長，還有「漾媽姐妹淘」相伴，真的覺得自己好幸福！</p>
            </div>
            <!--漾媽分享內容end-->
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
