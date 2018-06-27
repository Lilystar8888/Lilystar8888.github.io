<%@ Page Language="C#" %>
<% var CategoryTags = GetCategoryTags("2");  %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="減重四大計畫-淨化";
        META_DESCRIPTION = @"營養減重的第一步就是幫身體排毒！利用淨化期，排除身體累積已久的廢物，不只身體會感覺到輕盈，也讓你覺得很有成就感！";
        META_IMAGE = "~/images/fb_purification.jpg";
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
<body>
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <div class="kv-purification">
            <h1 class="title-steps">step.1<div>淨化</div></h1>
            <h2 class="subtitle-steps">協助身體排出老舊<br>廢物和毒素</h2>
            <p class="detail-steps">營養減重的第一步就是幫身體排毒！利用淨化期，排除身體累積已久的廢物，不只身體會感覺到輕盈，也讓你覺得很有成就感！</p>
            <p>乳酸菌</p>
            <p>維生素B群</p>
            <p>纖維</p>
        </div>
        <form id="form1">
            <% foreach (var TagInfo in CategoryTags){ %>
            <div class="focus-writing">
                <h2 class="title-focus"><span>焦點</span><%:TagInfo.Name %></h2>
                <div class="owl-carousel">
                    <%var obj = GetTagArticle("2", TagInfo.UNO.ToString()); %>
                    <%foreach(var ArticleInfo in obj){ %>
                    <div class="item">
                        <a href="detail.aspx?no=<%:ArticleInfo.UNO %>">
                            <img src="../API/GetPic.ashx?Token=<%:GetToken() %>&Type=Article&FileName=<%:ArticleInfo.LargePicName %>" />
                            <p><%:ArticleInfo.Title %></p>
                        </a>
                    </div>
                    <%} %>
                </div>
            </div>
            <%} %>

<%--            <div class="focus-writing">
                <h2 class="title-focus"><span>焦點</span>乳酸菌建立腸道好環境建立腸道好環境</h2>
                <div class="owl-carousel">
                    <div class="item">
                        <a href="javascript:;">
                            <img src="images/writings-detail-pic.jpg" />
                            <p>阻斷醣類吸收，健康減重迎接春夏天！</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <img src="images/writings-detail-pic.jpg" />
                            <p>阻斷醣類吸收，健康減重迎接春夏天！</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <img src="images/writings-detail-pic.jpg" />
                            <p>阻斷醣類吸收，健康減重迎接春夏天！</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="focus-writing">
                <h2 class="title-focus"><span>焦點</span>乳酸菌建立腸道好環境建立腸道好環境</h2>
                <div class="owl-carousel">
                    <div class="item">
                        <a href="javascript:;">
                            <img src="images/writings-detail-pic.jpg" />
                            <p>阻斷醣類吸收，健康減重迎接春夏天！</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <img src="images/writings-detail-pic.jpg" />
                            <p>阻斷醣類吸收，健康減重迎接春夏天！</p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <img src="images/writings-detail-pic.jpg" />
                            <p>阻斷醣類吸收，健康減重迎接春夏天！</p>
                        </a>
                    </div>
                </div>
            </div>--%>

            <div class="exam-entry">
                <p class="title-all-writings">所有文章...</p>
                <ul class="writings-list">
<%--                    <li>
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><div class="writings-new">NEW</div><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
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
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic2.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><div class="writings-new">NEW</div><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
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
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><div class="writings-new">NEW</div><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
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
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><div class="writings-new">NEW</div><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
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
                        <div class="pic"><a href="javascript:;"><img src="images/writings-detail-pic.jpg" height="639" width="960"  alt=""/></a></div>
                        <div class="writings-detail"><div class="writings-new">NEW</div><a href="javascript:;">攝取足夠膳食纖維助你減重好處多!</a></div>
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
            </div>
            <div id="selector"></div>
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