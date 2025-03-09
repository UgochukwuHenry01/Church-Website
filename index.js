
// for my navbars
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const exitMenu = document.getElementById("exit-menu");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

exitMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});


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



