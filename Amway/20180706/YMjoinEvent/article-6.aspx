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
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/article-6.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-article"><img src="images/article/article-kv-pic0000006@2x.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000016@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">場合1・帶孩子上學，心機裸妝不能輸
</span></h3>
                    <p>帶有健康色澤的光感裸肌是底妝
主流，一大早帶小孩上學，近似
素顏的「無感妝容」剛剛好！別
忘了妝前的保濕功課先做足，熟
女媽咪請選用抗老精華加強呵
護，讓臉蛋透出彈潤光澤。妝前
保養搞定了，接著就靠具潤色效果的
CC霜把黯黃氣色藏起來，再選擇與
膚色相近的氣墊粉餅，少量多次輕拍
上去，讓妝效更服貼輕透。自然妝容
配上親切笑容，你就是最有觀眾緣的媽咪！</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000017@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">場合2・上班前修修臉，怎麼拍都像妹</h3>
                    <p>很多上班族媽咪為了省時間，常常一盒氣墊粉
餅拍全臉，或是選用不適合自己膚色的底妝，
膚色顯得過白，反而讓人覺得你的妝很濃、有
年代感！想要變年輕，加上「修容」這一招
就ok！拍氣墊粉餅時，記得集中在額頭、兩
頰3點連線之間的區域，其餘部位則輕拍即
可，可營造底妝的輕透質感，然後再搭配修容
產品針對T字和臉側加強明暗，五官的立體度
跳出來，和同事自拍怎麼拍都像妹！

</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000018@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">場合3・眼唇加點顏色，自信完勝交際圈</h3>
                    <p>當了媽，偶爾還是要和好姊妹跑跑趴！出席交際
場合，想要營造年輕妝感，可以試試銀灰色的眼
影，點綴在上眼皮正中央，搭配棕色調眼線，更
顯清新減齡；想要彰顯優雅氣質，不妨嘗試大地
色系，無論作為視覺主色或輕點眼尾，都能讓眼
神充滿知性魅力。唇彩
可選擇粉櫻、粉橘等色
系，帶出肌膚的透明
感。最後，記得說話
時，眼神要專注、姿態
要自信，一舉一動都超
吸睛！
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
