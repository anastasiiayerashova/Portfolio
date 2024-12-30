document.addEventListener('DOMContentLoaded', () => {
    const menuOpenBtn = document.querySelector('.mob-open-btn');
    const menuCloseBtn = document.querySelector('.mob-menu-close-btn');
    const mobileMenu = document.querySelector('.mob-menu');
    const mobNavList = document.querySelector('.mob-nav-list')
    const overlay = document.querySelector('.mob-menu-overlay')
    const toggleBtn = document.querySelector('.js-btn')
    const moreText = document.querySelector('.more-text')

  toggleBtn.addEventListener('click', () => {
    if (moreText.classList.contains('visible')) {
        moreText.classList.remove('visible');
        moreText.classList.add('hidden');
        toggleBtn.textContent = 'Read More';
    } else {
        moreText.classList.remove('hidden');
        moreText.classList.add('visible');
        toggleBtn.textContent = 'Hide';
    }
})


menuOpenBtn.addEventListener('click', () => {
        overlay.classList.add('active')
        mobileMenu.classList.add('active');
        mobNavList.classList.remove('visually-hidden')
        menuCloseBtn.classList.remove('visually-hidden')
        menuOpenBtn.classList.add('visually-hidden')
});


menuCloseBtn.addEventListener('click', () => {
    overlay.classList.remove('active')
    mobileMenu.classList.remove('active');
    mobNavList.classList.add('visually-hidden')
    menuCloseBtn.classList.add('visually-hidden')
    menuOpenBtn.classList.remove('visually-hidden')
    });
    
    mobNavList.addEventListener('click', () => {
        overlay.classList.remove('active')
        mobileMenu.classList.remove('active')
        menuOpenBtn.classList.remove('visually-hidden')
    })


document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !menuOpenBtn.contains(event.target)) {
      mobileMenu.classList.remove('active');
      mobNavList.classList.add('visually-hidden')
      overlay.classList.remove('active')
      menuOpenBtn.classList.remove('visually-hidden')
  }
});
})