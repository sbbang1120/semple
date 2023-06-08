$(function () {

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        arrows: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        $('.main_slide').slick('slickGoTo', idx, false);
    });




    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct < 300) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });


})