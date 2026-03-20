// ── MAILOPS — SHARED JS ──

// Active nav link
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href === window.location.href ||
      window.location.pathname.endsWith(a.getAttribute('href'))) {
    a.classList.add('active');
  }
});

// Nav shrink on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.style.padding = window.scrollY > 60
    ? (window.innerWidth > 900 ? '14px 60px' : '12px 24px')
    : (window.innerWidth > 900 ? '20px 60px' : '16px 24px');
});

// Mobile burger
const burger = document.getElementById('navBurger');
if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
  });
}

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// FAQ toggle
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
