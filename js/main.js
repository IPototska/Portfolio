$(function(){

  var sticky = $('.header');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 20) {
      sticky.addClass('header--scroll');
     } else {
      sticky.removeClass('header--scroll');
     }
   }); 

  $(".menu a, .hero__link, .logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.burger, .menu a').on('click', function(){
    $('.burger').toggleClass('burger--active');
    $('.menu').toggleClass('menu--active');
    $('#body').toggleClass('body--fixed')
  });
  
  var mixer = mixitup('.portfolio__content');

});