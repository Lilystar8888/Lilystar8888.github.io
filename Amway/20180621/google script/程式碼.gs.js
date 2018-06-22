function doGet(e) {
    var template = HtmlService.createTemplateFromFile('form.html');
    return template.evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setTitle('[創世代]我要去旅行')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function uploadFiles(form) {
    try {
        var dropbox = "創世代我要去旅行專案";
        var folder, folders = DriveApp.getFoldersByName(dropbox);
        if (folders.hasNext()) {
            folder = folders.next();
        } else {
            folder = DriveApp.createFolder(dropbox);
        }
        var blob = form.myFile;
        //處理檔案寫入工作
        if (blob.length > 0) {
            var file = folder.createFile(blob);
            var day = new Date();
            var daytext = day.toString();
            var milliseconds = day.getTime();
            var fileurl = file.getUrl();
            var fileId = file.getId();
            file.setDescription("上傳於" + daytext);
            file.setName(form.myName + milliseconds);

            var recipientsTO = "ashley.tsai@ua.com.tw" + "," + "Peggy_PY_Ho@amway.com";
            var recipientsCC = "lilystar8888@gmail.com";
            var Subject = "[創世代] 我要去旅行";
            var message = "上傳時間:" + day + "<BR/><BR/><a target='_blank' href='" + fileurl + "'><img src='https://drive.google.com/uc?id=" + fileId + "&export=download' style='max-width:300px;border:0;outline:0;'></a>";
            var html = message;

            MailApp.sendEmail({
                to: recipientsTO,
                bcc: recipientsCC,
                subject: Subject,
                htmlBody: html,
            });

            return "上傳成功！感謝參與本次活動。<br><br><a target='_blank' href='" + fileurl + "'><img src='https://drive.google.com/uc?id=" + fileId + "&export=download' style='max-width:300px;border:0;outline:0;'></a><br><br><a class='btn btn-success btn-lg' href='javascript:;' onclick='selfreload();'>繼續上傳</a>";
        } else {
            return "您尚未選取相片檔案<br><br><a class='btn btn-success btn-lg' href='javascript:;' onclick='selfreload();'>重新上傳</a>";
        }
    } catch (error) {
        return "上傳失敗! 原因可能是: " + error.toString();
    }
}