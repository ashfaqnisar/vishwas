/*global $, jQuery */
/* Contents
// ------------------------------------------------>
	1.  Loading Screen
	2.  Mobile Menu
	3.  TOOLTIP
	4.  Background
	5.  NAVBAR SPY
	6.  HEADER AFFIX
	7.  Smoothly Scroll
	8.  TESTIMONIAL CAROUSEL
	9.  Counter Up
	10. COUNTDOWN DATE
	11. Ajax Mailchimp
	12. Ajax Campaignmonito
	13. Ajax Contact Form
	14. Ajax Quote Form
	15. Ajax POPUP Quote Form 
	16. Ajax POPUP Quote Form 2
	17. Ajax Header POPUP Quote Form
	18. MAGNIFIC POPUP
	19. PROJECTS FLITER / SHOP FLITER
	20. Shop Pricing Range
*/	
$(document).ready(function() {
    "use strict";

    /* ------------------  1.Loading Screen ------------------ */
	
    $(window).on("load", function() {
        $(".preloader").fadeOut("slow");
        $(".preloader").remove();
    });
	
    /* ------------------  2.Mobile Menu ------------------ */

    var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });
    $module.on("click", function() {
        $(this).toggleClass("toggle-module");
    });
    $module.find("input.form-control", ".btn", ".cancel").on("click", function(e) {
        e.stopPropagation();
    });

    /* ------------------  3.TOOLTIP ------------------ */

    var $tooltip = $("[data-toggle='tooltip']"),
        $modelQuote = $("#model-quote"),
        $modelQuote2 = $("#model-quote2");
    $tooltip.tooltip({
        container: "body"
    });
    $modelQuote.appendTo("body");
    $modelQuote2.appendTo("body");

    /* ------------------  4.Background ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });

    /* ------------------  5.NAVBAR SPY ------------------ */

    var HeaderID = "#navbar-spy",
        Body = $("body");
    if ($("header").has(HeaderID)) {
        Body.attr("data-spy", "scroll").attr("data-target", HeaderID);
        Body.scrollspy({
            target: HeaderID
        });
    };

    /* ------------------ 6.HEADER ------------------ */

    var $navAffix = $("nav");
    $navAffix.affix({
        offset: {
            top: 50/* Change offset form top */
        }
    });

    /* ------------------  7.Smoothly Scroll  ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    /* ------------------ 8.TESTIMONIAL CAROUSEL ------------------ */

    var $heroSlider = $("#hero-slider"),
        $projectCarousel = $("#project-carousel"),
        $testimonialCarousel = $(".testimonial-carousel"),
        $testimonialSlide = $(".testimonial-slide");
    $heroSlider.owlCarousel({
        animateOut: "fadeOutLeft",
        animateIn: "fadeInRight",
        autoplay: false,
        loop: true,
        margin: 22,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1,
    });
    $projectCarousel.owlCarousel({
        loop: false,
        margin: 22,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {

                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $testimonialCarousel.owlCarousel({
        loop: false,
        margin: 22,
        nav: false,
        dots: true,
        dotsSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $testimonialSlide.owlCarousel({
        loop: false,
        margin: 22,
        nav: false,
        dots: true,
        dotsSpeed: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* ------------------  9.Counter Up ------------------ */

    var counter = $(".counter");
    counter.counterUp({
        delay: 10,
        time: 1000
    });

    /* ------------------ 10.COUNTDOWN DATE ------------------ */

    var newDate = new Date(2018, 11, 30),
        $countDown = $("#countdown");
    $countDown.countdown({
        until: newDate,
        format: "smSMHD"
    });

    /* ------------------  11.Ajax Mailchimp  ------------------ */

    $('.mailchimp').ajaxChimp({
        url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&amp;id=aa0f2ab5fa", //Replace with your own mailchimp Campaigns URL.
        callback: chimpCallback
    });

    function chimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscribe-alert').html('<h5 class="alert alert-success">' + resp.msg + '</h5>').fadeIn(1000);
            //$('.subscribe-alert').delay(6000).fadeOut();
        } else if (resp.result === 'error') {
            $('.subscribe-alert').html('<h5 class="alert alert-danger">' + resp.msg + '</h5>').fadeIn(1000);
        }
    }

    /* ------------------  12.Ajax Campaignmonitor  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
    });

    /* ------------------  13.Ajax Contact Form  ------------------ */

    var contactForm = $("#contact-form");
    var contactResult = $('#contact-result');
    contactForm.validate({
        debug: false,
        submitHandler: function(contactForm) {
            $(contactResult, contactForm).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/sendmail.php",
                data: $(contactForm).serialize(),
                timeout: 20000,
                success: function(msg) {
                    $(contactResult, contactForm).html('<div class="alert alert-success" role="alert"><strong>Thank you. We will contact you shortly.</strong></div>').delay(3000).fadeOut(2000);
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /* ------------------  14.Ajax Quote Form  ------------------ */

    var quoteForm = $("#quote-form");
    var quoteResult = $('#quote-result');
    quoteForm.validate({
        debug: false,
        submitHandler: function(quoteForm) {
            $(quoteResult, quoteForm).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/sendquote.php",
                data: $(quoteForm).serialize(),
                timeout: 20000,
                success: function(msg) {
                    $(quoteResult, quoteForm).html('<div class="alert alert-success" role="alert"><strong>Thank you. We will contact you shortly.</strong></div>').delay(3000).fadeOut(2000);
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /* ------------------  15.Ajax POPUP Quote Form  ------------------ */

    var popQuoteForm = $("#pop-quote-form");
    var popQuoteResult = $('#pop-quote-result');
    popQuoteForm.validate({
        debug: false,
        submitHandler: function(popQuoteForm) {
            $(popQuoteResult, popQuoteForm).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/sendpopquote.php",
                data: $(popQuoteForm).serialize(),
                timeout: 20000,
                success: function(msg) {
                    $(popQuoteForm).fadeOut((500, function() {
                        $(popQuoteForm).html('<div class="alert alert-success text-center" role="alert"><strong>Thank you.<br/> We will contact you shortly.</strong></div>').fadeIn();
                    }));
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /* ------------------  16.Ajax POPUP Quote Form 2 ------------------ */

    var popQuoteForm2 = $("#pop-quote-form2");
    var popQuoteResult2 = $('#pop-quote-result2');
    popQuoteForm2.validate({
        debug: false,
        submitHandler: function(popQuoteForm2) {
            $(popQuoteResult2, popQuoteForm2).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/sendpopquote2.php",
                data: $(popQuoteForm2).serialize(),
                timeout: 20000,
                success: function(msg) {
                    $(popQuoteForm2).fadeOut((500, function() {
                        $(popQuoteForm2).html('<div class="alert alert-success text-center" role="alert"><strong>Thank you.<br/> We will contact you shortly.</strong></div>').fadeIn();
                    }));
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /* ------------------  17.Ajax Header POPUP Quote Form  ------------------ */

    var headQuoteForm = $("#head-quote-form");
    var headQuoteResult = $('#head-quote-result');
    headQuoteForm.validate({
        debug: false,
        submitHandler: function(headQuoteForm) {
            $(headQuoteResult, headQuoteForm).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/sendheadquote.php",
                data: $(headQuoteForm).serialize(),
                timeout: 20000,
                success: function(msg) {
                    $(headQuoteForm).fadeOut((500, function() {
                        $(headQuoteForm).html('<div class="alert alert-success text-center" role="alert"><strong>Thank you.<br/> We will contact you shortly.</strong></div>').fadeIn();
                    }));
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /* ------------------ 18.MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });

    /* ------------------ 19.PROJECTS FLITER ------------------ */

    var $ProjectsFilter = $(".projects-filter"),
        ProjectLength = $ProjectsFilter.length,
        $shopFilter = $(".shop-filter"),
        shopLength = $shopFilter.length,
        $projectsAll = $("#projects-all"),
        $shopAll = $("#shop-all");

    // init Isotope For Projects
    $ProjectsFilter.find("a").click(function(e) {
        e.preventDefault();
        $ProjectsFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });

    if (ProjectLength > 0) {
        $projectsAll.imagesLoaded().progress(function() {
            $projectsAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".project-item",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    $ProjectsFilter.find("a").click(function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $projectsAll.imagesLoaded().progress(function() {
            $projectsAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".project-item",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    // init Isotope For Shop
    $shopFilter.find("a").click(function(e) {
        e.preventDefault();
        $shopFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (shopLength > 0) {
        $shopAll.imagesLoaded().progress(function() {
            $shopAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".product-item",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    $shopFilter.find("a").click(function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $shopAll.imagesLoaded().progress(function() {
            $shopAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".product-item",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------ 20.Shop Pricing Range ------------------ */

    var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            $sliderAmount.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $sliderAmount.val("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));

}(jQuery));