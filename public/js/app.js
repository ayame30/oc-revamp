$(function(){
    $(window).on('scroll init resize', function(){
        var height = $(window).height()/2;
        var scrollTop = $(window).scrollTop();
        if (scrollTop > height*3) {
            $('#intro')
                .addClass('play-end')
                .addClass('play-1')
                .addClass('play-2');
        } else if (scrollTop > height*2) {
            $('#intro')
                .removeClass('play-end')
                .addClass('play-1')
                .addClass('play-2');
        } else if (scrollTop > height) {
            $('#intro')
                .removeClass('play-end')
                .addClass('play-1')
                .removeClass('play-2');
        } else {
            $('#intro')
                .removeClass('play-end')
                .removeClass('play-1')
                .removeClass('play-2');
        }
        if (scrollTop >= $('#intro-wrapper')[0].offsetTop + $('#intro-wrapper')[0].offsetHeight) {
            $('.header-space').addClass('active');
            var navHeight = 37;

        } else {
            $('.header-space').removeClass('active');
        }

        if (scrollTop + $(window).height() >= $('.section-a')[0].offsetTop + $('.section-a')[0].offsetHeight) {
            $('.footer').addClass('active');
        } else {
            $('.footer').removeClass('active');
        }
    });
    $('.slick').slick({
        infinite: false,
    });


});
