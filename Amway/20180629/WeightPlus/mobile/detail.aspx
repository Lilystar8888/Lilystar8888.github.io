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
        META_IMAGE = string.Format("{0}{1}", Url.ToFull("~/images/FBPic/"), obj.LargePicName);
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="format-detection" content="telephone=no">
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="../css/owl.carousel2.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <!-- #include file="menu.aspx" -->
    <div id="wrap">
        <h2 class="title-detail"><%:obj.Title %></h2>
        <div class="time-detail">
            <span class="writing-time">發佈時間 <%:obj.ValidDate.ToString("yyyy-MM-dd") %></span>
            <a href="javascript:;" class="fb-share">FB分享</a>
            <a href="http://line.me/R/msg/text/?<%:HttpUtility.UrlEncode( LineShare,Encoding.UTF8) %>" class="line-share">LINE分享</a>
        </div>
        <%if(obj.YouTubeUrl.IsNullOrEmpty()){ %>
        <div class="writing-pic">
            <img src="../API/GetPic.ashx?Token=<%:GetToken() %>&Type=Article&FileName=<%:obj.LargePicName %>" />
        </div>
        <%}else{ %>
        <div class="writing-video" style="display:block">
            <iframe width="560" height="315" src="<%:obj.YouTubeUrl %>" frameborder="0" allowfullscreen></iframe>
        </div>
        <%} %>
        <div class="content-detail">
            <p><%:obj.ShortDescription %></p>
            <%foreach(var cobj in obj.ArticleDetailInfo){ %>
                <p><%:cobj.ShortDescription %></p>
            <%} %>        
        </div>
        <div class="content-detail">
            <h3 class="title-green">相關營養素</h3>
            <div class="tag-area">
                <!--營養素-->
                <%foreach (var nu in _NutrientInfo)
                  { %>
                    <a href="tag-related.aspx?type=nutrient&p=<%:nu.UNO %>" class="btn-nutriment" data-tracking="ga('send','event','mobile','label.nutrient','<%:nu.Name %>');"><%:nu.Name %></a>
                <%} %>
<%--                <a href="javascript:;" class="btn-nutriment">乳酸菌</a>
                <a href="javascript:;" class="btn-nutriment">維生素B</a>
                <a href="javascript:;" class="btn-nutriment">卵磷脂</a>--%>
            </div>
            <h3 class="title-green">適合哪種體質</h3>
            <%foreach (var bt in _BodyTypeInfo)
              { %>
                <%switch (bt.Name)
                  { %>
                    <%case "健康樂活型": %>
                    <a href="exam-type.aspx?type=01" class="btn-exam01" data-tracking="ga('send','event','mobile','label.type','健康樂活型');">健康樂活型</a>
                    <%break; %>
                    <%case "壓力多吃型": %>
                    <a href="exam-type.aspx?type=02" class="btn-exam02" data-tracking="ga('send','event','mobile','label.type','壓力多吃型');">壓力多吃型</a>
                    <%break; %>
                    <%case "暴飲暴食型": %>
                    <a href="exam-type.aspx?type=03" class="btn-exam03" data-tracking="ga('send','event','mobile','label.type','暴飲暴食型');">暴飲暴食型</a>
                    <%break; %>
                    <%case "糖心型": %>
                    <a href="exam-type.aspx?type=04" class="btn-exam04" data-tracking="ga('send','event','mobile','label.type','糖心型');">糖心型</a>
                    <%break; %>
                    <%case "代謝偏低型": %>
                    <a href="exam-type.aspx?type=05" class="btn-exam05" data-tracking="ga('send','event','mobile','label.type','代謝偏低型');">代謝偏低型</a>
                    <%break; %>
                <%} %>
            <%} %>
<%--            <a href="javascript:;" class="btn-exam01">健康樂活型</a>
            <a href="javascript:;" class="btn-exam02">壓力多吃型</a>
            <a href="javascript:;" class="btn-exam03">暴飲暴食型</a>
            <a href="javascript:;" class="btn-exam04">糖心型</a>
            <a href="javascript:;" class="btn-exam05">代謝偏低型</a>--%>
        </div>
        <div class="exam-entry">
            <p class="share-title">分享本篇文章</p>
            <a href="javascript:;" class="fb-share-big">FB分享</a>
            <a href="http://line.me/R/msg/text/?<%:HttpUtility.UrlEncode( LineShare,Encoding.UTF8) %>" class="line-share-big">LINE分享</a>
        </div>
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