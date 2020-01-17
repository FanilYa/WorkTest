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

    $(document).keyup(function(event){

        if (event.keyCode == 27) {

            modalWindow.addClass('hide');

            showModal.addClass('hide');

            $('html').css('overflow', 'auto');
        }
    });

    $(window).on("navigate", function (data) {

        var direction = data.state.direction;

        if (direction == 'back') {

            modalWindow.addClass('hide');

            showModal.addClass('hide');

            $('html').css('overflow', 'auto');
          
        }
        if (direction == 'forward') {

          return false
          
        }

      });

    $('form').submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: '/form.php',
            dataType: 'html',
            success: function() {

                sent.removeClass('hide');

                showModal.addClass('hide');

                $('#reset').trigger('click');

                $('html').css('overflow', 'hidden');

                setTimeout(function() {

                    sent.addClass('hide');

                    $('html').css('overflow', 'auto');

                },3000);

            }
            
          });

    });

});
