"use strict";
jQuery(document).ready(function ($) {

    jQuery('header #primary-navigation').meanmenu({
        meanMenuContainer: '.site-header'
    });

//    setTimeout(function(){
//        google.maps.event.trigger(map, 'resize');
//    }, 30);

    //Issue for last menu with submenu
    $("ul.nav-menu li.menu-item-has-children").on('mouseenter mouseleave', function (e) {
        console.log('enter');
        var elm = $(this).children('ul');
        var off = elm.offset();
        var l = off.left;
        var container_left = $('.container').offset().left;
        var container_width = $('.container').width();
        var w = elm.width();
        var isEntirelyVisible = (l + w <= container_width + container_left);
        if (!isEntirelyVisible) {
            $(this).addClass('edge');
        } else {
            $(this).removeClass('edge');
        }
    });
    $(window).load(function () {
        $('.flexslider').flexslider({
            controlNav: false,
            animation: "slide"
        });
        if (jQuery(window).width() > 979) {
            $('.flexslider-wedding').flexslider({
                maxItems: 5,
                itemWidth: 180,
                itemMargin: 5,
                animation: "slide"
            });
        }

        setTimeout(function () {
            $(".top-back .images1 .nice-couple").show("slow");
        }, 500);

        var slider_id = jQuery('.back-img div.wonderpluginslider').attr('data-sliderid');
        jQuery('.amazingslider-slider-' + slider_id + ' > div.amazingslider-arrow-left-' + slider_id).addClass('home_banner_arrow');
        jQuery('.amazingslider-slider-' + slider_id + ' > div.amazingslider-arrow-right-' + slider_id).addClass('home_banner_arrow');
        jQuery('.amazingslider-wrapper-' + slider_id + ' > .amazingslider-nav-' + slider_id).addClass('home_banner_navigation');
        if (jQuery('.amazingslider-bottom-shadow-' + slider_id).find('img').length == 1) {
            jQuery('div.social-icon').css('margin-top', '20px');
        }
    });
    if (jQuery(window).width() > 767 && jQuery(window).width() < 992) {
        $('.flexslider-wedding').flexslider({
            maxItems: 4,
            itemWidth: 185,
            animation: "slide"
        });
    }
    if (jQuery(window).width() > 480 && jQuery(window).width() < 767) {
        $('.flexslider-wedding').flexslider({
            maxItems: 3,
            itemWidth: 180,
            animation: "slide"
        });
    }
    if (jQuery(window).width() == 480) {
        $('.flexslider-wedding').flexslider({
            maxItems: 2,
            itemWidth: 180,
            animation: "slide"
        });
    }
    if (jQuery(window).width() > 319 && jQuery(window).width() < 450) {
        $('.flexslider-wedding').flexslider({
            maxItems: 1,
            itemWidth: 210,
            animation: "slide"
        });
    }
    if (jQuery(window).width() > 1024) {
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            var top_height = $('.top-back').height();
            if (y > top_height) {
                $('.site-header').addClass('active-sticky');
                $('.site-header, .nav-menu li ul').addClass('active-sticky');
                $('.nav-menu li ul li a').addClass('active-sticky');
            } else {
                $('.site-header').removeClass('active-sticky');
                $('.site-header, .nav-menu li ul').removeClass('active-sticky');
                $('.nav-menu li ul li a').removeClass('active-sticky');
            }
        });
    }
    if (jQuery(window).width() > 800 && jQuery(window).width() <= 1024) {
        $(document).scroll(function () {
            var top_height = $('.top-back').height();
            var y = $(this).scrollTop();
            if (y > top_height) {
                $('.site-header').addClass('active-sticky');
                $('.site-header, .nav-menu li ul').addClass('active-sticky');
                $('.nav-menu li ul li a').addClass('active-sticky');
            } else {
                $('.site-header').removeClass('active-sticky');
                $('.site-header, .nav-menu li ul').removeClass('active-sticky');
                $('.nav-menu li ul li a').removeClass('active-sticky');
            }
        });
    }
    if (jQuery(window).width() <= 800) {
        $(document).scroll(function () {
            var top_height = $('.top-back').height();
            var y = $(this).scrollTop();
            if (y > top_height) {
                $('.site-header').addClass('active-sticky');
                $('.site-header, .nav-menu li ul').addClass('active-sticky');
                $('.nav-menu li ul li a').addClass('active-sticky');
            } else {
                $('.site-header').removeClass('active-sticky');
                $('.site-header, .nav-menu li ul').removeClass('active-sticky');
                $('.nav-menu li ul li a').removeClass('active-sticky');
            }
        });
    }

    /* -------------- for normal click menu effect------------*/
    $('#navigation li').each(function () {
        if ($(this).hasClass('current-menu-item')) {
            $(this).addClass('active');
        }
    });
    $('#navigation').find('li a').click(function (e) {
        $('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 500);
        return false;
    });
    jQuery(window).on('scroll', function () {
        var cur_pos = jQuery(this).scrollTop();

        var sections = jQuery('section')
                , nav = jQuery('.site-header')
                , nav_height = nav.outerHeight();

        sections.each(function () {
            var top = jQuery(this).offset().top - nav_height - 100,
                    bottom = top + jQuery(this).outerHeight() + 100;

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li').removeClass('active');
                sections.removeClass('active');

                jQuery(this).addClass('active');
                nav.find('a[href="#' + jQuery(this).attr('id') + '"]').parent('li').addClass('active');
            }
        });
    });
    jQuery(".arrow-up").click(function () {
        jQuery("html, body").animate({scrollTop: 0}, 1000);
    });
    // call fancybox to display our gallery
    jQuery("a.fancybox").attr('rel', 'gallery').fancybox();
});

jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll > 100) {
        jQuery(".arrow-up").fadeIn();
    } else {
        jQuery(".arrow-up").fadeOut();
    }
});
/*-------Scrolling Effects -------*/
jQuery(function ($) {
    var $elems = $('.animateblock');
    var winheight = $(window).height();
    var fullheight = $(document).height();
    $elems.each(function () {
        var $elm = $(this);
        var topcoords = $elm.offset().top;
        if (topcoords < winheight) {
            // animate when top of the window is 3/4 above the element
            $elm.addClass('animated');
        }
    });
    $(window).scroll(function () {
        animate_elems();
    });

    function animate_elems() {
        var wintop = $(window).scrollTop(); // calculate distance from top of window

        // loop through each item to check when it animates
        $elems.each(function () {
            var $elm = $(this);
            if ($elm.hasClass('animated')) {
                return true;
            } // if already animated skip to the next item
            var topcoords = $elm.offset().top; // element's distance from top of page in pixels
            if (wintop > (topcoords - (winheight * 0.9))) {
                // animate when top of the window is 3/4 above the element
                $elm.addClass('animated');
            }
        });
    }
});