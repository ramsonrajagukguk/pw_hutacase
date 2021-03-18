'use strict';
$(function () {
  $('#myDiv').venomButton({
    phone: '+62 852 7013 6884',
    message: 'Saya mau pesan case 3d...',
    chatMessage: 'Hi there 👋<br><br>Hallo mau pesan Case Custom handpone..',
    avatar: './assets/avatar.png',
    showPopup: true,
    position: 'right',
    linkButton: false,
    showOnIE: false,
    nameClient: 'Huta Muara',
    headerTitle: 'Admin',
  });

  $('.nav_menu').click(function () {
    $('.nav_menu').removeClass('active');
    $(this).addClass('active');
  });

  $('.icon').click(function () {
    $('.icon').removeClass('active');
    $(this).addClass('active');
  });

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /*[ Fixed Header ]
    ===========================================================*/
  var header = $('.header');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 25) {
      $(header).addClass('header-fixed');
    } else {
      $(header).removeClass('header-fixed');
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  /*--------------------------
        Banner Slider
    ----------------------------*/
  $('.banner__slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });
})(jQuery);
