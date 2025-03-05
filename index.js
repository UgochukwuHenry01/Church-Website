// const livestreamcontainer = document.querySelector('.live-stream-container')
// livestreamcontainer.addEventListener('error', (event) => {
//   console.error('live stream error:', event);
// })

//for select a language button
const languageButton = document.querySelector('.language-button');
const languageOptions = document.querySelector('.language-options');

languageButton.addEventListener('click', () => {
  languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' :
    'block';
})
languageOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const selectedLanguage = e.target.getAttribute('data-language');
    console.log(`selected language: ${selectedLanguage}`);
  }
});



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