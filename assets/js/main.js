$(document).ready(function () {
  $('.blockquote').show();

  $('.navigation-button').click(function () {
    $('.section').hide(); //hide
    $('.' + $(this).data('id')).fadeIn(1000);

    if ($('.blog').is(':visible')) {
      $('#heading').fadeTo(300, 0);
    } else {
      $('#heading').fadeTo(500, 1);
    }
  });

  $('.points-mask').hover(function () {
    $('.circle').toggleClass('circle--hover');
  });
  AddAnimationClass();
});
var count = -1;
function AddAnimationClass() {
  var boxes = $('.line');
  var boxLength = boxes.length - 1;
  count < boxLength ? count++ : (count = 0);
  boxes.removeClass('animation').eq(count).addClass('animation');
}
setInterval(AddAnimationClass, 13000);
