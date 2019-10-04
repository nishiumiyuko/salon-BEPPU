$(function () {
    $('#js-open').on('click', function () {
        $('.header-nav, #js-open, .catch-copy, .catch-copy2').toggleClass('open')
    })

    $('.header-nav').on('click', function () {
        $('.header-nav, #js-open, .catch-copy, .catch-copy2').toggleClass('open')
    })

})