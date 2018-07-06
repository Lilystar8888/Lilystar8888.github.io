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
        META_TITLE = "漾媽姐妹淘曲線管理挑戰賽 - 8周達標特別獎-「漾媽清新好禮」";

        /// <summary>
        /// Meta設定: description, og:description
        /// <para>PS: 若未設定 META_OG_DESCRIPTION 值, 則 og:description 使用此值</para>
        /// <para>PS: 中文70字以內, 必填</para>
        /// </summary>
        META_DESCRIPTION = @"漾媽姐妹淘曲線管理挑戰賽 - 8周達標特別獎  團隊八隊達標及可額外獲得 漾媽清新好禮。";

        /// <summary>
        /// Meta設定: og:title
        /// </summary>
        META_OG_TITLE = "漾媽姐妹淘曲線管理挑戰賽 - 8周達標特別獎-「漾媽清新好禮」";

        /// <summary>
        /// Meta設定: og:description
        /// </summary>
        META_OG_DESCRIPTION = @"漾媽姐妹淘曲線管理挑戰賽 - 8周達標特別獎-「漾媽清新好禮」";

        /// <summary>
        /// Meta設定: image_src, og:image
        /// <para>圖檔不得小於50px*50px, 不得大於 130px*110px, 高寬比不得大於3, 必填</para>
        /// </summary>
        META_IMAGE = "~/images/campaign/campaign3.jpg";
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
                <a href="index.aspx" class="nav-item nav-item--home">首頁</a>                <a href="video-list.aspx" class="nav-item">漾媽學堂</a>
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
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/campaign-3.aspx") %>" style="display: none;"></div>
                </div>
            </div>
            <div class="kv-preferential">
                <img src="images/campaign/campaign3.jpg" alt="">
            </div>
            
            <ul class="giftbox">
                
                  <br/>為鼓勵漾媽姊妹淘參與減重比賽，並可藉此邀請更多漾媽加入驗證成為會員，擬於減重比賽活動期間推出漾媽姐妹淘曲線管理挑戰賽8周達標特別獎計畫，詳細活動說明如下：
  <br/><br/>時間：2017/7/8開始至10/1
<br/>活動內容：凡已驗證或新加入的漾媽姐妹淘成員，並其團隊成功達成曲線管理挑戰賽8周門檻，<br/>即可獲得G&H 【蘆薈沐浴乳+身體乳】Satinique【強健洗髮乳+潤髮乳】各1組。 
                    
                </li>
                
                
                 <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/white1.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">蘆薈沐浴乳 400ml
<span class="h3-giftbox--detail">(價值:$320元)</span></h3>
                    <p>溫和不刺激的專利配方，全家大小任何膚質都適用，另添加庫拉索蘆薈、綠茶與紅葡萄籽萃取，有效舒緩鎮靜肌膚；水生花卉揉和而成的清新花果香氣，趕走悶熱感，還給肌膚清爽的水感膚觸。 <a href="http://www.amway.com.tw/gh/" target="_blank">更多介紹></a></p>
              </li>
                 <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/white2.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">蘆薈身體乳400ml
<span class="h3-giftbox--detail">(價值:$360元)</span></h3>
                    <p>質地輕盈、吸收更快速，輕抹後立刻增加129％的水分，給肌膚清爽水感，卻一點也不黏膩，百合花、風信子、綠茶與檀香的氣味淡雅怡人，隱約繚繞鼻息之間。<a href="http://www.amway.com.tw/gh/" target="_blank">更多介紹></a>
</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/white3.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">強健洗髮乳
<span class="h3-giftbox--detail">280ml (價值:$420元)</span></h3>
                    <p>改善斷髮  豐沛賦活，適用於脆弱易斷髮質。
強化髮絲，減少斷裂掉髮，促進頭皮循環，激發毛囊新生能量，人蔘及桑葉萃取物，有助於頭髮健康生長。含人蔘及桑葚萃取，可活化頭皮、減少斷裂，增強髮絲強韌。<a href="http://satinique.myamway.com.tw/shampoo-healthy.aspx" target="_blank">更多介紹></a>
</p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/white4.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">強健潤髮乳 280ml (價值:$420元)</span></h3>
                    <p>改善斷髮，豐沛賦活，適用於脆弱易斷髮質。
強化髮絲，減少斷裂掉髮。促進頭皮循環，激發毛囊新生能量，人蔘及桑葉萃取物，有助於頭髮健康生長，含人蔘及桑葚萃取，保護頭髮不受環境污染與化學物質的傷害。 富含抗氧化物質，是綠茶或紅酒的三倍。<a href="http://satinique.myamway.com.tw/shampoo-healthy.aspx" target="_blank">更多介紹></a>
</p>
                </li>
                
                
               
            </ul>
            <div class="precautions">
                <div class="precautions-title">
                    領取<br>
                    流程
              </div>
                <ol class="decimal">
                    <li>身分: 已驗證或新加入的漾媽姐妹淘成員，並其團隊成功達成曲線管理挑戰賽8周門檻。
</li>
                    <li>方式: 至12個服務據點確認為已驗證的漾媽，並達標8周比賽門檻即可領取。。</li>
                    
                    
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
