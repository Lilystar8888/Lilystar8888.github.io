$(document).ready(function() { $(".download-banner .icon-close").click(function() { $(".download-banner").addClass("hide") });
    $(".list-item").length ? $(".empty-panel").addClass("hide") : $(".empty-panel").removeClass("hide");
    $(".list>a").click(function() { $(this).addClass("active").siblings().removeClass("active") }) });