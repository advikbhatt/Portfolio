function hidebehind() {
    var division = document.getElementById('hidebehind')
    var scroll = window.scrollY;
    if (scroll < 200) {
        division.style.transition = ' 0.5s ease-out';
        division.classList.remove('movement');
    } else {
        division.classList.add('movement');
    }

}

function hidebehind2() {
    var division = document.getElementById('hidebehind2')
    var scroll = window.scrollY;
    if (scroll < 290) {
        division.style.transition = ' 0.5s ease-out';
        division.classList.remove('movement2');
    } else {
        division.classList.add('movement2');
    }

}

function moverightnavicons() {
    let currentScroll = window.scrollY;
    let division = document.getElementById('moverightnavicon');
    if (currentScroll < 200) {
        division.classList.remove('moveright');
        division.style.transition = 'transform 0.5s ease-out';
    } else {
        division.classList.add('moveright');
    }

}
function moverightmyname() {
    let currentScroll = window.scrollY;
    let division = document.getElementById('shortname');
    if (currentScroll < 200) {
        division.classList.remove('diplayonscrollmyshortname');
        division.style.transition = 'transform 0.5s ease-out';
    } else {
        division.classList.add('diplayonscrollmyshortname');
    }

}

function myworkicon() {
    var division = document.getElementById('hidebehind3')
    var scroll = window.scrollY;
    if (scroll < 550) {
        division.style.transition = ' 0.5s ease-out';
        division.classList.remove('movement2');
    } else {
        division.classList.add('movement2');
    }
}

function colorchangenavigation1() {
    var division = document.getElementById('1');
    var scroll = window.scrollY;


    if (scroll < 2700) {
        division.style.transition = ' 0.5s ease-out';
        division.style.color = "black";
    }
    else {
        division.style.color = "white"

    }

}
function colorchangenavigation2() {
    var division = document.getElementById('2');
    var scroll = window.scrollY;


    if (scroll < 2700) {
        division.style.transition = ' 0.5s ease-out';
        division.style.color = "black";
    }
    else {
        division.style.color = "white"

    }

}
function colorchangenavigation3() {
    var division = document.getElementById('3');
    var scroll = window.scrollY;


    if (scroll < 2700) {
        division.style.transition = ' 0.5s ease-out';
        division.style.color = "black";
    }
    else {
        division.style.color = "white"

    }

}
function colorchangenavigation4() {
    var division = document.getElementById('4');
    var scroll = window.scrollY;


    if (scroll < 2700) {
        division.style.transition = ' 0.5s ease-out';
        division.style.color = "black";
    }
    else {
        division.style.color = "white"

    }

}

function colorchangenavigation0() {
    var division = document.getElementById('shortname');
    var scroll = window.scrollY;


    if (scroll < 2700) {
        division.style.transition = ' 0.5s ease-out';
        division.style.color = "black";
    }
    else {
        division.style.color = "white"

    }

}

function changeblurnav() {
    var division = document.getElementById('navbar')
    var scroll = window.scrollY;
    if (scroll < 700) {
        division.style.transition = ' 0.5s ease-out';
        division.classList.remove('on1pageend');
    }
    else if (scroll > 2700 && scroll < 3100) {
        division.style.transition = ' 0.5s ease-out';
        division.classList.remove('on1pageend');

    }
    else {
        division.classList.add('on1pageend');

    }
}

window.addEventListener('scroll', hidebehind);
window.addEventListener('scroll', hidebehind2);
window.addEventListener('scroll', moverightnavicons);
window.addEventListener('scroll', moverightmyname);
window.addEventListener('scroll', myworkicon);
window.addEventListener('scroll', changeblurnav);
window.addEventListener('scroll', colorchangenavigation0);
window.addEventListener('scroll', colorchangenavigation1);
window.addEventListener('scroll', colorchangenavigation2);
window.addEventListener('scroll', colorchangenavigation3);
window.addEventListener('scroll', colorchangenavigation4);


const cursor = new MouseFollower({
    el: null,
    container: document.body,
    speed: 0.7,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 0,
    skewingIcon: 0,
    skewingMedia: 0,
});



const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}