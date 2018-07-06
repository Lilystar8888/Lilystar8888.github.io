<%@ WebHandler Language="C#" Class="GetYMFbId" %>

using System;
using System.Web;
using System.Linq;
using wwwins.Lib.Common;
using Campaign.Modules;
using System.Collections.Generic;

public class GetYMFbId : HandlerBase
{

    [RequestParam(From.Form)]
    public string Token { get; set; }

    public override void ProcessRequest()
    {
        //Token Check
        if (!Extender.TokenCheck(Token))
        {
            return;
        }
        //End of Token Check
        Response.ContentType = "text/plain";

        using (var db = new DBEntities())
        {
            var obj = db.MemberInfo.Where(t => !t.Flag && !string.IsNullOrEmpty(t.FacebookID)).ToList();

            if(obj.Count == 0) Response.Write(null);
            obj.Do(t => { t.Flag = true; });
            db.SaveChanges();

            Response.Write(obj.Select(t=>t.FacebookID).Join(","));
        }
    }

}