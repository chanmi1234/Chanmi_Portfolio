

$(function () {
     //경고창 닫기
 $('.alert .alert_ok , .alert .alert_x').click(function(){
    $('.alert').hide()
})
    //메인비주얼 슬라이드
    let swiper = new Swiper(".main_banner", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3700
        },
        loop: true
    });

    /* 스크롤 이벤트 시작 */
    $(window).scroll(function () {
        let st = $(this).scrollTop();//스크롤 탑 위치를 st에 저장합니다.
        let aboutT = $('.about_areke').offset().top - 250;//이벤트가 스크롤될 위치를 evTop에 저장을 시킵니다.
        //헤더 스크롤 이벤트 시작!
        if (st >= aboutT) {
            $('header').css({
                background: '#fff',
                borderBottom: '1px solid #dedede'
            })
            $('header h1 a img').attr('src', 'images/logo2.png')
            $('header nav').css({
                color: '#3c3530'
            })
        }
        else {
            $('header').css({
                background: 'transparent',
                borderBottom: '0'
            })
            $('header h1 a img').attr('src', 'images/logo.png')
            $('header nav').css({
                color: '#fff'
            })
        }


        //어바웃 콘텐츠 액션 시작
        for (let i = 0; i < $('main.contents .about_areke .about').length; i++) {
            if (st >= aboutT + (i * 30)) {
                $('main.contents .about_areke .about').eq(i).addClass('up').css({ 'transition-delay': (1.1 * i) + 's' });

            }
            else {
                $('main.contents .about_areke .about').eq(i).removeClass('up')
            }
        }

        //reservation 스크롤 이벤트 시작
        let reservationST = $('.reservation').offset().top - 500;
        if (st >= reservationST) {
            $('.reservation section').addClass('on')
        } else {
            $('.reservation').removeClass('on')
        }
        //프로그램 액션 시작
        let pro = $('.program .container').offset().top - 300;
        for (let i = 0; i < $('.program ul').length; i++) {
            if (st >= pro) {
                $('.program ul').eq(i).addClass('on').css({ 'animation-delay': (2 * i) + 's' })
            }
            else {
                $('.program ul').eq(i).removeClass('on')
            }
        }
        //프로그램 액션 끝

    });
    /* 스크롤 이벤트 끝 */
    $('.youtube_bg').youtube_background(); // 실행

    //faq클릭 이벤트
    $('main.contents .faq .contents .txt').click(function(){
        $(this).find('i').toggleClass('on')
        $(this).siblings('ul').toggleClass('slide')
    })

    //aside 스크롤 탑 이벤트
    $('aside .top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000)
    })
});

