function toggleForm(formType) {
  document.getElementById("userForm").style.display = "block";
  document.getElementById("formTitle").innerText = formType;
  document.getElementById("formPurpose").placeholder = "Write here...";
  document.getElementById("languageSelect").style.display = formType === "Select a Language" ? "block" : "none";
}

function validateForm(event) {
  event.preventDefault();
  alert("You have successfully submitted your form!");
}




