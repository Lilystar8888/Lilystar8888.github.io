<%@ Page Language="C#" %>

<script runat="server">
    protected int UNO = 0;
    protected WebSite.Modules.ArticleInfo obj = new WebSite.Modules.ArticleInfo();
    protected string LineShare = string.Empty;
    protected List<WebSite.Modules.NutrientInfo> _NutrientInfo = new List<WebSite.Modules.NutrientInfo>();
    protected List<WebSite.Modules.BodyTypeInfo> _BodyTypeInfo = new List<WebSite.Modules.BodyTypeInfo>();
    
    protected override void Render(HtmlTextWriter writer)
    {               
        //var FBPicUrl = System.Configuration.ConfigurationManager.AppSettings["FBPicUrl"];
        //var CreateFBPicUrl = System.Configuration.ConfigurationManager.AppSettings["CreateFBPicUrl"];
        
        var no = Request.QueryString["no"];
        if (!int.TryParse(no, out UNO)) { Response.Redirect("index.aspx"); return; }
        obj = GetArticleDetail(UNO);
        if (obj.IsNull()) { Response.Redirect("index.aspx"); return; }

        //var parameter = String.Format("Type=Article&UNO={0}", obj.UNO);
        //CreateFBPicUrl.GetFileApi(parameter);
        
        _NutrientInfo = GetNutrientInfo(obj.NutrientNO);
        _BodyTypeInfo = GetBodyTypeInfo(obj.BodyTypeNO);

        META_TITLE = obj.Title;
        META_OG_TITLE = obj.Title;
        META_OG_DESCRIPTION = obj.ShortDescription;
        META_IMAGE = string.Format("{0}{1}", Url.ToFull("~/images/FBPic/"),obj.LargePicName);
        META_OG_LINK = Request.Url.AbsoluteUri;
        LineShare = string.Format("{0} {1}", obj.Title, Request.Url.AbsoluteUri);
        
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
        <div class="content">
            <div class="detail-writings box-inline">
                <h2 class="title-detail-writings"><%:obj.Title %></h2>
                <div class="time-detail">
                    <span>發佈時間 <%:obj.ValidDate.ToString("yyyy-MM-dd") %></span>
                    <a href="javascript:;" class="fb-share btn-inline misc">FB分享</a>
                    <a href="javascript:;" class="wechat-share btn-inline misc">wechat分享</a>
                </div>
                <%if(obj.YouTubeUrl.IsNullOrEmpty()){ %>
                <div class="pic-detail-writings"><img src="API/GetPic.ashx?Token=<%:GetToken() %>&Type=Article&FileName=<%:obj.LargePicName %>"  alt=""/></div>
                <%}else{ %>
                <div class="writing-video" style="display:block">
                    <iframe width="560" height="315" src="<%:obj.YouTubeUrl %>" frameborder="0" allowfullscreen></iframe>
                </div>
                <%} %>
                <div class="detail-writings-content">
                    <%--<p><%:obj.Description %></p>--%>
                    <%foreach(var cobj in obj.ArticleDetailInfo){ %>
                        <% if(!cobj.Title.IsNullOrEmpty()) {%>
                            <p style="color:black"><%:cobj.Title %></p>
                        <%} %>
                        <p><%:cobj.Description %></p>
                    <%} %>  
                </div>
            </div>
            <div class="detail-about box-inline">
                <h4 class="title-right">相關營養素</h4>
                <div class="tag-area">
                    <!--營養素-->
                   <%foreach (var nu in _NutrientInfo)
                     { %>
                    <a href="tag-related.aspx?type=nutrient&p=<%:nu.UNO %>" class="btn-nutriment" data-tracking="ga('send','event','pc','label.nutrient','<%:nu.Name %>');"><%:nu.Name %></a>
                   <%} %>
<%--                    <a href="javascript:;" class="btn-nutriment">乳酸菌</a>
                    <a href="javascript:;" class="btn-nutriment">維生素B</a>
                    <a href="javascript:;" class="btn-nutriment">卵磷脂</a>--%>
                </div>
                <h4 class="title-right mt50">適合哪種體質</h4>
                <div class="type-about">
                <%foreach (var bt in _BodyTypeInfo)
                { %>
                    <%switch (bt.Name)
                        { %>
                        <%case "健康樂活型": %>
                        <a href="exam-type.aspx?type=01" class="exam-about01" data-tracking="ga('send','event','pc','label.type','健康樂活型');">健康樂活型</a>
                        <%break; %>
                        <%case "壓力多吃型": %>
                        <a href="exam-type.aspx?type=02" class="exam-about02" data-tracking="ga('send','event','pc','label.type','壓力多吃型');">壓力多吃型</a>
                        <%break; %>
                        <%case "暴飲暴食型": %>
                        <a href="exam-type.aspx?type=03" class="exam-about03" data-tracking="ga('send','event','pc','label.type','暴飲暴食型');">暴飲暴食型</a>
                        <%break; %>
                        <%case "糖心型": %>
                        <a href="exam-type.aspx?type=04" class="exam-about04" data-tracking="ga('send','event','pc','label.type','糖心型');">糖心型</a>
                        <%break; %>
                        <%case "代謝偏低型": %>
                        <a href="exam-type.aspx?type=05" class="exam-about05" data-tracking="ga('send','event','pc','label.type','代謝偏低型');">代謝偏低型</a>
                        <%break; %>
                    <%} %>
                <%} %>
<%--                    <a href="javacsript:;" class="exam-about01">健康樂活型</a>
                    <a href="javacsript:;" class="exam-about02">壓力多吃型</a>
                    <a href="javacsript:;" class="exam-about03">暴飲暴食型</a>
                    <a href="javacsript:;" class="exam-about04">糖心型</a>
                    <a href="javacsript:;" class="exam-about05">代謝偏低型</a>--%>
                </div>
            </div>
        </div>
    </div>
    <!-- #include file="footer.aspx" -->
    <div class="box-exam-area">
        <div class="tips">
            <p class="owner">分享到微信朋友圈</p>
            <div class="qr">
                <img src="http://chart.googleapis.com/chart?cht=qr&chs=172x172&chl=<%: Server.UrlEncode(Url.ToFull(string.Format("~/mobile/detail.aspx{0}",Request.Url.Query)))  %>">
            </div>
            <a href="javascript:;" class="close-tips misc">關閉</a>
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
