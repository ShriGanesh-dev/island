$('.video-mask').ready(function (){
  $('.video-mask').css('height', '-1');
  $('.text').css('right','24.2%');
  $('.text').css('opacity','100');
  $('.explore-delay').css({'transitionDelay':'3000','opacity':'100'});
});
$('.explore').click(function (){
  $('.title-video').css("transform","rotate(180deg) scale(1.6) translate(-18%,-6%)");
  $('body').css("height","1200px");
});
