// for my navbars
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    body.classList.toggle('hide-home');

    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '&times;'; // Exit icon
    } else {
        menuToggle.innerHTML = '&#9776;'; // Menu icon
    }
}


// var map = L.map('map').setView([6.5244, 3.3792], 10); // Default to Lagos, Nigeria

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// var branches = [
//     { name: "Praise Court Assembly - Lagos", lat: 6.5244, lng: 3.3792 },
//     { name: "Praise Court Assembly - Abuja", lat: 9.0579, lng: 7.4951 },
//     { name: "No. 6 faith Avenue", lat: 4.8156, lng: 7.0498 }
// ];

// branches.forEach(branch => {
//     L.marker([branch.lat, branch.lng]).addTo(map)
//         .bindPopup(`<b>${branch.name}</b>`);
// });

// function searchLocation() {
//     var query = document.getElementById('search').value.toLowerCase();
//     var found = branches.find(branch => branch.name.toLowerCase().includes(query));

//     if (found) {
//         map.setView([found.lat, found.lng], 12);
//     } else {
//         alert("Branch not found. Please try another search.");
//     }
// }

// function goBack() {
//     window.history.back();
// }



function searchLocation() {
    var query = document.getElementById('search').value.trim();
    var mapFrame = document.getElementById('mapFrame');

    if (query === "") {
        alert("Please enter a location or church name.");
        return;
    }

    var encodedQuery = encodeURIComponent(query);
    mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedQuery}`;
}

function goBack() {
    window.history.back();
}