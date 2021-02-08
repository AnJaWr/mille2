$(document).ready(function () {
  $('.blockquote').show();

  $('.navigation-button').click(function () {
    $('.section').hide(); //hide
    $('.' + $(this).data('id')).fadeIn();
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
