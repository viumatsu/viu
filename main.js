// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navUl = document.querySelector('nav ul');

  menuBtn.addEventListener('click', function () {
    if (navUl.style.display === 'flex') {
      navUl.style.display = 'none';
    } else {
      navUl.style.display = 'flex';
      navUl.style.flexDirection = 'column';
    }
  });

  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    alert(`Obrigado, ${name}! Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.`);

    this.reset();
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();

        const target = document.querySelector(href);
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });

        // Fechar menu mobile após clicar em um link
        if (window.innerWidth <= 768) {
          navUl.style.display = 'none';
        }
      }
    });
  });

  // Fecha o menu ao redimensionar para desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navUl.style.display = 'flex';
      navUl.style.flexDirection = 'row';
    } else {
      navUl.style.display = 'none';
    }
  });
});
