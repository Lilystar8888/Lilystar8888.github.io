<%@ WebHandler Language="C#" Class="CheckYoungMom" %>

using System;
using System.Web;
using System.Linq;
using wwwins.Lib.Common;
using Campaign.Modules;

public class CheckYoungMom : HandlerBase
{
    [RequestParam(From.Form, false)]
    public string DistNo { get; set; }

    [RequestParam(From.Form, false)]
    public string Last4 { get; set; }

    [RequestParam(From.Form, false)]
    public string TOKEN { get; set; }

    public override void ProcessRequest()
    {
        Response.ContentType = "text/plain";

        #region Token Check
        if (!Extender.TokenCheck(TOKEN)) return;
        #endregion

        using (var db = new DBEntities())
        {
            var obj = db.MemberInfo.Where(t => t.DistNo.Equals(DistNo)).FirstOrDefault();

            var result = obj.IsNull() ? false :
                         obj.IsVerify ? true : false;

            Response.Write(result.ToString().ToLower());
        }
    }
}