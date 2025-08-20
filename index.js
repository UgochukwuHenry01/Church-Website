

// Best practice: wrap all code in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        const body = document.querySelector('body');
        const menuToggle = document.querySelector('.menu-toggle');
        if (!navLinks || !body || !menuToggle) return;
        navLinks.classList.toggle('active');
        body.classList.toggle('hide-home');
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '&times;'; // Exit icon
        } else {
            menuToggle.innerHTML = '&#9776;'; // Menu icon
        }
    };

    // Radio broadcast
    window.playRadio = function() {
        const player = document.getElementById("radio-player");
        if (player) player.play();
    };
    window.pauseRadio = function() {
        const player = document.getElementById("radio-player");
        if (player) player.pause();
    };

    // Slider
    let index = 0;
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    function nextSlide() {
        if (!slides || images.length === 0) return;
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 20}%)`;
    }
    setInterval(nextSlide, 3000); // 3 seconds for better UX
});



