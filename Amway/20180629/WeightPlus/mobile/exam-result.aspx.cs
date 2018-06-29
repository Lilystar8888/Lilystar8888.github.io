using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebSite.Modules;
using System.Text;

public partial class app_exam_result : ExamPageBase
{
    public int resultType;
    double valA,valB,valC,valD;
    public List<ThisArticleInfo> liThisArticleInfo;
    
    protected void Page_Load(object sender, EventArgs e)
    {
        result01.Visible = false;
        result02.Visible = false;
        result03.Visible = false;
        result04.Visible = false;
        result05.Visible = false;
        resultType=Int32.Parse(Request.QueryString["type"]);
        switch (resultType)
        { 
            case 1:
                result01.Visible = true;
                break;
            case 2:
                result02.Visible = true;
                break;
            case 3:
                result03.Visible = true;
                break;
            case 4:
                result04.Visible = true;
                break;
            case 5:
                result05.Visible = true;
                break;
        }
        List<ArticleInfo> liArticleInfo= GetBodyTypeArticle("0" + resultType);
        liThisArticleInfo = new List<ThisArticleInfo>();
        for (int i = 0; i < liArticleInfo.Count; i++)
        {
            ThisArticleInfo thisArticleInfo = new ThisArticleInfo();
            thisArticleInfo.articleInfo = liArticleInfo[i];
            thisArticleInfo.liBodyTypeInfo = GetBodyTypeInfo(liArticleInfo[i].BodyTypeNO);
            thisArticleInfo.liNutrientInfo = GetNutrientInfo(liArticleInfo[i].NutrientNO);
            liThisArticleInfo.Add(thisArticleInfo);
        }
    }

    public class ThisArticleInfo 
    {
        public ArticleInfo articleInfo
        {
            get;
            set;
        }
        public List<BodyTypeInfo> liBodyTypeInfo
        {
            get;
            set;
        }
        public List<NutrientInfo> liNutrientInfo
        {
            get;
            set;
        }
        
    }
}

