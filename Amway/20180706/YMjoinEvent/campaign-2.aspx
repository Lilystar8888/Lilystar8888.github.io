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
        META_TITLE = "漾媽姐妹淘-開學好給力加價購優惠專案";

        /// <summary>
        /// Meta設定: description, og:description
        /// <para>PS: 若未設定 META_OG_DESCRIPTION 值, 則 og:description 使用此值</para>
        /// <para>PS: 中文70字以內, 必填</para>
        /// </summary>
        META_DESCRIPTION = @"買藍區兒童新生活力產品，及橘區漾媽美麗好禮。漾媽專屬 獨享ARTISTRY活力保濕面膜乙片。";

        /// <summary>
        /// Meta設定: og:title
        /// </summary>
        META_OG_TITLE = "漾媽姐妹淘-開學好給力加價購優惠專案";

        /// <summary>
        /// Meta設定: og:description
        /// </summary>
        META_OG_DESCRIPTION = @"買藍區兒童新生活力產品，及橘區漾媽美麗好禮。漾媽專屬 獨享ARTISTRY活力保濕面膜乙片。";

        /// <summary>
        /// Meta設定: image_src, og:image
        /// <para>圖檔不得小於50px*50px, 不得大於 130px*110px, 高寬比不得大於3, 必填</para>
        /// </summary>
        META_IMAGE = "~/images/campaign/campaign2.jpg";
        /// <summary>
        /// Meta設定: keyword
        /// <para>考慮keyword density 約四到五組詞彙，以半形逗號隔開</para>
        /// </summary>
        META_KEYWORD = "安麗,媽媽,育嬰,親子,時尚,潮流,新知,健康,生活,生命,glister,兒童牙膏,兒童牙刷";
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
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/campaign-2.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-preferential">
                <img src="images/campaign/campaign2.jpg" alt="">
            </div>
            
            <ul class="giftbox">
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/gift.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">漾媽獨享加價購贈禮-活力保濕面膜乙片
<span class="h3-giftbox--detail">(價值:$168元，限一權一次)</span></h3>
                    <p>一片面膜蘊含30公克高濃度速效保濕配方，提升肌膚的保濕力；讓肌膚重現彈性與水嫩。超纖細不織布設計能完全服貼臉部，讓肌膚瞬間綻放清新水漾感！</p>
                </li>
                 <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue1.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">glister 兒童牙膏
<span class="h3-giftbox--detail">(85克，訂貨代碼:3166)</span></h3>
                    <p>添加獨家 REMINACTTM 氟化物安全配方的牙膏，可對抗蛀牙，保護發育中的牙齒，讓牙齒更健康更強壯。草莓口味與派奇熊貓，讓小朋友愛上刷牙。
</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue2.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">glister 兒童牙刷
<span class="h3-giftbox--detail">(1組4色，訂貨代碼:3167)</span></h3>
                    <p>4種明亮討喜的顏色，讓刷牙更有趣。牙醫推薦的細軟刷毛，可溫和潔淨牙齒，寶貝貼心不滑手握柄設計。貼心學習牙刷設計，有助擠出適當牙膏量的彩色刷毛。不含BPA、PVC及鄰苯二甲酸酯，可安心使用。</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue3.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">優質蛋白素─草莓口味
<span class="h3-giftbox--detail">(450克，訂貨代碼:2571)</span></h3>
                    <p>蛋白質是人體的首要營養素，也是孩子成長發育不可或缺的關鍵。
優質蛋白素─草莓口味提供兒童成長所需的優質蛋白質，是小朋友補充營養的最佳選擇。每一份含50%以上的蛋白質，提供所有必需胺基酸。小朋友最愛的草莓口味，是每天補充營養的最佳飲品。</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue4.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">兒童綜合營養嚼片
<span class="h3-giftbox--detail">(90錠，訂貨代碼:2534)</span></h3>
                    <p>忙碌讓你無法為寶貝準備三餐？一錠就相當於3顆水蜜桃的維生素C、1~1.5杯牛奶的維生素D、23公升大骨湯的鈣、8隻牡蠣的鋅…等，天天輕鬆補充均衡營養！

內含12種維生素和4種礦物質，營養更豐富
，並添加針葉櫻桃、番石榴、腰果樹莖果、鳳梨、百香果共5種天然植物濃縮素
。俏皮的足球造型嚼片，水果風味，深受小朋友喜愛。</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/orange1.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">高效B群雙層錠<span class="h3-giftbox--detail">(120錠，訂貨代碼:2616)</span></h3>
                    <p>補充Ｂ群，有助於能量正常代謝，讓你精力充沛迎接挑戰，生活更精彩！
8小時階段釋出：雙層錠片設計，人體吸收更有效率。8小時活力釋放：緩釋補充維生素B，維持能量代謝。8種完整維生素B：團隊合作，發揮最佳效用，一錠讓你元氣滿滿。每天不到8塊錢：滿足一日所需，經濟又方便。  </p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/orange2.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">LED鏡光唇蜜<span class="h3-giftbox--detail">(6毫升，訂貨代碼:3543~3550)</span></h3>
                    <p>8色閃耀登場 點亮唇在感
3D珠光顯色粒子，一抹立現鏡光妝感。水感植萃配方，淡化唇紋、綻放嬌唇，
酷炫LED光源與鏡面設計，隨時上妝超便利。</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/orange3.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">光感煥白CC霜
<span class="h3-giftbox--detail">(30毫升,訂貨代碼：	3511)</span></h3>
                    <p>修飾膚色、防曬、滋潤。 能有效阻隔
UVA/UVB預防肌膚曬黑、老化現象，並且提供修飾膚色呈現勻稱膚質。</p>
                </li>
                
               
            </ul>
            <div class="precautions">
                <div class="precautions-title">
                    注意<br>
                    事項
              </div>
                <ol class="decimal">
                    <li>買藍區任一產品＋橘區任一產品，即享現折100元(不計BV)。例如：買
1藍＋1橘產品折100元，買2藍＋2橘產品折200元，以此類推。</li>
                    <li>凡漾媽驗證成員，成功參加加價購活動，即可獲贈ARTISTRY活力保濕面膜乙片，限一權一次。</li>
                    
                    
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
    <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async defer></script>
</body>
</html>
