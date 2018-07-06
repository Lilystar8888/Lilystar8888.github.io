<%@ WebHandler Language="C#" Class="OCRIdentify" %>

using System;
using System.Web;
using System.Linq;
using Campaign.Modules;
using wwwins.Lib.Common;
using Newtonsoft.Json;
using System.IO;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

public class OCRIdentify : HandlerBase
{
    [RequestParam(From.Form)]
    public int Year { get; set; }

    [RequestParam(From.Form)]
    public string AID { get; set; }

    [RequestParam(From.Form)]
    public string FacebookId { get; set; }

    //0:成功 
    //1:大於六歲         (很抱歉，您的小孩年齡大於6歲，已超出會員條件。)
    //2:健保卡已驗證過   (此健保卡已驗證過，無法再次使用。) 
    //3:帳號已驗證過     (您已進行過驗證，無法再次驗證。)
    public override void ProcessRequest()
    {
        if (AID.IsNullOrEmpty()) return;

        Response.ContentType = "application/json";
        dynamic Result = new System.Dynamic.ExpandoObject();
        Result.code = "0";
        Result.message = string.Empty;

        if ((Time.Now.Year - Year) > 6)
        {
            Result.code = "1";
            Result.message = "很抱歉，您的小孩年齡大於6歲，已超出會員條件。";
            Response.Write(JsonConvert.SerializeObject(Result));
            return;
        }

        if (!FacebookId.IsNullOrEmpty())
        {
            using (var db = new DBEntities())
            {
                var obj = db.MemberInfo.Where(t => t.FacebookID == FacebookId).FirstOrDefault();
                if (!obj.IsNull() && obj.IsVerify)
                {
                    Result.code = "3";
                    Result.message = "您已進行過驗證，無法再次驗證。";
                    Response.Write(JsonConvert.SerializeObject(Result));
                    return;
                }
            }
        }

        try
        {
            using (var db = new DBEntities())
            {
                var obj = db.MemberInfo.Where(t => t.Identity == AID.Trim()).FirstOrDefault();

                if (!obj.IsNull())
                {
                    Result.code = "2";
                    Result.message = "此健保卡已驗證過，無法再次使用。";
                    Response.Write(JsonConvert.SerializeObject(Result));
                    return;
                }
            }
        }
        catch (Exception ex)
        {
            WebLog.WriteExeption(ex, WebLog.GetIP(), "OCRIdentify.aspx");
        }

        Response.Write(JsonConvert.SerializeObject(Result));
    }
}