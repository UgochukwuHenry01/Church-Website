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

    // Auto-slide testimonies
    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.querySelector('.testimony-list');
        let cardWidth = slider ? slider.querySelector('.testimony-card').offsetWidth : 0;
        let currentIndex = 0;
        function slideTestimonies() {
            if (!slider) return;
            const cards = slider.querySelectorAll('.testimony-card');
            currentIndex = (currentIndex + 1) % cards.length;
            slider.scrollTo({
                left: cardWidth * currentIndex,
                behavior: 'smooth'
            });
        }
        setInterval(slideTestimonies, 3500);
        window.addEventListener('resize', () => {
            cardWidth = slider ? slider.querySelector('.testimony-card').offsetWidth : 0;
        });
    });

});




