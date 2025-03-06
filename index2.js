//codes for popup support
// const button = document.querySelector('.popup-button');
// const popupButton = document.querySelector('.popup-button');
// const popupContent = document.querySelector('.popup-content');

// popupButton.addEventListener('click', (e) => {
//   popupContent.classList.toggle('show');
// });

// window.addEventListener('load', (e) => {
//   button.classList.add('show');
// });

// document.addEventListener('click', (e) => {
//   if (!popupButton.contains(e.target) && !popupContent.contains(e.target)) {
//     popupContent.classList.remove('show');
//   }
// });


// //select all buttons
// const buttons = document.querySelectorAll('button');
// //add evenlistener to each button
// buttons.forEach((button) => {
//   buttons.addEventListener('.click', () => {
//     //get background element
//     const background = document.querySelector('.background');

//     //add the blur effect to the background
//     background.classList.add('blur-background');

//     //also trigger the specific functionalityn for each buttonn here
//     if (button.classList.contains('need-support-button')) {
//       //trigger the chatbot interface or other functionality for the need support button
//     } else if (button.classList('select-language-button')) {
//       //trigger the language selection functionality
//     } else if (button.classList.contains('alter-call-button')) {
//       //trigger its functionality
//     } else if (button.classList.contains('first-time-worshipper-button')) {
//       //trigger its functionality
//     } else if (button.classList.contains('testimonies-button')) {

//     } else if (button.classList.contains('prayer-request-button')) {

//     }
//   });
// });



// Get the form elements
const paymentForm = document.getElementById('payment-form');
const paymentInfo = document.getElementById('payment-info');
const payerInfo = document.getElementById('payer-info');
const nextBtn = document.getElementById('next-btn');

// Add an event listener to the next button
nextBtn.addEventListener('click', () => {
    // Hide the payment information fieldset
    paymentInfo.style.display = 'none';
    // Show the payer information fieldset
    payerInfo.style.display = 'block';
});

// Add an event listener to the form submission
paymentForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Display a success message
    if (confirm('Payment submitted successfully!')) {
        // Take the user back to the first page
        paymentInfo.style.display = 'block';
        payerInfo.style.display = 'none';
    }
});