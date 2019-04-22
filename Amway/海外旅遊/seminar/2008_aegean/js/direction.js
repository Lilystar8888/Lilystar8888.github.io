// JavaScript Document
//
var UrlObject = new Object();
UrlObject.u1 = {url:"about.aspx"};
UrlObject.u2 = { url: "introduction.aspx" };
UrlObject.u3 = { url: "note.aspx" };
UrlObject.u4 = { url: "checklist.aspx" };
UrlObject.u5 = { url: "english.aspx" };
UrlObject.u6 = { url: "freshman.aspx" };

UrlObject.u10 = { url: "default.aspx" };
UrlObject.u11 = { url: "introduction2.aspx" };
UrlObject.u12 = { url: "map.aspx" };
UrlObject.u13 = { url: "note2.aspx" };

//
//document=�����};windoe.open=�t�}
function URL(i){
	document.location.href=UrlObject['u'+i].url
}
//
