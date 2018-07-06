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


            <!--漾媽專欄 2018 Jan 月刊start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201801@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">揮別虎姑婆，化身優雅淡定媽</h2>
                <p>工作、家務、孩子、公婆…… 種種壓力，容易讓媽咪情緒暴走，成了齜牙裂嘴的虎姑婆。有快樂的媽媽，才有快樂的孩子和圓滿的家庭！照顧家人的同時，也別忘了愛自己，正視妳內心的需求，不委屈自己，才能遠離焦躁、舒緩情緒，讓自己成為人見人愛的優雅媽咪。<a href="article-9.aspx" class="btn-read">Read more</a>
                </p>
            </div>
            <!--漾媽專欄 2018 Jan 月刊end-->

            <!--漾媽專欄 2017 Nov 月刊start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201711@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">從容迎戰，再也不爆出門氣</h2>
                <p>媽咪，妳有沒有算過早上出門前，自己說了幾次「快一點」？孩子什麼事都慢三拍、老公只顧自己好？每天出門前，媽咪最容易長出惡魔角變身吼叫媽！想要告別手忙腳亂、滿肚子火的早晨，3個小改變，讓妳從容迎戰！<a href="article-7.aspx" class="btn-read">Read more</a>
                </p>
            </div>
            <!--漾媽專欄 2017 Nov 月刊end-->
            
            
            <!--漾媽專欄內容start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                     <img src="images/mom-column-pic/mom-column-pic201706006@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">時尚媽咪這樣「妝」，走到哪兒都美美der</h2>
                <p>「黃臉婆」、「糟糠妻」的時代已經過去了，現在的媽咪個個保養得宜、光采亮眼，即使年過30，也已摸索出什麼適合自己、妝扮起來最美。想要走到哪兒都美美der，快看這兒！<a href="article-6.aspx" class="btn-read">Read more</a></p>
            </div>
            <!--漾媽專欄內容end-->
            
            <!--漾媽專欄內容start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201706005@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">甩肉親子操，小寶貝變身運動利器</h2>
                <p>每次遇到未婚姐妹淘問：「生完那麼久，怎麼還沒瘦下來？」總忍不住想翻白眼回嗆：「你生一個試試，有時間運動才怪！」媽咪們請息怒，眼白也請調回正常位置！來，快透過甩肉＋陪玩的親子操，帶寶寶一起動起來！<a href="article-5.aspx" class="btn-read">Read more</a></p>
            </div>
            <!--漾媽專欄內容end-->
                       <!--漾媽專欄內容start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201706004@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4">「嬸味」大掃除，變身風雲媽</h2>
                <p>婚前是「女神」，婚後生了孩子立馬變「女嬸」？看看你自己，帶孩子上學必戴帽子加口罩，深怕被孩子同學的超正辣媽看到，孩子嘴巴沒說，但當媽的你一定要知道，他們每天都祈禱自己的媽也有令人欣羨的容貌！迎接開學季，孩子準備好了，那你呢？<a href="article-4.aspx" class="btn-read">Read more</a></p>
            </div>
            <!--漾媽專欄內容end-->
            <!--漾媽專欄內容start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201706003@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4 justify">拒當逼哀小「腹」婆</h2>
                <p>你是腰圍超標的小腹婆，一上廁所就「結屎面」嗎？有苦說不出的「滿腹牢騷」，只要告別混亂的代謝危機，找回健康腸道環境，今夏包你輕鬆「炫腹」！<a href="article-3.aspx" class="btn-read">Read more</a></p>
            </div>
            <!--漾媽專欄內容end-->
            <!--漾媽專欄內容start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201706002@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4 justify">免疫力UP！拒絕「感」流行</h2>
                <p>3招變身超人媽咪！每個媽咪，都是超人來著！是大廚師、是護士、是老師，要搞定家事，也是玩具修理師，有時還得扮演心理諮商師……，想變身超人媽咪，不僅需要超強體力，還要擁有健康免疫力，才能輕鬆應付所有任務，並保護家中寶貝免於感染危機！<a href="article-2.aspx" class="btn-read">Read more</a></p>
            </div>
            <!--漾媽專欄內容end-->
            <!--漾媽專欄內容start-->
            <div class="stage4-owlItem">
                <div class="stage4-owlItem--pic">
                    <img src="images/mom-column-pic/mom-column-pic201706001@2x.png" alt="">
                </div>
                <h2 class="h2-title h2-title--stage4 justify">Follow時尚星媽，好氣色輕鬆Get！</h2>
                <p>臉書曬小孩，很多媽咪都成了藏鏡人，因為害怕與又白又嫩的寶貝合照，臉上的歲月痕跡立馬三級跳！現在，就來學學星媽hold住顏值的招數，就算是孩子的嘛，還是要超亮眼！<a href="article-1.aspx" class="btn-read">Read more</a></p>
            </div>
            <!--漾媽專欄內容end-->
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
