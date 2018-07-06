<%@ Page Language="C#" %>
<%
    //Response.Redirect(Url.ToFull("~/mobile/data.aspx"));
%>
<!DOCTYPE html>
<html lang="zh-TW">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <!-- #include file="~/ga.aspx" -->
</head>
<body>
    <div id="wrap">
        <div class="header">
            <a href="index.aspx" class="nav-item nav-item--logo misc textNone">漾媽姐妹淘</a>
            <nav class="nav">
                <a href="index.aspx" class="nav-item nav-item--home">首頁</a>
                <a href="video-list.aspx" class="nav-item">漾媽學堂</a>
                <a href="data.aspx" class="nav-item">加入漾媽FB</a>
                <a href="data.aspx?tab=ocr " class="nav-item">漾媽驗證</a>
                <div class="nav-share">
                    <span class="nav-share--text">分享</span>
                    <a href="javascript:;" class="nav-item nav-item--fb misc">FB</a>
<%--                        <div class="line-it-button" data-lang="zh_Hant" data-type="share-d" data-url="<%:Url.ToFull("~/index.aspx") %>" style="display: none;"></div>--%>
                    <a class="nav-item nav-item--line misc line-it-button" href="http://line.naver.jp/R/msg/text/?<%:Url.ToFull("~/index.aspx").UrlEncode() %>"></a>
                </div>
            </nav>
            <a href="javascript:;" class="menu">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
        <div class="content">
            <h1 class="h1-title h1-title--page">漾媽專欄</h1>
            <div class="content-share">
                <a href="javascript:;" class="nav-item nav-item--fb misc textNone">FB分享</a>
                <%--<div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/article-3.aspx") %>" style="display: none;"></div>--%>
                <a class="nav-item nav-item--line misc line-it-button" href="http://line.naver.jp/R/msg/text/?<%:Url.ToFull("~/article-3.aspx").UrlEncode() %>"></a>
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
                <a href="article-list.aspx" class="btn-hollow btn--arrow">回專欄清單頁</a>
            </div>
        </div>
        <!-- #include file="footer.aspx" -->
        <a href="javascript:;" class="btn-top misc">TOP</a>
    </div>
        <!--colorbox-->
    <div style="display:none">
        <!--安麗 會員/直銷商登入-->
        <div class="box-login">
            <h2 class="h2-title">安麗 會員/直銷商登入</h2>
            <form  method="post" action="<%:Url.Resolve("~/api/Login.ashx") %>">
                <ul class="box-signin">
                    <li class="box-signinItem"><label>編 號</label><input type="text" id="edtDistNo" name="DistNo" maxlength="7" required data-label="編號" /></li>
                    <li class="box-signinItem"><label>密 碼</label><input type="password" id="edtPassword" name="Password" required data-label="密碼" /></li>
                </ul>
                <div class="flex"><a href="javascript:;" class="btn-solid btn--arrow">確定送出</a></div>
                <!--有錯誤時show-->
                <div class="box-account" style="display:block">
                    <p class="p-account">帳號或密碼錯誤 !</p>
                    <ul class="box-process">
                        <li class="box-accountItem"><label>忘記密碼?</label>若已是安麗之直銷商或會員，請前往<a href="https://www.amway.com.tw/InqPassword.aspx" target="_blank" class="btn-hollow btn-hollow--blue">Am-Card </a>進行忘記密碼流程。</li>
                        <li class="box-accountItem"><label>尚未加入?</label>若尚未成為安麗直銷商或會員，請聯絡<a href="https://www.amway.com.tw/weblight/customer/join.aspx" target="_blank" class="btn-hollow btn-hollow--blue">安麗客服</a>，加入安麗。</li>
                    </ul> 
                </div>
            </form>
            <a href="javascript:;" class="box-close">關閉</a>
        </div>
        <!--安麗 會員/直銷商登入 錯誤-->
        <div class="box-login--error">
            <h2 class="h2-title">安麗 會員/直銷商登入</h2>
            <p>您尚未成為漾媽姐妹淘的一員，請前往<a href="data.aspx?tab=ocr" class="btn-hollow btn-hollow--blue">漾媽資格驗證</a>網頁。<br>
驗證完成後，帳號將於12小時後開通，即可登入觀看漾媽學堂精華影片。</p>
            <a href="javascript:;" class="box-close">關閉</a>
        </div>
        <!--commin soon-->
        <div class="box-comingsoon text-center">
            <h2 class="h2-title">漾媽學堂</h2>
            <p class="text18">Coming Soon<br>敬請期待</p>
            <a href="javascript:;" class="box-close">關閉</a>
        </div>
    </div>
    <!-- #include file="~/amnet.aspx" -->
    <%-- 存放本頁前端會用到的全域變數 
    --%><script type="text/javascript">
        var Config = <%=new {                
                    LoginName = Session["Login"]
            }.ToJson() %>;
    </script>
    <script src="<%:Url.Resolve("~/js/config.js")%>" type="text/javascript"></script>
    <%-- 當要引用第三方 js module (其 source 中無 define 依存 module 時, 請依以下設定方式加入第三方 js 模組
        <script type="text/javascript">
            require.paths.MODULE_NAME = JSLibPath('jquery/FILE_NAME_NO_EXT_JS');
            require.shim.MODULE_NAME = ['jquery'];
        </script>
    --%><script src="<%:Url.Resolve("~/js/lib/requirejs/require-2.1.20.min.js")%>" data-main="<%:MainJs%>" type="text/javascript" async></script>
    <%--<script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>--%>
</body>
</html>
