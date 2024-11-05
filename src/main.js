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

// Download btn

document.getElementById('downloadBtn').onclick = function () {
  window.open(
    'https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android',
    '_blank'
  );
};

document.getElementById('mobMenuDownloadBtn').onclick = function () {
  window.open(
    'https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android',
    '_blank'
  );
};

document.getElementById('headerMobBtnDownload').onclick = function () {
  window.open(
    'https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android',
    '_blank'
  );
};

// fixed header
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});
