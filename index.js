const livestreamcontainer = document.querySelector('.live-stream-container')
livestreamcontainer.addEventListener('error', (event) => {
  console.error('live stream error:', event);
})

//for my section buttons (alter-call, prayer request, testimonies)
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';
    document.querySelectorAll('.details').forEach((detail) => {
      detail.style.display = 'none';
    });
    details.style.display = isVisible ? 'none' : 'block';
  });
});

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


// for payment form 
const form = document.getElementById('payment-form');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form data here
  const formData = new FormData(form);
  // Send form data to server or process it 
  console.log(formData);
});


