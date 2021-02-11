$(document).ready(function () {
  $('.blockquote').show();

  $('.navigation-button').click(function () {
    $('.section').hide(); //hide
    $('.' + $(this).data('id')).fadeIn(1000);
  });
});
