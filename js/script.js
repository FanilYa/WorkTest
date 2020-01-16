$(document).ready(function() {
    let bar = $('.bars'),

        modalWindow = $('.main_menu_header'),

        modalBtn = $('.show-modal'),

        showModal = $('.modal_form'),

        closeNodal = $('.close-modal');


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


    closeNodal.click(function() {

        showModal.addClass('hide');

        $("html,body").css("overflow","");

    });

});
