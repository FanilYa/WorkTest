$(document).ready(function() {
    let bar = $('.bars'),

        modalWindow = $('.main_menu_header'),

        modalBtn = $('.show-modal'),

        showModal = $('.modal_form'),

        closeNodal = $('.close-modal'),

        sent = $('.sent');


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

    $('form').submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: '/form.php',
            dataType: 'html',
            success: function() {
                sent.removeClass('hide');
                $('html').css('overflow', 'hidden');
                $('body').click(function() {
                    sent.addClass('hide');
                    $('html').css('overflow', '');
                    showModal.addClass('hide');
                })
            }
          });

    });

});
