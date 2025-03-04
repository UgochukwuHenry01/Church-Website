//codes for popup support
const button = document.querySelector('.popup-button');
const popupButton = document.querySelector('.popup-button');
const popupContent = document.querySelector('.popup-content');

popupButton.addEventListener('click', () => {
  popupContent.classList.toggle('show');
});

window.addEventListener('load', () => {
  button.classList.add('show');
});

document.addEventListener('click', (e) => {
  if (!popupButton.contains(e.target) && !popupContent.contains(e.target)) {
    popupContent.classList.remove('show');
  }
});


//select all buttons
const buttons = document.querySelectorAll('button');
//add evenlistener to each button
buttons.forEach((button) => {
  buttons.addEventListener('.click', () => {
    //get background element
    const background = document.querySelector('.background');

    //add the blur effect to the background
    background.classList.add('blur-background');

    //also trigger the specific functionalityn for each buttonn here
    if (button.classList.contains('need-support-button')) {
      //trigger the chatbot interface or other functionality for the need support button
    } else if (button.classList('select-language-button')) {
      //trigger the language selection functionality
    } else if (button.classList.contains('alter-call-button')) {
      //trigger its functionality
    } else if (button.classList.contains('first-time-worshipper-button')) {
      //trigger its functionality
    } else if (button.classList.contains('testimonies-button')) {

    } else if (button.classList.contains('prayer-request-button')) {

    }
  });
});