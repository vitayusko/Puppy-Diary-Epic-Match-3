// Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 3,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Mobile menu work

const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const closeMenuButton = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-bg');

if (mobileMenuButton && closeMenuButton && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.add('is-open');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
  };

  mobileMenuButton.addEventListener('click', openMenu);

  closeMenuButton.addEventListener('click', closeMenu);
}
