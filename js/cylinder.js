$(document).ready(function(){
	for (var i = 0; i < 72; i++) {
		var rotateVar = i*5;
		$("#wrapper").append('<div class="box red" id="box'+i+'"></div>');
		TweenMax.set($("#wrapper"),{css:{transformPerspective:900,rotationX:"100px"}});
		
		
		TweenMax.set($('#box'+i),{css:{rotationY:i*5, transformOrigin:"50% 50% 200"}});
		// TweenMax.fromTo($('#box'+i),10, {css:{rotationY:rotateVar, transformOrigin:"bottom bottom -400",transformPerspective:200}},{css:{rotationY:rotateVar+360, transformOrigin:"bottom bottom -400",transformPerspective:200},repeat:-1,ease:Linear.easeNone});		
		// TweenMax.to($('#box'+i),10, {css:{rotationX:-360, transformOrigin:"bottom bottom -400"},repeat:-1,ease:Linear.easeNone});
	};
	for (var i = 0; i < 36; i++) {
		var rotateVar = i*5;
		$("#wrapper2").append('<div class="box blue" id="boxa'+i+'"></div>');
		TweenMax.set($("#wrapper2"),{css:{transformPerspective:0,transform:"translateZ(100px)"}});
		
		
		TweenMax.set($('#boxa'+i),{css:{rotationY:i*10, transformOrigin:"50% 50% 100"}});
		// TweenMax.fromTo($('#box'+i),10, {css:{rotationY:rotateVar, transformOrigin:"bottom bottom -400",transformPerspective:200}},{css:{rotationY:rotateVar+360, transformOrigin:"bottom bottom -400",transformPerspective:200},repeat:-1,ease:Linear.easeNone});		
		// TweenMax.to($('#box'+i),10, {css:{rotationX:-360, transformOrigin:"bottom bottom -400"},repeat:-1,ease:Linear.easeNone});
	};
	TweenMax.to($("#wrapper"),10,{css:{rotationY:360,transformOrigin:"0 50% 200px",transformPerspective:900,},repeat:-1,ease:Linear.easeNone});
	TweenMax.to($("#wrapper2"),5,{css:{rotationY:-360,transformOrigin:"0 50% 100px",transformPerspective:0},repeat:-1,ease:Linear.easeNone});
	// TweenMax.set($("#wrapper"), {css:{rotationY:40,transformPerspective:200}});
	// var box1 = $("#box1"),
	//     box2 = $("#box2"),
	//     box3 = $("#box3"),
	//     box4 = $("#box4"),
	//     box5 = $("#box5"),
	//     box6 = $("#box6"),
	//     box7 = $("#box7"),
	//     box8 = $("#box8"),
	//     box9 = $("#box9"),
	//     box10 = $("#box10"),
	//     box11 = $("#box11"),
	//     box12 = $("#box12"),
	//     box13 = $("#box13"),
	//     box14 = $("#box14"),
	//     box15 = $("#box15"),
	//     box16 = $("#box16"),
	//     box = $(".box"),
	//     sBox = $(".spin")
	    // TweenMax.set($(".box"), {css:{boxShadow: "0px 0px 24px 6px white"}});​
	    
		// TweenMax.to(box, 0.5, {backgroundColor:"black"});
	// TweenMax.set([box1,box2,box3, box4,box5,box6,box7, box8,box9,box10,box11,box12,box13,box14,box15,box16], {css:{transformPerspective:300}});
	// TweenMax.set([box2,box10], {css:{rotationZ:45}});
	// TweenMax.set([box3,box11], {css:{rotationZ:90}});
	// TweenMax.set([box4,box12], {css:{rotationZ:135}});
	// TweenMax.set([box5,box13], {css:{rotationZ:180}});
	// TweenMax.set([box6,box14], {css:{rotationZ:225}});
	// TweenMax.set([box7,box15], {css:{rotationZ:270}});
	// TweenMax.set([box8,box16], {css:{rotationZ:315}});
	// TweenMax.to($("#wrapper"),20,{css:{rotationZ:360}, repeat:-1,ease:Linear.easeNone})
	// TweenMax.to(sBox,8,{css:{rotationZ:360, transformOrigin:"bottom bottom"}, repeat:-1,ease:Linear.easeNone});
	// TweenMax.to([box1,box2,box3,box4,box5,box6,box7,box8], 10, {css:{rotationY:360, transformOrigin:"bottom bottom -200",transformPerspective:100}, repeat:-1,ease:Linear.easeNone})
	// TweenMax.to([box9,box10,box11,box12,box13,box14,box15,box16], 5, {css:{rotationY:-360, transformOrigin:"bottom bottom -400",transformPerspective:100}, repeat:-1,ease:Linear.easeNone})

});

//transform origin
	
	//     to_play_btn = $("#to_play_btn"),
	//     to_tween, to_slider;

	
	// to_tween = new TimelineMax({ paused:false});
	// to_tween.to(box1,  3, {css:{rotationY:360, transformOrigin:"bottom bottom"}})
	//     .to(box2,  3, {css:{rotationY:360, transformOrigin:"bottom bottom -200"}}, 0, 0);
