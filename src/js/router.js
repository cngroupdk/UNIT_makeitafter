import $ from 'jquery';
import './lib/jquery.router';

$(() => {

    $('.route')
        .hide()
        .on('click', 'a', function(e) {
            if (e.altKey || e.shiftKey || e.ctrlKey) {
                return; // let the browser handle this
            }
            $.router.go($(this).attr('href'));
            e.preventDefault();
        })
        .each(function() {
            const href = $(this).data('href');
            if (href) {
                $.router.add(href, () => {
                    $('.route').hide();
                    $(this).show();
                });
            }
        });

    $.router.addErrorHandler(url => {
        $('.route.route-error').show();
    });

    $.router.check();

});
