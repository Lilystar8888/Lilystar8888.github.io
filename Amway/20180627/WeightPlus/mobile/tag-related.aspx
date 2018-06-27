<%@ Page Language="C#" %>
<%
    var qstr = Request.QueryString["type"];
    var str = Request.QueryString["p"];
    if (string.IsNullOrEmpty(qstr) || string.IsNullOrEmpty(str)) Response.Redirect("index.aspx");
    List<WebSite.Modules.BodyTypeInfo> _BodyTypeInfo = new List<WebSite.Modules.BodyTypeInfo>();
    List<WebSite.Modules.NutrientInfo> _NutrientInfo = new List<WebSite.Modules.NutrientInfo>();
    if (qstr == "nutrient")
        _NutrientInfo = GetNutrientInfo(str.Trim());
    else
        _BodyTypeInfo = GetBodyTypeInfo(str.Trim());
        
%>
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
        <form id="form1">
            <p class="search-result"><span><%: qstr == "nutrient" ? _NutrientInfo.First().Name : _BodyTypeInfo.First().Name   %></span>相關文章</p>
            <div class="exam-entry">
                <ul class="writings-list">
<%--                    <li>
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