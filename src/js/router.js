import $ from 'jquery';
import './lib/jquery.router';

$(() => {

    $('.route')
        .hide()
        .on('click', 'a', function(e) {
            $.router.go($(this).attr('href'));
            e.preventDefault();
        })
        .each(function() {
            $.router.add($(this).data('href'), () => {
                $('.route').hide();
                $(this).show();
            });
        });

    $.router.check();

});
