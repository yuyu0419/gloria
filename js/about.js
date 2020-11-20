window.addEventListener('DOMContentLoaded', function () {

    //who am i 전체 마우스 이벤트
    var mouseClear,
        aboutMain = document.querySelector('main'),
        i = 0,
        idx = 0,
        num25;

    window.addEventListener('mousewheel', function (e) {
        clearTimeout(mouseClear);
        mouseClear = setTimeout(aboutMove, 100, e);
    });

    function aboutMove(e) {
        num25 = 25;

        if (e.wheelDelta < 0) {
            if (i < 3) { i++ }
        } else {
            if (i > 0) { i-- }
        }
        aboutMain.style = "transform:translate(0%," + num25 * -i + "%);"
    }



    //두번째 아티클 마우스 이벤트
    var myself = document.querySelector('.myself');
    var timeClear;

    myself.addEventListener('mousewheel', function (e) {
        e.stopPropagation();
        clearTimeout(timeClear)
        timeClear = setTimeout(sectionMove, 200, e)
    });

    function sectionMove(e) {
        var sectionActive = document.querySelector('.about2 section.active'),
            section = document.querySelectorAll('.about2 section');

        if (e.wheelDelta < 0) {
            if (idx < section.length - 1) {
                idx++
                setTimeout(function () {
                    sectionActive.nextElementSibling.classList.add('active')
                }, 300)
                sectionActive.classList.remove('active')
            } else {
                i++;
                winFun();
                skill();
            }
        } else {
            if (idx > 0) {
                idx--;
                setTimeout(function () {
                    sectionActive.previousElementSibling.classList.add('active')
                }, 300)
                sectionActive.classList.remove('active')
            } else {
                i--;
                winFun();
            }
        }

        function winFun() {
            num25 = 25;
            aboutMain.style = "transform:translate(0%," + num25 * -i + "%);"
        }
    }



    function skill() {
        var skillCon = document.querySelector('.my_skill'),
            lang = [Number(90), Number(90), Number(75), Number(70), Number(70)],
            span = document.querySelectorAll('.bar span:nth-of-type(2)')

        span.forEach(function (v, i) {
            setTimeout(function () {
                span[i].style.width = lang[i] + '%';
            }, 500);
        })
    }

    aboutMain.style = "transform:translate(0%,0%)";




});//end