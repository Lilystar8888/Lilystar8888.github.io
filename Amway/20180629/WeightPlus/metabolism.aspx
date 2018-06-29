<%@ Page Language="C#" %>
<% var CategoryTags = GetCategoryTags("3");  %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="減重四大計畫-代謝";
        META_DESCRIPTION = @"提高代謝是減重成功與否的關鍵。在代謝期，紐崔萊幫助你藉由對的營養素，搭配正確飲食、生活習慣與加強運動，促進血液循環、增加新陳代謝，達到加速熱量消耗的目的。";
        META_IMAGE = "~/images/fb_metabolism.jpg";
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
</head>
<body>
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="kv-metabolism">
            <h1 class="title-steps misc">step.3<div>代謝</div></h1>
            <h2 class="subtitle-steps">促進體內循環<br>加速新陳代謝幫助熱量消耗</h2>
            <p class="detail-steps">提高代謝是減重成功與否的關鍵。<br>在代謝期，紐崔萊幫助你藉由對的營養素，搭配正確飲食、生活習慣<br>與加強運動，促進血液循環、增加新陳代謝，達到加速熱量消耗的目的。</p>
            <div class="kv-tag"><span class="tagpd">優質<br>蛋白質</span><span class="tagpd">綠茶<br>磷脂質</span><span class="tagpd">共軛亞<br>麻油酸</span><span class="tagpd">維生素<br>B群</span></div>
            <div class="kv-shadow"></div>
        </div>
        <div class="content">
            <% foreach (var TagInfo in CategoryTags){ %>
                <h2 class="title-focus"><span class="misc">焦點話題</span><%:TagInfo.Name %></h2>
                <ul class="focus-writing">
                    <%var obj = GetTagArticle("3", TagInfo.UNO.ToString()); %>
                    <%foreach(var ArticleInfo in obj){ %>
                    <li class="box-inline">
                        <div class="pic"><a href="detail.aspx?no=<%:ArticleInfo.UNO %>"><img src="API/GetPic.ashx?Token=<%:GetToken() %>&Type=Article&FileName=<%:ArticleInfo.LargePicName %>"  alt=""/></a></div>
                        <h3><a href="detail.aspx?no=<%:ArticleInfo.UNO %>"><%:ArticleInfo.Title %></a></h3>
                    </li>
                    <%} %>
                </ul>
            <%} %>

            <%--<!--焦點話題statr-->
            <h2 class="title-focus"><span class="misc">焦點話題</span>乳酸菌建立腸道好環境</h2>
            <ul class="focus-writing">
                <li class="box-inline">
                    <div class="pic"><a href="javascript::"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                    <h3><a href="javascript:;">阻斷醣類吸收，健康減重迎接春夏天！</a></h3>
                </li>
                <li class="box-inline">
                    <div class="pic"><a href="javascript::"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                    <h3><a href="javascript:;">阻斷醣類吸收，健康減重迎接春夏天！</a></h3>
                </li>
                <li class="box-inline">
                    <div class="pic"><a href="javascript::"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                    <h3><a href="javascript:;">阻斷醣類吸收，健康減重迎接春夏天！</a></h3>
                </li>
            </ul>
            <!--焦點話題end-->
            <h2 class="title-focus"><span class="misc">焦點話題</span>乳酸菌建立腸道好環境</h2>
            <ul class="focus-writing">
                <li class="box-inline">
                    <div class="pic"><a href="javascript::"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                    <h3><a href="javascript:;">阻斷醣類吸收，健康減重迎接春夏天！</a></h3>
                </li>
                <li class="box-inline">
                    <div class="pic"><a href="javascript::"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                    <h3><a href="javascript:;">阻斷醣類吸收，健康減重迎接春夏天！</a></h3>
                </li>
                <li class="box-inline">
                    <div class="pic"><a href="javascript::"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                    <h3><a href="javascript:;">阻斷醣類吸收，健康減重迎接春夏天！</a></h3>
                </li>
            </ul>--%>
            <div class="tag-related-box top-shadow">
                <h2 class="title-page-left">所有文章...</h2>
                <ul class="writings-list">
                    <%--<!--一頁10嘖-->
                    <li>
                        <div class="pic box-inline"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail box-inline">
                            <div class="writings-new" style="display:block">NEW</div>
                            <h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3>
                            <p>民現直會質神使幾所文考園什我解三日走連是投……明片十己角飯也事的我。地有濟媽不沒出馬議、舉用代，眼夠案。評企子腳地同麗中說做，評企子腳地同麗中說做，態工後面...</p>
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
                        </div>
                    </li>
                    <li>
                        <div class="pic box-inline"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail box-inline">
                            <div class="writings-new" style="display:block">NEW</div>
                            <h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3>
                            <p>民現直會質神使幾所文考園什我解三日走連是投……明片十己角飯也事的我。地有濟媽不沒出馬議、舉用代，眼夠案。評企子腳地同麗中說做，評企子腳地同麗中說做，態工後面...</p>
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
                        </div>
                    </li>
                    <li>
                        <div class="pic box-inline"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail box-inline">
                            <div class="writings-new" style="display:block">NEW</div>
                            <h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3>
                            <p>民現直會質神使幾所文考園什我解三日走連是投……明片十己角飯也事的我。地有濟媽不沒出馬議、舉用代，眼夠案。評企子腳地同麗中說做，評企子腳地同麗中說做，態工後面...</p>
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
                        </div>
                    </li>
                    <li>
                        <div class="pic box-inline"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail box-inline">
                            <div class="writings-new" style="display:block">NEW</div>
                            <h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3>
                            <p>民現直會質神使幾所文考園什我解三日走連是投……明片十己角飯也事的我。地有濟媽不沒出馬議、舉用代，眼夠案。評企子腳地同麗中說做，評企子腳地同麗中說做，態工後面...</p>
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
                        </div>
                    </li>
                    <li>
                        <div class="pic box-inline"><a href="javascript:;"><img src="images/writings-detail-pic.jpg"  alt=""/></a></div>
                        <div class="writings-detail box-inline">
                            <div class="writings-new" style="display:block">NEW</div>
                            <h3><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></h3>
                            <p>民現直會質神使幾所文考園什我解三日走連是投……明片十己角飯也事的我。地有濟媽不沒出馬議、舉用代，眼夠案。評企子腳地同麗中說做，評企子腳地同麗中說做，態工後面...</p>
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
                        </div>
                    </li>--%>
                </ul>
            </div>
            <div id="selector"></div>
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
