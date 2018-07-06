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
    <link href="css/colorbox.css" rel="stylesheet">
    <!-- #include file="~/ga.aspx" -->
</head>
<body>
    <div id="wrap">
        <div class="nav">
            <div class="nav-content">
                <a href="index.aspx" class="nav-item nav-item--logo misc textNone">漾媽姐妹淘</a>
                <a href="index.aspx" class="nav-item nav-item--home">首頁</a>
                <a href="video-list.aspx" class="nav-item">漾媽學堂</a>
                <a href="data.aspx" class="nav-item">加入漾媽FB</a>
                <a href="data.aspx?tab=ocr " class="nav-item">漾媽驗證</a>
                <a href="javascript:;" class="nav-item nav-item--fb misc textNone">FB分享</a>
                <%--<a href="javascript:;" class="nav-item nav-item--line misc textNone" >LINE分享</a>--%>
                <div class="nav-item nav-item--line">
                    <div class="line-it-button" data-lang="zh_Hant" data-type="share-c" data-url="<%:Url.ToFull("~/index.aspx") %>" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div class="content">
            <h1 class="h1-title h1-title--page">漾媽學堂</h1>
            <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="e9_rNoyGWd4"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">曲線</div>
                        <div class="tags-item">窈窕</div>
                    </div>
                    <h3 class="h3-title-video">維持身形有法寶 輕鬆讓您變身曲線漾媽</h3>
                    <p>許多忙碌的媽媽，平日要上班，下班後還得回家打掃和照顧小孩，可能無暇照顧自己，加上年齡增長，身體新陳代謝率下降，如果一不注意，身材可能就會悄悄走樣，窈窕輕盈回不去，究竟該如何成為耀眼自信的曲線漾媽，不讓自己變大嬸呢？帶您一塊去了解！</p>
                </div>
            </div>
            <!--video end-->
            
              <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="bANovHXutg0"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">曲線</div>
                        <div class="tags-item">瘦腰</div>
                    </div>
                    <h3 class="h3-title-video">漾媽課程教您拒當小腹婆 補充營養素+腸道運動</h3>
                    <p>許多媽媽平日都把時間都給了家人，尤其還要照顧精力旺盛的小寶貝，就更沒有時間好好照顧自己，隨著年齡增長，女人的代謝率會更差，一不小心就可能讓腰圍肚子都變大，這樣的媽咪，該如何補充正確營養素，以及透過運動，才能讓自己拒當小腹婆呢？帶您去了解
</p>
                </div>
            </div>
            <!--video end-->
            
            
             <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="QLfD6Z-XKho"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">時尚</div>
                        <div class="tags-item">肌膚</div>
                    </div>
                    <h3 class="h3-title-video">時尚星媽好氣色，肌膚精緻有三招</h3>
                    <p>許多女性朋友當媽媽後，就變成藏鏡人，因為害怕跟又白又嫩的寶貝合照，把臉上的歲月痕跡顯現出來。到底,要如何才能讓媽咪,去學學星媽Hold住顏值，使自己變得超亮眼呢？專家說，清潔保養不能馬虎，還要讓自己上妝後，看起來像是沒上妝，氣色特別好。除了外在保養，也要適當補充水分，攝取維生素，只要這三招，就能吃出跟寶貝一樣，細緻有光的紅潤臉蛋, 跟時尚星媽一樣好看！</p>
                </div>
            </div>
            <!--video end-->
            <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="xkAmQDoSZL0"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">孕婦</div>
                        <div class="tags-item">兒童肥胖</div>
                    </div>
                    <h3 class="h3-title-video">孕婦常喝劣質瓶裝水 較易生出胖寶寶</h3>
                    <p>近年來有關塑膠製品、環境賀爾蒙與兒童肥胖的相關研究受到關注，根據國際期刊Environmental Health Perspective的研究發現：常喝瓶裝水的孕婦，很可能會將塑料環境中的化學成分，雙酚A、塑化劑等環境賀爾蒙，透過胎盤傳給寶寶。而環境賀爾蒙可能影響人體內分泌，增加兒童肥胖的風險，因此孕婦若常喝瓶裝水，所生下的的寶寶，日後成為易胖體質的機率，也會隨之增加，請看我們的報導。</p>
                </div>
            </div>
            <!--video end-->
            <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="YuNqI2vOUms"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">清淨機</div>
                        <div class="tags-item">營養素</div>
                        <div class="tags-item">維生素C</div>
                    </div>
                    <h3 class="h3-title-video">想做超人漾媽，清淨機+補充營養素與維生素C不可少</h3>
                    <p>對於得長期待在家裡的媽媽來說，若家中空氣不好，容易造成頭暈腦脹。而家裡有小孩的媽媽，也為了要照顧孩子，可能經常睡眠不足，要是吃飯又不定時，更是會容易常常生病。因此專家建議，為了增強媽媽的抵抗力，家裡可以擺設空氣清淨機，讓自己呼吸新鮮好空氣，並補充植物營養素及維生素C，這樣即使有再多的家事也不怕，照樣可以讓自己成為超人漾媽喔！</p>
                </div>
            </div>
            <!--video end-->
            <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="NrI6sjJVCI8"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">鍋具</div>
                        <div class="tags-item">營養素</div>
                        <div class="tags-item">維生素B</div>
                    </div>
                    <h3 class="h3-title-video">善用好鍋具做好料理 適時補充營養素成為元氣漾媽</h3>
                    <p>許多媽媽都把時間給了家人，下班回家還要忙家事，家庭工作兩頭燒，甚至還得照顧家中老小。身為媽媽的您，該如何才能擁有滿滿精神體力呢？專家建議，可以善用好用的鍋具，做出快速營養的料理，並且適時補充維生素B及蛋白素，讓自己擁有好氣色，成為不折不扣的元氣漾媽咪。</p>
                </div>
            </div>
            <!--video end-->
            <!--video start-->
            <div class="school">
                <div class="school-videoArea">
                    <div class="school-mask"></div>
                    <div class="school-video" data-ytid="tLoEzEiawFo"><!--置入影片位置--></div>
                    <div class="school-tool">
                        <a href="javascript:;" class="btn-tool btn-tool--play textNone"><!-- 播放/暫停 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--replay"><!-- 重播 --></a>
                        <a href="javascript:;" class="btn-tool btn-tool--sound"><!-- 有聲/無聲 --></a>
                    </div>
                </div>
                <div class="school-explain">
                    <div class="tags">
                        <div class="tags-item">氣色</div>
                        <div class="tags-item">身材</div>
                    </div>
                    <h3 class="h3-title-video">擔心氣色不好身材走樣 擺脫黃臉婆變身時尚漾媽</h3>
                    <p>許多媽媽都把時間給了家人，但卻沒注意到，自己不僅臉色黯沉，氣色不好，甚至身材早已走樣。這樣的媽咪該如何快速保養肌膚與上妝，並且適當補充營養素，讓自己擁有好氣色，迅速擺脫黃臉婆樣，變成時尚漾媽呢？帶您去了解。</p>
                </div>
            </div>
            <!--video end-->
        </div>
        <div class="footer">
            <div class="footer-content">
                <div class="footer-logo misc"><a href="https://www.amway.com.tw/" target="_blank" class="footer-logo--link"></a></div>
                <p class="footer-p">安麗日用品股份有限公司 版權所有 © 2018 Amway Taiwan Company Limited. All Rights Reserved. <br>客服專線 03-353-7800 週一至週五 08:30 - 18:00</p>
            </div>
        </div>
        <a href="javascript:;" class="btn-top misc textNone">TOP</a>
    </div>
    <!--colorbox-->
    <div style="display:none">
        <!--安麗 會員/直銷商登入-->
        <div class="box-login">
            <h2 class="h2-box">安麗 會員/直銷商登入</h2>
            <form  method="post" action="<%:Url.Resolve("~/api/Login.ashx") %>">
                <ul class="box-signin">
                    <li class="box-signinItem"><label>編 號</label><input type="text" id="edtDistNo" name="DistNo" maxlength="7" required data-label="編號" /></li>
                    <li class="box-signinItem"><label>密 碼</label><input type="password" id="edtPassword" name="Password" required data-label="密碼" /></li>
                </ul>
                <a href="javascript:;" class="btn-send">確定送出</a>
                <!--有錯誤時show-->
                <div class="box-account" style="display:block">
                    <p class="p-account">帳號或密碼錯誤 !</p>
                    <ul class="box-process">
                        <li class="box-accountItem"><label>忘記密碼?</label>若已是安麗之直銷商或會員，請前往<a href="https://www.amway.com.tw/InqPassword.aspx" target="_blank" class="btn-link--blue">安麗官網</a>進行忘記密碼流程。</li>
                        <li class="box-accountItem"><label>尚未加入?</label>若尚未成為安麗直銷商或會員，請聯絡<a href="https://www.amway.com.tw/weblight/customer/join.aspx" target="_blank" class="btn-link--blue">安麗客服</a>，加入安麗。</li>
                    </ul> 
                </div>
            </form>
            <a href="javascript:;" class="box-close">關閉</a>
        </div>
        <!--安麗 會員/直銷商登入 錯誤-->
        <div class="box-login--error" style="display:block">
            <h2 class="h2-box">安麗 會員/直銷商登入</h2>
            <p>您尚未成為漾媽姐妹淘的一員，請前往<a href="data.aspx?tab=ocr" class="btn-link--blue">漾媽資格驗證</a>網頁。<br>
驗證完成後，帳號將於12小時後開通，即可登入觀看漾媽學堂精華影片。</p>
            <a href="javascript:;" class="box-close">關閉</a>
        </div>
        <!--commin soon-->
        <div class="box-comingsoon text-center" style="display:block">
            <h2 class="h2-box">漾媽學堂</h2>
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
 <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async defer></script>
</body>
</html>
