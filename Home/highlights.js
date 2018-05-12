
	image_tracker = 'first';
	console.log(image_tracker);

		var image = document.getElementById('image');

		if(image_tracker == "first") {
			image.src = "../Pictures/Highlights/Pic with logo 12.jpg";
			image_tracker = 'second';
			console.log(image_tracker);
		} else {
			image.src = "MartinBozhinovArcsPoster.jpg";
			image_tracker = 'first';
			console.log(image_tracker);
		}

		var Timer = setInterval('highlightsChange();', 10);