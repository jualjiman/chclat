$(function(){
	var visible = 0;
	 $(".navbar-btn").click(function(){

		if(visible===0){
			$("#GRIDS").removeClass("col-md-offset-2");
			$("#GRIDS").removeClass("col-xs-offset-4");
			$("#GRIDS").removeClass("col-md-10");
			$("#GRIDS").addClass("col-md-12");
			$("#FILTRO").fadeOut();
			visible = 1;
		}
		else{
			$("#GRIDS").addClass("col-md-offset-2");
			$("#GRIDS").addClass("col-xs-offset-4");
			$("#GRIDS").addClass("col-md-10");
			$("#GRIDS").removeClass("col-md-12");

			$("#FILTRO").fadeIn();
			visible = 0;
		}

	 });
});
