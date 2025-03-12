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

//my church button 
function toggleForm(formId) {
    const form = document.getElementById(formId);
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
        form.style.display = 'block';
    }
}



