$(function(){
	
	var imageList = $('#carousel li').length;
	
	var ulWidth = $(window).width() * 0.9;
	var ulLength = ulWidth * imageList;
	var topImageHeight = $('#carousel img').height() / 2;

console.log(topImageHeight);
	
	$('#carousel').css({width: ulWidth});
	$('#carousel ul').css({width: ulLength});
	$('#carousel li').css({width: ulWidth});
	$('#controls').css({width: ulWidth});
	$('#controls').css({width: ulWidth});
	$('#controls').css({top: topImageHeight});
	
	$(window).resize(function(){
		$('#carousel').css({width: ulWidth});
		$('#carousel ul').css({width: ulLength});
		$('#carousel li').css({width: ulWidth});
		$('#controls').css({width: ulWidth});
		$('#controls').css({top: topImageHeight});
	});

	console.log($(window).width());	

});	


$(function(){
	
	setInterval(function(){
		$("#carousel ul").animate({marginLeft:-$('#carousel li').width()},500,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	}, 5000);

})

