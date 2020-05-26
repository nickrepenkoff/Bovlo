function ibg(){
	$.each($('.ibg'), function(index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

//menu burger

$(document).ready(function() {
	$(".header__burger").click(function(event){
		$(".header__burger,.header__menu, .menu__info, .bebetter").toggleClass("active");
		$("body").toggleClass("lock");
		$(".header_logo").toggleClass("ibg active");
	});
});
$(document).ready(function() {
	$(".accordeon").click(function(event){
		$(".accordeon").toggleClass("active");
	});
});
$(document).ready(function() {
	$(".accordeon-lang").click(function(event){
		$(".accordeon-lang").toggleClass("active");
	});
});



//slider

$(document).ready(function(){
	$('.slider').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
            {
            	breakpoint: 1411,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 760,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            },                     
         ]
	});
	$('.slider__team').slick({
		adapvtiveHeight: true,
	  appendArrows: $('.arrows-container'),
	  slidesToShow: 4,
	  infinite: false,
	  speed: 300,
	  slidesToScroll: 1,
	  draggable: false,
	  swipe: false,
	  
	   responsive: [
    {
      breakpoint: 1411,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
               breakpoint: 756,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            },      
   ]
	});
	$('.slider-reviews').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	   responsive: [
    {
      breakpoint: 756,
      settings: {
        slidesToShow: 1,
         slidesToScroll: 1
       }
    },      
   ]
	});
	$('.slider-clients').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	   responsive: [
    {
      breakpoint: 1411,
      settings: {
        slidesToShow: 2,
         slidesToScroll: 1
       }
    },
    {
      breakpoint: 756,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
   },      
   ]
	});
	$('.slider-2').slick({
	  centerMode: true,
	  speed: 300,
	  slidesToShow: 3,
	  appendArrows: $('.arrows-container'),
	  responsive: [
            {
            	breakpoint: 1411,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 760,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            },                     
         ]
	});
});

// anchor link

function scrollUp(id){
	$('html, body').animate({
		scrollTop: $(id).offset().top}, 1000);
	return false;
}


$('img.img-svg, .logo-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});
// 
$('.gallery__block').click(function(){
  $('.team__row').css('opacity', '(0.5px)');
  $('.popUp-container').fadeIn();

});
$('.popUp-btn').click(function(){
  $('.wrp').css('filter', 'none');
  $('.popUp-container').fadeOut();

});