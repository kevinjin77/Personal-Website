$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();
});

$('.tlt').textillate({
    loop: true,
    in : {
        effect: 'fadeIn',
        delayScale: 1.5,
        delay: 30,
    },
    out: {
        effect: 'fadeOut',
        delayScale: 1.5,
        delay: 30,
        shuffle: true,
    },
});


window.addEventListener('resize', setHeight);

var homeHeight = document.getElementById('home').offsetHeight;
var aboutHeight = homeHeight + document.getElementById('about').offsetHeight;
var galleryHeight = aboutHeight + document.getElementById('gallery').offsetHeight;

function setHeight() {
    homeHeight = document.getElementById('home').offsetHeight;
    aboutHeight = homeHeight + document.getElementById('about').offsetHeight;
    galleryHeight = aboutHeight + document.getElementById('gallery').offsetHeight;
}

var scroll_pos = 0;

$(document).scroll(function() {
    console.log(homeHeight);
    console.log(aboutHeight);
    console.log(galleryHeight);
    scroll_pos = $(this).scrollTop();
    /*if (scroll_pos < homeHeight || (scroll_pos > aboutHeight && scroll_pos < galleryHeight)) {
        document.getElementById("navbar-content").style.color = "white";
    } else {
        document.getElementById("navbar-content").style.color = "black";
    }*/
    if (scroll_pos > galleryHeight) {
        document.getElementById("navbar-content").style.color = "black";
    } else {
        document.getElementById("navbar-content").style.color = "white";
    }
});

var pushed = true;

$("i#menu-button.fa.fa-bars").click(function() {
    if (pushed) {
        $('body').animate({left: "250px"}, 200);
        $('div.sidebar').animate({left: "0px"}, 200);
        pushed = false;
    } else {
        $('body').animate({left: "0px"}, 200);
        $('div.sidebar').animate({left: "-250px"}, 200);
        pushed = true;
    }
});

$("span.glyphicon.glyphicon-info-sign").mouseover(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "inline-block";
});

$("span.glyphicon.glyphicon-info-sign").mouseout(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "none";
});
