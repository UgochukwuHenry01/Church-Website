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


// function toggleForm(formId) {
//     // Hide all forms
//     document.querySelectorAll('.forms-section .form-container').forEach(form => {
//         form.style.display = 'none';
//     });

//     // Show the selected form
//     const selectedForm = document.getElementById(formId);
//     if (selectedForm) {
//         selectedForm.style.display = 'block';
//     }
// }


// function toggleForm(formId) {
//     document.querySelectorAll('.form-container').forEach(form => {
//         if (form.id === formId) {
//             form.classList.add('active');
//         } else {
//             form.classList.remove('active');
//         }
//     });
// }

// function resetForms() {
//     document.querySelectorAll('.form-container form').forEach(form => form.reset());
//     document.querySelectorAll('.form-container').forEach(form => form.classList.remove('active'));
// }


document.addEventListener("DOMContentLoaded", function () {
    const activeFormId = localStorage.getItem("activeForm");
    if (activeFormId) {
        document.getElementById(activeFormId)?.classList.add("active");
    }
});

function toggleForm(formId) {
    document.querySelectorAll('.form-container').forEach(form => {
        if (form.id === formId) {
            form.classList.add('active');
            localStorage.setItem("activeForm", formId);
        } else {
            form.classList.remove('active');
        }
    });
}

function resetForms() {
    document.querySelectorAll('.form-container form').forEach(form => form.reset());
    document.querySelectorAll('.form-container').forEach(form => form.classList.remove('active'));
}