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
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="format-detection" content="telephone=no" />
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="css/owl.carousel2.css" rel="stylesheet" type="text/css" />
</head>
<body class="index">
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="content">
            <div class="tab-exam">
                <a href="exam.aspx">評估我的類型</a>
                <a href="exam-typelist.aspx" class="act">認識五大類型</a>
            </div>

            <div class="exam-type-change">
                <ul>
                    <li class="exam-type01"><a href="javascript:;">1.健康樂活型</a></li>
                    <li class="exam-type02"><a href="javascript:;">2.壓力多吃型</a></li>
                    <li class="exam-type03"><a href="javascript:;">3.暴飲暴食型</a></li>
                    <li class="exam-type04"><a href="javascript:;">4.糖心型</a></li>
                    <li class="exam-type05"><a href="javascript:;">5.代謝偏低型</a></li>
                </ul>
            </div> 
            
            <div class="exam-result-content">
                <div class="exam-result01 groupresult">
                    <h2 class="title-green">特色</h2>
                    <p>在飲食上懂得節制，或是工作關係會大量消耗熱量。平時比較注重健康，且有運動習慣。但隨著年齡增長或工作型態改變，飲食、運動及生活型態也須隨之調整。</p>
                    <h2 class="title-green">維持理想體重的關鍵</h2>
                    <ul class="star txt-strong">
                        <li>飲食均衡，補充足夠的營養素，維持良好生活及運動習慣，進一步美型。</li>
                        <li>加強「美型」階段，提升肌肉量，增加身體肌肉比例，幫助身材緊實，雕塑完美曲線。</li>
                    </ul>
                    <h2 class="title-green">專家建議</h2>
                    <h3 class="title-notes">關鍵營養素</h3>
                    <ol class="num txt-strong txt-green">
                        <li>均衡營養飲品
                            <p>以均衡營養飲品當作早餐，提供適當比例的蛋白質、碳水化合物及脂肪，以及完整維生素、礦物質，有助於集中注意力、提高工作或學習效率。</p>
                        </li>
                        <li>綜合維生素/礦物質/植物營養素
                            <p>維持生理機能正常運作。</p>
                        </li>
                        <li>優質蛋白質
                            <p>攝取蛋白質，卻不會吃進多餘的脂肪與熱量，且植物性蛋白質比動物性更容易為人體消化利用。</p>
                        </li>
                        <li>綠茶磷脂複合物
                            <p>透過GreenSelect® Phytosome專利技術，有助減少腰圍，讓維持理想體重變得更簡單、輕鬆。</p>
                        </li>
                        <li>維生素B群
                            <p>維持能量正常代謝，增進肌膚、神經及消化系統健康，常保充沛活力，天天神采奕奕。</p>
                        </li>
                        <li>維生素C
                            <p>具有抗氧化作用，可促進膠原蛋白合成、幫助肌膚緊實。</p>
                        </li>
                        <li>共軛亞麻油酸
                            <p>幫助脂肪分解，減少脂肪囤積、維持肌肉比例，搭配運動還可以修飾/雕塑局部曲線。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">飲食習慣</h3>
                    <ol class="num txt-strong">
                        <li>均衡飲食、三餐定時定量。
                        </li>
                        <li>細嚼慢嚥
                            <p>提高食物的吸收利用率，也能較早產生飽足感，減少進食量，吃飽後也較慢產生飢餓感，有助於熱量控制。</p>
                        </li>
                        <li>天天五蔬果、彩虹攝取原則
                            <p>每天至少攝取三碟蔬菜，兩份水果，同時要注意多種顏色的蔬果攝取。</p>
                        </li>
                        <li>少油、少鹽、少糖的飲食原則
                            <p>利用清蒸、清燉、滷等低油方式烹調食物。避免加工醃漬食品及醬菜，多利用食物本身的鮮味或使用蔥、薑、蒜等調味料，減少醬料的使用。挑選無糖或低糖的食品和飲料。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">生活型態</h3>
                    <ol class="num txt-strong">
                        <li>維持理想體重
                            <p>每天固定時間量體重，若體重有持續增加的情形，則須立刻調整飲食、運動習慣和生活作息。</p>
                        </li>
                        <li>注意腰圍變化
                            <p>即使年輕時和老年時的體重一樣，體脂肪率卻相差將近一倍，體脂率高身形較胖，測量腰圍是否過粗，更能看出是否有脂肪堆積的問題。</p>
                        </li>
                        <li>保持良好運動習慣
                            <p>配合自己的年齡和體力選擇適合的運動，每日規律運動至少30分鐘；或每次運動10分鐘，每日累積至少30分鐘以上。</p>
                        </li>
                        <li>規律生活、充足良好的睡眠。
                        </li>
                    </ol>
                </div>

                <div class="exam-result02 groupresult">
                    <h2 class="title-green">特色</h2>
                    <p>生活不規律，吃飯時間非早即晚，往往會以「吃」的方式來紓解壓力，尋求慰藉。壓力一來就無法克制吃的慾望，而且特別喜歡吃高油、高糖、高鹽的高熱量食物，導致體 重節節攀升。此外常常睡眠不足（不到6小時）或是睡眠品質不佳。</p>
                    <h2 class="title-green">成因</h2>
                    <p>壓力大時容易造成情緒緊繃，睡眠品質亦不佳，進而荷爾蒙分泌異常，無法克制吃的慾望，而且容易吃進高熱量的垃圾食物，造成飲食過量而導致肥胖。</p>
                    <h2 class="title-green">減重成功的關鍵</h2>
                    <ul class="star txt-strong">
                        <li>增加有助緩解壓力的營養素，睡前可進行一些伸展運動。</li>
                        <li>加強「淨化」階段，排除老舊廢物與毒素，幫助身體對抗壓力，進而釋放壓力、改善睡眠，讓減重事半功倍。</li>
                    </ul>
                    <h2 class="title-green">專家建議</h2>
                    <h3 class="title-notes">關鍵營養素</h3>
                    <ol class="num txt-strong txt-green">
                        <li>營養代餐
                            <p>每天可選擇1至2餐改用營養代餐，幫助控制熱量攝取又有飽足感，增加執行效果。</p>
                            <table class="nutrition-ratio">
                                <tr>
                                    <td width="35%">打底階段</td>
                                    <td width="65%">每天2餐以營養代餐代替</td>
                                </tr>
                                <tr>
                                    <td>淨化、代謝、美型階段</td>
                                    <td>每天有1餐以營養代餐代替</td>
                                </tr>
                            </table>
                        </li>
                        <li>優質蛋白質
                            <p>蛋白質中的色胺酸有助舒緩緊繃情緒，預防失眠等壓力相關問題；且能減緩饑餓感，有助控制食量。</p>
                        </li>
                        <li>綠茶磷脂複合物
                            <p>透過GreenSelect® Phy tosome專利技術，增加吸收率，於血液中發揮長效作用，降低脂肪合成，避免脂肪堆積體內。</p>
                        </li>
                        <li>綜合維生素/礦物質/植物營養素
                            <p>改善飲食不規律所造成營養素攝取不均的問題。壓力大時，具有抗氧化作用的植物營養素更是不可或缺。</p>
                        </li>
                        <li>魚油
                            <p>Omega-3脂肪酸能抑制發炎反應，有助於穩定情緒及增加抗壓能力。</p>
                        </li>
                        <li>維生素B群
                            <p>當處於壓力下時，身體會消耗更多的維生素B群，進而缺乏導致倦怠或情緒低落；故需加強補充，幫助情緒穩定，提供身體能量。</p>
                        </li>
                        <li>鈣與鎂
                            <p>鈣是天然的神經穩定劑，能夠撫慰情緒；鎂可以讓肌肉放鬆。兩者有助減緩緊張與焦慮情形。</p>
                        </li>
                        <li>膳食纖維+充足水分
                            <p>長期生活在壓力之下，容易發生便秘，建議多攝取膳食纖維及足量飲水，以減輕腸道壓力、預防便祕，同時還可增加飽足感。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">飲食習慣</h3>
                    <ol class="num txt-strong">
                        <li>三餐定時定量、搭配使用營養代餐
                            <p>規律飲食與生活作息，有助於調節血糖及自律神經的平衡。若時間繁忙，可以營養代餐取代1-2餐，營養均衡又方便。</p>
                        </li>
                        <li>細嚼慢嚥、以天然蔬果或營養餐條代替高熱量的零食。</li>
                        <li>平時盡量以全穀類與高纖的碳水化合物為主食，如糙米、燕麥，避免高鹽、高糖、辛辣、刺激性食物。</li>
                        <li>咖啡因飲料適量即止，避免過量
                            <p>建議以具有鎮靜作用的飲料，如薰衣草茶或是茉莉花茶來替代，會是更有效率更持久的抗壓方式。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">生活型態</h3>
                    <ol class="num txt-strong">
                        <li>培養運動習慣，讓運動融入生活
                            <p>運動時腦部產生的腦內啡，能夠使人心情愉快、紓解壓力。長期維持每天運動15分鐘的習慣，更可有效控制體重；睡前亦可進行一些伸展運動，有助睡眠。</p>
                        </li>
                        <li>充足而良好的睡眠
                            <p>建議最好要有7-9個小時的優質睡眠。</p>
                        </li>
                        <li>建立社交網路
                            <p>研究顯示，來自朋友、家人...等心靈上的慰藉與支持，能夠發揮顯著的力量，以協助減輕生活壓力。</p>
                        </li>
                        <li>給自己和別人設定合理達到目標的期望值。</li>
                    </ol>
                </div>

                <div class="exam-result03 groupresult">
                    <h2 class="title-green">特色</h2>
                    <p>平時好像吃不多，但三不五時攝取的熱量總是超標，且進食速度快，通常蔬果攝取量不足，易有營養不均的狀況。喜歡用大餐犒賞自己，或是應酬聚會多，大餐次數頻繁，重口味、愛吃炸物與甜食，容易有血脂異常情形。晚餐經常吃很多或很晚才吃，通常有吃宵夜或喝酒的習慣。</p>
                    <h2 class="title-green">成因</h2>
                    <p>平日飲食吃不多，但短時間進食量大及飲食的內容多為高熱量，並有醣類、油脂及鹽分攝取過多的問題，且隨著年紀增加，除了容易發胖外，也易有營養不良的問題。</p>
                    <h2 class="title-green">減重成功的關鍵</h2>
                    <ul class="star txt-strong">
                        <li>飲食搭配代餐，幫助控制熱量攝取，培養每周至少3次規律運動的習慣 (如:健走、慢跑)。</li>
                        <li>加強「打底」階段，補充足夠營養讓身體正常運作，控制熱量攝取以加速脂肪消耗，持之以恆，通常會有亮眼的減重成效。</li>
                    </ul>
                    <h2 class="title-green">專家建議</h2>
                    <h3 class="title-notes">關鍵營養素</h3>
                    <ol class="num txt-strong txt-green">
                        <li>營養代餐
                            <p>每天可選擇1至2餐改用營養代餐，降低一天攝取的總熱量。應酬或大餐前後的一餐可利用營養代餐來取代正餐。</p>
                            <table class="nutrition-ratio">
                                <tr>
                                    <td width="35%">打底階段</td>
                                    <td width="65%">每天2餐以營養代餐代替</td>
                                </tr>
                                <tr>
                                    <td>淨化、代謝、美型階段</td>
                                    <td>每天有1餐以營養代餐代替</td>
                                </tr>
                            </table>
                        </li>
                        <li>膳食纖維+充足水分
                            <p>可增加飽足感，幫助控制飲食份量；水溶性纖維亦可吸附油脂，幫助排出體外。</p>
                        </li>
                        <li>魚油
                            <p>Omega-3 脂肪酸可降低食慾，減少想吃高熱量食物的慾望，還能平衡與Omega-6 的攝取比率，預防身體長期發炎所引起的慢性疾病。</p>
                        </li>
                        <li>腰豆、黃豆萃取菁華的補充品
                            <p>抑制澱粉和蔗糖吸收，減少醣類熱量攝取。</p>
                        </li>
                        <li>綠茶磷脂複合物
                            <p>透過GreenSelect® Phy tosome專利技術，讓身體更好吸收利用，降低脂肪吸收，促進脂肪代謝，可加強減重效果。</p>
                        </li>
                        <li>綜合維生素/礦物質/植物營養素
                            <p>補充飲食不均衡所造成營養素攝取不足的問題。/p>
                        </li>
                        <li>乳酸菌
                            <p>有助體內環保，減少有毒物質停留腸道，預防腸道老化。</p>
                        </li>
                        <li>維生素B群
                            <p>幫助食物轉變成能量釋出，避免熱量囤積體內。並促進新陳代謝。</p>
                        </li>
                        <li>優質蛋白質
                            <p>與營養代餐搭配作為早餐，可增加飽足感，也會幫助降低整天總熱量的攝取。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">飲食習慣</h3>
                    <ol class="num txt-strong">
                        <li>控制晚餐份量、避免吃宵夜
                            <p>養成睡前三小時不要進食的習慣。如夜間因饑餓導致無法入眠，建議攝取少量水果、蘇打餅乾、牛奶或豆漿，吃到三分飽即可。</p>
                        </li>
                        <li>以高纖食物墊胃、調整用餐順序、細嚼慢嚥
                            <p>改變進餐順序，湯→菜→肉→飯，並且細嚼慢嚥，讓飽食訊號有時間傳入大腦，可減少多餘熱量的攝取。</p>
                        </li>
                        <li>注意食物烹調方式或加工帶來的隱形熱量，調整食物內容、少用沾醬。</li>
                        <li>避免去吃到飽的餐廳，以免攝取過多熱量</li>
                    </ol>

                    <h3 class="title-notes">生活型態</h3>
                    <ol class="num txt-strong">
                        <li>培養每周至少3次規律運動習慣
                            <p>如健走、慢跑等，以增強心肺功能、促進熱量消耗。</p>
                        </li>
                        <li>記錄體重、體脂肪的變化
                            <p>測量體重、體脂肪具有警惕效果，大餐後增加的體重若沒有在兩天內降下來，則需增加運動時間以消耗多攝取的熱量。</p>
                        </li>
                        <li>不為多吃找藉口
                            <p>不以吃東西作為犒賞，尋找其他令自己開心的獎勵方式，如聽音樂或出外踏青來替代。</p>
                        </li>
                    </ol>
                </div>

                <div class="exam-result04 groupresult">
                    <h2 class="title-green">特色</h2>
                    <p>熱愛含糖飲料、甜點等精緻醣類，也可能會喝些烈酒，導致糖類與脂肪攝取過多。由於這些食物含有大量糖份，在極短的時間內會被身體吸收，進而在體內囤積成內臟脂肪，導致體脂率偏高，肌肉鬆軟。此外蔬果攝取量往往不足，容易有便秘的情況。</p>
                    <h2 class="title-green">成因</h2>
                    <p>發胖原因來自於飲食中的澱粉與糖類攝取過多導致熱量超標，因此減重的焦點應該放在減少醣類吸收。</p>
                    <h2 class="title-green">減重成功的關鍵</h2>
                    <ul class="star txt-strong">
                        <li>減少含糖飲料，降低甜食攝取量及頻率，並可搭配每周3次核心運動。</li>
                        <li>加強「打底」階段，調整飲食習慣、減少糖份的攝取，營養均衡，調整成易瘦體質，改善體脂過高的情況。</li>
                    </ul>
                    <h2 class="title-green">專家建議</h2>
                    <h3 class="title-notes">關鍵營養素</h3>
                    <ol class="num txt-strong txt-green">
                        <li>營養代餐
                            <p>每天可選擇1至2餐改用營養代餐，能延長飽腹感的時間，避免餐與餐之間想吃甜點、零食的衝動。另外，可以以植物營養餐條代替高熱量的零食。</p>
                            <table class="nutrition-ratio">
                                <tr>
                                    <td width="35%">打底階段</td>
                                    <td width="65%">每天2餐以營養代餐代替</td>
                                </tr>
                                <tr>
                                    <td>淨化、代謝、美型階段</td>
                                    <td>每天有1餐以營養代餐代替</td>
                                </tr>
                            </table>
                        </li>
                        <li>腰豆、黃豆萃取菁華的補充品
                            <p>抑制澱粉酶與雙醣酶作用，抑制澱粉、蔗糖吸收，有效降低來自醣類的熱量。</p>
                        </li>
                        <li>綠茶磷脂複合物
                            <p>透過GreenSelect® Phy tosome專利技術，提升人體產熱作用、促進脂肪代謝。</p>
                        </li>
                        <li>綜合維生素/礦物質/植物營養素
                            <p>補充飲食中營養素攝取不均衡的問題。</p>
                        </li>
                        <li>優質蛋白質
                            <p>蛋白質中的色胺酸有助控制甜食慾望，亦能維持血糖穩定，避免因血糖起伏不定而造成飢餓感。</p>
                        </li>
                        <li>卵磷脂
                            <p>幫助乳化脂肪，防止脂肪囤積。</p>
                        </li>
                        <li>維生素B群
                            <p>幫助醣類代謝，維持新陳代謝。</p>
                        </li>
                        <li>膳食纖維+充足水分
                            <p>提供飽足感，降低食物熱量吸收、幫助排便順暢，避免便秘影響減重效果。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">飲食習慣</h3>
                    <ol class="num txt-strong">
                        <li>避免含糖飲料
                            <p>以白開水作為補充水份的主要來源，也可以自製不加糖的健康蔬果汁、茶飲等。</p>
                        </li>
                        <li>三餐定時定量
                            <p>均衡飲食、定時定量，可減少想吃零食的慾望。</p>
                        </li>
                        <li>以天然蔬果或營養餐條替代精緻醣類或高熱量的零食。</li>
                        <li>生活周遭不要放置高糖份的食物以避免誘惑。</li>
                    </ol>

                    <h3 class="title-notes">生活型態</h3>
                    <ol class="num txt-strong">
                        <li>加強下半身運動，幫助體型雕塑，如空中腳踏車或深蹲運動。</li>
                        <li>利用假期多活動
                            <p>放假期間是吃甜點、零食的高峰期，建議將靜態休閒活動改為運動或是郊外踏青。</p>
                        </li>
                        <li>餐後立刻刷牙或漱口
                            <p>養成餐後立刻刷牙或漱口的衛生習慣，可去除口腔殘留的食物味道，減少吃東西的衝動。</p>
                        </li>
                    </ol>
                </div>

                <div class="exam-result05 groupresult">
                    <h2 class="title-green">特色</h2>
                    <p>雖然飲食節制、進食量少，卻可能有營養素不足、體脂肪超標的情況。當「肥油多、肌肉少」，肥胖部位逐漸轉向腹部，使得腰圍變粗。加上沒有運動習慣，活動量大多集中在做家事與日常活動。單用少吃來減重卻效果不佳，飲食習慣一回復又打回原形。因反覆復胖，到最後就算吃得再少，也只是白白挨餓卻減不了「肥」。</p>
                    <h2 class="title-green">成因</h2>
                    <p>代謝偏低型的人可能因年紀增長、荷爾蒙問題，或是往往用節食來減重，又沒有運動習慣，導致身體營養素攝取不足、肌肉流失、基礎代謝下降，一旦恢復正常飲食，又會再度發胖。</p>
                    <h2 class="title-green">減重成功的關鍵</h2>
                    <ul class="star txt-strong">
                        <li>攝取優質蛋白質，補充促進代謝的營養素，增加有氧運動及肌力訓練，進而提高基礎代謝率。</li>
                        <li>加強「代謝」階段，改善身體機能回復健康狀態，增加肌肉量以提高代謝，讓減重不再陷入吃得少也瘦不下來的窘境。</li>
                    </ul>
                    <h2 class="title-green">專家建議</h2>
                    <h3 class="title-notes">關鍵營養素</h3>
                    <ol class="num txt-strong txt-green">
                        <li>營養代餐
                            <p>每天可選擇1至2餐改用營養代餐，幫助控制熱量攝取，在食量不大的情況下也能確保攝取到均衡足夠的營養素。</p>
                            <table class="nutrition-ratio">
                                <tr>
                                    <td width="35%">打底階段</td>
                                    <td width="65%">每天2餐以營養代餐代替</td>
                                </tr>
                                <tr>
                                    <td>淨化、代謝、美型階段</td>
                                    <td>每天有1餐以營養代餐代替</td>
                                </tr>
                            </table>
                        </li>
                        <li>優質蛋白質
                            <p>為建造肌肉的重要成分，能提高新陳代謝，且提供人體完整的「必需胺基酸」。</p>
                        </li>
                        <li>共軛亞麻油酸
                            <p>幫助脂肪分解，減少脂肪囤積，維持肌肉比例，搭配運動還可以修飾/雕塑局部曲線。</p>
                        </li>
                        <li>綠茶磷脂複合物
                            <p>透過GreenSelect® Phy tosome專利技術，降低身體的氧化壓力，促進脂肪代謝、減少腰圍及體脂肪堆積。</p>
                        </li>
                        <li>維生素B群
                            <p>加速體內循環代謝，避免熱量轉成脂肪囤積。</p>
                        </li>
                        <li>膳食纖維+充足水分
                            <p>增加飽足感、預防便秘，幫助排除體內毒素廢物。</p>
                        </li>
                        <li>綜合維生素/礦物質/植物營養素
                            <p>補充因節食減肥或飲食不均所流失的營養素，幫助身體對抗自由基及氧化壓力，提供完整保護。</p>
                        </li>
                    </ol>

                    <h3 class="title-notes">飲食習慣</h3>
                    <ol class="num txt-strong">
                        <li>停止錯誤節食、注意營養素的攝取
                            <p>適量的醣類與脂肪，充足的蛋白質、維生素、礦物質，可讓減重事半功倍。</p>
                        </li>
                        <li>三餐定時定量。</li>
                        <li>建議選擇低 GI 的非精緻澱粉類，並適量補充優質蛋白質，幫助肌肉生成和修復。</li>
                        <li>降低飲食中的油脂比例，避免油炸、高油烘培等食物。</li>
                    </ol>

                    <h3 class="title-notes">生活型態</h3>
                    <ol class="num txt-strong">
                        <li>增加運動量，幫助降低體脂及維持減重成果
                            <p>首要透過肌力或有氧運動有效提高基礎代謝率。如果體能無法負荷的人，可以將運動分成多次進行。</p>
                            <table class="nutrition-ratio">
                                <tr>
                                    <td width="13%">建議</td>
                                    <td width="87%">動態暖身 10 分鐘 → 肌力運動 20 分鐘 → 有氧運動 30 分鐘 → 靜態伸展 5 分鐘</td>
                                </tr>
                            </table>
                        </li>
                        <li>充足而良好的睡眠
                            <p>睡眠時是蛋白質合成製造肌肉的重要時刻，充足的睡眠，可幫助提升基礎代謝率。</p>
                        </li>
                        <li>加強減重過程心理支持、避免復胖
                            <p>常因反覆減重而失去信心，建議加入減重團隊一起健康減重，不要隨便放棄而暴飲暴食。減重成功後要讓正確的飲食、生活型態變成習慣，以避免復胖。</p>
                        </li>
                    </ol>
                </div>
                <a href="javascript:;" class="btn-exam-download"  target="_blank"><img src="images/icon-download-exam.png" height="28" width="36">下載完整資訊(PDF)</a>
                <a href="javascript:;" class="btn-exam-menu"  target="_blank"><img src="images/icon-menu-exam.png" height="32" width="32">飲食示範菜單(PDF)</a>
                <a href="exam.aspx" class="btn-exam-back"><img src="images/icon-back-exam.png" height="37" width="41">返回體重管理評估</a>
            </div>

            <div class="exam-about">
                <h4 class="title-right">淨化相關文章</h4>
                <ul class="writings-list-right">
   <%--                 <li>
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail">
                            <h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3>
                        </div>
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
                    <li>
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail"><h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3></div>
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
                    </li>--%>
                </ul>
                <div class="liaison">
                    <h4>進一步了解你的身體組成...</h4>
                    <p>歡迎連絡直銷商，一同前往<span class="txt-orange txt-strong"><a href="https://www.amway.com.tw/AmwayStation/taipei.htm" target="_blank" data-tracking="ga('send','event','pc','link.out','前往體驗中心');">台北體驗中心</a>、<a href="https://www.amway.com.tw/AmwayStation/taichung.htm" target="_blank" data-tracking="ga('send','event','pc','link.out','前往體驗中心');">台中體驗中心</a>或<a href="https://www.amway.com.tw/AmwayStation/kaohsiung.htm" target="_blank" data-tracking="ga('send','event','pc','link.out','前往體驗中心');">高雄體驗中心</a></span>，透過inbody儀器瞭解你的身體組成，幫助你找出最適合的體重管理建議！</p>
                </div>
            </div>

        </div>
    </div>
    <!-- #include file="footer.aspx" -->

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
