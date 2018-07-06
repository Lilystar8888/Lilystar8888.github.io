<%@ Page Language="C#" AutoEventWireup="true" EnableViewState="false" %>

<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.ComponentModel" %>
<%@ Import Namespace="System.Web.Compilation" %>
<%@ Import Namespace="wwwins.Lib.Common" %>
<script runat="server">
	string ToValue(HandlerBase api, Type t)
	{
		var u = Nullable.GetUnderlyingType(t);
		if (u != null) { t = u; }
		
		if (t.IsEnum) {
			return "字串列舉，值與代表意義如下:\n" +
				Enum.GetNames(t).Select(name => {
					var field = t.GetField(name);
					var description = "";
					if (field != null) {
						var attr = Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) as DescriptionAttribute;
						if (attr != null) { description = attr.Description; }
					}
					return description.IsNullOrEmpty() ? name : String.Format("{0} ({1})", name, description);
				})
			.Join("\n");
		}
		else if (t == typeof(HttpPostedFile)) {
			return "檔案上傳";
		}
		else if (t == typeof(bool)) {
			return "True/False";
		}
		else if (t.IsSubclassOf(typeof(System.Data.Objects.DataClasses.EntityObject))) {
			var o = Activator.CreateInstance(t) as System.Data.Objects.DataClasses.EntityObject;
			var name = api.DB().GetEntitySetName(o);
			var entityset = api.DB().GetEntitySets().First(x => x.Name == name);
			var keys = entityset.ElementType.KeyMembers;
			if (keys.IsNullOrEmpty() || keys.Count > 1) { return ""; }
			return t.GetProperty(keys[0].Name).PropertyType.Name;
		}
		else if (t.IsValueType) {
			return t.Name;
		}
		return "string";
	}

	string ToUrl(string s)
	{
		return s.Replace("\\", "/").Replace("~/", "");
	}
	string ToID(string s)
	{
		return ToUrl(s).Replace("/", "-").Replace(".", "-");
	}
	
</script>
<%
	if (LibConfig.Instant.Mode == PubMode.Release) {
		Response.StatusCode = 404;
		Response.End();
	}
	var TEST = "»測試";
	var ANCHOR_COLOR = "#428bca";
	var ANCHOR_COLOR_HOVER = "#2a6496";
%>
<!DOCTYPE>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>API List</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" />
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
	<style type="text/css">
		body { margin: 0 40px 100px; }
		table tr:hover { background-color: #eee; }
		th, td { padding: 5px 10px; }
		th { text-align: center; }
		.simulate-a { cursor: pointer; color: <%=ANCHOR_COLOR%>; }
		.simulate-a:hover { color: <%=ANCHOR_COLOR_HOVER%>; }
		h2.description { position: relative; }
			h2.description:after { content: "➥Top"; position: absolute; color: #ccc; right: 40px; cursor: pointer; display: inline-block; width: 50px; text-align: right; top: -50px; }
			h2.description.hover:after { color: #777; }

		.url:after { float:right; content: '<%=TEST%>'; color: <%=ANCHOR_COLOR%>; cursor: pointer; display: inline-block; width: 50px; text-align: right; }
		.url.hover:after { color: <%=ANCHOR_COLOR_HOVER%>; }
	</style>
</head>
<body>
	<%
		var root = Server.MapPath("");
		var files = Directory.GetFiles(root, "*.ashx", System.IO.SearchOption.AllDirectories).Select(x => x.Replace(Server.MapPath("~/"), "~/")).ToList();
	%>

	<h1>列表</h1>
	<table class="index" style="border-collapse: collapse; width: 100%;" border="1">
		<tr>
			<th style="background-color: #000; color: #fff;">網址</th>
			<th style="background-color: #000; color: #fff;">說明</th>
		</tr>
		<%	foreach (string file in files) {
			using(var api = BuildManager.CreateInstanceFromVirtualPath(file, typeof(HandlerBase)) as HandlerBase) {;
		%>
		<tr>
			<td class="url"><span data-anchor="#x-<%:ToID(file)%>" class="api-anchor simulate-a"><%:ToUrl(file)%></span></td>
			<td><%=api.Title.Cl2Br()%></td>
		</tr>
		<%} }%>
	</table>

	<%	foreach (string file in files) {
		using (var api = BuildManager.CreateInstanceFromVirtualPath(file, typeof(HandlerBase)) as HandlerBase) {
	%>

	<h1 id="x-<%:ToID(file)%>" class="title simulate-a" data-url="<%:Url.Resolve(file)%>?Mode=Dev"><%:ToUrl(file)%></h1>
	<h2 class="description">說明</h2>
	<p><%=api.Title.Cl2Br()%></p>
	<h2>允許 Http Method</h2>
	<p>
		<%
			var verbs = AttributeHelper.GetAll<AcceptFilterAttribute>(api.GetType()).Select(x => x.Verbs.ToString())
				.Where(x => !x.IsNullOrEmpty());
			if (verbs.Count() > 0) {
				Response.Write(verbs.Join("/").ToUpper());
			}
			else {
				Response.Write("不限");
			}
		%>
	</p>
	<h2>回應</h2>
	<p><%=api.Return.Cl2Br()%></p>

	<%var @params = api.GetType().GetProperties()
					.Where(x => x.CanWrite)
					.Select(x => new {
						prop = x,
						attr = x.GetCustomAttributes(typeof(RequestParamAttribute), false).FirstOrDefault() as RequestParamAttribute,
					})
					.Where(x => x.attr != null)
					.Select(x => new {
						name = new[] { x.attr.Name, x.prop.Name }.Coalesce(),
						type = x.prop.PropertyType,
						attr = x.attr,
					})
					.Concat(api.AdditionRequestParams.Select(x => new {
						name = x.Item2.Name,
						type = x.Item1,
						attr = x.Item2,
					}))
					.ToList();
	%>
	<h2>參數</h2>
	<%if (@params.Count == 0) { %>
	<p>無</p>
	<%}
   else {%>
	<table style="border-collapse: collapse; width: 100%;" border="1">
		<tr>
			<th style="background-color: #000; color: #fff;">名稱</th>
			<th style="background-color: #000; color: #fff;">說明</th>
			<th style="background-color: #000; color: #fff;">必要</th>
			<th style="background-color: #000; color: #fff;">值</th>
			<th style="background-color: #000; color: #fff;">來自</th>
		</tr>
		<%foreach (var param in @params) {%>
		<tr>
			<td><%:param.name%></td>
			<td><%=param.attr.Description.Cl2Br()%></td>
			<td><%:param.attr.IsRequire ? "是" : "否"%></td>
			<td><%=ToValue(api, param.type).Cl2Br()%></td>
			<td><%:param.attr.From.ToDescription()%></td>
		</tr>
		<%}%>
	</table>
	<%}}} %>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript">
		$('.index').on('click', '.api-anchor', function() {
			var h = $(this).data('anchor');
			$('body,html').stop().animate({ scrollTop: $(h).offset().top }, 400);
			location.hash = h;
		});
		$('h1.title').on('click', function() {
			location.href = $(this).data('url');
		});
		$('h2.description').on('click', function(e) {
			if (e.clientX < $(this).offset().left + $(this).width() - 100) { return; }
			$('body,html').stop().animate({ scrollTop: 0 }, 400);
			location.hash = '#';
		}).on('mousemove', function(e) {
			$(this).toggleClass('hover', e.clientX > $(this).offset().left + $(this).width() - 100)
		}).on('mouseleave', function(e) {
			$(this).removeClass('hover');
		});

		var w = (function() {
			var t = $('<span/>').text('<%=TEST%>').appendTo('body');
			var w = t.width(); t.remove(); return w;
		})();

		$('td.url').on('click', function(e) {
			if (e.clientX < $(this).offset().left + $(this).width() - w) { return; }
			location.href = $($('.api-anchor', this).data('anchor')).data('url');
		}).on('mousemove', function(e) {
			$(this).toggleClass('hover', e.clientX > $(this).offset().left + $(this).width() - w)
		}).on('mouseleave', function(e) {
			$(this).removeClass('hover');
		});
	</script>
</body>
</html>
