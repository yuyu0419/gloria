window.addEventListener('DOMContentLoaded', function () {

    //all 마우스휠 이벤트
    var mouseClear,
        i = 0,
        articles = document.querySelectorAll('.mine article'),
        mql = window.matchMedia("screen and (max-width: 1042px)"),
        list = document.querySelector('.list'),
        listA = document.querySelectorAll('.list a'),
        mine = document.querySelector('.mine'),
        body = document.querySelector('body'),
        num50 = 50,
        resMsg;


    //모바일 or PC 구분
    mql.addListener(res);
    function res(e) {
        if (e.matches) {
            //모바일
            resMsg = 'mobile';
        } else {
            //PC
            resMsg = 'pc';
        }
        articleMove(e)
    }
    res(mql);


    //모바일 스크롤 이벤트
    var mEvent = { y: 0, y2: 0, state: '' };

    window.addEventListener('touchstart', tStart);
    window.addEventListener('touchmove', tMove);
    window.addEventListener('touchend', tEnd);

    function tStart(e) {
        mEvent.y = e.changedTouches[0].clientY;
    }
    function tMove(e) {
        mEvent.y2 = e.changedTouches[0].clientY;
    }
    function tEnd(e) {
        mEvent.y2 = e.changedTouches[0].clientY;

        if (Math.abs(mEvent.y - mEvent.y2) > 100) {
            if (mEvent.y > mEvent.y2) {
                if (i < 2) i++;
            } else {
                if (i > 0) i--;
            }
            articleMove();
        }
    }
    //chrome,ex10,edge
    window.addEventListener('mousewheel', function (e) {
        time(e)
    });

    //firefox
    window.addEventListener('DOMMouseScroll', function (e) {
        time(e)
    });

    function time(e) {
        clearTimeout(mouseClear);
        mouseClear = setTimeout(function () {
            if (e.wheelDeltaY < 0 || e.detail > 0) {
                if (i < 2) { i++ }
            } else {
                if (i > 0) { i-- }
            }
            articleMove();
        }, 100, e);
    }

    function articleMove(e) {
        var num = 100,
            idx;
        mine.style = "transform:translate(0%," + num * -i + "%);"
        list.style = "transform:translate(" + num50 * -i + "%, 0%);"
        listAEeach();
    }

    //a태그 active 함수
    function listAEeach() {
        listA = document.querySelectorAll('.list a')
        listA.forEach(function (v) {
            idx = v.dataset.num;
            listA[idx].classList.remove('active')

            if (idx == i) {
                listA[i].classList.add('active')
            }
        })
    }

    //팝업열기
    var openBtn = document.querySelector('.all_portfolio'),
        pop_all = document.querySelector('.pop_all');

    openBtn.addEventListener('click', popOpenClose)
    function popOpenClose() {
        pop_all.style = 'opacity:1'
        pop_all.classList.add('active');

        var closeBtn = document.querySelector('.closeBtn');
        closeBtn.addEventListener('click', function () {
            setTimeout(function () {
                pop_all.style = 'opacity:0'
                pop_all.classList.remove('active');
            }, 200)
        })
    }

    //파일 로드
    $(function () {
        $.ajax({
            url: 'portfolio_data.xml',
            success: function (data) {
                var tit, thumb, num, logo, sumary, colorP, colorImg, fontP, fontImg, mock, tag = '';
                var pageNum = localStorage.pageNum,
                    backColor = ['#ffae00', '#00b8ff', '#0059e9'];

                $(data).find('body').each(function (i) {
                    tit = $(this).find('tit').text();
                    num = $(this).find('num').text();
                    thumb = $(this).find('thumb').text();
                    logo = $(this).find('logo').text();
                    sumary = $(this).find('sumary').html();
                    colorP = $(this).find('color p').text();
                    colorImg = $(this).find('color img').text();
                    fontP = $(this).find('font p').text();
                    fontImg = $(this).find('font img').text();
                    mock = $(this).find('mock').text();

                    imgArr = fontImg.split(',')

                    tag = " <a href='#' data-num=" + i + ">"
                    tag += "<p><strong>" + tit + "</strong>" + num + "</p > "
                    tag += "</a >"
                    $('.list').append(tag);
                    $('.all_list').append(tag);


                    if (i == 1) {
                        tag = "<div class='vdo'>"
                        tag += "<video src=" + thumb + " autoplay muted loop></video>"
                        tag += "</div>"
                    } else if (i == 2) {
                        tag = "<img src=" + thumb + " alt=''>"
                    }

                    $('.mine article').eq(i).append(tag);

                    var idx, url;
                    $('.list a').on('click', function () {
                        idx = $(this).index();
                        localStorage.pageNum = $(this).attr('data-num');
                        location.href = 'portfolio_detail.html';
                    });

                    $('.all_list a').on('click', function () {
                        idx = $(this).index();
                        localStorage.pageNum = $(this).attr('data-num');
                        location.href = 'portfolio_detail.html';
                    });

                    if (pageNum == i) {
                        tag = "<div class='detail'>" + sumary + "</div>"
                        $('.hh_left').append(tag)

                        tag = "<img src=" + logo + " alt=''>"
                        $('.hh_right').append(tag)

                        tag = "<p>" + colorP + "</p>"
                        $('.color_left').append(tag)

                        tag = "<img src=" + colorImg + " alt=''>"
                        $('.color_right').append(tag)

                        tag = "<p>" + fontP + "</p>"
                        tag += "<ul class='text_img'>"

                        for (var id = 0; id < imgArr.length; id++) {
                            tag += "<li>"
                            tag += "<img src=" + imgArr[id] + " alt=''>"
                            tag += "</li>"
                        }
                        tag += "</ul>"
                        $('.text_style').append(tag)

                        tag = "<img src=" + mock + " alt=''>"
                        $('.mockup p').append(tag)
                    }
                })

                $('.list a').eq(0).addClass('active');
                $('.hh_left').css("background-color", backColor[pageNum])
                if (pageNum == 1) {
                    $('.hh_right').css("margin-top", 5 + "%")
                    $('.color_right').width(30 + "%");
                }

                var allList = document.querySelectorAll('.all_list a'),
                    color = ['#ffae00', '#00b8ff', '#0059e9']

                allList.forEach(function (a, i) {
                    allList[i].addEventListener('mouseover', function (e) {
                        if (a) {
                            pop_all.style = 'background-color:' + color[i]
                        }
                    })
                    allList[i].addEventListener('mouseleave', function (e) {
                        pop_all.style = 'background-color:#0b5121'
                    })
                })
                setTimeout(function () { window.scrollTo(0, 0); }, 100);
            }//success
        })//ajax end
    })//end
});//end




