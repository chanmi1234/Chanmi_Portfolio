$(function () {
    $('.all_menu img').click(function () {
        $(this).hide().siblings().show();
        $('body').toggleClass('on');
        
    });
    let slideI = 0;
    $('.cat_dancing img ').eq(slideI).siblings().hide()
    $('.cat_bg img ').eq(slideI).siblings().hide()
    setInterval(function () {
        if (slideI < 5) {
            slideI++
        } else {
            slideI = 0
        }
        $('.cat_dancing img').eq(slideI).fadeIn(10).siblings().fadeOut(10)
        $('.cat_bg img').eq(slideI).fadeIn(10).siblings().fadeOut(10)
    }, 700)

})