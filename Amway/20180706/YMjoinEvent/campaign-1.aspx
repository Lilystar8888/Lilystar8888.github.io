<%@ Page Language="C#" %>

<script runat="server">
    protected override void OnInit(EventArgs e)
    {
        #region Meta 設定
        /// <summary>
        /// Meta設定: Title, og:title
        /// <para>PS: 若未設定 META_OG_TITLE 值, 則 og:title 使用此值</para>
        /// <para>PS: 英數字60字元，中文30字以內, 必填</para>
        /// </summary>
        META_TITLE = "漾媽姐妹淘-寵愛漾媽咪優惠專案";

        /// <summary>
        /// Meta設定: description, og:description
        /// <para>PS: 若未設定 META_OG_DESCRIPTION 值, 則 og:description 使用此值</para>
        /// <para>PS: 中文70字以內, 必填</para>
        /// </summary>
        META_DESCRIPTION = @"買益之源飲水器，送寵愛漾媽咪禮盒。守護全家人飲水健康的同時，媽咪也要記得寵愛自己喔。";

        /// <summary>
        /// Meta設定: og:title
        /// </summary>
        META_OG_TITLE = "漾媽姐妹淘-寵愛漾媽咪優惠專案";

        /// <summary>
        /// Meta設定: og:description
        /// </summary>
        META_OG_DESCRIPTION = @"買益之源飲水器，送寵愛漾媽咪禮盒。守護全家人飲水健康的同時，媽咪也要記得寵愛自己喔。";

        /// <summary>
        /// Meta設定: image_src, og:image
        /// <para>圖檔不得小於50px*50px, 不得大於 130px*110px, 高寬比不得大於3, 必填</para>
        /// </summary>
        META_IMAGE = "~/images/banner/banner20170630_001.jpg";
        /// <summary>
        /// Meta設定: keyword
        /// <para>考慮keyword density 約四到五組詞彙，以半形逗號隔開</para>
        /// </summary>
        META_KEYWORD = "安麗,媽媽,育嬰,親子,時尚,潮流,新知,健康,生活,生命,益之源";
        #endregion

        base.OnInit(e);
    }
</script>


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
            <h1 class="h1-title h1-title--page">優惠專案</h1>
            <div class="content-share">
                <a href="javascript:;" class="nav-item nav-item--fb misc textNone">FB分享</a>
                <div class="nav-item nav-item--line">
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/campaign-1.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-preferential">
                <img src="images/campaign/kv-preferential.png" alt="">
            </div>
            <h2 class="h2-title--gift text textNone">送 寵愛漾媽咪禮盒</h2>
            <ul class="giftbox">
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000001.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">強健洗髮乳／潤髮乳<span class="h3-giftbox--detail">(280毫升，各1瓶)</span></h3>
                    <p>很多產後的媽咪，洗完頭看到排水孔積了一堆頭髮，都會漰潰的大叫！這段過度期，別忘了多利用時間休息，並可搭配使用含人蔘、桑葉等成分的強健洗潤髮品，有效活化毛囊、促進頭皮循環，改善掉髮問題！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000002.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">優質蛋白素－全植物配方<span class="h3-giftbox--detail">(450公克，各1罐)</span></h3>
                    <p>孩子上幼稚園的「頻繁感冒期」，是很多媽咪的煩惱，除了幫孩子養成勤洗手、戴口罩的習慣，每天早餐加一匙優質蛋白素，提供孩子所需的所有必需胺基酸，健康打好底子，抵抗力提升了，就不容易「感」流行！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000003.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">加美D天然鈣<span class="h3-giftbox--detail">(180錠，1瓶)</span></h3>
                    <p>懷孕期間，胎兒會從媽媽身上快速吸收鈣質，產後每天更有多達200～400毫克的鈣，藉由母乳被寶寶吸走所以產後的媽咪，記得多補充富含鈣、鎂、維生素D3的加美D天然鈣片，才能預防腰酸背痛提早報到！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000004.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">G&H蜂蜜浴露<span class="h3-giftbox--detail">(400毫升，1瓶)</span></h3>
                    <p>有了孩子，多了媽媽的新角色後，常常忙得團團轉，只有沐浴時刻才能好好放鬆一下！添加蜂蜜、小麥萃取蛋白等天然成分的蜂蜜浴露，能溫和潔淨、呵護全身肌膚，讓媽咪享受美好的幸福時光！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000005.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">SA8三合一超效洗衣精<span class="h3-giftbox--detail">(1公升，1瓶)</span></h3>
                    <p>成長中的孩子，天生喜歡動、喜歡探索，衣服也特別容易弄髒。雙酵配方的三合一超效洗衣精，結合預洗、清潔、柔軟三效功能，幫助媽咪輕鬆洗淨衣物，讓全家人天天都能穿上潔淨柔軟的衣服！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000006.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">蔬果清潔劑<span class="h3-giftbox--detail">(940毫升，1瓶)</span></h3>
                    <p>多吃水果有益健康，但果皮上殘留的農藥、污染物讓人好擔心！以紫蘇、蘆薈等天然去污成分製成的蔬果清潔劑，能去除蔬果表面的農藥、重金屬、殺蟲劑，讓全家人吃得更安心！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/giftbox-pic0000007.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">希望工場愛心萬用布<span class="h3-giftbox--detail">(3入)</span></h3>
                    <p>當孩子出生後，媽咪的耐髒度會瞬間驟降，原因是希望給孩子乾淨舒適的居家環境。愛心萬用布採極細科技纖維與最新分割技術，去污、吸水效果超強，是媽咪打掃清潔時的貼心好幫手！</p>
                </li>
            </ul>
            <div class="precautions">
                <div class="precautions-title">
                    注意<br>
                    事項
                </div>
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
