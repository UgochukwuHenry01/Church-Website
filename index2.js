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
  if (! popupButton.contains(e.target) && ! popupContent.contains(e.target)) {
    popupContent.classList.remove('show');
  }
});
