<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
        string type = Request.QueryString["type"];

        switch (type)
        { 
            case "01":
                META_TITLE="健康樂活型";
                META_DESCRIPTION = @"在飲食上懂得節制，或是工作關係會大量消耗熱量。平時比較注重健康，且有運動習慣。但隨著年齡增長或工作型態改變，飲食、運動及生活型態也須隨之調整。";
                break;
            case "02":
                META_TITLE = "暴飲暴食型";
                META_DESCRIPTION = @"平時好像吃不多，但三不五時攝取的熱量總是超標，且進食速度快，通常蔬果攝取量不足，易有營養不均的狀況。喜歡用大餐犒賞自己，或是應酬聚會多，大餐次數頻繁，重口味、愛吃炸物與甜食，容易有血脂異常情形。晚餐經常吃很多或很晚才吃，通常有吃宵夜或喝酒的習慣。";
                break;
            case "03":
                META_TITLE = "壓力多吃型";
                META_DESCRIPTION = @"在飲食上懂得節制，或是工作關係會大量消耗熱量。平時比較注重健康，且有運動習慣。但隨著年齡增長或工作型態改變，飲食、運動及生活型態也須隨之調整。";
                break;
            case "04":
                META_TITLE = "糖心型";
                META_DESCRIPTION = @"熱愛含糖飲料、甜點等精緻醣類，也可能會喝些烈酒，導致糖類與脂肪攝取過多。由於這些食物含有大量糖份，在極短的時間內會被身體吸收，進而在體內囤積成內臟脂肪，導致體脂率偏高，肌肉鬆軟。此外蔬果攝取量往往不足，容易有便秘的情況。";
                break;
            case "05":
                META_TITLE = "代謝偏低型";
                META_DESCRIPTION = @"雖然飲食節制、進食量少，卻可能有營養素不足、體脂肪超標的情況。當「肥油多、肌肉少」，肥胖部位逐漸轉向腹部，使得腰圍變粗。加上沒有運動習慣，活動量大多集中在做家事與日常活動。單用少吃來減重卻效果不佳，飲食習慣一回復又打回原形。因反覆復胖，到最後就算吃得再少，也只是白白挨餓卻減不了「肥」。";
                break;
        }
		
	    base.Render(writer);
	}
</script>


<!DOCTYPE html>
<!--[if IE 7]> <html class="hover ie ie7"> <![endif]-->
<!--[if IE 8]> <html class="hover ie ie8"> <![endif]-->
<!--[if IE 9]> <html class="hover ie ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="zh-TW" class="hover"> <!--<![endif]-->
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="format-detection" content="telephone=no">
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="../css/owl.carousel2.css" rel="stylesheet" type="text/css" />
</head>
<body class="exam-type">
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <form id="form1">
            <div class="exam">
                <a href="javascript:;" class="btn-exam-prev" data-type="">代謝偏低型</a>
                <a href="javascript:;" class="btn-exam-next" data-type="">壓力多吃型</a>
                <div class="result04">
                    <div class="kv-result none" data-type="04">糖心型</div>
                    <h3 class="title-green">減重成功的關鍵</h3>
                    <ul class="star">
                        <li>減少含糖飲料，降低甜食攝取量及頻率，並可搭配每周3次核心運動。</li>
                        <li>加強「打底」階段，調整飲食習慣、減少糖份的攝取，營養均衡，調整成易瘦體質，改善體脂過高的情況。</li>
                    </ul>
                    <h3 class="title-green">建議加強補充的營養</h3>
                    <ol class="num txtgreen">
                        <li>營養代餐<p>每天可選擇1至2餐改用營養代餐，幫助熱量控制。</p></li>
                        <li>腰豆、黃豆萃取菁華的補充品<p>澱粉及甜食剋星，阻斷澱粉和蔗糖吸收。</p></li>
                        <li>綠茶磷脂複合物<p>提升人體產熱作用、促進脂肪代謝。</p></li>
                        <li>綜合維生素/礦物質/植物營養素<p>補充營養不均衡所缺乏的各種營養素。</p></li>
                        <li>優質蛋白質<p>補充色胺酸，減少想吃甜食的慾望。</p></li>
                        <li>卵磷脂<p>幫助乳化脂肪，防止脂肪囤積。</p></li>
                        <li>維生素B群<p>可幫助糖份代謝，維持新陳代謝。</p></li>
                        <li>膳食纖維+充足水分<p>預防便秘，幫助排便順暢。</p></li>
                    </ol>
                </div>
                <div class="result05">
                    <div class="kv-result none" data-type="05">代謝偏低型</div>
                    <h3 class="title-green">減重成功的關鍵</h3>
                    <ul class="star">
                        <li>攝取優質蛋白質，補充促進代謝的營養素，增加有氧運動及肌力訓練，進而提高基礎代謝率。</li>
                        <li>加強「代謝」階段，改善身體機能回復健康狀態，增加肌肉量以提高代謝，讓減重不再陷入吃得少也瘦不下來的窘境。</li>
                    </ul>
                    <h3 class="title-green">建議加強補充的營養</h3>
                    <ol class="num txtgreen">
                        <li>營養代餐<p>每天可選擇1至2餐改用營養代餐，幫助熱量控制。</p></li>
                        <li>優質蛋白質<p>建造肌肉的重要成分，提高新陳代謝。</p></li>
                        <li>共軛亞麻油酸<p>優先燃燒體內脂肪，增加身體肌肉比例。</p></li>
                        <li>綠茶磷脂複合物<p>促進脂肪代謝，防止脂肪囤積。</p></li>
                        <li>維生素B群<p>加速體內循環代謝。</p></li>
                        <li>膳食纖維+充足水分<p>幫助排除體內毒素、廢物。</p></li>
                        <li>綜合維生素/礦物質/植物營養素<p>補充完整充足的營養素。</p></li>
                    </ol>
                </div>
                <div class="result02">
                    <div class="kv-result none" data-type="02">壓力多吃型</div>
                    <h3 class="title-green">減重成功的關鍵</h3>
                    <ul class="star">
                        <li>增加有助緩解壓力的營養素，睡前可進行一些伸展運動。</li>
                        <li>加強「淨化」階段，排除老舊廢物與毒素，幫助身體對抗壓力，進而釋放壓力、改善睡眠，讓減重事半功倍。</li>
                    </ul>
                    <h3 class="title-green">建議加強補充的營養</h3>
                    <ol class="num txtgreen">
                        <li>營養代餐<p>每天可選擇1至2餐改用營養代餐，幫助降低熱量攝取。</p></li>
                        <li>優質蛋白質<p>補充色胺酸-天然的放鬆劑。</p></li>
                        <li>綠茶磷脂複合物<p>降低脂肪合成，避免脂肪堆積體內。</p></li>
                        <li>綜合維生素/礦物質/植物營養素<p>提供各種營養素，維持正常生理機能。</p></li>
                        <li>魚油<p>避免慢性發炎，能夠舒緩壓力與疲勞。</p></li>
                        <li>維生素B群<p>補充壓力造成的大量耗損，避免缺乏引起的情緒低落。</p></li>
                        <li>鈣與鎂<p>可減緩緊張與焦慮。</p></li>
                        <li>膳食纖維+充足水分<p>增加飽足感，預防便秘。</p></li>
                    </ol>
                </div>
                <div class="result03">
                    <div class="kv-result none" data-type="03">暴飲暴食型</div>
                    <h3 class="title-green">減重成功的關鍵</h3>
                    <ul class="star">
                        <li>飲食搭配代餐，幫助控制熱量攝取，培養每周至少3次規律運動的習慣 (如:健走、慢跑)。</li>
                        <li>加強「打底」階段，補充足夠營養讓身體正常運作，控制熱量攝取以加速脂肪消耗，持之以恆，通常會有亮眼的減重成效。</li>
                    </ul>
                    <h3 class="title-green">建議加強補充的營養</h3>
                    <ol class="num txtgreen">
                        <li>營養代餐<p>每天可選擇1至2餐改用營養代餐，降低一天總熱量的吸收。</p></li>
                        <li>膳食纖維+充足水分<p>增加飽足感，有效降低食物熱量吸收。</p></li>
                        <li>魚油<p>Omega-3 脂肪酸可幫助降低食慾。</p></li>
                        <li>腰豆、黃豆萃取菁華的補充品<p>抑制澱粉和蔗糖吸收。</p></li>
                        <li>綠茶磷脂複合物<p>降低脂肪吸收，促進脂肪代謝。</p></li>
                        <li>優質蛋白質<p>幫助延緩血糖上升，減少飢餓感。</p></li>
                        <li>綜合維生素/礦物質/植物營養素<p>補充營養不均衡所缺乏的各種營養素。</p></li>
                        <li>乳酸菌<p>有助體內環保，預防腸道老化。</p></li>
                        <li>維生素B群<p>參與熱量代謝，能促進人體新陳代謝。</p></li>
                    </ol>
                </div>
                <div class="result01">
                    <div class="kv-result none" data-type="01">健康樂活型</div>
                    <h3 class="title-green">維持理想體重的關鍵</h3>
                    <ul class="star">
                        <li>飲食均衡，補充足夠的營養素，維持良好生活及運動習慣，進一步美型。</li>
                        <li>加強「美型」階段，提升肌肉量，增加身體肌肉比例，幫助身材緊實，雕塑完美曲線。</li>
                    </ul>
                    <h3 class="title-green">建議加強補充的營養</h3>
                    <ol class="num txtgreen textb">
                        <li>均衡營養飲品<p>每天早上一杯作為活力營養早餐。</p></li>
                        <li>綜合維生素/礦物質/植物營養素<p>維持生理機能正常運作。</p></li>
                        <li>優質蛋白質<p>植物性蛋白質比動物性更容易為人體消化利用。</p></li>
                        <li>綠茶磷脂複合物<p>有助減少腰圍，輕鬆做好體重管理。</p></li>
                        <li>維生素B群<p>幫助熱量代謝，常保充沛活力。</p></li>
                        <li>維生素C<p>促進膠原蛋白合成，幫助肌膚緊實。</p></li>
                        <li>共軛亞麻油酸<p>優先燃燒體內脂肪，增加身體肌肉比例。</p></li>
                    </ol>
                </div>
            </div>
            <div class="exam-entry">
                <ul class="writings-list">
                    <li>
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
                        <div class="tag-area">
                            <!--五型-->
                            <a href="javascript:;" class="btn-kind">代謝偏低型</a>
                            <a href="javascript:;" class="btn-kind">壓力多吃型</a>
                            <a href="javascript:;" class="btn-kind">糖心型</a>
                        </div>
                        <div class="tag-area">
                            <!--營養素-->
                            <a href="javascript:;" class="btn-nutriment">乳酸菌</a>
                            <a href="javascript:;" class="btn-nutriment">維生素B</a>
                            <a href="javascript:;" class="btn-nutriment">卵磷脂</a>
                        </div>
                    </li>
                    <li>
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
                        <div class="tag-area">
                            <!--五型-->
                            <a href="javascript:;" class="btn-kind">代謝偏低型</a>
                            <a href="javascript:;" class="btn-kind">糖心型</a>
                        </div>
                        <div class="tag-area">
                            <!--營養素-->
                            <a href="javascript:;" class="btn-nutriment">乳酸菌</a>
                            <a href="javascript:;" class="btn-nutriment">維生素B</a>
                            <a href="javascript:;" class="btn-nutriment">卵磷脂</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="liaison">
                <h4>進一步了解你的身體組成...</h4>
                <p>歡迎連絡直銷商，一同前往
                    <span class="txt-orange txt-strong">
                        <a id="aTaipeiCenter" name="Center" href="javascript:;">台北體驗中心</a>、
                        <a id="aTaichungCenter" name="Center" href="javascript:;">台中體驗中心</a>或
                        <a id="aKaohsiungCenter" name="Center" href="javascript:;">高雄體驗中心</a>
                    </span>，透過inbody儀器瞭解你的身體組成，幫助你找出最適合的體重管理建議！</p>
            </div>
            <div class="exam-entry">
                <a href="javascript:;" class="btn-download" target="_blank"><img src="images/icon-download@3x.png">下載完整資訊(PDF)</a>
                <a href="javascript:;" class="btn-cookbook" target="_blank"><img src="images/icon-order@3x.png">飲食示範菜單(PDF)</a>
                <a href="exam.aspx" class="btn-exam-back"><img src="images/icon-exam-back@3x.png">返回體重管理評估</a>
            </div>
        </form>
        <!-- #include file="footer.aspx" -->
    </div>
    <a href="javascript:;" class="top btn">TOP</a>
    <div class="box-exam-area">
        <div class="tips">
            <p>尚有題目未回答！</p>
            <a href="javascript:;" class="btn-ok">確定</a>
        </div>
    </div>

    <%-- 存放本頁前端會用到的全域變數 
    --%><script type="text/javascript">
        var Config = <%=new {                
    Token = GetToken()
            }.ToJson() %>;
    </script>
    <script src="<%:Url.Resolve("~/js/config.js")%>" type="text/javascript"></script>
    <%-- 當要引用第三方 js module (其 source 中無 define 依存 module 時, 請依以下設定方式加入第三方 js 模組
        <script type="text/javascript">
            require.paths.MODULE_NAME = JSLibPath('jquery/FILE_NAME_NO_EXT_JS');
            require.shim.MODULE_NAME = ['jquery'];
        </script>
    --%><script src="<%:Url.Resolve("~/js/lib/requirejs/require-2.1.20.min.js")%>" data-main="<%:MainJs%>" type="text/javascript" async></script>
</body>
</html>