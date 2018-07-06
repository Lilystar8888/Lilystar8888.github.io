<%@ Page Language="C#" AutoEventWireup="true" EnableViewState="false" %>
<%@ Import Namespace="wwwins.Lib.Common" %>
<% 
	if (LibConfig.Instant.Mode != PubMode.Dev)
	{
		Response.StatusCode = 404;
	}
	WebLog.WriteExeption(new ApplicationException("exception test - " + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")));
%>
