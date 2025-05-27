$(function () {
    //경고창 닫기
    $('.alert .alert_ok , .alert .alert_x').click(function(){
        $('.alert').hide()
    })
    //헤더 호버 
    $('header').hover(
        function () {
            $(this).addClass('active')
            $('header .h_bottom .logo img').attr('src', 'img/Logo2.png')
        },
        function () {
            $(this).removeClass('active')
            $('header .h_bottom .logo img').attr('src', 'img/Logo1.png')
        });

    let st = $(this).scrollTop();//스크롤 탑 위치를 st에 저장
    let evTop = $('.inner').offset().top - 130;//이벤트가 스크롤될 위치를 evTop에 저장
    let loTop = $('.lost_item').offset().top - 400;

    //헤더 스크롤 이벤트
    $(window).scroll(function () {
        st = $(this).scrollTop();//스크롤 탑 위치를 st에 저장
        if (st >= evTop) {
            $('header').addClass('active');
            $('header .h_bottom .logo img').attr('src', 'img/Logo2.png');
            $('header').mouseleave(function(){
                $(this).addClass('active');
                $('header .h_bottom .logo img').attr('src', 'img/Logo2.png');
            });
        }
        else {
            $('header').removeClass('active');
            $('header .h_bottom .logo img').attr('src', 'img/Logo1.png');
            $('header').mouseleave(function(){
                $('header').removeClass('active');
                $('header .h_bottom .logo img').attr('src', 'img/Logo1.png');
            });
        }
        if (st >= loTop) {
            $('.cls-1').addClass('on');
        } else {
            $('.cls-1').removeClass('on');
        }
    });
    //헤더 스크롤 이벤트 끝


    //메인비주얼 슬라이드
    let swiper = new Swiper(".main_visual", {
        autoplay: {
            delay: 4000,
        },

        navigation: {
            nextEl: ".main_visual .swiper-button-next",
            prevEl: ".main_visual .swiper-button-prev",
        },
        pagination: false

    });

    //바로가기 아이콘 슬라이드    

    let swiper2 = new Swiper(".go_slide", {
        slidesPerView: 3.5,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
            el: "go_slide .swiper-pagination",
            clickable: true,
            autoplay: true,
        },
    })


    //알림마당 클릭 이벤트
    $('.inform ul.contents li').click(function () {
        $(this).addClass('wide').siblings().removeClass('wide')

    })

    //푸터 패밀리 사이트
    $('footer .f_bottom .f_go div p').click(function () {
        $(this).siblings('ul').stop().slideToggle()
        $(this).find('i').toggleClass('ro')
    })

    //사이드바 클릭
    $('aside .menu p').click(function () {
        // $(this).find('ul.side').stop().fadeToggle(500)
        $('aside .menu ul.side').stop().slideToggle(500);
    })

    //TOP버튼 클릭시 스크롤탑 이동 이벤트
    $('aside .top ').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})