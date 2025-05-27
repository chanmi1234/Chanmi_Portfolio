
$(function () {
  let swiper = new Swiper(".car", {
    slidesPerView: 3,
    spaceBetween: 70,
    freeMode: true,
    pagination: {
      el: ".car .swiper-pagination",
      clickable: true,
      autoplay: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1367: {
        slidesPerView: 3,
        spaceBetween: 70,

      },
      1023: {
        slidesPerView: 2.5,
        spaceBetween: 90,

      },
      823: {
        slidesPerView: 2.5,
        spaceBetween: 90,

      },
      360: {
        slidesPerView: 1.8,
        spaceBetween: 160,

      },
    },
  }
  );


  let swiper2 = new Swiper(".inner2", {
    slidesPerView: 1.35,
    centeredSlides: true,
    spaceBetween: 180,
    grabCursor: true,
    pagination: {
      el: ".inner2 .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1367: {
        slidesPerView: 1.35,
        spaceBetween: 180,

      },
      1023: {
        slidesPerView: 1,
        spaceBetween: 120,

      },
    },

  });
  AOS.init();

  let sct = $(window).scrollTop();
  let introT = $('.project_intro').offset().top - 300;

  let chkham =true;
  let chk = 0;

  $(window).scroll(function () {
    sct = $(this).scrollTop();
    if (sct >= introT) {
      $('header h1 a img').attr('src', 'img/logo_b.png')
      $('.project_intro ul li').eq(5).find('span').addClass('active')
      $('body header nav').addClass('on');
      $('header nav li .click').attr('src', 'img/manu_b.png')
      chk = 1;     
    }
    else {
      $('header h1 a img').attr('src', 'img/logo.png')
      $('.project_intro ul li').eq(5).find('span').removeClass('active');
      $('body header nav').removeClass('on');
      $('header nav li .click').attr('src', 'img/manu.png')
      /*    $('header nav').css({
           color: '#fff'
         }) */
      chk = 0;
      //console.log(chk);
    }

  })


  $('.all_menu img').click(function () {
    $(this).hide().siblings().show();
    $('body').toggleClass('on');
    if(chkham){
      $('body header nav').removeClass('on');
      $('header h1 a img').attr('src', 'img/logo.png');
      chkham=false;     
    }else{
      if(chk ==1) {
        $('body header nav').addClass('on');
        $('header h1 a img').attr('src', 'img/logo_b.png');
      }else{
        $('body header nav').removeClass('on');
        $('header h1 a img').attr('src', 'img/logo.png');
      }
      chkham=true;
    }
  });

  $('aside .top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500)
  })
/*   let windowWidth=$(window).innerWidth(); */
  /* console.log(windowWidth); */
  /* if (windowWidth < 768) {
    $('.problems .problem').attr({
      'data-aos': '',
      'data-aos-duration': '',
      'data-aos-offset': ''
    })
    $('.complete').attr({
      'data-aos': '',
      'data-aos-duration': '',
      'data-aos-offset': ''
    })
  } */

})