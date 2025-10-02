// ========== INDEX PAGE JAVASCRIPT ==========

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // ========== NAVBAR TOGGLE ==========
    window.toggleMenu = function () {
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        const menuToggle = document.querySelector('.menu-toggle');
        if (!navLinks || !body || !menuToggle) return;
        navLinks.classList.toggle('active');
        body.classList.toggle('hide-home');
        // Toggle menu icon by toggling class for animation
        menuToggle.classList.toggle('active');
        // Update ARIA expanded
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    };

    // Keyboard accessibility for menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
            }
        });
    }

    // ========== RADIO BROADCAST PLAYER ==========
    window.playRadio = function () {
        const player = document.getElementById('radio-player');
        if (player) player.play();
    };
    window.pauseRadio = function () {
        const player = document.getElementById('radio-player');
        if (player) player.pause();
    };


    // Auto-slide testimonies
    const slider = document.querySelector('.testimony-list');
    if (slider) {
        let currentIndex = 0;

        function getCardWidth() {
            const card = slider.querySelector('.testimony-card');
            if (!card) return 0;
            // Get gap between cards (modern browsers)
            let gap = 0;
            try {
                gap = parseInt(getComputedStyle(slider).gap) || 0;
            } catch (e) { }
            return card.offsetWidth + gap;
        }

        function slideTestimonies() {
            const cards = slider.querySelectorAll('.testimony-card');
            if (cards.length === 0) return;
            currentIndex = (currentIndex + 1) % cards.length;
            const cardWidth = getCardWidth();
            slider.scrollTo({
                left: cardWidth * currentIndex,
                behavior: 'smooth'
            });
        }

        setInterval(slideTestimonies, 3500);

        window.addEventListener('resize', () => {
            // No need to update cardWidth globally, always calculate in slideTestimonies
        });
    }

    // Section fade-in on scroll
    const fadeSections = document.querySelectorAll(
        '.hero, .bible-quote-section, .about-section, .radio-container, .church-arms, .testimonies, .stay-connected, .worship-section, footer'
    );
    fadeSections.forEach(section => {
        section.classList.add('section-fade');
    });

    function revealSections() {
        fadeSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Throttle function for performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    const throttledReveal = throttle(revealSections, 100);

    window.addEventListener('scroll', throttledReveal);
    window.addEventListener('resize', revealSections);
    // Initial reveal
    revealSections();

});




