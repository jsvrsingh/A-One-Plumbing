/**
 * File: html-loader.
 * Created by sulu on 4/1/17.
 */

$(function () {
    if ($('.flexslider').length) {
        $('.flexslider').flexslider();
    }

    if ($('#contact-us-form').length) {
        $('#contact-us-form').validator().on('submit', function (e) {
            e.preventDefault();
            console.log("Submit triggered");
            if ($('#contact-us-form').has('.has-error').length === 0) {
                $.confirm({
                    title: 'A-One Plumbing!',
                    closeIcon: true,
                    content: 'Are you sure you want to submit the form?',
                    buttons: {
                        confirm: function () {
                            window.location.href = "thank-you.html";
                        },
                        cancel: function () {
                        }
                    }
                });

            }

        });
    }

});
