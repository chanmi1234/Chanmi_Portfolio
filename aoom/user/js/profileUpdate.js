
$(document).ready(function () {
    $('.user_main .u_m_right ul li').on('click', (function () {
        $(this).find('.u_modal').addClass('on')
        $(document).off('click');
    }))
    $('.user_main .u_m_right .u_modal .m_bg .m_top i.fa-times').on('click',(function (event) {
        event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되는 것을 막음
        $(this).closest('.u_modal').removeClass('on');
            $(document).off('click');
    }))

});
