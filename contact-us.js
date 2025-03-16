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


document.addEventListener('DOMContentLoaded', () => {
    const bibleVerses = [
        { text: '"For where two or three gather in my name, there am I with them."', ref: 'Matthew 18:20' },
        { text: '"The Lord is my shepherd; I shall not want."', ref: 'Psalm 23:1' },
        { text: '"I can do all things through Christ who strengthens me."', ref: 'Philippians 4:13' },
        { text: '"The name of the Lord is a strong tower; the righteous run to it and are safe."', ref: 'Proverbs 18:10' },
        { text: '"Be still, and know that I am God."', ref: 'Psalm 46:10' },
        { text: '"Ask and it will be given to you; seek and you will find."', ref: 'Matthew 7:7' },
        { text: '"With God all things are possible."', ref: 'Matthew 19:26' }
    ];
    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    document.getElementById('bible-text').textContent = randomVerse.text;
    document.getElementById('bible-ref').textContent = `— ${randomVerse.ref}`;
});

function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting Praise Court Assembly! We will get back to you shortly.');
    e.target.reset();
}