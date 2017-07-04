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

$(document).ready(function() {
    var scroll_pos = 0;
    var clientHeight = document.getElementById('gallery').clientHeight;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > clientHeight) {
        	document.getElementById("navbar-content").style.color = "black";
        } else {
            document.getElementById("navbar-content").style.color = "white";
        }
    });
});

$("span.glyphicon.glyphicon-info-sign").mouseover(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "inline-block";
});

$("span.glyphicon.glyphicon-info-sign").mouseout(function() {
    this.parentNode.nextSibling.nextSibling.style.display = "none";
});
