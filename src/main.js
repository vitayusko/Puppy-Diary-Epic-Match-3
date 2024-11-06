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
  slideToClickedSlide: true,
  watchSlidesProgress: true,
});

swiper.on('click', function (swiper, event) {
  var clickedSlide = event.target.closest('.swiper-slide');
  if (clickedSlide) {
    var clickedIndex = Array.from(swiper.slides).indexOf(clickedSlide);
    if (clickedIndex !== swiper.activeIndex) {
      swiper.slideTo(clickedIndex);
    }
  }
});

// Mobile menu work

const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const closeMenuButton = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-bg');
const mobileMenuLinks = document.querySelectorAll('.nav-item-link-mob');

let scrollPosition = 0;

if (mobileMenuButton && closeMenuButton && mobileMenu) {
  const openMenu = () => {
    scrollPosition = window.pageYOffset;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%'; // Чтобы избежать смещения

    mobileMenu.classList.add('is-open');
  };

  const closeMenu = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, scrollPosition);

    mobileMenu.classList.remove('is-open');
  };

  mobileMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
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
