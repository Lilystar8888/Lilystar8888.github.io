<%@ Page Language="C#" %>

<script runat="server">
    protected override void OnPreInit(EventArgs e)
    {

        PCIndex = "~/campaign-3.aspx";
        MobileIndex = "~/mobile/campaign-3.aspx";

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
                <img src="images/campaign/campaign3-mobile.png" alt="">
            </div>
            <div class="bg-shadow">
                
            </div>
            <ul class="giftbox">
                為鼓勵漾媽姊妹淘參與減重比賽，並可藉此邀請更多漾媽加入驗證成為會員，擬於減重比賽活動期間推出漾媽姐妹淘曲線管理挑戰賽8周達標特別獎計畫，詳細活動說明如下：<br/><br/>時間：2017/7/8開始至10/1
<br/>活動內容：凡已驗證或新加入的漾媽姐妹淘成員，並其團隊成功達成曲線管理挑戰賽8周門檻，<br/>即可獲得G&H 【蘆薈沐浴乳+身體乳】Satinique【強健洗髮乳+潤髮乳】各1組。 <span class="h3-giftbox--detail"></span></h3>
                    
              </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/white1.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">蘆薈沐浴乳 400ml </span><span class="h3-giftbox--detail">(價值:$320元)</h3>
                     <p>溫和不刺激的專利配方，全家大小任何膚質都適用，另添加庫拉索蘆薈、綠茶與紅葡萄籽萃取，有效舒緩鎮靜肌膚；水生花卉揉和而成的清新花果香氣，趕走悶熱感，還給肌膚清爽的水感膚觸。 <a href="http://www.amway.com.tw/gh/" target="_blank">更多介紹></a></p>
                </li>
                <li class="giftbox-item">
                    <div class="giftbox-pic">
                        <img src="images/campaign/white2.png" alt="" class="giftbox-img">
                    </div>
                    <h3 class="h3-giftbox">蘆薈身體乳400ml <span class="h3-giftbox--detail">(價值:$360元)</span></h3>
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
                    <h3 class="h3-giftbox">強健潤髮乳 280ml <span class="h3-giftbox--detail">(價值:$420元))</span></h3>
                    <p>改善斷髮，豐沛賦活，適用於脆弱易斷髮質。
強化髮絲，減少斷裂掉髮。促進頭皮循環，激發毛囊新生能量，人蔘及桑葉萃取物，有助於頭髮健康生長，含人蔘及桑葚萃取，保護頭髮不受環境污染與化學物質的傷害。 富含抗氧化物質，是綠茶或紅酒的三倍。<a href="http://satinique.myamway.com.tw/shampoo-healthy.aspx" target="_blank">更多介紹></a>
</p>
                </li>
              
                  
                
            </ul>
            <div class="precautions precautions--campagin">
              <div class="precautions-title precautions-title--campagin">領取流程</div>
                <ol class="decimal">
                     <li>身分: 已驗證或新加入的漾媽姐妹淘成員，並其團隊成功達成曲線管理挑戰賽8周門檻。
</li>
                    <li>方式: 至12個服務據點確認為已驗證的漾媽，並達標8周比賽門檻即可領取。。</li>
                    
                    
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
