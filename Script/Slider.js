var menu = document.getElementById('menu');
var content = document.getElementById('content');

var StartX;

function menu_touch_start(evt) {
    StartX = evt.touches[0].clientX;
}

function menu_touch_move(evt) {
    var change = StartX - evt.touches[0].clientX;
    if (change < 0) {
        return;
    }
    else {
        menu.style.left = "-" + change + "px";
        evt.preventDefault();
    }
}

function menu_touch_end(evt) {
    var change = StartX - evt.changedTouches[0].clientX;
    var Threshold = screen.width / 4;
    if (change > Threshold) {
        menu.style.left = "-70vw";
        menu.style.transition = "all .3s";
    }
    else {
        menu.style.left = "0";
        menu.style.transition = "all .3s";
    }
}

function content_touch_start(evt) {
    StartX = evt.touches[0].clientX;
}

function content_touch_move(evt) {
    var change = evt.touches[0].clientX - StartX;
    if (change < 0) {
        return;
    }
    else {
        if (change <= 70) {
            menu.style.left = "-" + change + "vw";
            evt.preventDefault();
        }
    }
}

function content_touch_end(evt) {
    var change = evt.changedTouches[0].clientX - StartX;
    var Threshold = screen.width / 4;

    if (change > Threshold) {
        menu.style.left = "0";
    }
    else {
        menu.style.left = "-70vw";
    }

    if (change < 0) {
        menu.style.left = "-70vw";
    }

}