
// Ensure DOM is loaded before attaching functions
document.addEventListener('DOMContentLoaded', function() {
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

    window.toggleForm = function(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
            form.style.display = 'block';
        }
    };
});



