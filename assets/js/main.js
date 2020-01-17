$(document).ready(function() {
  $('.menu li:nth-child(n+2), #menu-bars li').click(function() {
    var target = "#"+$(this).attr("class").split(".");
    var scrollPosition = $(target).offset().top-54;
    $('html').animate({scrollTop:scrollPosition},800);
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
