// Nav bliver mørk når man scroller
const nav = document.getElementById('navigation');
window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        nav.classList.add('scrollet');
    } else {
        nav.classList.remove('scrollet');
    }
});


// Hamburger menu til mobil
const hamburger = document.getElementById('hamburger');
const mobilMenu = document.getElementById('mobil-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    mobilMenu.classList.toggle('open');
    document.body.style.overflow = mobilMenu.classList.contains('open') ? 'hidden' : '';
});

function lukMenu() {
    hamburger.classList.remove('open');
    mobilMenu.classList.remove('open');
    document.body.style.overflow = '';
}

// Vis eller skjul desktop-nav afhængigt af skærmstørrelse
function tjelkNavStoerrelse() {
    if (window.innerWidth >= 900) {
        navLinks.style.display = 'flex';
        hamburger.style.display = 'none';
    } else {
        navLinks.style.display = 'none';
        hamburger.style.display = 'flex';
    }
}

tjelkNavStoerrelse();
window.addEventListener('resize', tjelkNavStoerrelse);