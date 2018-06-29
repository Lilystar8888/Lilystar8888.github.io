<%@ Page Language="C#" %>
<script runat="server">
    protected override void Render(HtmlTextWriter writer)
    {
		META_TITLE="成功見證精選案例";
		
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
        <div class="content">
            <!--
                按登入後加act ; 按登出再移除act
                <div class="login act">
            -->
            <div class="login <%:Session["Login"] != null ? "act" : ""%>">
                <div class="offline"><a href="javascript:;">登入瀏覽所有成功見證</a></div>
                <div class="online"><%:Session["Login"] != null ? Session["Login"].ToString():"" %><a href="javascript:;">登出</a></div>
            </div>
            <div class="searchbar">
                <input type="text" placeholder="<%:Session["Login"] == null ? "搜尋姓名..." : "搜尋編號或姓名..." %>" required />
                <a href="javascript:;" class="search-btn btn">搜尋</a>
                <div class="select">
                    <select>
                    </select>
                </div>
            </div>
            <!--remind>登入才會秀這段-->
            <p class="remind" style="display: <%:Session["Login"] != null ? "block" : "none" %>">成功見證包含個人機敏資料，請勿轉載！</p>
            <ul class="showcaseslist">
                <li>
                    <div class="pic-show">
                        <div class="sift">精選案例</div>
                        <img src="images/m-0001s.jpg"  alt=""/>
                    </div>
                    <div class="show-results">
                        <p class="name-show">章小蕙章小蕙</p>
                        <p>編號：12345678</p>
                        <p>減重前<span>137.9公斤</span></p>
                        <p>減重後<span>102.4公斤</span></p>
                        <p class="fat">體脂減 23.4%</p>
                        <div class="lose"><span>-25.5</span>公斤</div>
                    </div>
                    <div class="introduce">
                        <div class="time-detail">
                            <a href="javascript:;" class="fb-share">FB分享</a>
                            <a href="javascript:;" class="line-share">LINE分享</a>
                        </div>
                        <p>我已年過30歲又生過小孩，減重過程中明顯感覺代謝較差，跟我同組的另外兩位男士可以在兩周內減三公斤，可是我花了四週才跟他們一樣。但我知道必須堅持，我不能放棄。</p>
                        <p>運動前一定先補充B群、卵磷脂，運動後再喝優質蛋白素，再加上每天必吃的Double X，維持營養均衡，總算讓我在最後一刻也達標了！</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="selector"></div>
        <!-- #include file="footer.aspx" -->
    </div>
    <a href="javascript:;" class="top btn">TOP</a>
    <div class="box-exam-area">
        <div class="tips data-form">
            <p class="owner">會員/直銷商登入</p>
            <div class="data-tips">
                <label>編　號</label>
                <input type="text"  required maxlength="8"/>
            </div>
            <div class="data-tips">
                <label>密　碼</label>
                <input type="password"  required maxlength="20"/>
            </div>
            <a href="javascript:;" class="btn-ok">登入</a>
            <div class="icon-i" style="display:none">
                <img src="images/icon-i@3x.png">
                <p>編號或密碼錯誤，請重新檢查或聯絡安麗客服</p>
            </div>
            <a href="javascript:;" class="close-tips">關閉</a>
        </div>
    </div>

    <%-- 存放本頁前端會用到的全域變數 
    --%><script type="text/javascript">
        var Config = <%=new {                
            //CreateFBPicUrl = System.Configuration.ConfigurationManager.AppSettings["CreateFBPicUrl"],
            ShareURL = Url.ToFull("~/mobile/sharecase.aspx"),
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