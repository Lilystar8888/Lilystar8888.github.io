<%@ WebHandler Language="C#" Class="DataSubmit" %>

using System;
using System.Web;
using System.Linq;
using wwwins.Lib.Common;
using Campaign.Modules;
using System.Collections.Generic;

public class DataSubmit : HandlerBase
{
    [RequestParam(From.Form, false)]
    public string DistNo { get; set; }

    [RequestParam(From.Form, false)]
    public string Mobile { get; set; }

    [RequestParam(From.Form, false)]
    public string Identity { get; set; }

    [RequestParam(From.Form, false)]
    public string Year { get; set; }

    [RequestParam(From.Form, false)]
    public string FbId { get; set; }


    public override void ProcessRequest()
    {
        if (!(!(Mobile.IsNullOrEmpty() || Identity.IsNullOrEmpty()) || !(DistNo.IsNullOrEmpty() || Year.IsNullOrEmpty() || Identity.IsNullOrEmpty())))
        {
            Response.Write(new { Result = "false", errMsg = "" }.ToJson());
            return;
        }
        else if (FbId.IsNullOrEmpty())
        {
            Response.Write(new { Result = "false", errMsg = "加入漾媽社團，需請您先開啟瀏覽器\"設定\"中的\"允許第三方cookie\"" }.ToJson());
            Cookier.Remove("cDistNo");
            Cookier.Remove("cMobile");
            Cookier.Remove("cIdentity");
            Cookier.Remove("cYear");
            return;
        }

        Response.ContentType = "application/json";
        var hasVerify = false;
        CampaignPageBase _CampaignPageBase = new CampaignPageBase();
        var isSuccess = _CampaignPageBase.SetYongMomMember(DistNo, Mobile, Identity, Year, FbId, "", out hasVerify);

        if (hasVerify)
        {
            Response.Write(new { Result = "false", errMsg = "您已進行過驗證，無法再次驗證。" }.ToJson());
            return;
        }
        else if (isSuccess)
        {
            Response.Write(new { Result = "true", errMsg = "" }.ToJson());
            return;
        }
        else
        {
            var nullStr = new Dictionary<string, string>() { { "DistNo", DistNo }, { "Mobile", Mobile }, { "Identity", Identity }, { "Year", Year }, { "FbId", FbId } }
                         .Where(t => t.Value.IsNullOrEmpty()).Select(t => t.Key).Join(",");
            Response.Write(new { Result = "false", errMsg = string.Format("錯誤訊息:缺少參數{0}", nullStr) }.ToJson());
            return;
        }

    }
}