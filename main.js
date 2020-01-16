$(document).ready(function() {
  $('.home').click(function() {
    var offset = $('#home').offset();
    $('html').animate({scrollTop:offset.top},800);
  });
  $('.about').click(function() {
    var offset = $('#about').offset();
    $('html').animate({scrollTop:offset.top},800);
  });
  $('.project').click(function() {
    var offset = $('#project').offset();
    $('html').animate({scrollTop:offset.top},800);
  });
  $('.dream').click(function() {
    var offset = $('#dream').offset();
    $('html').animate({scrollTop:offset.top},800);
  });
  $('.contact').click(function() {
    var offset = $('#contact').offset();
    $('html').animate({scrollTop:offset.top},800);
  });
  $('#bars').click(function() {
    $('#menu-open').fadeIn(400);
    $('#menu-bars').css('display','block').animate({'margin-left':'0%'},400);
  });
  $('#non-menu-bars').click(function() {
    $('#menu-bars').animate({'margin-left':'-100%'},400);
    $('#menu-open').fadeOut(400);
  });
});
