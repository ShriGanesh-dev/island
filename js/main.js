
$('.video-mask').ready(function (){
  $('.video-mask').css('height', '-1');
  $('.text1').css('left','690px');
  $('.text2').css('left','865px');
  $('.text').css('opacity','100');

  $('.explore-delay').css({'transitionDelay':'3000','opacity':'100'});
  $('.welcome').css('left','914px');
  $('.welcome-sub').css('left','920px');
});
$('.explore').click(function (){
  $('.title-video').css("transform","rotate(180deg) scale(1.6) translate(-18%,-6%)");
  $('body').css("height","1200px");
});
