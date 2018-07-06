<%@ WebHandler Language="C#" Class="CheckMember" %>

using System;
using System.Web;
using System.Linq;
using wwwins.Lib.Common;
using Campaign.Modules;
using System.Collections.Generic;

public class CheckMember : HandlerBase
{
    [RequestParam(From.Form)]
    public string FbIds { get; set; }

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

        if (FbIds.IsNullOrEmpty())
        {
            return;
        }

        List<string> listFbId = new List<string>(FbIds.Split(','));

        using (var db = new DBEntities())
        {
            var objFbIds = db.FacebookIDInfo.Select(t => t.FacebookID).ToList();

            //新增
            listFbId.Except(objFbIds).Do(t =>
            {
                db.FacebookIDInfo.Add(new FacebookIDInfo() { FacebookID = t });
            });

            //var delFbIds = objFbIds.Except(listFbId);
            //var objDelFbIds = db.FacebookIDInfo.Where(t => delFbIds.Contains(t.FacebookID)).ToList();

            ////刪除
            //objDelFbIds.Do(t => { db.FacebookIDInfo.Remove(t); });

            db.SaveChanges();
            var objMember = db.MemberInfo.Join(db.FacebookIDInfo, m => m.FacebookID, f => f.FacebookID, (m, f) => new { UNO = m.UNO, FacebookID = m.FacebookID }).Where(t => !string.IsNullOrEmpty(t.FacebookID)).ToList();
            var memberUNO = objMember.Select(t => t.UNO).ToList();
            //比對會員
            db.MemberInfo.Where(t => memberUNO.Contains(t.UNO)).Do(t =>
            {
                t.IsMember = true;
            });

            db.SaveChanges();
            Response.Write(objMember.Select(t=>t.FacebookID).Join(","));
        }

    }
}