$(function() {
	var lista = $('#slides img');
	var listLength = lista.length - 1;


	var sliderWidth = function() {
		return $(window).width() * 0.9;
	};

	var sliderHeight = function() {
		return $('#slides img').height();
	};
	
	$(lista).css({width: sliderWidth()});
	$('#carousel').css({width: sliderWidth()});
	$('#controls').css({marginTop: sliderHeight() / 2.2});
	$('#controls').css({width: sliderWidth()});
	$('#rings').css({top: sliderHeight() - 25});

	$(window).resize(function() {
		$(lista).css({width: sliderWidth()});
		$('#carousel').css({width: sliderWidth()});
		$('#controls').css({marginTop: sliderHeight() / 2.2});
		$('#controls').css({width: sliderWidth()});
		$('#rings').css({top: sliderHeight() - 25});
	});

	
	var startSlide = setInterval(function() {slideShow()}, 5000);
	
	for (var i = 0; i < lista.length; i++) {
		$('#rings').append('<div></div>');
	};
	var rings = $('#rings div');
	

	var index = 0;
	$(rings[index]).css({opacity: 0.9});

	$('#arrowRight').click(function() {
		if (index < listLength) {
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			clearInterval(startSlide);
			index += 1;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
			startSlide = setInterval(function() {slideShow()}, 5000);
		} else {
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			clearInterval(startSlide);
			index = 0;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
			startSlide = setInterval(function() {slideShow()}, 5000);
		}
	});

	$('#arrowLeft').click(function() {
		if (index > 0) {
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			clearInterval(startSlide);
			index -= 1;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
			startSlide = setInterval(function() {slideShow()}, 5000);
		} else {
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			clearInterval(startSlide);
			index = listLength;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
			startSlide = setInterval(function() {slideShow()}, 5000);
		}
	});

	function slideShow() {
		if (index < listLength) {
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			index += 1;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
		} else {
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			index = 0;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
		}
	};
	
	$('#rings').on('click', 'div', function() {
		var a = $(this).index();
			$(lista[index]).animate({opacity: 0}, 500);
			$(rings[index]).animate({opacity: 0.4}, 500);
			clearInterval(startSlide);
			index = a;
			$(lista[index]).animate({opacity: 1}, 500);
			$(rings[index]).animate({opacity: 0.9}, 500);
			startSlide = setInterval(function() {slideShow()}, 5000);
	});
})