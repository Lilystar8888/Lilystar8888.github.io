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
            <div class="kv-article"><img src="images/article/article-kv-pic0000008.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000022.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox" style="color: #559534;">巧思1・野餐便當輕鬆做</span></h3>
                    <p>還在傷腦筋野餐吃什麼嗎？用多功能金鍋製作造型小餅乾、小Pizza，或是準備一口大小的三明治、壽司，都是簡單又討喜的野餐料理。再花點小巧思，將沙拉醬及五顏六色的生菜、水果依序放入玻璃罐中，食用前搖一搖，好看又營養，全家吃得更開心。就算做料理不是媽咪的強項也沒關係，安麗野餐趣現場請到專業型男主廚教妳輕鬆做哦！</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000023.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">巧思2・搶鏡親子裝</h3>
                    <p>有主題的「Outdoor Party」能讓野餐更有趣！不管是牛仔風、南洋風、還是華麗優雅風，讓孩子用衣服、配飾發揮主題創意，道具交給爸爸準備，媽咪的「主題妝」也得到位，以CC霜、氣墊粉餅、眼影、唇膏妝點五官，全家閃亮登場，保證成為全場最吸睛的焦點，還有機會贏得親子造型比賽，把專業親子寫真帶回家，留下美好回憶。
                    </p>
                </li>
                <li class="articlebox-item">
                    <h3 class="h3-articlebox" style="color: #5f67ae;">巧思3・揪一揪人多更好玩</h3>
                    <p>帶著小毛頭出外野餐，想要他們乖乖坐在野餐墊上享受陽光，那真的是痴心妄想。如果不想追著孩子滿場跑，何不把孩子的小玩伴全部相揪野餐趣，人越多越好玩。孩子們可以盡情在五大遊戲區放風跑跳、大人樂得輕鬆聊八卦。還在等什麼，快去揪團一起玩吧！</p>
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000024.png" alt="" class="articlebox-img" style="margin-top: 7rem;"></div>
                    <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
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
