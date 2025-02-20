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

function loadNavBar() {
    const navBarContainer = document.getElementById('nav-bar-container');
    const navBarHtml = fetch('nav-bar.html').then(response => response.text())
        .then(html => navBarContainer.innerHTML = html);
}
loadNavBar();

//button for giving
const giveBtn = document.querySelector('.give-btn');

giveBtn.addEventListener('click', () => {
    // Code to handle the give button click event
    console.log('Give button clicked!');
});

const giftBtn = document.querySelector('.gift-btn');
const paymentForm = document.querySelector('.payment-form');
const donateBtn = document.querySelector('.donate-btn');

giftBtn.addEventListener('click', () => {
  paymentForm.style.display = 'block';
});

donateBtn.addEventListener('click', () => {
  // Add payment processing logic here
  alert('Thank you for your donation!');
});

const container = document.querySelectorAll(".img-container");
const image = document.querySelectorAll(".hidden");

let imgArr = ["./image/image 5.jpg","./image/image 6.jpg","./image/give 2.jpg"];

for (let i = 0; i < container.length; i++)
    container[i].addEventListener("click", function(){
image[i].classList.remove("hidden");
});

const shuffle = function (imgArr){
    for (let i = imgArr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [imgArr[i], imgArr[j]] = [imgArr[j], imgArr[i]];
    }
    return imgArr;
};
console.log(shuffle(imgArr));