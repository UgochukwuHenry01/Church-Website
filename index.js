
// for my navbars
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    body.classList.toggle('hide-home');
    
    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '&times;'; // Exit icon
    } else {
        menuToggle.innerHTML = '&#9776;'; // Menu icon
    }
}


//for radio broadcast
function playRadio() {
    document.getElementById("radioPlayer").play();
}

function pauseRadio() {
    document.getElementById("radioPlayer").pause();
}

//for the slider
let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

function nextSlide() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 20}%)`;
}
setInterval(nextSlide, 1000);



