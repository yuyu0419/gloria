window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', conFun);

    function conFun(e) {
        var winY = window.scrollY,
            color = document.querySelector('.color_system'),
            colorH = color.clientHeight,
            text = document.querySelector('.text_style'),
            textH = text.clientHeight,
            mockup = document.querySelector('.mockup p'),
            mockH = mockup.clientHeight;

        //컬러
        if (winY > colorH) {
            color.classList.add('active')
        } else {
            if (winY < colorH / 2) {
                color.classList.remove('active')
            }
        }
        //텍스트
        if (winY > textH + colorH) {
            text.classList.add('active')
        } else {
            if (winY < textH) {
                text.classList.remove('active')
            }
        }
        //목업
        if (winY > mockH + textH + colorH) {
            mockup.classList.add('active')
        } else {
            if (winY < textH) {
                mockup.classList.remove('active')
            }
        }
    }





});//end




