$(function(){
	
	// $("#LOGIN_FORM input[type='text']").attr("placeholder","Usuario");
	// $("#LOGIN_FORM input[type='password']").attr("placeholder","Contraseña");

	$(".ErrorV").css("display","none");

	$("#LOGIN_FORM input[type='button']").on("click",function(){
		$(".ErrorV").fadeIn();
	});

	$("#LOGIN_FORM .otro a").on("click",function(){
		$(".ErrorV").css("display","none");
	});

	$("#LOGIN_FORM input[type='text']").on("keyup",function(e){
		esperandoEnter(e);
	});

	$("#LOGIN_FORM input[type='password']").on("keyup",function(e){
		esperandoEnter(e);
	});
	
	$(".navbar-btn").on("click",function(){
		$("#FILTRO").slideUp("slow");
		$("#GRIDS").toggleClass("col-sm-offset-3");
	 });

	function esperandoEnter(e){
		var code = e.keyCode || e.which;
		if(code == 13) {
	   		$(".ErrorV").fadeIn();
	 	}
	}

});

