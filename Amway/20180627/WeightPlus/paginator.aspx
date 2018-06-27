﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="paginator.aspx.cs" Inherits="paginator" %>

<%
    //var obj1 = GetKeyVisual();
    //var obj2 = GetCategoryTags("2");
    //var obj3 = GetTagArticle("2", obj2.Select(t => t.UNO).Skip(1).First().ToString());
    //var obj4 = GetCategoryArticle("2");
    //var obj5 = GetArticleDetail(obj4.Select(t => t.UNO).First());
    var obj6 = GetBodyTypeArticle("01");

    foreach (var obj7 in obj6)
    {
        var arr1 = GetBodyTypeInfo(obj7.BodyTypeNO);
        var arr2 = GetNutrientInfo(obj7.NutrientNO);
    }
%>

<!DOCTYPE html>
<!--[if IE 7]> <html class="hover ie ie7"> <![endif]-->
<!--[if IE 8]> <html class="hover ie ie8"> <![endif]-->
<!--[if IE 9]> <html class="hover ie ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="zh-TW" class="hover"> <!--<![endif]-->
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
    <link href="<%#Url.ResolveStatic("css/simplePagination.css")%>" rel="stylesheet" type="text/css" />

</head>
<body>
    <div id="content">
        
    </div>
    <div id="selector">
    </div>

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
</body>
</html>
