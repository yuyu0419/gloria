$(function () {//start

    // 버거 메뉴 오픈 토글
    $('.burger').on('click', menuOpen);

    function menuOpen() {
        setTimeout(function () {
            $('.pop').css('opacity', '1')
            $('.pop').addClass('active');
        }, 200)
        if ($('.pop').className == 'active') {
            $('body').css('opacity', '0.5')
        }
    }

    $('.close_btn p').on('click', function () {
        setTimeout(function () {
            $('.pop').css('opacity', '0')
            $('.pop').removeClass('active');
        }, 200)
    })

});//end

// window.addEventListener('DOMContentLoaded', function () {})


