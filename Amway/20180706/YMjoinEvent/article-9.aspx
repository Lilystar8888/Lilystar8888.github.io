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
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/article-8.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-article"><img src="images/article/article-kv-pic0000009.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000025.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox" style="color: #559534;">Tip1.&nbsp;「鈣」輕鬆，吃的放鬆劑！</span></h3>
                    <p>透過飲食緩解藍色憂鬱，最好也最簡單的方法就是補充鈣質，不僅讓妳遠離骨質疏鬆的危機，還能舒緩緊繃壓抑的神經，是天然的放鬆劑與鎮定劑。天然食物中，乳製品、芝麻、豆類與綠色蔬菜都是很好的鈣質來源，而更快又有效率的方法就是補充以海藻鈣為來源，同時添加鎂與維生素D3的鈣質營養品，讓鈣吸收更好。</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000026.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">Tip2.&nbsp;美麗是一種態度！再忙也要敷面膜</h3>
                    <p>即使家庭事業兩頭忙，別忘了留一段專屬於「自己的時間」！敷一片保濕面膜，短短的15～20分鐘，甩掉肌膚上的黯沉陰霾，不讓歲月成為妳的枷鎖。晚上尤其是護膚的黃金時機，洗完澡後，認真呵護全身上下每一寸肌膚，尤其是緊皺一整天的眉頭、嘮叨不止的嘴角細紋，趕緊施以撫潤，肌膚更顯柔嫩，隔天繼續光采迎人。
                    </p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000027.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">Tip3.&nbsp;找尋抒壓管道  才有能量更愛家人</h3>
                    <p>在全心全意扮演一個好媽媽的同時，千萬別忽視自己的需求和其他的人際關係，正是幫助我們排解壓力的最佳後盾。試著尋找一個適合自己的舒壓管道，例如：學習繪畫、體驗手工藝、打個電話和閨蜜聊聊，甚至每周固定一個時段，放自己幾個小時的假，短暫脫離家務，絕對是跳脫情緒泥淖的最快捷徑，讓妳重新汲取更多能量迎接生活挑戰。
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
