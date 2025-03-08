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