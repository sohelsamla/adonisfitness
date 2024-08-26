$(document).ready(function(){
    $('.menu_bar').click(function(){
        $('.nav-element').toggle();
        $(this).toggleClass('active');
    })
});