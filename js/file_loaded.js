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
                    tag = "<img src=" + thumb[2] + " alt=''>"
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

            $('.back').on('click', out);
            function out(e) {
                e.preventDefault();
                style();

                setTimeout(function () {
                    location.href = 'portfolio_list.html';
                }, 1000)
            }

            function style() {
                setTimeout(function () {
                    $('.hh_right').css('width', '0%');
                    $('.hh_left').addClass('active');
                    $('.hh_left').css('background-color', backColor[0])
                }, 300)
                setTimeout(function () {
                    // $('.back').css('opacity', '0');
                    $('.back').fadeOut();
                }, 500)



            }

        }

    })//ajax end
})//end


