$(function () {


    $('.all_menu img').click(function () {
        $(this).hide().siblings().show();
        $('body').toggleClass('on');

    });

    $('.c_left_bottom .profile .fx').click(function () {
        let i = $(this).index();
        $('.core_right .profile_box').eq(i).addClass('on').siblings().removeClass('on')
    })



    let swiper = new Swiper(".bench_bottom", {
        autoplay: {
            delay: 4000,
        },
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: false

    });

    $('.feature_introduction .f_in_bottom .con_box').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
    })

    $('.feature_introduction .con_b_bottom .txt_box p').click(function () {
        let thisI = $(this).index()
        $(this).addClass('click').siblings().removeClass('click')
        $('.feature_introduction .f_in_bottom .con_box.on .b_right .c_box').eq(thisI).addClass('click').siblings().removeClass('click')
    })

})
