$(document).ready(function(){
	// for (var i = 7 - 1; i >= 0; i--) {
	// 	Things[i]
	// };
	var box1 = $("#box1"),
	    box2 = $("#box2"),
	    box3 = $("#box3"),
	    box4 = $("#box4"),
	    box5 = $("#box5"),
	    box6 = $("#box6"),
	    box7 = $("#box7"),
	    box8 = $("#box8"),
	    box9 = $("#box9"),
	    box10 = $("#box10"),
	    box11 = $("#box11"),
	    box12 = $("#box12"),
	    box13 = $("#box13"),
	    box14 = $("#box14"),
	    box15 = $("#box15"),
	    box16 = $("#box16"),
	    box = $(".box"),
	    sBox = $(".spin")
	    // TweenMax.set($(".box"), {css:{boxShadow: "0px 0px 24px 6px white"}});​
	    TweenMax.fromTo($(".box"), 0.5, {
		    boxShadow:"0px 0px 0px 0px rgb(0, 204, 0)"
		},{
		    boxShadow: "0px 0px 50px 10px rgba(255,0,0,0.7)",
		    repeat: -1,
		    yoyo: true,
		    ease: Linear.easeNone
		});
		// TweenMax.to(box, 0.5, {backgroundColor:"black"});
	TweenMax.set([box1,box2,box3, box4,box5,box6,box7, box8,box9,box10,box11,box12,box13,box14,box15,box16], {css:{transformPerspective:300}});
	TweenMax.set([box2,box10], {css:{rotationZ:45}});
	TweenMax.set([box3,box11], {css:{rotationZ:90}});
	TweenMax.set([box4,box12], {css:{rotationZ:135}});
	TweenMax.set([box5,box13], {css:{rotationZ:180}});
	TweenMax.set([box6,box14], {css:{rotationZ:225}});
	TweenMax.set([box7,box15], {css:{rotationZ:270}});
	TweenMax.set([box8,box16], {css:{rotationZ:315}});
	TweenMax.to($("#wrapper"),20,{css:{rotationZ:360}, repeat:-1,ease:Linear.easeNone})
	TweenMax.to(sBox,8,{css:{rotationZ:360, transformOrigin:"bottom bottom"}, repeat:-1,ease:Linear.easeNone});
	TweenMax.to([box1,box2,box3,box4,box5,box6,box7,box8], 10, {css:{rotationY:360, transformOrigin:"bottom bottom -200",transformPerspective:100}, repeat:-1,ease:Linear.easeNone})
	TweenMax.to([box9,box10,box11,box12,box13,box14,box15,box16], 5, {css:{rotationY:-360, transformOrigin:"bottom bottom -400",transformPerspective:100}, repeat:-1,ease:Linear.easeNone})

});

//transform origin
	
	//     to_play_btn = $("#to_play_btn"),
	//     to_tween, to_slider;

	
	// to_tween = new TimelineMax({ paused:false});
	// to_tween.to(box1,  3, {css:{rotationY:360, transformOrigin:"bottom bottom"}})
	//     .to(box2,  3, {css:{rotationY:360, transformOrigin:"bottom bottom -200"}}, 0, 0);
