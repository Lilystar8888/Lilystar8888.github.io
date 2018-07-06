<%@ Page Language="C#" %>

<script runat="server">
    protected override void OnPreInit(EventArgs e)
    {

        PCIndex = "~/campaign-1.aspx";
        MobileIndex = "~/mobile/campaign-1.aspx";

        base.OnPreInit(e);
    }
</script>

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
            <h1 class="h1-title h1-title--page">優惠專案</h1>
            <div class="content-share">
                <a href="javascript:;" class="nav-item nav-item--fb misc textNone">FB分享</a>
                <%--<div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/campaign-1.aspx") %>" style="display: none;"></div>--%>
                <a class="line-it-button nav-item nav-item--line misc" href="http://line.naver.jp/R/msg/text/?<%:Url.ToFull("~/campaign-1.aspx").UrlEncode() %>"></a>
            </div>
            <div class="kv-preferential">
                <img src="images/campaign/kv-preferential@2x.png" alt="">
            </div>
            <div class="bg-shadow">
                <h2 class="h2-title--gift text textNone">送 寵愛漾媽咪禮盒</h2>
            </div>
            <ul class="giftbox">
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000001@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">強健洗髮乳／潤髮乳<span class="h3-giftbox--detail">(280毫升，各1瓶)</span></h3>
                    <p>很多產後的媽咪，洗完頭看到排水孔積了一堆頭髮，都會漰潰的大叫！這段過度期，別忘了多利用時間休息，並可搭配使用含人蔘、桑葉等成分的強健洗潤髮品，有效活化毛囊、促進頭皮循環，改善掉髮問題！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000002@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">優質蛋白素－全植物配方<span class="h3-giftbox--detail">(450公克，各1罐)</span></h3>
                    <p>孩子上幼稚園的「頻繁感冒期」，是很多媽咪的煩惱，除了幫孩子養成勤洗手、戴口罩的習慣，每天早餐加一匙優質蛋白素，提供孩子所需的所有必需胺基酸，健康打好底子，抵抗力提升了，就不容易「感」流行！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000003@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">加美D天然鈣<span class="h3-giftbox--detail">(180錠，1瓶)</span></h3>
                    <p>懷孕期間，胎兒會從媽媽身上快速吸收鈣質，產後每天更有多達200～400毫克的鈣，藉由母乳被寶寶吸走所以產後的媽咪，記得多補充富含鈣、鎂、維生素D3的加美D天然鈣片，才能預防腰酸背痛提早報到！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000004@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">G&H蜂蜜浴露<span class="h3-giftbox--detail">(400毫升，1瓶)</span></h3>
                    <p>有了孩子，多了媽媽的新角色後，常常忙得團團轉，只有沐浴時刻才能好好放鬆一下！添加蜂蜜、小麥萃取蛋白等天然成分的蜂蜜浴露，能溫和潔淨、呵護全身肌膚，讓媽咪享受美好的幸福時光！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000005@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">SA8三合一超效洗衣精<span class="h3-giftbox--detail">(1公升，1瓶)</span></h3>
                    <p>成長中的孩子，天生喜歡動、喜歡探索，衣服也特別容易弄髒。雙酵配方的三合一超效洗衣精，結合預洗、清潔、柔軟三效功能，幫助媽咪輕鬆洗淨衣物，讓全家人天天都能穿上潔淨柔軟的衣服！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000006@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">蔬果清潔劑<span class="h3-giftbox--detail">(940毫升，1瓶)</span></h3>
                    <p>多吃水果有益健康，但果皮上殘留的農藥、污染物讓人好擔心！以紫蘇、蘆薈等天然去污成分製成的蔬果清潔劑，能去除蔬果表面的農藥、重金屬、殺蟲劑，讓全家人吃得更安心！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000007@2x.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">希望工場愛心萬用布<span class="h3-giftbox--detail">(3入)</span></h3>
                    <p>當孩子出生後，媽咪的耐髒度會瞬間驟降，原因是希望給孩子乾淨舒適的居家環境。愛心萬用布採極細科技纖維與最新分割技術，去污、吸水效果超強，是媽咪打掃清潔時的貼心好幫手！</p>
                </li>
            </ul>
            <div class="precautions precautions--campagin">
                <div class="precautions-title precautions-title--campagin">注意事項</div>
                <ol class="decimal">
                    <li>完成並通過「漾媽姐妹淘」身分驗證者，將可於次周一下午1點起享有訂購優惠。</li>
                    <li>訂購優惠方案時需使用促銷專用訂購代碼(請見第65頁產品價目表)。</li>
                    <li>每一直銷權／會員僅享有一次本專案優惠。</li>
                    <li>如辦理退貨，請務必連同贈品一併退回，或扣除等值金額，方可完成退貨。</li>
                    <li>贈品如有瑕疵，請於收到貨品14天內持原購貨發票，至安麗體驗廣場售後服務櫃台，或安麗全台服務據點辦理換貨。</li>
                    <li>安麗公司保有更改贈品之權利。</li>
                </ol>
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
