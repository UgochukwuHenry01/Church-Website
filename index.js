




//Get all buttons
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the form container associated with the button
    const formContainer = button.nextElementSibling;

    // Check if the form container is already visible
    if (formContainer.style.display === 'block') {
      // Hide the form container
      formContainer.style.display = 'none';
    } else {
      // Show the form container
      formContainer.style.display = 'block';
      // Hide other form containers
      buttons.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherFormContainer = otherButton.nextElementSibling;
          otherFormContainer.style.display = 'none';
        }
      });
    }
  });
});