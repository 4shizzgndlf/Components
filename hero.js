// Hero parallax – billedet bevæger sig langsommere end siden
const heroBaggrund = document.getElementById('hero-baggrund');
heroBaggrund.style.backgroundImage = "url('image5.jpeg')";

window.addEventListener('scroll', function() {
    if (window.innerWidth > 600) {
        var flytning = window.scrollY * 0.28;
        heroBaggrund.style.transform = 'scale(1.15) translateY(' + flytning + 'px)';
    }
}, { passive: true });



// Scroll reveal – elementer glider ind når de bliver synlige
var scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('synlig');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.vis-ved-scroll').forEach(function(el) {
    scrollObserver.observe(el);
});