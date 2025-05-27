$(function () {
  $('.all_menu img').click(function () {
    $(this).hide().siblings().show();
    $('body').toggleClass('on');
  });

  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },

  }
  );


})
