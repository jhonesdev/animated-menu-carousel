$(document).ready(function() {
    $('.preload').animate({ left: '-100%', opacity: 0 }, 2000);
    setTimeout(function() { $('.preload').hide() }, 2300);
});

/**
 * Products nav 
 */
$('.products-nav').on('mousemove', function(e) {
    let list = $(".products-list");
    if ($(window).width() > 767.98) {
        list.css('top', -e.clientY + 'px');
    } else {
        list.css('top', '0');
    }
});

/**
 * Products images
 */
var zindex = 0;

$('.products-list li a').mouseover(function() {

    let item = $(this).parent().attr('data-item');

    $('.products-list li').removeClass('active');
    $(this).parent().addClass('active');

    $('.products-images-menu .item-' + item).css('transition', '');
    $('.products-images-menu .item-' + item + ' .left').css('transition', '');
    $('.products-images-menu .item-' + item + ' .right').css('transition', '');
    $('.products-images-menu .carousel').css('transition', '');
    $('.products-images-menu .carousel').hide();

    $('.products-images-menu .item-' + item).css('transform', 'translate3d(0, 100%,0)');
    $('.products-images-menu .item-' + item + ' .left').css('transform', 'translate3d(0, 100%,0)');
    $('.products-images-menu .item-' + item + ' .right').css('transform', 'translate3d(0, 100%,0)');
    $('.products-images-menu .carousel').css('opacity', '0');

    $('.products-images-menu .item-' + item).css('z-index', zindex);
    zindex++;

    setTimeout(function() {
        $('.products-images-menu .item-' + item).css('transition', 'transform .8s');
        $('.products-images-menu .item-' + item + ' .left').css('transition', 'transform .5s');
        $('.products-images-menu .item-' + item + ' .right').css('transition', 'transform .8s');
        $('.products-images-menu .item-' + item + ' .carousel').css('transition', 'opacity 2s ease-in-out');

        $('.products-images-menu .item-' + item + ' .left').css('transform', 'translate3d(0, 0%,0)');
        $('.products-images-menu .item-' + item + ' .right').css('transform', 'translate3d(0, 0%,0)');
        $('.products-images-menu .item-' + item).css('transform', 'translate3d(0, 0%,0)');
        $('.products-images-menu .item-' + item + ' .carousel').show();
        $('.products-images-menu .item-' + item + ' .carousel').css('opacity', '1');
    }, 200);

});