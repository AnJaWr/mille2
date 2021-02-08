$(document).ready(function () {
  // $('.section').hide(); //hide
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
//Create a var to store the index of red element
var count = -1;
function AddAnimationClass() {
  var boxes = $('.line');
  var boxLength = boxes.length - 1;
  //Check if the actual item isn't more than the length then add 1 otherway restart to 0
  count < boxLength ? count++ : (count = 0);
  //Remove the class and add it to the new target
  boxes.removeClass('animation').eq(count).addClass('animation');
}
setInterval(AddAnimationClass, 13000);
