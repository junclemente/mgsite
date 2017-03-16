var map, marker;

function loadFailure() {
	document.getElementById('map').innerHTML = "Could not load maps at this time";
}


function initMap() {

	// var markerImage = new google.maps.MarkerImage({'https://chart.apis.google.com/chart?chst=d_map_pin_letter_withshadow&chld=%E2%80%A2|fad1bd|ffffff'});

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: MAP_LOCATIONS[0].location
	});

	marker = new google.maps.Marker({
		map: map,
		position: MAP_LOCATIONS[0].location,
		title: MAP_LOCATIONS[0].name,
		// icon: markerImage
	});

}
