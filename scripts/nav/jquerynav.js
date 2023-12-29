$(function () {
    $("#navcall").load("scripts/nav/navcall.html");
    
    $('nav.navbar-nav a').on('click', function () {
        $('nav.navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });
})