$(document).ready(function() {
    $(".page_header .btn-expand").on('click', btnExpandClick);

    $(".header_slide").bxSlider({
        loop: false,
        auto: 0,
        nextText: '',
        prevText: '',
        pagerSelector: '#feature-pager',
        swipeThreshold: 5

    });

    $(".cmt_slide").bxSlider({
        loop: true,
        auto: 1,
        nextText: '',
        prevText: '',
        pagerSelector: '#cmt-pager',
        swipeThreshold: 55

    });

    if ($(".lightgallery").length > 0) {
        $('.lightgallery').lightGallery();
    }
});

function btnExpandClick(e) {
    e.preventDefault();
    e.stopPropagation();
    expandNav();
}

function expandNav() {
    $('.page_header .nav').slideToggle(200);
    $('.btn-expand .fa-bars').toggle();
    $('.btn-expand .fa-times').toggle();
}