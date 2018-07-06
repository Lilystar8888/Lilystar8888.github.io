<%@ Page Language="C#" %>

<script runat="server">
    protected override void OnPreInit(EventArgs e)
    {

        PCIndex = "~/campaign-2.aspx";
        MobileIndex = "~/mobile/campaign-2.aspx";

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
                <%--<div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/campaign-2.aspx") %>" style="display: none;"></div>--%>
                <a class="line-it-button nav-item nav-item--line misc" href="http://line.naver.jp/R/msg/text/?<%:Url.ToFull("~/campaign-2.aspx").UrlEncode() %>"></a>
            </div>
            <div class="kv-preferential">
                <img src="images/campaign/campaign2-mobile.png" alt="">
            </div>
            <div class="bg-shadow">
                
            </div>
            <ul class="giftbox">
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/gift.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">漾媽獨享加價購贈禮-活力保濕面膜乙片<span class="h3-giftbox--detail">(價值:$168元，限一權一次)</span></h3>
                    <p>一片面膜蘊含30公克高濃度速效保濕配方，提升肌膚的保濕力；讓肌膚重現彈性與水嫩。超纖細不織布設計能完全服貼臉部，讓肌膚瞬間綻放清新水漾感！</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue1.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">glister 兒童牙膏<span class="h3-giftbox--detail">(85克，訂貨代碼:3166)</span></h3>
                    <p>添加獨家 REMINACTTM 氟化物安全配方的牙膏，可對抗蛀牙，保護發育中的牙齒，讓牙齒更健康更強壯。草莓口味與派奇熊貓，讓小朋友愛上刷牙。</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue2.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">glister 兒童牙刷<span class="h3-giftbox--detail">(1組4色，訂貨代碼:3167)</span></h3>
                    <p>4種明亮討喜的顏色，讓刷牙更有趣。牙醫推薦的細軟刷毛，可溫和潔淨牙齒，寶貝貼心不滑手握柄設計。貼心學習牙刷設計，有助擠出適當牙膏量的彩色刷毛。不含BPA、PVC及鄰苯二甲酸酯，可安心使用。</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/blue3.png" alt="" class="giftbox-img">
                    </div>
                  <h3 class="h3-giftbox">優質蛋白素─草莓口味
<span class="h3-giftbox--detail">(450克，訂貨代碼:2571)</span></h3>
                    <p>蛋白質是人體的首要營養素，也是孩子成長發育不可或缺的關鍵。
優質蛋白素─草莓口味提供兒童成長所需的優質蛋白質，是小朋友補充營養的最佳選擇。
每一份含50%以上的蛋白質，提供所有必需胺基酸。小朋友最愛的草莓口味，是每天補充營養的最佳飲品。</p>
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
                        <img src="images/campaign/orange.png" alt="" class="giftbox-img">
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
            <div class="precautions precautions--campagin">
                <div class="precautions-title precautions-title--campagin">注意事項</div>
                <ol class="decimal">
                     <li>買藍區任一產品＋橘區任一產品，即享現折100元(不計BV)。例如：買
1藍＋1橘產品折100元，買2藍＋2橘產品折200元，以此類推。</li>
                    <li>凡漾媽驗證成員，成功參加加價購活動，即可獲贈ARTISTRY活力保濕面膜乙片，限一權一次。</li>
                    
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
