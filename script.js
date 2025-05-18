// script.js
// Smooth scrolling for in-page links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamically update footer year
document.addEventListener('DOMContentLoaded', () => {
  const footerPara = document.querySelector('footer p');
  const year = new Date().getFullYear();
  footerPara.textContent = `© ${year} Heh, ever unalived a man?`;
});
