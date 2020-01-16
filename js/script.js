$(document).ready(function() {
    let bar = $('.bars'),
        modalWindow = $('.main_menu_header'),
        modalBtn = $('.show-modal'),
        showModal = $('.modal_form');

    bar.click(function() {
        modalWindow.removeClass('hide');
        $("html,body").css("overflow","hidden");
    });

    modalWindow.click(function () {
        modalWindow.addClass('hide');
        $("html,body").css("overflow","");
    });

    modalBtn.click(function() {
        $("html,body").css("overflow","hidden");
        showModal.removeClass('hide');
    });

    showModal.click(function() {
        showModal.addClass('hide');
        $("html,body").css("overflow","");
    });
});