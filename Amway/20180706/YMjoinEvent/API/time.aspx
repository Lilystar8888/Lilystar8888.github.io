<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ Import Namespace="wwwins.Lib.Common" %>
<script runat="server">
	protected void Page_Load(object sender, EventArgs e)
	{
		if (LibConfig.Instant.Mode != PubMode.Dev) {
			Response.StatusCode = 404;
			Response.End();
		}
	}

	protected void btn_Click(object sender, EventArgs e)
	{
		if (tbx.Text.IsNullOrEmpty()) {
			if (cbx.Checked) {
				Time.Pause();
			}
			else {
				Time.Reset();
			}
		}
		else {
			if (!IsValid) { return; }
			Time.Set(DateTime.Parse(tbx.Text), cbx.Checked);
		}
	}

	protected void Page_PreRender(object sender, EventArgs e)
	{
		cbx.Checked = Time.IsPaused;
	}
	protected void btnUpdate_Click(object sender, EventArgs e) { }
</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title></title>
</head>
<body>
	<form id="form1" runat="server">
	<div>
	<p>
	現在時間: <!--start--><%=Time.Now.ToString("yyyy/MM/dd HH:mm:ss")%><!--end--> <%=Time.IsPaused ? "(暫停中)" : ""%> <asp:LinkButton runat="server" id="btnUpdate" text="更新" onclick="btnUpdate_Click" causesvalidation="false" />
	</p>
	<p>
		調整時間: <asp:TextBox runat="server" id="tbx" />
		<asp:RegularExpressionValidator runat="server" controltovalidate="tbx" ValidationExpression="\d{4}\/[012]?\d\/[0123]\d [012]\d:[0-5]\d:[0-5]\d" ErrorMessage="(格式: yyyy/MM/dd HH:mm:ss)" /><br />
		<br />
		<asp:checkbox runat="server" id="cbx" Text="暫停"  />
		</p>
		<asp:Button runat="server" id="btn" onclick="btn_Click" text="   確定   " />
	</div>

	</form>
</body>
</html>
