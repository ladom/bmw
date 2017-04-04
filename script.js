$(function(){

	var imageList = $('#carousel li').length;

	var ulWidth = function() {
		return $(window).width() * 0.9;
	};

	var ulLength = function() {
		return ulWidth() * imageList;
	};

	
	var topImageHeight = function() {
		return $('#carousel img').height() / 2.2;
	};

	

console.log(topImageHeight);

	$('#carousel').css({width: ulWidth()});
	$('#carousel ul').css({width: ulLength()});
	$('#carousel li').css({width: ulWidth()});
	$('#controls').css({width: ulWidth()});
	$('#controls').css({top: topImageHeight()});

	$(window).resize(function(){
		
		$('#carousel').css({width: ulWidth()});
		$('#carousel ul').css({width: ulLength()});
		$('#carousel li').css({width: ulWidth()});
		$('#controls').css({width: ulWidth()});
		$('#controls').css({top: topImageHeight()});
	});

	console.log($(window).width());

});


$(function(){

	var startSlide = setInterval(function() {slideShow()}, 8000);

	function slideShow() {
		$("#carousel ul").animate({marginLeft:-$('#carousel li').width()},500,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	};

	$('#arrowLeft').click(function() {
		$("#carousel ul").animate({marginLeft:-$('#carousel li').width()},500,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	});
		

	$('#arrowRight').click(function() {
		
		$("#carousel ul").find("li:first").before($(this).find("li:last"));
		$("#carousel ul").animate({marginRight: -$('#carousel li').width()}, 500, function(){
			$("#carousel ul").find("li:first").before($(this).find("li:last"));
			$(this).css({marginRight: 0});

		})
	})




});

