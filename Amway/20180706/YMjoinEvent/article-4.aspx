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
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/article-4.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-article"><img src="images/article/article-kv-pic0000004@2x.png" alt=""></div>
            <ul class="articlebox">
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000010@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第1招 B群助攻 喚回好氣色</span></h3>
                    <p>暑假要帶孩子上夏令營，開學後
又要準備三餐、張羅上下課，職
業婦女還得兼顧工作，像陀螺一
樣轉不停，原本透亮的臉蛋在不
知不覺中黯然失色，體力也越來
越差。這時一定要踩踩剎車，約
姐妹淘聊聊心事、抒發壓力，同
時多攝取富含維生素B群的食
物，如動物肝臟、深綠色蔬菜
等，或補充紐崔萊高
效B群雙層錠，8種
完整維生素B、8小
時活力釋放，幫媽咪
隨時保持好體力與
好氣色！</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000011@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第2招 美妝心機 完勝Baby顏值</h3>
                    <p>氣色改善了，你還需要施加一點
美妝心機！秘訣在妝前先做好保
濕，接著塗抹校色、美白、保
濕、防護、持妝五效合一的光感
煥白CC霜，完美修飾膚色和顯
老的黑眼圈，還原肌膚光澤度。
此外，常常被媽咪們忽略的慘淡
唇瓣，不妨擦上顯色飽和、一抹
立現水感的LED鏡光唇蜜，讓
雙唇成為全臉亮點，襯出年輕
光采！
</p>
                </li>
                <li class="articlebox-item">
                    <div class="articlebox-pic"><img src="images/article/articlebox-pic00000012@2x.png" alt="" class="articlebox-img"></div>
                    <h3 class="h3-articlebox">第3招 少吃多動  養成易瘦體質</h3>
                    <p>為什麼明星生完小孩，身材顏值
聞風不動，而我們這些素人一不
小心就淪為大媽？他們沒說的秘
密是，當我們窩在沙發上追韓
劇、大吃燒烤時，他們始終堅
持「管住嘴、邁開腿」，飲食控
制熱量，並隨時保持在「動」的
狀態，例如一邊泡牛奶一邊搖動
屁屁，一邊刷牙一邊深蹲，只要
是讓自己動起來的事情都行。
3招做到了，「嬸味」
也徹底掃除，開學
那天，就準備以超
正的風雲媽之姿，
帶孩子上學去
吧！
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
