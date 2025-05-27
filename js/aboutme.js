$(function () {

  $('.all_menu img').click(function () {
    $(this).hide().siblings().show();
    $('body').toggleClass('on');

  });

  let swiper = new Swiper(".part_2", {
    slidesPerView: 3.5,
    spaceBetween: 0,
    freeMode: true,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,}

  });

  $('.part_8 .programe img').click(function () {
    let proI = $(this).index();
    $('.part_8 .talk img').eq(proI).fadeToggle();

  })

  AOS.init();
  
  let windowWidth = $(window).width();
  if (windowWidth < 450) {
    $('*').attr({
      'data-aos':'',
      'data-aos-duration':'',
      'data-aos-offset': ''
    })
  }
})