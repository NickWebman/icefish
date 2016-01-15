//Setup
var name = "Nick";
var weight = 215;

//Status
var bac = 0;
var bodyTemp = 0;
var tentTemp = 0;
var outsideTemp = 32;

//Stuff
var bait = "";
var whiskey = "";
var coffee = "";
var smoke = "";

//Stats
var fishCaught = "";
var fishEaten = "";

//Additional
var drunk = false;
var amputee = false;
var wet = false;
var warm = false;

//Logic
var cast = 0;
var castTotal = 0;
var focus = 0;

localStorage.setItem('name', name);

localStorage.setItem('weight', weight);

//document.write(localStorage.name);



$(document).ready(function(){
	
	// display stuff
	
	$(".name .value").text(localStorage.name);
	$(".weight .value").text(localStorage.weight);	
	
	var casts = 0;
	var fishBite = false;
	var fishOn = false;
	var fishLost = false;	
	var fishCaught = false;
	var fishType = "";
	var fishSize = 0;
	var fishSizeName = "";
	var fishTypeMath = 0;
	var fishSizeMath = 0;	
	var fishOnMath = 0;
	var fishCaughtMath = 0;
	var fishOnCount = 0;
	var fishLostCount = 0;
	var fishCaughtCount = 0;
	var biteCount = 0;
	var gender = "";
	var isPregnant = "";
	var totalXp = 0;
	var level = 1;
	var currentFishXp = 0;
	var fishLostXp = 0;
	var fishRarity = 0;
		
	$("#CastButton").prop("enabled", true);
	$("#SetHookButton").prop("disabled", true);
	$("#ReelInButton").prop("disabled", true);
	
	$("#CastButton").click(function(){
		
        casts += 1;
        $(".casts .value").text(casts);
		
		$(".status div").hide();
		$(".status div").fadeIn();
		
		// generate a cast # from 1-100. Factor in the player's "focus".
		var cast = Math.floor((Math.random() * 100) + 1);	
		var fishTypeMath = Math.floor((Math.random() * 100) + 1);
		var fishSizeMath = Math.floor((Math.random() * 100) + 1);
			fishSize = fishSizeMath;
		
		// determine fishSizeName
		
		// turn these big if statements into switch statements once shit works
		if (fishSizeMath >= 95) {
			fishSizeName = "xxl";
		} else if (fishSizeMath >= 85 && fishSizeMath < 95) {
			fishSizeName = "xxl";
		} else if (fishSizeMath >= 75 && fishSizeMath < 85) {
			fishSizeName = "xl";
		} else if (fishSizeMath >= 60 && fishSizeMath < 75) {
			fishSizeName = "l";
		} else if (fishSizeMath >= 45 && fishSizeMath < 60) {
			fishSizeName = "m";
		} else if (fishSizeMath >= 30 && fishSizeMath < 45) {
			fishSizeName = "s";
		} else if (fishSizeMath >= 15 && fishSizeMath < 30) {
			fishSizeName = "xs";
		} else if (fishSizeMath >= 0 && fishSizeMath < 15) {
			fishSizeName = "xxs";
		}				
		
		// determine type of fish
		
		// turn these big if statements into switch statements once shit works
		if (fishTypeMath >= 95) {
			fishType = "merman";
		} else if (fishTypeMath >= 90 && fishTypeMath < 95) {
			fishType = "pike";
		} else if (fishTypeMath >= 80 && fishTypeMath < 90) {
			fishType = "walleye";
		} else if (fishTypeMath >= 70 && fishTypeMath < 80) {
			fishType = "large mouth bass";
		} else if (fishTypeMath >= 60 && fishTypeMath < 70) {
			fishType = "small mouth bass";
		} else if (fishTypeMath >= 50 && fishTypeMath < 60) {
			fishType = "cat fish";
		} else if (fishTypeMath >= 40 && fishTypeMath < 50) {
			fishType = "carp";
		} else if (fishTypeMath >= 30 && fishTypeMath < 40) {
			fishType = "crappie";
		} else if (fishTypeMath >= 20 && fishTypeMath < 30) {
			fishType = "perch";
		} else if (fishTypeMath >= 10 && fishTypeMath < 20) {
			fishType = "sun fish";
		} else if (fishTypeMath >= 0 && fishTypeMath < 10) {
			fishType = "bluegill";
		}		
		

		// determine fish effect
		
		// determine boy/girl fish
		var genderMath = Math.round(Math.random());
		if (genderMath == 0) {
			gender = "male";
			genderPronoun = "he";
		} else {
			gender = "female";
			genderPronoun = "she";
		}
		
		// logic for whether or not the fish bites
		if (cast >= 20) {
			bite = true;
			biteCount += 1;
			$(".status div").text("You got a bite!");
			$(".bites .value").text(biteCount);
			$("#CastButton").prop("disabled", true);
			$("#SetHookButton").prop("disabled", false);
			$("#ReelInButton").prop("disabled", true);			
		} else {
			bite = false;
			$(".status div").text("No bites. Cast again.");			
			$("#CastButton").prop("disabled", false);
			$("#SetHookButton").prop("disabled", true);
			$("#ReelInButton").prop("disabled", true);
			
			// populate the cast list with cast data
			$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You did not get a bite</div>')			
		}
		
	}); 
	
	$("#SetHookButton").click(function(){

		$(".status div").hide();
		$(".status div").fadeIn();
	
		// logic for whether or not fish is hooked
		
		if (bite){
			var fishOnMath = Math.floor((Math.random() * 100) + 1);
			fishOnXp = Math.round(fishSize * .06);
			
			if (fishOnMath >= 30) {
				fishOn = true;
				fishOnCount += 1;
				$(".status div").text("Fish on!");					
				$(".fish-on .value").text(fishOnCount);
				$("#CastButton").prop("disabled", true);
				$("#SetHookButton").prop("disabled", true);
				$("#ReelInButton").prop("disabled", false);					
			} else {
				fishOn = false;
				totalXp += fishOnXp;
				$(".xp .value").text(totalXp);
				$(".hole .value").text('+' + fishOnXp + 'xp');				
				$('.xp .value').animate({
					color: "#0084ff"
					}, 500)
					.animate({
						color: "#eee"        
					}, 2000);
				$(".hole .value").fadeIn(500).animate({
					top: "-50px", 
					fontSize: "+=10"
					}, 1000, "easeOutBack")
					.delay(800).fadeOut(400).animate({
					top: "0px",
					fontSize: "-=10"
					}, 500, "easeInBack")

				
				
				$(".status div").text(genderPronoun + " didn't take the bait");		
				$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You got a bite, but ' + genderPronoun + ' did not take the bait.</div>')					
				$("#CastButton").prop("disabled", false);
				$("#SetHookButton").prop("disabled", true);
				$("#ReelInButton").prop("disabled", true);					
			}
		}
		
		//console.log("cast: " +cast+ " | fish on: " +fishOn+ " | fish lost: " +fishLost+ " | fish caught: " +fishCaught)
		
	});

	$("#ReelInButton").click(function(){

		$(".status div").hide();
		$(".status div").fadeIn();
	
		// logic for whether or not fish is caught
		
		if (fishOn){
			var fishCaughtMath = Math.floor((Math.random() * 100) + 1);
		
			if (fishCaughtMath >= 30) {
				fishCaught = true;
				fishCaughtCount += 1;
				fishCaughtXp = Math.round(fishSize * .5);
				totalXp += fishCaughtXp;
				$(".xp .value").text(totalXp);
				$(".hole .value").text('+' + fishCaughtXp + 'xp');					
				$('.xp .value').animate({
					color: "#0084ff"
					}, 500)
					.animate({
						color: "#eee"        
					}, 2000);
				$(".hole .value").fadeIn(500).animate({
					top: "-50px", 
					fontSize: "+=10"
					}, 1000, "easeOutBack")
					.delay(800).fadeOut(400).animate({
					top: "0px",
					fontSize: "-=10"
					}, 500, "easeInBack")
			
					// turn these big if statements into switch statements once shit works
			
					if (totalXp >= 100 && level == 1) {
						level = 2;
						} else if (totalXp >= 200 && level == 2) {
							level = 3;
						} else if (totalXp >= 300 && level == 3) {
							level = 4;
						} else if (totalXp >= 400 && level == 4) {
							level = 5;
						} else if (totalXp >= 600 && level == 5) {
							level = 6;
						} else if (totalXp >= 800 && level == 6) {
							level = 7;
						} else if (totalXp >= 1000 && level == 7) {
							level = 8;
						} else if (totalXp >= 1400 && level == 8) {
							level = 9;
						} else if (totalXp >= 1800 && level == 9) {
							level = 10;
						} else if (totalXp >= 2300 && level == 10) {
							level = 11;
						}
					
					$(".level .value").text(level);
					$(".level-message").text('You leveled up!');
					$(".level-message").show("slow").slideUp("slow");
					
				$('.livewell .the-fish').prepend('<div class="fish '+ fishSizeName +' '+ fishType +'" title= "'+ fishSize +'in '+ gender +' '+ fishType +' "></div>');
				$(".fish-caught .value").text(fishCaughtCount);
				$('.status div').text('You caught a '+ fishSize +'" '+ gender +' '+ fishType +'!');
				$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You caught a '+ fishSize +'" '+ gender +' '+ fishType +'!</div>')					
				$("#CastButton").prop("disabled", false);
				$("#SetHookButton").prop("disabled", true);
				$("#ReelInButton").prop("disabled", true);					
			} else {
				fishCaught = false;
				fishLost = true;
				fishLostCount += 1;
				fishLostXp = Math.round(fishSize * .1);
				totalXp += fishLostXp;
				$(".xp .value").text(totalXp);
				$(".hole .value").text('+' + fishLostXp + 'xp');					
				$('.xp .value').animate({
					color: "#0084ff"
					}, 500)
					.animate({
						color: "#eee"        
					}, 2000);
					//(selector).animate({styles},speed,easing,callback)
					
				$(".hole .value").fadeIn(500).animate({
					top: "-50px", 
					fontSize: "+=10"
					}, 1000, "easeOutBack")
					.delay(800).fadeOut(400).animate({
					top: "0px",
					fontSize: "-=10"
					}, 500, "easeInBack")

						
				$(".status div").text(genderPronoun + " got away");
				$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You hooked a ' + fishSize + '" ' + fishType + ', but ' + genderPronoun + ' got away.</div>')						
				$(".fish-lost .value").text(fishLostCount);
				$("#CastButton").prop("disabled", false);
				$("#SetHookButton").prop("disabled", true);
				$("#ReelInButton").prop("disabled", true);					
			}
		}
		
		//console.log("cast: " +cast+ " | fish on: " +fishOn+ " | fish lost: " +fishLost+ " | fish caught: " +fishCaught)
		
	});	
	
	
	
});