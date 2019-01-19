$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();
});

$('.tlt').textillate({
    loop: true,
    in: {
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
var projectsHeight = galleryHeight + document.getElementById('projects').offsetHeight;

function setHeight() {
    homeHeight = document.getElementById('home').offsetHeight;
    aboutHeight = homeHeight + document.getElementById('about').offsetHeight;
    galleryHeight = aboutHeight + document.getElementById('gallery').offsetHeight;
    projectsHeight = galleryHeight + document.getElementById('projects').offsetHeight;
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

var currentProject = 1;

$("a.uw-scheduler").click(function() {
    if (currentProject != 1) {
        $("#project").fadeOut(500);
        $("#project").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("UW SCHEDULER");
            $('#language').html("Javascript");
            $('#project-paragraph').html(`An application to find the best possible schedules for Waterloo students. It utilizes
              the University of Waterloo's API to generate schedules and then assign a rating to each based on how good
              professors are, as well as other factors such as the amount of time for lunch. Check it out at <a href=uwscheduler.com>uwscheduler.com</a>!`);
            $("#project-link").attr("href", "https://github.com/kevinjin77/UWScheduler");
            $("#project-img").attr("src", "https://github.com/kevinjin77/UWScheduler/raw/master/img/inputForm.png");
        }, 500);
    }
    currentProject = 1;
});

$("a.wikipedia-game-bot").click(function() {
    if (currentProject != 2) {
        $("#project").fadeOut(500);
        $("#project").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("WIKIPEDIA GAME BOT");
            $('#language').html("Python (Flask), Javascript");
            $('#project-paragraph').html(`A web app that requires the use of Datamuse API in order to solve the classic Wikipedia game as quickly
              as possible. It also generates a graph to represent the path of the links that were clicked, and their respective proximity to the target link.`);
            $("#project-link").attr("href", "https://github.com/kevinjin77/WikipediaGameBot");
            $("#project-img").attr("src", "https://github.com/kevinjin77/WikipediaGameBot/raw/master/img/LandingPage.png");
        }, 500);
    }
    currentProject = 2;
});

$("a.clarifai-chef").click(function() {
    if (currentProject != 3) {
        $("#project").fadeOut(500);
        $("#project").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("CLARIFAI CHEF");
            $('#language').html("Java (Android Studio)");
            $('#project-paragraph').html("An Android app that uses machine vision to generate recipes based on the ingredients inside of your fridge.");
            $("#project-link").attr("href", "https://github.com/kevinjin77/VisionChef");
            $("#project-img").attr("src", "https://github.com/kevinjin77/VisionChef/raw/master/img/pic2.png");
        }, 500);
    }
    currentProject = 3;
});

$("a.sonic-dash").click(function() {
    if (currentProject != 5) {
        $("#project").fadeOut(500);
        $("#project").fadeIn(500);
        setTimeout(function() {
            $('#project-title').html("SONIC DASH");
            $('#language').html("Turing");
            $('#project-paragraph').html("A side-scrolling minigame with your favorite characters from the Sonic franchise! This game includes a variety of different power-ups, as well as a plethora of Dr. Eggman's baddies. Includes highscore functionality!");
            $("#project-link").attr("href", "https://github.com/kevinjin77/Sonic-Dash");
            $("#project-img").attr("src", "https://raw.githubusercontent.com/kevinjin77/Sonic-Dash/master/Pics/SonicDashGameplay.PNG");
        }, 500);
    }
    currentProject = 4;
});

function scrollHome() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#home").offset().top
}, 500);
}

function scrollAbout() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
  }, 500);
}

function scrollGallery() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#gallery").offset().top
}, 500);
}

function scrollProjects() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#projects").offset().top
}, 500);
}

function scrollContact() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#contact").offset().top
}, 500);
}

$("a.btn.btn-primary.back-to-top").click(function() {
    // $('body').animate({ scrollTop: 0 }, 400);
});

$("span.glyphicon.glyphicon-info-sign").mouseover(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "inline-block";
});

$("span.glyphicon.glyphicon-info-sign").mouseout(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "none";
});
