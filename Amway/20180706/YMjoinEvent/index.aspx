﻿    <%@ Page Language="C#" %>
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
    <!-- #include file="~/ga.aspx" -->
</head>
<body class="index">
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
        <div class="stage1">
            <div class="stage1-owl">
                <div class="owl-carousel owl-theme">


                    <!--banner1 start-->
                    <!--<a target="_blank" href="http://www.amwaypicnic.com.tw/" class="owl-item--link">
                        <img src="images/banner/banner20171101.jpg" alt="">
                    </a>-->
					
                        <img src="images/banner/banner20171101.jpg" alt="">
                   
                    <!--banner1 end-->

                </div>
            </div>
        </div>
        <div class="stage2">
            <h2 class="h2-title">漾媽姐妹淘 三大獨享方案</h2>
            <div class="stage2-content">
                <div class="stage2-items stage2-items--item1 stage2items"></div>
                <div class="stage2-items stage2-items--item2 stage2items"></div>
                <div class="stage2-items stage2-items--item3 stage2items"></div>
            </div>
        </div>
        <div class="stage3">
            <div class="stage3-owl">
                <div class="owl-carousel owl-theme">
                    <div class="stage3-video youtubevideo" data-ytid="BTo8nUKl5x0"></div>
                    
                </div>
            </div>
        </div>
        <div class="stage4">
            <div class="stage4-owl">
                <div class="owl-carousel owl-theme">
                    <!--漾媽分享第1組start-->
                    <div class="stage4-owlItem">
                        <div class="stage4-owlItem--pic">
                            <img src="images/mom-share-pic/mom-share-pic201706001.png" alt="">
                        </div>
                        <h2 class="h2-title h2-title--stage4">可以陪伴孩子成長，還有「漾媽姐妹淘」相伴覺得好幸福！</h2>
                        <p>自從有了孩子後，我不得不fire掉必須經常加班的工作，開始我的全職媽媽生活，一開始有點不適應，因為生活圈突然縮得好小，可以分享心情點滴的人屈指可數。後來我遇見了「漾媽姐妹淘」，這裡的PO文都好實用喔，像最近天氣開始變冷，就教我們如何自製天然的紅豆暖暖包，還有營養小百科、保養新知、親子教養等分享，讓我隨時都能長知識...<a href="share-list.aspx#momshare0001" class="btn-read">Read more</a></p>
                    </div>
                    <!--漾媽分享第1組end-->
                    <!--漾媽分享第2組start-->
                    <div class="stage4-owlItem">
                        <div class="stage4-owlItem--pic">
                            <img src="images/mom-share-pic/mom-share-pic201706002.png" alt="">
                        </div>
                        <h2 class="h2-title h2-title--stage4">有快樂的媽媽，才有快樂的孩子！</h2>
                        <p>自當一個新生命從妳身體裡蹦出來，那種感覺好奇妙，會突然覺得自己多了一份很重要的責任。還記得孩子誕生前一兩年，我總是周旋於泡牛奶和換尿布之間，想要好好睡個覺壓根兒是做夢。後來有機會認識一群有經驗的媽咪，我們會分享養兒育女的點滴，我才發現有快樂的媽媽，才有快樂的孩子，因此我開始懂得對自己好一點...<a href="share-list.aspx#momshare0002" class="btn-read">Read more</a></p>
                    </div>
                    <!--漾媽分享第2組end-->
                    <!--漾媽分享第3組start-->
                    <div class="stage4-owlItem">
                        <div class="stage4-owlItem--pic">
                            <img src="images/mom-share-pic/mom-share-pic201706003.png" alt="">
                        </div>
                        <h2 class="h2-title h2-title--stage4">關於孩子的一切，我特別講究，只選擇最好的！</h2>
                        <p>當醫生告訴我：「妳的體質只能生一個孩子」時，我非常沮喪，但我很快收拾心情，更加珍惜媽媽的角色與得來不易的寶貝。關於孩子的一切，我都特別講究，只選擇最好的，例如從小打預防針就選擇較無副作用的自費預防針，蔬果選擇來自天然有機的產地……能這樣守護著孩子的健康，看著他快樂的成長，心中就覺得好滿足！為了讓小孩喝到乾淨安心的好水，...<a href="share-list.aspx#momshare0003" class="btn-read">Read more</a></p>
                    </div>
                    <!--漾媽分享第3組end-->
                </div>
                <a href="share-list.aspx" class="btn-more">更多姐妹淘</a>
            </div>

            <div class="stage4-owl">
                <div class="owl-carousel owl-theme">

                    <!--漾媽專欄 2018 Jan 月刊start-->
                    <div class="stage4-owlItem">
                        <div class="stage4-owlItem--pic">
                            <img src="images/mom-column-pic/mom-column-pic201801.png" alt="">
                        </div>
                        <h2 class="h2-title h2-title--stage4">揮別虎姑婆，化身優雅淡定媽</h2>
                        <p>工作、家務、孩子、公婆…… 種種壓力，容易讓媽咪情緒暴走，成了齜牙裂嘴的虎姑婆。有快樂的媽媽，才有快樂的孩子和圓滿的家庭！照顧家人的同時，也別忘了愛自己，正視妳內心的需求，不委屈自己，才能遠離焦躁、舒緩情緒，讓自己成為人見人愛的優雅媽咪。<a href="article-9.aspx" class="btn-read">Read more</a>
                    </div>
                    <!--漾媽專欄 2018 Jan 月刊end-->

                    <!--漾媽專欄 2017 Dec 月刊start-->
                    <div class="stage4-owlItem">
                        <div class="stage4-owlItem--pic">
                            <img src="images/mom-column-pic/mom-column-pic201712.png" alt="">
                        </div>
                        <h2 class="h2-title h2-title--stage4">小巧思，讓野餐超有亮點</h2>
                        <p>大好周末，看著小孩、老公窩在沙發上看電視、玩手機，叫也叫不動，媽咪心中是不是已燃起一把火？千萬別生氣，生氣容易老哦！何不趁著秋高氣爽的天氣，全家一起參加安麗野餐趣，包準大小朋友高興得跳起來。快來看看3個小技巧，讓野餐更有樂趣。<a href="article-8.aspx" class="btn-read">Read more</a>
                    </div>
                    <!--漾媽專欄 2017 Dec 月刊end-->


                    <!--漾媽專欄 2017 Nov 月刊start-->
                    <div class="stage4-owlItem">
                        <div class="stage4-owlItem--pic">
                            <img src="images/mom-column-pic/mom-column-pic201711.png" alt="">
                        </div>
                        <h2 class="h2-title h2-title--stage4">從容迎戰，再也不爆出門氣</h2>
                        <p>媽咪，妳有沒有算過早上出門前，自己說了幾次「快一點」？孩子什麼事都慢三拍、老公只顧自己好？每天出門前，媽咪最容易長出惡魔角變身吼叫媽！想要告別手忙腳亂、滿肚子火的早晨，3個小改變，讓妳從容迎戰！...<a href="article-7.aspx" class="btn-read">Read more</a></p>
                    </div>
                    <!--漾媽專欄 2017 Nov 月刊end-->

                </div>
                <a href="article-list.aspx" class="btn-more">各期專欄清單</a>
            </div>
        </div>
        <div class="stage5">
            <div class="stage5-content">
                <div class="stage5-role"></div>
                <div class="stage5-tip">
                    <h2 class="h2-title h2-title--stage5">加入漾媽姐妹淘<br>獨享好康優惠</h2>
                    <p>我們希望所有漾媽和家人都可以過得更好，如果妳是0~6歲寶貝的媽咪，歡迎加入我們的行列！只要通過驗證成為「漾媽姐妹淘」成員，即可享有專屬新品試用、優惠活動等獨享好康，真心邀請妳一起成為健康、美麗又快樂的漾媽咪！</p>
                </div>
                <div class="stage5-description">
                    <div class="stage5-description--item1"><span>加入資格</span><p>有0～6歲寶貝的媽咪，且為安麗直銷商 / 會員</p></div>
                    <div class="stage5-description--item1"><span>加入辦法</span><p>請備妥媽媽手冊、兒童手冊或兒童健保卡，並選擇下列方式驗證加入，即可享好康優惠。</p></div>
                    <div class="stage5-description--item2">
                        <a href="https://www.amway.com.tw/weblight/customer/join.aspx" target="_blank">臨櫃加入</a>
                        <p>請前往<a href="https://www.amway.com.tw/AmwayStation/index.aspx" target="_blank" class="btn-read">全台12個安麗服務據點</a>，經服務人員驗證確認為有0～6歲<br>寶貝的媽咪，即成為「漾媽姐妹淘」成員。</p>
                    </div>
                    <div class="stage5-description--item2">
                        <a href="data.aspx">線上加入</a>
                        <p>為了提供更便利的加入方式，妳也可以透過<a href="data.aspx" class="btn-read">線上驗證</a>，立馬開通！<br>
<span class="font14">(目前僅適用兒童健保卡，如欲以媽媽手冊或兒童手冊驗證，須以臨櫃加入。)</span></p>
                    </div>
                    <div class="stage5-qrcode misc"><!--放qrcode 103x102--><img src="http://chart.googleapis.com/chart?chld=H&cht=qr&chs=103x102&chl=<%: Server.UrlEncode(Url.ToFull("~/mobile/data.aspx") )  %>" alt=""></div>
                    <div class="stage5-online">線上認證</div>
                    <div class="stage5-description--item1">
                        <span>貼心提醒：</span>
                        <ul class="point">
                            <li>驗證後，請下載<a href="https://app.amwaynet.com.tw/amcard/" target="_blank" class="btn-link--blue">Am-Card</a>，將不定期由<a href="https://app.amwaynet.com.tw/amcard/" target="_blank" class="btn-link--blue">Am-Card</a>接收專屬好康推播，享有獨享獻禮。</li>
                            <li>歡迎尚未成為安麗直銷商/會員，但有0～6歲寶貝的媽咪一起加入「漾媽姐妹淘」FB社團，一起交流當媽的酸甜苦辣！</li>
                        </ul>
                    </div>
                </div>
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
