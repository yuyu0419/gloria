$(function () {//start

    // 버거 메뉴 오픈 토글
    $('.burger').on('click', menuOpen);

    function menuOpen() {
        setTimeout(function () {
            $('.pop').css('opacity', '1')
            $('.pop').addClass('active');
        }, 400)
    }

    $('.x_btn').on('click', function () {
        setTimeout(function () {
            $('.pop').css('opacity', '0')
            $('.pop').removeClass('active');
        }, 250)
    })

});//end

// window.addEventListener('DOMContentLoaded', function () {})


