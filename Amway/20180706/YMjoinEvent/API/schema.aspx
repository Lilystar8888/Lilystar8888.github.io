<%@ Page Language="C#" %>
<%@ Import Namespace="wwwins.Lib.Common" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="Campaign.Modules" %>
<script runat="server">

	protected void Page_PreInit(object sender, EventArgs args)
	{
		if (LibConfig.Instant.Mode == PubMode.Release) {
			Response.StatusCode = 404;
			Response.End();
		}
		if (!Page.IsAjax || !Request.IsLocal) { return; }

		var t = Request.Form["table"];
		var c = Request.Form["column"];
		var d = Request.Form["desc"];

		var db = DB<DBEntities>();
		if (c.IsNullOrEmpty()) {
			db.ExecuteStoreCommand(@"
				IF NOT EXISTS (SELECT NULL FROM SYS.EXTENDED_PROPERTIES WHERE [major_id] = OBJECT_ID({0}) AND [name] = N'MS_Description' AND [minor_id] = 0)
					EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = {1}, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = {0};
				ELSE
					EXECUTE sp_updateextendedproperty @name = N'MS_Description', @value = {1}, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = {0};
			", t, d);
		}
		else {
			db.ExecuteStoreCommand(@"
				IF NOT EXISTS (SELECT NULL FROM SYS.EXTENDED_PROPERTIES WHERE [major_id] = OBJECT_ID({0}) AND [name] = N'MS_Description' AND [minor_id] = (SELECT [column_id] FROM SYS.COLUMNS WHERE [name] = {2} AND [object_id] = OBJECT_ID({0})))
					EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = {1}, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = {0}, @level2type = N'COLUMN', @level2name = {2};
				ELSE
					EXECUTE sp_updateextendedproperty @name = N'MS_Description', @value = {1}, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = {0}, @level2type = N'COLUMN', @level2name = {2};
			", t, d, c);
		}

		Response.End();
	}

	public class Table
	{
		public int id { get; set; }
		public string name { get; set; }
		public string description { get; set; }
		public const string QUERY = @"
			SELECT
				t.id, t.name, td.value AS [description]
			FROM
				sysobjects t 
			LEFT OUTER JOIN
				sys.extended_properties td
			ON	td.major_id = t.id
				AND td.minor_id = 0
				AND td.name = 'MS_Description'
			WHERE
				t.type = 'u'
			ORDER
				BY t.name
		";
	}
	public class Column
	{
		public string name { get; set; }
		public int nullable { get; set; }
		public string typename { get; set; }
		public string description { get; set; }
		public short length { get; set; }
		public byte precision { get; set; }
		public byte scale { get; set; }

		public int lengths
		{
			get
			{
				if (typename.ContainsIn("nvarchar", "nchar")) {
					return length < 0 ? length : length / 2;
				}
				return length;
			}
		}

		public string type
		{
			get
			{
				if (new[] { "decimal", "numeric" }.Contains(typename)) {
					return String.Format("{0}({1},{2})", typename, precision, scale);
				}
				else if (new[] { "binary", "char", "nvarchar", "varbinary", "varchar" }.Contains(typename)) {
					return String.Format("{0}({1})", typename, lengths == -1 ? "MAX" : lengths.ToString());
				}
				return typename;
			}
		}

		public const string QUERY = @"
			SELECT  	
				c.name AS [name]
				,isnullable AS [nullable]
				,ty.name as [typename]
				,cd.value  AS [description]
				,c.length  AS [length]
				,c.xprec  AS [precision]
				,c.xscale AS [scale]
			FROM
				sysobjects t
			INNER JOIN
				syscolumns c
			ON
				c.id = t.id
			JOIN
				sys.types AS ty
			ON
				c.xusertype = ty.user_type_id   
			LEFT OUTER JOIN
				sys.extended_properties cd
			ON		cd.major_id = c.id
					AND cd.minor_id = c.colid
					AND cd.name = 'MS_Description'
			WHERE
				t.id = @ID
			ORDER BY
				c.colorder
		";
	}


</script>
<%
	var db = DB<DBEntities>();
	var tables = db.ExecuteStoreQuery<Table>(Table.QUERY).Where(x => !x.name.StartsWith("sysdi")).ToList();
%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Table Schema</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" />
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
	<style>
		body { margin: 0 40px 100px; }
		table tr:hover { background-color: #eee; }
		.fake-anchor { cursor: pointer; color: #428bca; }
		h2:after { content: "➥Top"; position: absolute; color: #0499c9; cursor: pointer; display: inline-block; width: 85px; text-align: right; right: 0; margin-right: 45px; }
		h2.hover:after, .fake-anchor:hover { text-decoration: underline; color: #2a6496; }
		td.edit, td[contenteditable] { background-color: #ffc !important; }
	</style>
</head>
<body>
	<h1>資料表</h1>
	<table class="index" style="border-collapse: collapse; width: 100%;" border="1">
		<tr>
			<th style="background-color: #000; color: #fff;">名稱</th>
			<th style="background-color: #000; color: #fff;">說明</th>
		</tr>
		<%foreach (var table in tables) {%>
		<tr>
			<td><span data-anchor="#table<%:table.id%>" class="fake-anchor"><%: table.name %></span></td>
			<td data-table="<%:table.name%>"><%=table.description.Cl2Br()%></td>
		</tr>
		<%} %>
	</table>
	<h1>Schema</h1>
	<%foreach (var table in tables) {%>
	<h2 id="table<%:table.id%>"><%: table.name %></h2>
	<table style="border-collapse: collapse; width: 100%;" border="1">
		<tr>
			<th style="background-color: #000; color: #fff;">欄位名稱</th>
			<th style="background-color: #000; color: #fff;">型別</th>
			<th style="background-color: #000; color: #fff;">Nullable</th>
			<th style="background-color: #000; color: #fff;">說明</th>
		</tr>
		<%foreach (var column in db.ExecuteStoreQuery<Column>(Column.QUERY, new SqlParameter("@ID", table.id))) {%>
		<tr>
			<td><%:column.name%></td>
			<td><%:column.type%></td>
			<td><%:column.nullable == 0 ? "否" : "是"%></td>
			<td data-table="<%:table.name%>" data-column="<%:column.name%>"><%=column.description.Cl2Br()%></td>
		</tr>
		<%} %>
	</table>
	<%} %>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script>
		$(function() {
			$('.index').on('click', '.fake-anchor', function() {
				$('body,html').stop().animate({ scrollTop: $($(this).data('anchor')).offset().top }, 400);
			});
			$('h2').on('click', function(e) {
				if (e.clientX < $(this).offset().left + $(this).width() - 85) { return; }
				$('body,html').stop().animate({ scrollTop: 0 }, 400)
			}).on('mousemove', function(e) {
				$(this).toggleClass('hover', e.clientX > $(this).offset().left + $(this).width() - 85)
			}).on('mouseleave', function(e) { $(this).removeClass('hover') });

			function convert(str) { return str.replace(/<br\s*\/?>/g,'\n').replace(/\n+$/,'') }

			$('table').on('dblclick', 'td[data-table]', function() {
				if ($(this).attr('contenteditable')) { return; }
				var t = convert($(this).html());
				$(this).attr('contenteditable', true)
					.focus()
					.one('blur', function() {
						$(this).removeAttr('contenteditable');
						var desc = convert($(this).html());
						if (t == desc) { return; }
						$.post(location.href, {
							table: $(this).data('table'),
							column: $(this).data('column'),
							desc: desc
						});
					});
			})
			.on('keydown', 'td[contenteditable]', function(e) {
				if (e.keyCode == 13 && !e.shiftKey) {
					e.preventDefault();
					$(this).blur();
				}
			})
		});
	</script>
</body>
</html>