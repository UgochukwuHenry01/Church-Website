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



//for church button functions
function toggleForm(method) {
    let form = document.getElementById("paymentForm");
    let title = document.getElementById("formTitle");
    let purpose = document.getElementById("paymentPurpose");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
        title.innerText = "Give " + method;
        purpose.value = method;
    } else {
        form.style.display = "none";
    }
}

function togglePayerForm(formId) {
    let form = document.getElementById(formId);
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}


function submitPayment(type) {
    let name = document.getElementById(type + '-payer-name').value;
    let email = document.getElementById(type + '-payer-email').value;
    let phone = document.getElementById(type + '-payer-phone').value;
    
    if (name === "" || email === "" || phone === "" || phone.length < 11) {
        alert("Please fill in all payer details correctly.");
        return;
    }
    
    alert("Payment submitted successfully! Thank you, " + name);
    document.getElementById(type + '-payer-form').style.display = 'none';
    document.getElementById(type + '-amount').value = "";
    document.getElementById(type + '-bank').value = "";
    document.getElementById(type + '-payer-name').value = "";
    document.getElementById(type + '-payer-email').value = "";
    document.getElementById(type + '-payer-phone').value = "";
}