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
	
	var done = false;
	
	var event = false;
	var eventName = "";
	var eventMath = 0;
	var eventTriggerMath = 0;
	var eventCastListMessage = "";
	var eventXp = 0;
	
	var shamePoints = 0;
	var drunkPoints = 0;
	var highPoints = 0;
	var gulliblePoints = 0;
	var unsuccessfulPoints = 0;
	var despicablePoints = 0;
	var unstablePoints = 0;
	var meatHeadPoints = 0;
	var doucheyPoints = 0;
	var sadisticPoints = 0;
	var kindPoints = 0;
	var mentallyIllPoints = 0;
	var coldBloodedPoints = 0;
	
	var morale = 100;
	var hunger = 0;
	
	var insanityPoints = 0;
	var niceGuyPoints = 0;
	var despicablePoints = 0;
	
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


	jQuery.fn.animateAuto = function(prop, speed, callback){
		var elem, height, width;
		return this.each(function(i, el){
			el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
			height = elem.css("height"),
			width = elem.css("width"),
			elem.remove();
			
			if(prop === "height")
				el.animate({"height":height}, speed, callback);
			else if(prop === "width")
				el.animate({"width":width}, speed, callback);  
			else if(prop === "both")
				el.animate({"width":width,"height":height}, speed, callback);
		});  
	}	
	
	// functions

	// this function triggers when an event (special fish) dialogue is completed. It handles messages and resets the playfield, kind of.  
	function keepFishing(){
		$("#KeepFishingButton").click(function(){
			$(".status .value").html("Let's keep fishing...");
			$(".level-message .value").hide("slow");
			$("#CastButton").prop("disabled", false);
			$("#SetHookButton").prop("disabled", true);
			$("#ReelInButton").prop("disabled", true);
			$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>'+ eventCastListMessage +' +'+ eventXp +'xp</div>')				
		});
	}
	
	function levelUpDisplay(){
		$(".level-message .value").text("You leveled up!");
		$(".level-message .value").show("slow").delay(2000).slideUp("slow");		
	}

	function addTraits() {
		if (despicablePoints > 0 && $('.stuff .the-stuff .despicable').length == 0){
			$(".stuff .the-stuff").append('<div class="despicable"><span class="label">Despicable</span><span class="value"> x<span>'+ despicablePoints +'</span></span></div>')
		} if (unsuccessfulPoints > 0 && $('.stuff .the-stuff .unsuccessful').length == 0){
			$(".stuff .the-stuff").append('<div class="unsuccessful"><span class="label">Unsuccessful</span><span class="value"> x<span>'+ unsuccessfulPoints +'</span></span></div>')
		} if (unstablePoints > 0 && $('.stuff .the-stuff .unstable').length == 0){
			$(".stuff .the-stuff").append('<div class="unstable"><span class="label">Unstable</span><span class="value"> x<span>'+ unstablePoints +'</span></span></div>')
		} if (doucheyPoints > 0 && $('.stuff .the-stuff .douchey').length == 0){
			$(".stuff .the-stuff").append('<div class="douchey"><span class="label">Douchey</span><span class="value"> x<span>'+ doucheyPoints +'</span></span></div>')
		} if (sadisticPoints > 0 && $('.stuff .the-stuff .sadistic').length == 0){
			$(".stuff .the-stuff").append('<div class="sadistic"><span class="label">Sadistic</span><span class="value"> x<span>'+ sadisticPoints +'</span></span></div>')
		} if (kindPoints > 0 && $('.stuff .the-stuff .kind').length == 0){
			$(".stuff .the-stuff").append('<div class="kind"><span class="label">Kind</span><span class="value"> x<span>'+ kindPoints +'</span></span></div>')
		} if (mentallyIllPoints > 0 && $('.stuff .the-stuff .mentally-ill').length == 0){
			$(".stuff .the-stuff").append('<div class="mentally-ill"><span class="label">Mentally Ill</span><span class="value"> x<span>'+ mentallyIllPoints +'</span></span></div>')
		} if (coldBloodedPoints > 0 && $('.stuff .the-stuff .cold-blooded').length == 0){
			$(".stuff .the-stuff").append('<div class="cold-blooded"><span class="label">Cold Blooded</span><span class="value"> x<span>'+ coldBloodedPoints +'</span></span></div>')	
		}						

		// populate the stuff values
		
		$(".stuff .the-stuff .despicable .value span").text(despicablePoints);
		$(".stuff .the-stuff .unsuccessful .value span").text(unsuccessfulPoints);
		$(".stuff .the-stuff .wild-card .value span").text(unstablePoints);
		$(".stuff .the-stuff .douchey .value span").text(doucheyPoints);
		$(".stuff .the-stuff .sadistic .value span").text(sadisticPoints);
		$(".stuff .the-stuff .kind .value span").text(kindPoints);
		$(".stuff .the-stuff .mentally-ill .value span").text(mentallyIllPoints);						
		$(".stuff .the-stuff .cold-blooded .value span").text(coldBloodedPoints);	

		totalXp += eventXp;
		$(".xp .value").text(totalXp);		
	}	
	
	// clicks
	
	$("#CastButton").click(function(){		
		
        casts += 1;
        $(".casts .value").text(casts);
		
		$(".status .value").hide();
		$(".status .value").fadeIn();
		
		// generate a cast # from 1-100. Factor in the player's "focus".
		var cast = Math.floor((Math.random() * 100) + 1);	
		var fishTypeMath = Math.floor((Math.random() * 100) + 1);
		var fishSizeMath = Math.floor((Math.random() * 100) + 1);
			fishSize = fishSizeMath;

		
		// determine type of fish
		
		if (fishTypeMath >= 95) {
			fishType = "mega shark";
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

		
		
		switch (fishType) {
			case "mega shark":
				fishSize = fishSize * 1;
				break;
			case "pike":
				fishSize = fishSize * .5;
				break;
			case "walleye":
				fishSize = fishSize * .4;
				break;
			case "large mouth bass":
				fishSize = fishSize * .33;
				break;
			case "small mouth bass":
				fishSize = fishSize * .3;
				break;
			case "cat fish":
				fishSize = fishSize * .5;
				break;					
			case "carp":
				fishSize = fishSize * .5;
				break;
			case "crappie":
				fishSize = fishSize * .2;
				break;
			case "perch":
				fishSize = fishSize * .2;
				break;
			case "sun fish":
				fishSize = fishSize * .15;
				break;
			case "bluegill":
				fishSize = fishSize * .15;
				break;					
		}
		
		fishSize = Math.round(fishSize);
		

		// determine fishSizeName
		

		if (fishSize >= 95) {
			fishSizeName = "xxl";
		} else if (fishSize >= 85 && fishSize < 95) {
			fishSizeName = "xxl";
		} else if (fishSize >= 75 && fishSize < 85) {
			fishSizeName = "xl";
		} else if (fishSize >= 60 && fishSize < 75) {
			fishSizeName = "l";
		} else if (fishSize >= 45 && fishSize < 60) {
			fishSizeName = "m";
		} else if (fishSize >= 30 && fishSize < 45) {
			fishSizeName = "s";
		} else if (fishSize >= 15 && fishSize < 30) {
			fishSizeName = "xs";
		} else if (fishSize >= 0 && fishSize < 15) {
			fishSizeName = "xxs";
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
			$(".status .value").text("You got a bite!");
			$(".bites .value").text(biteCount);
			$("#CastButton").prop("disabled", true);
			$("#SetHookButton").prop("disabled", false);
			$("#ReelInButton").prop("disabled", true);			
		} else {
			bite = false;
			$(".status .value").text("No bites. Cast again.");			
			$("#CastButton").prop("disabled", false);
			$("#SetHookButton").prop("disabled", true);
			$("#ReelInButton").prop("disabled", true);
			
			// populate the cast list with cast data
			$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You did not get a bite</div>')			
		}
		
	}); 
	
	$("#SetHookButton").click(function(){

		$(".status .value").hide();
		$(".status .value").fadeIn();
	
		// logic for whether or not fish is hooked
		
		if (bite){
			var fishOnMath = Math.floor((Math.random() * 100) + 1);
			
			if (fishOnMath >= 30) {
				fishOn = true;
				fishOnCount += 1;
				$(".status .value").text("Fish on!");					
				$(".fish-on .value").text(fishOnCount);
				$("#CastButton").prop("disabled", true);
				$("#SetHookButton").prop("disabled", true);
				$("#ReelInButton").prop("disabled", false);					
			} else {
				fishOn = false;
				$(".status .value").text(genderPronoun + " didn't take the bait");		
				$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You got a bite, but ' + genderPronoun + ' did not take the bait.</div>')					
				$("#CastButton").prop("disabled", false);
				$("#SetHookButton").prop("disabled", true);
				$("#ReelInButton").prop("disabled", true);					
			}
		}
		
		//console.log("cast: " +cast+ " | fish on: " +fishOn+ " | fish lost: " +fishLost+ " | fish caught: " +fishCaught)
		
	});

	$("#ReelInButton").click(function(){

		$(".status .value").hide();
		$(".status .value").fadeIn();
		
		var eventTriggerMath = Math.floor((Math.random() * 100) + 1);
		var eventMath = Math.floor((Math.random() * 100) + 1);		
		
		if (eventTriggerMath >= 10) {
			event = true;
		}
		
		if (event){
			
			$("#ReelInButton").prop("disabled", true);	
			
			if (eventMath >= 95) {
				eventName = "pregnant";
			} else if (eventMath >= 85 && eventMath < 95) {
				eventName = "pregnant";
			} else if (eventMath >= 75 && eventMath < 85) {
				eventName = "pregnant";
			} else if (eventMath >= 60 && eventMath < 75) {
				eventName = "pregnant";
			} else if (eventMath >= 45 && eventMath < 60) {
				eventName = "pregnant";
			} else if (eventMath >= 30 && eventMath < 45) {
				eventName = "pregnant";
			} else if (eventMath >= 15 && eventMath < 30) {
				eventName = "pregnant";
			} else if (eventMath >= 0 && eventMath < 15) {
				eventName = "pregnant";
			}			
			
			eventName = "mermaid";
			
			switch (eventName) {
				case "pregnant":
					
					$(".level-message .value").html("<span class='special'>This fish seems different...</span><div class='inner'>As you unhook the fish and open the livewell, she turns to you and pleads: \"Sir, I happen to be very pregnant. Are you sure you want to murder me and my babies?\" </div><div class='answers'><label><input type='radio' name='pregnant' value='a'>Ok. I won't eat you.</label><label><input type='radio' name='pregnant' value='b'>Meh. I'm still going to eat you.</label><label><input type='radio' name='pregnant' value='c'>Stab her</div></label>");
					$(".level-message .value").show("slow");

					$(".answers input").click(function(){
						if ($(this).val() == "a"){
							$(".status .value").html('That was nice of you <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');
							$(".status .value").show("slow").bind("click", function(e){
								$(".status .value").animateAuto("height", 1000); 
							});						
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);
							$(".answers input").not(this).addClass("disabled");								
							eventXp = 80;
							eventCastListMessage = "You caught a pregnant fish. You threw her back because you're a cool person.";
							kindPoints += 1;
							morale += 1;
							
						} else if ($(this).val() == "b"){
							$(".status .value").html("You sit the fish down and explain the concept of the food chain. When the fish responds \"That's cool. Where am I on the food chain?\", you look her in the eye and promptly bite into her face. <input id='KeepFishingButton' type='submit' class='button' value='Continue fishing'>");							
							$(".status .value").show("slow").bind("click", function(e){
								$(".status .value").animateAuto("height", 1000); 
							});		
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);									
							$(".answers input").not(this).addClass("disabled");								
							eventXp = 80;							
							eventCastListMessage = "You caught a pregnant fish. You explained the food chain and then ate her and her babies."
							despicablePoints += 1;
							coldBloodedPoints += 1;
							hunger += -10;
							morale += 1;
							
						} else if ($(this).val() == "c"){
							$(".status .value").html("Why would you do that? No, seriously. Are you OK? <input id='KeepFishingButton' type='submit' class='button' value='Continue fishing'>");							
							$(".status .value").show("slow").bind("click", function(e){
								$(".status .value").animateAuto("height", 1000); 
							});		
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);									
							$(".answers input").not(this).addClass("disabled");								
							eventXp = -50;
							eventCastListMessage = "You caught a pregnant fish. You chose to stab her for no reason. This is why nobody likes you. You can't actually lose at this game, but you should.";
							despicablePoints += 1;
							doucheyPoints += 1;							
							mentallyIllPoints += 1;
							coldBloodedPoints += 1;							
							unstablePoints += 1;
						}

					addTraits();
					keepFishing();						
						
					});

					break;
				
				case "mermaid":
						
					$(".level-message .value").html("<span class='special'>This fish seems different...</span><div class='inner'>Much to your surprise, a beautiful mermaid emerges from the fishing hole. Disoriented, she pleads, \"If you let me go, I will grant you one wish\". Intrigued, you respond... </div><div class='answers'><label><input type='radio' name='mermaid' value='a'>I wish for whiskey.</label><label><input type='radio' name='mermaid' value='b'>I wish for world peace.</label><label><input type='radio' name='mermaid' value='c'>I wish we would bang.</div></label>");
					$(".level-message .value").show("slow");

					$(".answers input").click(function(){
						if ($(this).val() == "a"){
							$(".status .value").html('"Oh cool. I have a drinking problem, too.", she responds as she retrieves a bottle marked "xxx" from her purse (this mermaid has a purse). The two of you sit down, share drinks, and tell tales of your polarizing worlds. Now laughing, you meet eachother\'s gaze and sheepishly smile. As passion takes over, you resign to the soothing effects of whiskey, and dive balls-deep into mermaid vagina. <p>Although mermaid boobs are pretty great, their lower-half is more fish than human. In other words, you stuck your penis in a fish vagina.</p> <p>You finish anyway.</p> <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');
							$(".status .value").hide().show("slow");			
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);
							$(".answers input").not(this).addClass("disabled");								
							eventXp = 80;
							eventCastListMessage = "You caught a mermaid, got drunk with her, and had weird mermaid sex.";
							kindPoints += 1;
							morale += 1;
							
						} else if ($(this).val() == "b"){
							$(".status .value").html('In a pretentious tone, you proudly announce "I wish for world peace". <p>Smirking, she says "I\'m a mermaid, not a genie. Idiot.", and hurriedly swims away.</p>  <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');							
							$(".status .value").hide().show("slow");
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);									
							$(".answers input").not(this).addClass("disabled");								
							eventXp = 80;							
							eventCastListMessage = "You caught a mermaid who convinced you she could grant wishes. She couldn't."
							gulliblePoints += 1;
							
						} else if ($(this).val() == "c"){
							$(".status .value").html('"Mmmm ok big boy, but you must promise to keep your eyes shut, or else you\'ll turn into a merman", she responds flirtatiously. With a lack of knowledge on interspecies relations, you fear something\'s awry, yet don\'t know enough to dispute her claim. It\'s been a slow year, so you close your eyes and wish for the best. <p>It\'s cold and it\'s weird, but you finish anyway. You finally look down to find a cat fish latched onto your dong. Shame sinks in as you quickly realize you\'ve been had.</p> <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');							
							$(".status .value").hide().show("slow");
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);									
							$(".answers input").not(this).addClass("disabled");								
							eventXp = -50;
							eventCastListMessage = "Wow. OK. So, you accidentally banged a fish...";
							despicablePoints = despicablePoints + 1;

						}
						
						addTraits();
						keepFishing();
					
					});				
					
					break;

				case "fall-in":
						
					$(".level-message .value").html("<span class='special'>This fish seems different...</span><div class='inner'>Blah blah: \"blahblahblah\" </div><div class='answers'><label><input type='radio' name='pregnant' value='a'>Ok. I won't eat you.</label><label><input type='radio' name='pregnant' value='b'>Meh. I'm still going to eat you.</label><label><input type='radio' name='pregnant' value='c'>Stab her</div></label>");
					$(".level-message .value").show("slow");

					$(".answers input").click(function(){
						if ($(this).val() == "a"){
							$(".status .value").html('That was nice of you <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');
							$(".status .value").hide().show("slow");						
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);
							$(".answers input").not(this).addClass("disabled");								
							eventXp = 80;
							eventCastListMessage = "You caught a pregnant fish. You threw her back because you're a cool person.";
							kindPoints = kindPoints + 1;
							morale = morale + 1;
							
						} else if ($(this).val() == "b"){
							$(".status .value").html("You sit the fish down and explain the concept of the food chain. When the fish responds \"That's cool. Where am I on the food chain?\", you look her in the eye and promptly bite into her face. <input id='KeepFishingButton' type='submit' class='button' value='Continue fishing'>");							
							$(".status .value").hide().show("slow");
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);									
							$(".answers input").not(this).addClass("disabled");								
							eventXp = 80;							
							eventCastListMessage = "You caught a pregnant fish. You explained the food chain and then ate her and her babies."
							despicablePoints = despicablePoints + 1;
							coldBloodedPoints = coldBloodedPoints + 1;
							hunger = hunger + -10;
							morale = morale + 1;
							
						} else if ($(this).val() == "c"){
							$(".status .value").html("Why would you do that? No, seriously. Are you OK? <input id='KeepFishingButton' type='submit' class='button' value='Continue fishing'>");							
							$(".status .value").hide().show("slow");
							$(".status .value input").show(1000).css('display', 'block');
							$(".answers input").prop("disabled", true);									
							$(".answers input").not(this).addClass("disabled");								
							eventXp = -50;
							eventCastListMessage = "You caught a pregnant fish. You chose to stab her for no reason. This is why nobody likes you.";
							despicablePoints = despicablePoints + 1;
							doucheyPoints = doucheyPoints + 1;							
							mentallyIllPoints = mentallyIllPoints + 1;
							coldBloodedPoints = coldBloodedPoints + 1;							
							unstablePoints = unstablePoints + 1;
						}
						
						addTraits();
						keepFishing();
					
					});				
					
					break;
			}
			


						
						
			
			
		} else {		
		
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
				
						if (totalXp >= 100 && level == 1) {
							level = 2;
							levelUpDisplay();					
							} else if (totalXp >= 200 && level == 2) {
								level = 3;
								levelUpDisplay();
							} else if (totalXp >= 300 && level == 3) {
								level = 4;
								levelUpDisplay();	
							} else if (totalXp >= 400 && level == 4) {
								level = 5;
								levelUpDisplay();	
							} else if (totalXp >= 600 && level == 5) {
								level = 6;
								levelUpDisplay();	
							} else if (totalXp >= 800 && level == 6) {
								level = 7;
								levelUpDisplay();	
							} else if (totalXp >= 1000 && level == 7) {
								level = 8;
								levelUpDisplay();		
							} else if (totalXp >= 1400 && level == 8) {
								level = 9;
								levelUpDisplay();	
							} else if (totalXp >= 1800 && level == 9) {
								level = 10;
								levelUpDisplay();	
							} else if (totalXp >= 2300 && level == 10) {
								level = 11;
								levelUpDisplay();	
							}			
						
						$(".level .value").text(level);

					$('.livewell .the-fish').prepend('<div class="fish '+ fishSizeName +' '+ fishType +'" title= "'+ fishSize +'in '+ gender +' '+ fishType +' "></div>');
					$(".fish-caught .value").text(fishCaughtCount);
					$('.status .value').text('You caught a '+ fishSize +'" '+ gender +' '+ fishType +'!');
					$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You caught a '+ fishSize +'" '+ gender +' '+ fishType +'! +'+ fishCaughtXp +'xp</div>')					
					$("#CastButton").prop("disabled", false);
					$("#SetHookButton").prop("disabled", true);
					$("#ReelInButton").prop("disabled", true);					
				} else {
					fishCaught = false;
					fishLost = true;
					fishLostCount += 1;					
					$(".status .value").text(genderPronoun + " got away");
					$('.casts-list').prepend('<div><span>cast #' + casts + ': </span>You hooked a ' + fishSize + '" ' + fishType + ', but ' + genderPronoun + ' got away.</div>')						
					$(".fish-lost .value").text(fishLostCount);
					$("#CastButton").prop("disabled", false);
					$("#SetHookButton").prop("disabled", true);
					$("#ReelInButton").prop("disabled", true);					
				}
			}
			
			//console.log("cast: " +cast+ " | fish on: " +fishOn+ " | fish lost: " +fishLost+ " | fish caught: " +fishCaught)
			
		};	
	});
	
	
});