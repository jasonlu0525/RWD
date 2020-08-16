$(function () {
    if ($(window).width() <= 768) {
        $('header').on('click', '.top-menu', function (e) {
            e.preventDefault();
            $('#top-list').toggleClass('active');
        });
    }
});