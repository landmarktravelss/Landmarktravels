document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const forms = document.querySelectorAll('form[action="https://formspree.io/f/xreaqwpj"]');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      if (message) {
        message.textContent = 'Thank you! We are confirming your request.';
      }
      setTimeout(() => form.submit(), 600);
    });
  });

  const tourDropdown = document.getElementById('tour-dropdown');
  if (tourDropdown) {
    const params = new URLSearchParams(window.location.search);
    const tourValue = params.get('tour');
    if (tourValue) {
      const decoded = decodeURIComponent(tourValue);
      const match = Array.from(tourDropdown.options).find(option => option.value === decoded);
      if (match) {
        tourDropdown.value = match.value;
      } else {
        const option = document.createElement('option');
        option.value = decoded;
        option.textContent = decoded;
        option.selected = true;
        tourDropdown.appendChild(option);
      }
    }
  }

  const nav = document.querySelector('.glass-nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    if (current > lastScroll && current > 80) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  });
});
