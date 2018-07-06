<%@ WebHandler Language="C#" Class="SetYMFbId" %>

using System;
using System.Web;
using System.Linq;
using wwwins.Lib.Common;
using Campaign.Modules;
using System.Collections.Generic;

public class SetYMFbId : HandlerBase
{
    [RequestParam(From.Form)]
    public string FbIds { get; set; }

    [RequestParam(From.Form)]
    public string Token { get; set; }

    public override void ProcessRequest()
    {
        //Token Check
        //if (!Extender.TokenCheck(Token))
        //{
        //    return;
        //}
        //End of Token Check

        Response.ContentType = "text/plain";

        if (!FbIds.Trim().IsNullOrEmpty())
        {
            List<string> listFbId = new List<string>(FbIds.Split(','));

            if (listFbId.Count == 0)
            {
                return;
            }

            using (var db = new DBEntities())
            {
                var obj = db.MemberInfo.Where(t => listFbId.Contains(t.FacebookID)).ToList();
                var obj1 = db.FacebookIDInfo.Where(t => listFbId.Contains(t.FacebookID)).ToList();
                var checkFbIds = listFbId.Except(obj.Select(t => t.FacebookID).ToList()).ToList();
                var finalFbIds = checkFbIds.Except(obj1.Select(t => t.FacebookID).ToList()).ToList();
                finalFbIds.Do(t=> {
                    db.FacebookIDInfo.AddObject(new FacebookIDInfo() { FacebookID = t});
                });

                if (obj.Count > 0)
                {
                    obj.Do(t => { t.IsMember = true; });
                }

                db.SaveChanges();
                Response.Write(obj.Count > 0 ? obj.Select(t=>t.FacebookID).Join(",") : string.Empty);
            }
        }
    }
}