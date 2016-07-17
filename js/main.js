

$(".menu-small-link").click(function(){
	$(".nav-list").slideToggle();
});

$(window).resize(function(){
	var winwidth = $(window).innerWidth();
	if(winwidth < 768){
		$(".nav-list").css("display", "none")
	}
	if(winwidth > 768){
		$(".nav-list").css("display", "inline-block")
	}
});


