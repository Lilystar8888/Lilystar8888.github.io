<%@ Page Language="C#" AutoEventWireup="true"%>
<script runat="server">
	protected void Page_Load(object sender, EventArgs e)
	{
		Response.StatusCode = 500;
	}
</script>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
	<meta charset="utf-8">
	<style>
		html{font-size:20px;line-height:1.4;color:#737373;background:#f0f0f0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:30px 10px;}
		html,input{font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;}
		body{max-width:500px;_width:500px;border:1px solid #b3b3b3;border-radius:4px;box-shadow:0 1px 10px #a7a7a7, inset 0 1px 0 #fff;background:#fcfcfc;margin:0 auto;padding:30px 20px 50px;}
		h1{font-size:50px;text-align:center;margin:0 10px;}
		h1 span{color:#bbb;}
		h3{margin:1.5em 0 0.5em;}
		p{margin:1em 0;}
		ul{margin:1em 0;padding:0 0 0 40px;}
		.container{max-width:380px;_width:380px;margin:0 auto;}
		#goog-fixurl ul{list-style:none;margin:0;padding:0;}
		#goog-fixurl form{margin:0;}
		#goog-wm-qt,#goog-wm-sb{border:1px solid #bbb;font-size:16px;line-height:normal;vertical-align:top;color:#444;border-radius:2px;}
		#goog-wm-qt{width:220px;height:20px;box-shadow:inset 0 1px 1px #ccc;margin:5px 10px 0 0;padding:5px;}
		#goog-wm-sb{height:32px;white-space:nowrap;cursor:pointer;background-color:#f5f5f5;background-image:0 #f1f1f1);-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:visible;display:inline;zoom:1;margin:5px 0 0;padding:0 10px;}
		#goog-wm-sb:hover,#goog-wm-sb:focus{box-shadow:0 1px 1px rgba(0,0,0,0.1);background-color:#f8f8f8;border-color:#aaa;}
		#goog-wm-qt:hover,#goog-wm-qt:focus{outline:0;color:#222;border-color:#105cb6;}
		input::-moz-focus-inner{border:0;padding:0;}
		::-moz-selection,::selection{background:#b3d4fc;text-shadow:none;}
	</style>
</head>
<body>
	<div class="container">
		<h1>500 Server Error</h1>
		<p>We apologize for the inconvenience but server has just busy. Please try again later.</p>
		<p>很抱歉，內部伺服器發生錯誤。如果造成您的不便，敬請見諒。建議您幾分鐘後再試一次。</p>
	</div>
</body>
</html>
