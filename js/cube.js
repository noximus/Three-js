$(document).ready(function(){
	for (var j = 0; j < 2; j++) {
		$("#container").append('<div id="wrapper'+j+'" class="wrapper"></div>');
		TweenMax.set($("#wrapper"+j),{css:{left:(50*j)+"px"}});
		TweenMax.set($("#wrapper"+j),{css:{ transformPerspective:1000}});
		for (var i = 0; i < 6; i++) {
			
			$("#wrapper"+j).append('<div class="box red" id="box'+j+i+'"></div>');
			
			if(i <4){
				TweenMax.set($('#box'+j+i),{css:{rotationY:i*90, transformOrigin:"50% 50% 25px"}});
			}else if(i == 4){
				ie = (90*i) +90;
				TweenMax.set($('#box'+j+i),{css:{rotationX:ie, transformOrigin:"50% 50% 25px",background:"rgba(250,0,0,.75)"}});
			}else if(i == 5){
				ie = (90*i) +180;
				TweenMax.set($('#box'+j+i),{css:{rotationX:ie, transformOrigin:"50% 50% 25px",background:"rgba(250,0,0,.75)"}});			
			}
		};
	};
	// TweenMax.to($("#container"),10,{css:{rotationY:360,transformOrigin:"50% 50% 100px",transformPerspective:1000},repeat:-1,ease:Linear.easeNone});
});
