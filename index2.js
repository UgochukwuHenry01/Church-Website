//codes for popup support
const popupButton = document.querySelector('.popup-button');
const popupContent = document.querySelector('.popup-content');

popupButton.addEventListener('click', () => {
  popupContent.classList.toggle('.show');
});

document.addEventListener('click', (e) => {
  if (! popupButton.contains(e.target) && ! popupContent.contains(e.target)) {
    popupContent.classList.remove('.show');
  }
});