$(function () {
    'use strict';

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('#toggle').toggleClass('on');
        $('.offcanvas-collapse').toggleClass('open')
    })
});