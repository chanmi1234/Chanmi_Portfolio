document.addEventListener('DOMContentLoaded', function () {
    // 클릭시 nav 등장 ~ 퇴장
    document.querySelector('header .inner .user .profile i').addEventListener('click', function () {
        document.querySelector('header .inner ul.nav_menu').classList.toggle('on');
    });
    // 스크롤 top버튼
    document.querySelector('aside').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})

$(function(){
    $('.bookinfo .bottom_btn button.event_btn').on('click',function(){
        $('.review_modal').addClass('view')
        $(document).off('click')
    })
    $('.review_modal .review .r_top i').on('click',function(){
        $('.review_modal').removeClass('view')
        $(document).off('click')
    })
    $('.review_modal .review .r_con .star_box i').on('click',function(){
        $(this).toggleClass('active')
    })
})

