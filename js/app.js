$(document).foundation();
$(document).ready(function() {

	//navigation
	$("#nav-about").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 700);
	});

	$("#nav-projects").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 700);
	});

	$("#nav-contact").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 700);
	});

	//background array
	var bg_img = [
	'bg-chelsea-pier',
	'bg-nats',
	'bg-portland',
	'bg-hope-gallery',
	'bg-seattle',
	'bg-sf-bay',
	'bg-toronto',
	];

	//background titles
	var bg_title = {
		'bg-chelsea-pier': '[Chelsea Pier - New York City, New York]',
		'bg-nats': '[Nats Stadium - Washington, DC]',
		'bg-portland': '[Portland, Oregon]',
		'bg-hope-gallery': '[Hope Outdoor Gallery - Austin, Texas]',
		'bg-seattle': '[Pike Place - Seattle, Washington]',
		'bg-sf-bay': '[Half Moon Bay, California]',
		'bg-toronto': '[Toronto, Ontario]',
	};

	/*fadein to pages */
	$("body").animate({ opacity : "1.0" }, 500);

	/*generate random start background*/
	var random_int=Math.floor(Math.random()*(bg_img.length-1));
	$('#bg-img').removeClass();
	$('#bg-img').addClass(bg_img[random_int]);
	$('#bg-img').addClass("parallax-background-1");
	// var bg_selected = bg_img[random_int];
	$('#bg-img').title = bg_title[bg_img[random_int]];
	$('.bg-desc').html(bg_title[bg_img[random_int]]);


	/*change backgrounds on click*/
	var x=random_int+1;
    $('#refresh-img').click(function(){

		$('#bg-img').removeClass();
		$('#bg-img').addClass(bg_img[x]);
		$('#bg-img').addClass("parallax-background-1");
		$('#bg-img').title = bg_title[bg_img[x]];
		$('.bg-desc').html(bg_title[bg_img[x]]);
		if(x<bg_img.length-1){
			x+=1;
		}
		else{
			x=0;
		}
    });
});
