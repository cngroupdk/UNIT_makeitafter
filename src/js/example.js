import $ from 'jquery';

$(function() {
   setInterval(function() {
      $('.custom-ul li:first-child').slideUp('fast', function() {$(this).remove();});
      $('.custom-ul').append($('<li>').text(new Date().toLocaleTimeString()).show('fast'));
   }, 1000)

});