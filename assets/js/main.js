$(document).ready(function () {
  var $one = $('#quote_text'),
    $two = $('#about_text'),
    $three = $('#contact_text'),
    $heading = $('#heading');

  $two.hide();
  $three.hide();

  $('#heading').click(function () {
    var $in, $out1, $out2;
    if ($one.is(':visible')) {
      ($in = $two), ($out1 = $one), ($out2 = $three);
    } else {
      ($in = $one), ($out1 = $two), ($out2 = $three);
    }
    $($out1, $out2).fadeOut('slow', function () {
      $in.fadeIn();
    });

    if (($two, $one).is(':visible')) {
      $three.hide();
    }

    $three.hide();
  });

  $('#about-btn').click(function () {
    var $in, $out1, $out2;
    if ($one.is(':visible')) {
      ($in = $two), ($out1 = $one), ($out2 = $three);
    } else if ($three.is(':visible')) {
      ($in = $two), ($out1 = $one), ($out2 = $three);
    }
    $($out1, $out2).fadeOut('slow', function () {
      $in.fadeIn();
    });

    if ($two.is(':visible')) {
      $one.hide();
      $three.hide();
    }
  });

  $('#home-btn').click(function () {
    var $in, $out1, $out2;
    if ($two.is(':visible')) {
      ($in = $one), ($out1 = $two), ($out2 = $three);
    } else if ($three.is(':visible')) {
      ($in = $one), ($out1 = $two), ($out2 = $three);
    }
    $($out1, $out2).fadeOut('slow', function () {
      $in.fadeIn();
    });

    if ($one.is(':visible')) {
      $two.hide();
      $three.hide();
    }
  });

  $('#contact-btn').click(function () {
    var $in, $out1, $out2;
    if ($one.is(':visible')) {
      ($in = $three), ($out1 = $two), ($out2 = $one);
    } else if ($two.is(':visible')) {
      ($in = $three), ($out1 = $two), ($out2 = $one);
    } else if ($three.is(':visible')) {
      ($in = $three), ($out1 = $two), ($out2 = $one);
    }
    $($out1, $out2).fadeOut('slow', function () {
      $in.fadeIn('slow');
    });

    if ($three.is(':visible')) {
      $one.hide();
      $two.hide();
    }
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
