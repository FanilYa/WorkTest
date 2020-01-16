$(document).ready(function() {
    let bar = $('.bars'),
        modalWindow = $('.main_menu_header');

    bar.click(function() {
        modalWindow.removeClass('hide');
    });

    modalWindow.click(function () {
        modalWindow.addClass('hide');
    });
});