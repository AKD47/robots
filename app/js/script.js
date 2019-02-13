document.addEventListener('DOMContentLoaded', function() {
    /*header mobile menu*/
    $(document).on('click', '#header-burger', function (event) {
        var pull = $('#header-burger'),
            menu = $('.header__nav');
        event.preventDefault();
        if (pull.hasClass('js-trigger-active')) {
            pull.removeClass('js-trigger-active');
            menu.slideUp('fast');
        } else {
            pull.addClass('js-trigger-active');
            menu.slideDown('fast');
        }
    });
    if (window.innerWidth < 670) {
        $(document).on('click', function (e) {
            if ($(e.target).closest('.header__navigation').length != 1) {
                $('.header__nav').slideUp('fast');
                $('#burger').removeClass('show');
            }
        });
    }
    /*close header mobile menu*/

    /*animate scroll menu*/
    $(document).on('click', '.header__nav li a', function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
        event.preventDefault();
        if($(this).hasClass('menu-active')) {
            $(this).removeClass('menu-active')
        } else {
            $('.header__nav li a').removeClass('menu-active');
            $(this).addClass('menu-active');
        }
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.header').length != 1) {
            $('.header__nav li a').removeClass('menu-active');
        }
    });
    /*close animate scroll menu*/

    /*top banner slider*/
    $('#top-slider').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    /*close top banner slider*/

    /*partners slider*/
    $('#partners-slider').not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    /*close partners slider*/

    /*tech slider*/
    $('#tech-slider').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    /*close tech slider*/

    /*go to top*/
    $('#go-top').click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, "slow")
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#go-top').fadeIn();
        } else {
            $('#go-top').fadeOut();
        }
    });
    /*close script*/

    /*contacts form*/
    $('#contacts-name, #contacts-email, #contacts-phone, #contacts-message').unbind().blur(function () {

        var id = $(this).attr('id');
        var val = $(this).val();
        var error = $(this).next('.error');

        switch (id) {
            case 'contacts-name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('js-error').addClass('js-not-error');
                    error.text(' ');
                } else {
                    $(this).removeClass('js-not-error').addClass('js-error');
                    error.text('נא למלא את כל שדות החובה');
                }
                break;

            case 'contacts-email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).removeClass('js-error').addClass('js-not-error');
                    error.text(' ');
                } else {
                    $(this).removeClass('js-not-error').addClass('js-error');
                    error.text('נא למלא את כל שדות החובה');
                }
                break;

            case 'contacts-phone':
                var rv_phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                if (val != '' && rv_phone.test(val)) {
                    $(this).removeClass('js-error').addClass('js-not-error');
                    error.text(' ');
                } else {
                    $(this).removeClass('js-not-error').addClass('js-error');
                    error.text('נא למלא את כל שדות החובה');
                }
                break;

            case 'contacts-message':
                if (val != '' && val.length < 5000) {
                    $(this).removeClass('js-error').addClass('js-not-error');
                    error.text(' ');
                } else {
                    $(this).removeClass('js-not-error').addClass('js-error');
                    error.text('נא למלא את כל שדות החובה');
                }
                break;

        } // end switch(...)

    }); // end blur()
    $('#contact-form').submit(function (event) {
        event.preventDefault();
        var name = $('#contact-name').val(),
            mail = $('#contact-email').val(),
            phone = $('#contact-phone').val(),
            message = $('#contact-text').val();
        $.ajax({
            url: myajax.url,
            type: "POST",
            data: {
                action: 'contact',
                name: name,
                mail: mail,
                phone: phone,
                message: message
            },
            success: function(data){
                $('#contact-form input, textarea').val('').removeClass('error, not_error').text('');
                // alert(data);
            }
        }); // end ajax({...})
        return false;
    }); // end submit()
    /*close*/
});