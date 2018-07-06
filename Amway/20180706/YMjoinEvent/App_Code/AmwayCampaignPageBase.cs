using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Campaign.Modules;
using wwwins.Lib.Common;

public class AmwayCampaignPageBase : CampaignPageBase
{
    protected override void OnPreInit(EventArgs e)
    {
        #region Meta 設定
        /// <summary>
        /// Meta設定: Title, og:title
        /// <para>PS: 若未設定 META_OG_TITLE 值, 則 og:title 使用此值</para>
        /// <para>PS: 英數字60字元，中文30字以內, 必填</para>
        /// </summary>
        META_TITLE = "歡迎加入漾媽姐妹淘";

        /// <summary>
        /// Meta設定: description, og:description
        /// <para>PS: 若未設定 META_OG_DESCRIPTION 值, 則 og:description 使用此值</para>
        /// <para>PS: 中文70字以內, 必填</para>
        /// </summary>
        META_DESCRIPTION = @"一個希望媽咪更好、更美、更健康的幸福計畫";

        /// <summary>
        /// Meta設定: og:title
        /// </summary>
        META_OG_TITLE = "歡迎加入漾媽姐妹淘";

        /// <summary>
        /// Meta設定: og:description
        /// </summary>
        META_OG_DESCRIPTION = @"一個希望媽咪更好、更美、更健康的幸福計畫";

        /// <summary>
        /// Meta設定: image_src, og:image
        /// <para>圖檔不得小於50px*50px, 不得大於 130px*110px, 高寬比不得大於3, 必填</para>
        /// </summary>
        META_IMAGE = "~/images/1200x630.png";

        /// <summary>
        /// Meta設定: "shortcut icon", icon
        /// <para>圖檔16px*16px, 檔案格式.ico, 必填 ~/images/favicon.ico</para>
        /// </summary>
        META_SHORTCUTICON = "~/images/favicon.ico";

        /// <summary>
        /// Meta設定: keyword
        /// <para>考慮keyword density 約四到五組詞彙，以半形逗號隔開</para>
        /// </summary>
        META_KEYWORD = "安麗,媽媽,育嬰,親子,時尚,潮流,新知,健康,生活,生命,益之源";

        /// <summary>
        /// Meta設定: og:type
        /// <para>根據Facebook分類表 </para>
        /// </summary>
        META_OG_TYPE = "";

        /// <summary>
        /// Meta設定: og:site_name
        /// <para>簡明的網站名稱, 選用</para>
        /// </summary>
        META_OG_SITENAME = "";

        /// <summary>
        /// Meta設定: og:url
        /// </summary>
        META_OG_LINK = "";
        #endregion

        base.OnPreInit(e);
    }
}