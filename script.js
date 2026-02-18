/* INTERSECTION OBSERVER FOR FADE-IN */
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* CONTACT FORM HANDLER */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully. We will contact you shortly.');
        contactForm.reset();
    });
}

/* MOBILE NAV TOGGLE (Placeholder logic) */
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        alert('Mobile Menu: Modern full-screen navigation would slide out here!');
    });
}

/* HEART ICON INTERACTION */
document.querySelectorAll('.wishlist').forEach(heart => {
    heart.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fas');
        icon.classList.toggle('far');
        if (icon.classList.contains('fas')) {
            icon.style.color = '#e94560';
        } else {
            icon.style.color = 'inherit';
        }
    });
});
