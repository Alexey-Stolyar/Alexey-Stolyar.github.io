$(".toggle").click(function() {
    $(".nav-bar").slideToggle();
  $(this).toggleClass("is-active");
});
$(".dropdown-item").click(function() {
    $(".sub-nav").slideToggle();
    $(this).toggleClass("active");
});

$(function() {
  var list = $('.js-dropdown-list');
  var link = $('.js-link');
  link.click(function(e) {
    e.preventDefault();
    list.slideToggle(200);
  });
  list.find('li').click(function() {
    var text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    link.html(text+icon);
    list.slideToggle(200);
    if (text === '* Reset') {
      link.html('Select one option'+icon);
    }
  });
});

$('.bxslider').bxSlider({
mode: 'horizontal',
infiniteLoop: true,
auto: true,
autoStart: true,
autoDirection: 'next',
autoHover: true,
pause: 3000,
autoControls: false,
pager: false,
pagerType: 'full',
controls: true,
captions: true,
speed: 500
});