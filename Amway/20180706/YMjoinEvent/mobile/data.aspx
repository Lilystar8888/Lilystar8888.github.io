<%@ Page Language="C#" %>

<%--<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        var distNo = Request.Form["DistNo"] ?? Cookier.Get("cDistNo");
        var mobile = Request.Form["Mobile"] ?? Cookier.Get("cMobile");
        var identity = Request.Form["Identity"] ?? Cookier.Get("cIdentity");
        var year = Request.Form["Year"] ?? Cookier.Get("cYear");
        var fbId = Request.Form["FacebookId"];
        var code = Request.QueryString["code"];

        WebLog.WriteMsg(string.Format("distNo={0},mobile={1},identity={2},year={3},fbId={4}",distNo,mobile,identity,year,fbId), "CampaignPageBase SetYongMomMember",WebLog.GetIP());
        var hasVerify = false;
        if (SetYongMomMember(distNo,mobile,identity,year,fbId,code,out hasVerify)) Response.Redirect(System.Configuration.ConfigurationManager.AppSettings["FBGroupURL"]);
        if(hasVerify) Alert("您已進行過驗證，無法再次驗證。");
    }
</script>--%>

<!DOCTYPE html>
<html lang="zh-TW">
<head runat="server">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
 
	<link href="<%#Url.ResolveStatic("css/style.css")%>" rel="stylesheet" type="text/css" />
	<!-- #include file="~/ga.aspx" -->
</head>
<!-- 10/1 將temp拿掉就可以了 -->
<%--<body class="temp">--%>
<body style="display:none">
    <div id="wrap">
	    <div class="header">
	    	<a href="index.aspx" class="nav-item nav-item--logo misc textNone">漾媽姐妹淘</a>
	        <nav class="nav">
                <a href="index.aspx" class="nav-item nav-item--home">首頁</a>
                <a href="video-list.aspx" class="nav-item">漾媽學堂</a>
                <a href="data.aspx" class="nav-item">加入漾媽FB</a>
                <a href="data.aspx?tab=ocr " class="nav-item">漾媽驗證</a>
                <div class="nav-share">
                    <span class="nav-share--text">分享</span>
                    <a href="javascript:;" class="nav-item nav-item--fb misc">FB</a>
<%--                        <div class="line-it-button" data-lang="zh_Hant" data-type="share-d" data-url="<%:Url.ToFull("~/index.aspx") %>" style="display: none;"></div>--%>
                    <a class="nav-item nav-item--line misc line-it-button" href="http://line.naver.jp/R/msg/text/?<%:Url.ToFull("~/index.aspx").UrlEncode() %>"></a>
                </div>
            </nav>
	        <a href="javascript:;" class="menu">
	            <span></span>
	            <span></span>
	            <span></span>
	        </a>
	    </div>
		<ul class="tabs">
			<li class="tabs-item tabs-item--fb tabs-item--active">加入FB社團</li>
			<li class="tabs-item tabs-item--member">漾媽姐妹淘成員驗證</li>
		</ul>
		<div class="tabsContentBox">
			<div class="tabsContent tabsContent--active">
				<form class="form addfbForm" method="post" action="<%:Url.Resolve("~/mobile/data.aspx") %>" signedRequest>
					<h2 class="h2-title text-center">加入「漾媽姐妹淘」<span class="data-title--fb text"></span></h2>
					<p>「漾媽姐妹淘」社團，不限直銷商 / 會員，是屬於妳的園地。妳可以盡情交流媽媽經，也可以抒發心情，互相加油打氣！</p>
					<p>如果你已經提供過下方手機、身分證資料可直接去<a href="https://www.facebook.com/groups/185540838524279/?fref=ts" target="_blank" class="btn-hollow--blue btn--arrowBlue">漾媽<span class="btn-icon--fb">fackbook</span>社團</a></p>
					<input type="hidden" name="Device" value="mobile" />
		            <input type="hidden" name="FacebookId" value="" />
					<ul>
						<li class="input-item m20"><label class="require bold" for="edtMobile">手機號碼後4碼</label><input type="number" id="edtMobile" name="Mobile" max="9999" required pattern="^[0-9]{4}$" data-label="手機號碼後4碼" data-message="請填寫正確的 手機號碼後4碼 格式"   maxlength = "4" oninput="maxLengthCheck(this)" /></li>
						<li class="input-item m20"><label class="require bold" for="edtEmail">身分證後4碼</label><input type="number" id="edtIdentity" name="Identity" max="9999" required pattern="^[0-9]{4}$" data-label="身分證後4碼" data-message="請填寫正確的 身分證後4碼 格式"   maxlength = "4" oninput="maxLengthCheck(this)" /></li>
						<li>
							個資法相關說明
							<div class="scroll">
								<p>依據個人資料保護法（以下稱個資法）向參與本活動消費者告知下列事項，參與本活動前請務必詳閱以下說明。</p>
								<ul>
									<li>蒐集個人資料公司：安麗日用品股份有限公司</li>
									<li>蒐集之目的：作為參與「漾媽姐妹淘」FB社團活動及後續相關程序之聯繫使用。</li>
									<li>個人資料之類別：包括姓名、電話、電子郵件信箱及地址等個人資料中之識別類。</li>
									<li>個人資料利用之期間、地區、對象及方式：
										<ul>
											<li>期間： 至「漾媽姐妹淘」FB社團營運結束且相關贈品寄送等後續相關程序執行完畢。</li>
											<li>地區：本國、未受中央目的事業主管機關限制之國際傳輸個人資料之接收者所在地。</li>
											<li>對象：本公司、本公司委託機關及執行本活動時之必要相關人員。</li>
											<li>方式：以自動化機器或其他非自動化之利用方式。</li>
										</ul>
									</li>
									<li>依據個資法第三條規定，本活動參與者了解，就其所提供之個人資料得行使下列權利：
										<ol>
											<li>得向本公司查詢或請求閱覽、請求製給複製本，惟本公司依法得酌收必要成本費用。</li>
											<li>得向本公司請求補充或更正，惟依法本活動參與者應為適當之釋明。</li>
											<li>得向本公司請求停止蒐集、處理或利用以及請求刪除，惟依法本公司因執行職務或保存證據所必須者，得不依本活動參與者請求為之。</li>
										</ol>
									</li>
									<li>不提供個人資料所致權益之影響：
										<ul>
											<li>本活動參與者可自由選擇是否提供本公司其個人資料，若拒絕提供相關個人資料，則無法參與本活動；且經檢舉或本公司發現不足以確認本活動參與者的身分真實性或其他個人資料冒用、盜用、資料不實等情形，致本公司無法進行必要之確認作業，本公司有權暫時停止提供本活動相關服務，若有不便之處敬請見諒。</li>
										</ul>
									</li>
								</ul>
								<p>本人瞭解本公司上開告知事項 ，並已清楚瞭解 貴公司蒐集、處理及利用本人個人資料之目的及用途，並同意 貴公司於上開告知事項範圍內，得蒐集、處理、國際傳遞及利用本人資料。</p>
							</div>
						</li>
						<li class="text-center check-item"><input type="checkbox" id="ckbAgree" required data-label="請勾選同意個資收集條款" /><label for="ckbAgree"><span>同意個資收集條款</span></label></li>
						<li class="flex"><a href="javascript:void(0)" class="x-submit btn-solid btn--arrow m10" requireFB target="_self">送出資料</a></li>
					</ul>			
					<p class="text-note--group">進入FB社團首頁後，請點下 <span class="addGroup">+加入社團</span> 待管理員通知您即加入完成！</p>
				</form>
			</div>
			<div class="tabsContent" style="display:none;">
				<form class="form ocr" method="post" action="<%:Url.Resolve("~/mobile/data.aspx") %>" signedRequest>
				<h2 class="h2-title text-center">「漾媽姐妹淘」<br>
成員資格驗證</h2>
					<p>0～6歲寶貝的媽咪，且為直銷商╱會員，可透過兒童健保卡線上驗證，<span class="bold text--pink">經12小時驗證開通後</span>，即成為「漾媽姐妹淘」成員。</p>
					<input type="hidden" name="Device" value="mobile" />
		            <input type="hidden" name="FacebookId" value="" />
                    <input type="hidden" id="edtYear" name="Year" value="" />
                    <input type="hidden" id="edtIdentity1" name="Identity" value="" />
					<ul>
						<li class="input-item"><label for="edtDistNo" class="require"><span class="precautions-title">STEP<br>1</span>直銷商編號</label><input type="number" id="edtDistNo" class="input-item--float" name="DistNo" max="9999999" data-label="直銷商編號"  required pattern="^[0-9]{7}$" data-message="請填寫正確的 直銷商編號 格式"  maxlength = "7" oninput="maxLengthCheck(this)"/></li>
						<li class="require"><span class="precautions-title">STEP<br>2</span> 拍攝小孩健保卡照片
							<p class="p--photo">健保卡照片範例</p>
							<ol class="listNum listNum--data">
								<li class="listNum-item">請使用您的小孩健保卡正面照</li>
								<li class="listNum-item">卡片文字不可模糊</li>
								<li class="listNum-item">卡片不可扭曲或變色</li>
								<li class="listNum-item">卡片請占滿畫面居中擺正</li>
								<li class="listNum-item">照片需光線充足明亮(如圖示亮度)</li>
							</ol>
						</li>
						<li class="m10">
							個資法相關說明：
							<div class="scroll">
								<p>依據個人資料保護法（以下稱個資法）向參與本活動消費者告知下列事項，參與本活動前請務必詳閱以下說明。</p>
								<ul>
									<li>蒐集個人資料公司：安麗日用品股份有限公司</li>
									<li>蒐集之目的：作為參與「漾媽姐妹淘」FB社團活動及後續相關程序之聯繫使用。</li>
									<li>個人資料之類別：包括姓名、電話、電子郵件信箱及地址等個人資料中之識別類。</li>
									<li>個人資料利用之期間、地區、對象及方式：
										<ul>
											<li>期間： 至「漾媽姐妹淘」FB社團營運結束且相關贈品寄送等後續相關程序執行完畢。</li>
											<li>地區：本國、未受中央目的事業主管機關限制之國際傳輸個人資料之接收者所在地。</li>
											<li>對象：本公司、本公司委託機關及執行本活動時之必要相關人員。</li>
											<li>方式：以自動化機器或其他非自動化之利用方式。</li>
										</ul>
									</li>
									<li>依據個資法第三條規定，本活動參與者了解，就其所提供之個人資料得行使下列權利：
										<ol>
											<li>得向本公司查詢或請求閱覽、請求製給複製本，惟本公司依法得酌收必要成本費用。</li>
											<li>得向本公司請求補充或更正，惟依法本活動參與者應為適當之釋明。</li>
											<li>得向本公司請求停止蒐集、處理或利用以及請求刪除，惟依法本公司因執行職務或保存證據所必須者，得不依本活動參與者請求為之。</li>
										</ol>
									</li>
									<li>不提供個人資料所致權益之影響：
										<ul>
											<li>本活動參與者可自由選擇是否提供本公司其個人資料，若拒絕提供相關個人資料，則無法參與本活動；且經檢舉或本公司發現不足以確認本活動參與者的身分真實性或其他個人資料冒用、盜用、資料不實等情形，致本公司無法進行必要之確認作業，本公司有權暫時停止提供本活動相關服務，若有不便之處敬請見諒。</li>
										</ul>
									</li>
								</ul>
								<p>本人瞭解本公司上開告知事項 ，並已清楚瞭解 貴公司蒐集、處理及利用本人個人資料之目的及用途，並同意 貴公司於上開告知事項範圍內，得蒐集、處理、國際傳遞及利用本人資料。</p>
							</div>
						</li>
						<li class="text-center check-item"><input type="checkbox" id="ckbAgree2" required data-label="請勾選同意個資收集條款" /><label for="ckbAgree2"><span>同意個資收集條款</span></label></li>
						<li>
							<ol class="text12 m10">
								<li>1. 檢附資料為證明寶寶為6歲以下</li>
								<li>2. 資料驗證完成後，安麗公司將不保存個資文件</li>
							</ol>
						</li>
						<li class="require"><span class="precautions-title">STEP<br>3</span><span class="require-text">若無法上傳，請您點選<br>另開瀏覽器<span class="ico--share"></span>功能瀏覽。</span<若無法上傳，請您點選另開瀏覽器<span></li>
						<li class="flex">
							<a href="javascript:void(0)" class="x-submit btn-solid btn--arrow m10 ocr" requireFB id="aOrcSubmit" target="_self">上傳小孩健保卡</a><input id="fImage" type="file" accept="image/*" style="height:1.5625vw; display: block; opacity: 0;">
						</li>
					</ul>				
					<p class="text-note--group">驗證成功後，您將進入FB社團首頁，請點下 <span class="addGroup">+加入社團</span> 待管理員通知您即加入完成！</p>
				</form>
			</div>
		</div>
		<!-- #include file="footer.aspx" -->
        <a href="javascript:;" class="btn-top misc">TOP</a>
	</div>
	<!-- #include file="~/amnet.aspx" -->
	<%-- 存放本頁前端會用到的全域變數 
	--%><script type="text/javascript">
	        var Config = <%=new {
            URL = Request.Url.AbsoluteUri,
            apiURL = System.Configuration.ConfigurationManager.AppSettings["AmwayOCRApiURL"],
            fbURL = System.Configuration.ConfigurationManager.AppSettings["FBGroupURL"],
            token = Extender.CreateOCRToken()
			}.ToJson() %>;

	        function maxLengthCheck(object)
	        {
	            if (object.value.length > object.maxLength)
	                object.value = object.value.slice(0, object.maxLength)
	        }
	</script>
	<script src="<%:Url.Resolve("~/js/config.js")%>" type="text/javascript"></script>
	<%-- 當要引用第三方 js module (其 source 中無 define 依存 module 時, 請依以下設定方式加入第三方 js 模組
		<script type="text/javascript">
			require.paths.MODULE_NAME = JSLibPath('jquery/FILE_NAME_NO_EXT_JS');
			require.shim.MODULE_NAME = ['jquery'];
		</script>
	--%><script src="<%:Url.Resolve("~/js/lib/requirejs/require-2.1.20.min.js")%>" data-main="<%:MainJs%>" type="text/javascript" async></script>
    <%--<script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>--%>
</body>
</html>