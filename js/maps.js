var map, marker, infowindow, bounds;

var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#800020"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fad1bd"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#800020"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fad1bd"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "stylers": [
      {
        "color": "#fad1bd"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d0f0fc"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

var mapOptions = [
	{
		keyboardShortcuts: false,
		mapTypeControl: false,
		draggable: false,
		disableDefaultUI: false
	}
];

function loadFailure() {
	document.getElementById('map').innerHTML = "Could not load maps at this time";
}


function initMap() {

	// var markerImage = new google.maps.MarkerImage({'https://chart.apis.google.com/chart?chst=d_map_pin_letter_withshadow&chld=%E2%80%A2|fad1bd|ffffff'});

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: MAP_LOCATIONS[0].location,
		styles: mapStyle,
		streetViewControl: false,
		mapTypeControl: false,
		scrollwheel: false
	});

	marker = new google.maps.Marker({
		map: map,
		position: MAP_LOCATIONS[0].location,
		title: MAP_LOCATIONS[0].name,
	});

	marker.addListener('click', function() {
		console.log('clicked');
	});

}
