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
    scroll_pos = $(this).scrollTop();
    /*if (scroll_pos < homeHeight || (scroll_pos > aboutHeight && scroll_pos < galleryHeight)) {
        document.getElementById("navbar-content").style.color = "white";
    } else {
        document.getElementById("navbar-content").style.color = "black";
    }*/
    if (scroll_pos > galleryHeight - 30) {
        document.getElementById("navbar-content").style.color = "black";
    } else {
        document.getElementById("navbar-content").style.color = "white";
    }
});

var pushed = true;

$("i#menu-button.fa.fa-bars").click(function() {
    if (pushed) {
        $('body').animate({ left: "250px" }, 200);
        $('div.sidebar').animate({ left: "0px" }, 200);
        pushed = false;
    } else {
        $('body').animate({ left: "0px" }, 200);
        $('div.sidebar').animate({ left: "-250px" }, 200);
        pushed = true;
    }
});

/* 1 - Clarifai Chef
2 - Sushi Go
3 - Sonic Dash
4 - PIG */
var currentProject = 3;

$("a.clarifai-chef").click(function() {
    if (currentProject != 1) {
        $("#project-description").fadeOut(500);
        $("#project-description").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("CLARIFAI CHEF");
            $('#language').html("Java (Android Studio)");
            $('#project-paragraph').html("An Android app that uses machine vision to generate recipes based on the ingredients inside of your fridge.");
            $("#project-link").attr("href", "https://github.com/kevinjin77/VisionChef");
        }, 500);
    }
    currentProject = 1;
});

$("a.sushi-go").click(function() {
    if (currentProject != 2) {
        $("#project-description").fadeOut(500);
        $("#project-description").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("SUSHI GO");
            $('#language').html("HTML, CSS, Javascript");
            $('#project-paragraph').html("A simple Javascript application to calculate scores for Sushi Go.");
            $("#project-link").attr("href", "https://github.com/kevinjin77/SushiGoCalculator");
        }, 500);
    }
    currentProject = 2;
});

$("a.sonic-dash").click(function() {
    if (currentProject != 3) {
        $("#project-description").fadeOut(500);
        $("#project-description").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("SONIC DASH");
            $('#language').html("Turing");
            $('#project-paragraph').html("A side-scrolling minigame with your favorite characters from the Sonic franchise! This game includes a variety of different power-ups, as well as a plethora of Dr. Eggman's baddies. Includes highscore functionality!");
            $("#project-link").attr("href", "https://github.com/kevinjin77/Sonic-Dash");
        }, 500);
    }
    currentProject = 3;
});

$("a.pig").click(function() {
    if (currentProject != 4) {
        $("#project-description").fadeOut(500);
        $("#project-description").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("PIG");
            $('#language').html("Turing");
            $('#project-paragraph').html("Play the game of PIG! One-player (vs. AI) and two-player modes are both available and you can choose from three different game modes!");
            $("#project-link").attr("href", "https://github.com/kevinjin77/PIG");
        }, 500);
    }
    currentProject = 4;
});

function scrolltop () {
	$('body').animate({scrollTop:homeHeight}, 400);
}

$("a.btn.btn-primary.back-to-top").click(function() {
    $('body').animate({scrollTop:200}, "slow");
});

$("span.glyphicon.glyphicon-info-sign").mouseover(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "inline-block";
});

$("span.glyphicon.glyphicon-info-sign").mouseout(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "none";
});
