$(function () {//start

    // 버거 메뉴 오픈 토글
    $('.burger').on('click', menuOpen);

    function menuOpen(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $('.pop').addClass('active');
    }

    $('.close_btn p').on('click', function () {
        $('.pop').removeClass('active');
    })

});//end

// window.addEventListener('DOMContentLoaded', function () {})


