$(document).ready(function () {
    $('.navbar-btn').click(function (e) {
        $('.navbar-collapse').toggleClass('show');
    });

    var sponser_btns = document.querySelectorAll('.sponser-btn>button')
    var sponser_items = document.querySelectorAll('.sponser>ul>li')

    $('#sponser-btn-1').click(function (e) { 
        e.preventDefault();
        $(sponser_items).addClass('hidden');
        $('#sponser-item-1').removeClass('hidden');
        $(sponser_btns).removeClass('active-sponser-btn');
        $('#sponser-btn-1').addClass('active-sponser-btn');
    });

    $('#sponser-btn-2').click(function (e) { 
        e.preventDefault();
        $(sponser_items).addClass('hidden');
        $('#sponser-item-2').removeClass('hidden');
        $(sponser_btns).removeClass('active-sponser-btn');
        $('#sponser-btn-2').addClass('active-sponser-btn');
    });

    $('#sponser-btn-3').click(function (e) { 
        e.preventDefault();
        $(sponser_items).addClass('hidden');
        $('#sponser-item-3').removeClass('hidden');
        $(sponser_btns).removeClass('active-sponser-btn');
        $('#sponser-btn-3').addClass('active-sponser-btn');
    });

    var app_tag = document.querySelectorAll('.tag-list>li')

    $('#tag-1').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[0]).addClass('active-tag');
    });

    $('#tag-2').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[1]).addClass('active-tag');
    });

    $('#tag-3').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[2]).addClass('active-tag');
    });

    $('#tag-4').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[3]).addClass('active-tag');
    });

    $('#tag-5').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[4]).addClass('active-tag');
    });

    $('#tag-6').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[5]).addClass('active-tag');
    });

    $('#tag-7').click(function (e) { 
        e.preventDefault();
        $(app_tag).removeClass('active-tag');
        $(app_tag[6]).addClass('active-tag');
    });

    var app_page = document.querySelectorAll('.tag-page>li')

    $('#tag-page-1').click(function (e) { 
        e.preventDefault();
        $(app_page).removeClass('active-tag-page');
        $(app_page[0]).addClass('active-tag-page');
    });

    $('#tag-page-2').click(function (e) { 
        e.preventDefault();
        $(app_page).removeClass('active-tag-page');
        $(app_page[1]).addClass('active-tag-page');
    });

    $('#tag-page-3').click(function (e) { 
        e.preventDefault();
        $(app_page).removeClass('active-tag-page');
        $(app_page[2]).addClass('active-tag-page');
    });

    $('#tag-page-4').click(function (e) { 
        e.preventDefault();
        $(app_page).removeClass('active-tag-page');
        $(app_page[3]).addClass('active-tag-page');
    });

    $('#tag-page-5').click(function (e) { 
        e.preventDefault();
        $(app_page).removeClass('active-tag-page');
        $(app_page[4]).addClass('active-tag-page');
    });

    $('#tag-page-6').click(function (e) { 
        e.preventDefault();
        $(app_page).removeClass('active-tag-page');
        $(app_page[5]).addClass('active-tag-page');
    });

    $('#faq-btn-1').click(function (e) { 
        e.preventDefault();
        $('#open-btn-1').toggleClass('hidden');
        $('#close-btn-1').toggleClass('hidden');
        $('#faq-description-1>p').slideToggle();
    });

    $('#faq-btn-2').click(function (e) { 
        e.preventDefault();
        $('#open-btn-2').toggleClass('hidden');
        $('#close-btn-2').toggleClass('hidden');
        $('#faq-description-2>p').slideToggle();
    });

    $('#faq-btn-3').click(function (e) { 
        e.preventDefault();
        $('#open-btn-3').toggleClass('hidden');
        $('#close-btn-3').toggleClass('hidden');
        $('#faq-description-3>p').slideToggle();
    });

    $('#faq-btn-4').click(function (e) { 
        e.preventDefault();
        $('#open-btn-4').toggleClass('hidden');
        $('#close-btn-4').toggleClass('hidden');
        $('#faq-description-4>p').slideToggle();
    });

    $('#faq-btn-5').click(function (e) { 
        e.preventDefault();
        $('#open-btn-5').toggleClass('hidden');
        $('#close-btn-5').toggleClass('hidden');
        $('#faq-description-5>p').slideToggle();
    });
    $("#backtotop").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});