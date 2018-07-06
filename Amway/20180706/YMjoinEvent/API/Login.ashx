<%@ WebHandler Language="C#" Class="Login" %>

using System;
using System.Web;
using System.Linq;
using System.Net;
using Newtonsoft.Json;
using System.IO;
using wwwins.Lib.Common;
using Campaign.Modules;
using System.Collections.Generic;

public class Login : HandlerBase
{
    [RequestParam(From.Form, false)]
    public string DistNo { get; set; }

    [RequestParam(From.Form, false)]
    public string Password { get; set; }

    //result.ErrorCode = 0(登入不成功),1(登入成功但非漾媽會員)
    public override void ProcessRequest()
    {
        Response.ContentType = "application/json";

        base.ProcessRequest();
        dynamic result = new System.Dynamic.ExpandoObject();
        dynamic g = new System.Dynamic.ExpandoObject();
        User user = new User();
        result.result = true;

        try
        {
            var url = System.Configuration.ConfigurationManager.AppSettings["AmwayＷebServiceLoginUrl"];
            g.uid = DistNo;
            g.upw = Password;
            g.apc = String.Format("AW{0}{1}{2}{3}", DateTime.Now.Month.ToString("d2"), DistNo.Substring(3, 4), DateTime.Now.Year, DistNo.Substring(0, 3));
            var response = CallAmwayAPI(url, g);

            if (response.IndexOf("Amway") > 0)
            {
                result.ErrorMsg = "認證網址不存在";
                result.ErrorCode = 0;
                result.result = false;
                Response.Write(JsonConvert.SerializeObject(result));
                return;
            }

            result.response = response;
            user = JsonConvert.DeserializeObject<User>(response.Replace("[", "").Replace("]", ""));
            if (user.Errcode != "E000")
            {
                result.result = false;
                result.ErrorCode = 0;
            }
            else
            {
                using (var db = new DBEntities())
                {
                    var obj = db.MemberInfo.Where(t => t.DistNo.Equals(DistNo)).FirstOrDefault();

                    var isVerify = obj.IsNull() ? false :
                                   obj.IsVerify ? true : false;

                    if (isVerify)
                    {
                        Session["Login"] = user.Dname;//存名稱
                    }
                    else
                    {
                        result.result = false;
                        result.ErrorCode = 1;
                    }
                }
            }

            Response.Write(JsonConvert.SerializeObject(result));
        }
        catch (Exception ex)
        {
            result.ErrorMsg = ex.ToString();
            result.result = false;
            Response.Write(JsonConvert.SerializeObject(result));
        }
    }

    private static string CallAmwayAPI(string url, dynamic g)
    {
        var httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
        httpWebRequest.ContentType = "application/x-www-form-urlencoded";
        httpWebRequest.Method = "POST";
        using (var streamWriter = new System.IO.StreamWriter(httpWebRequest.GetRequestStream()))
        {
            streamWriter.Write(String.Format("g=[{0}]", JsonConvert.SerializeObject(g)));
        }
        var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
        using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
        {
            return streamReader.ReadToEnd();
        }
    }

    public class User
    {
        [JsonProperty(PropertyName = "mType")]
        public string MType { get; set; }
        [JsonProperty(PropertyName = "Dname")]
        public string Dname { get; set; }
        [JsonProperty(PropertyName = "tk")]
        public string TK { get; set; }
        [JsonProperty(PropertyName = "mPin")]
        public string MPin { get; set; }
        [JsonProperty(PropertyName = "Dexpire")]
        public string Dexpire { get; set; }
        [JsonProperty(PropertyName = "errcode")]
        public string Errcode { get; set; }
    }
}