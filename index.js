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

//for my map to show
// function initMap() {
// const map = newgoogle.maps.Map(document.getElementById("map"),{
// center:{ lat: 37.7749, lng: -122.4194 }, zoom: 13,
// });
// const marker = newgoogle.maps.Marker({
//     position: { lat: 37.7859, lng: -122.4364 },
// map: map,
// title: "PRAISE COURT ASSEMBLY"
// });
// const infoWindow = newgoogle.maps.InfoWindow({
// content: "<h2>PRAISE COURT ASSEMBLY</h2><p>Address:No.6 Faith Avenue</p>",
// });
// marker.addEventListener("click", () => {

//     infoWindow.open(map,marker);
// });
// const searchBox = newgoogle.maps.places.searchBox(document.getElementById("search-input"))

// }