
// ========== INDEX PAGE JAVASCRIPT ==========

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // ========== NAVBAR TOGGLE ==========
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        const menuToggle = document.querySelector('.menu-toggle');
        if (!navLinks || !body || !menuToggle) return;
        navLinks.classList.toggle('active');
        body.classList.toggle('hide-home');
        // Toggle menu icon
        menuToggle.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';
    };

    // ========== RADIO BROADCAST PLAYER ==========
    window.playRadio = function() {
        const player = document.getElementById('radio-player');
        if (player) player.play();
    };
    window.pauseRadio = function() {
        const player = document.getElementById('radio-player');
        if (player) player.pause();
    };

    // ========== CHURCH ARMS SLIDER ==========
    // let index = 0;
    // const slides = document.querySelector('.slides');
    // const images = document.querySelectorAll('.slides img');
    // function nextSlide() {
    //     if (!slides || images.length === 0) return;
    //     index = (index + 1) % images.length;
    //     slides.style.transform = `translateX(${-index * 20}%)`;
    // }
    // setInterval(nextSlide, 3000); 

});




