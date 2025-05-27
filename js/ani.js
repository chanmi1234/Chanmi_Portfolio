$(function () {
  $('.all_menu img').click(function () {
    $(this).hide().siblings().show();
    $('body').toggleClass('on');
  });
  let swiper = new Swiper(".intro_1_bottom", {
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
  let swiper2 = new Swiper(".sns", {
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


  $(window).scroll(function(){
    let wST = $(window).scrollTop();
    let intro3T = $('.ani_intro .intro_3').offset().top -300;
    if(wST>=intro3T){
      $('.ani_intro .intro_3 .intro_3_right img').addClass('on')
    }else{
      $('.ani_intro .intro_3 .intro_3_right img').removeClass('on')
    }
  })
  
})
