const hamburger = document.querySelector('.hamburger');
    const navlinks = document.getElementById('navlinks');

    hamburger.addEventListener('click', () => {
      navlinks.classList.toggle('active');
    });