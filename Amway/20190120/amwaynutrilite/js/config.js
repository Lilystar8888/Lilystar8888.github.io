
define({
    isMobile: mobileCheck(),
	location: location.protocol+'//'+location.host+'/',
	api: location.protocol+'//'+location.host+'/',
	pathName: location.pathname.split("/")[location.pathname.split("/").length-1].split(".")[0]
})

function mobileCheck() {
    return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
}