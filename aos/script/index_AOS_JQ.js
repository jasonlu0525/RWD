(function ($) {
    AOS.init();
    $(window).resize(function () {
        var Viewport = $(window).width();
        if (Viewport <= 375) {
            var list_RWD = document.getElementById('Jq_rwd');
            $(list_RWD).children('li').removeAttr('data-aos');
            $('#Jq_rwd>li:nth-child(odd)').attr('data-aos', 'fade-left');
            $('#Jq_rwd>li:nth-child(even)').attr('data-aos', 'fade-right');
        }
    });
})(jQuery);