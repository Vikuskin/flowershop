$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 10
      }
    }
  });
const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });
  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/bouqet-1.jpg',
        opts : {
          caption : 'Фото букета',
          thumb   : 'img/bouqet-1.jpg'
        }
      },
      {
        src  : 'img/bouqet-1.2.jpg',
        opts : {
          caption : 'Фото букета',
          thumb   : 'img/bouqet-1.2.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  });

  $("#review-2").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/bouqet-2.jpg',
        opts : {
          caption : 'Фото букета',
          thumb   : 'img/bouqet-2.jpg'
        }
      },
      {
        src  : 'img/bouqet-2.2.jpg',
        opts : {
          caption : 'Фото букета',
          thumb   : 'img/bouqet-2.2.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  });

  $("#review-3").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/bouqet-3.jpg',
        opts : {
          caption : 'Фото букета',
          thumb   : 'img/bouqet-3.jpg'
        }
      },
      {
        src  : 'img/bouqet-3.2.jpg',
        opts : {
          caption : 'Фото букета',
          thumb   : 'img/bouqet-3.2.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
});

    