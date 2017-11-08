function navbar_open() {
    document.getElementById("myNavBar").style.display = "block";
}

function navbar_close() {
    document.getElementById("myNavBar").style.display = "none";
}

$(document).ready(function () {

    $("#knowMore").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
        }, 1000);
    });

    $("#toHome").click(function () {
        $('html, body').animate({
            scrollTop: $("#homePage").offset().top
        }, 1000);
    });

    $("#toAboutMe").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
        }, 1000);
    });

    $("#toEducation").click(function () {
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000);
    });

    $("#toTechnology").click(function () {
        $('html, body').animate({
            scrollTop: $("#technology").offset().top
        }, 1000);
    });

    $("#toProject").click(function () {
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
    $("#toContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#toTop").click(function () {
        $('html, body').animate({
            scrollTop: $("#homePage").offset().top
        }, 1000);
    });
})
