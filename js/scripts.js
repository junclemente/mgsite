function initMap() {
  /*
    Placing Google Map with multiple markers and information.
    Reference: https://wrightshq.com/playground/placing-multiple-markers-on-a-google-map-using-api-3/
    https://developers.google.com/maps/documentation/javascript/3.exp/reference
  */

  // Define variables
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: 'roadmap'
  };

  // Location markers to place on map
  var myMarkers = [
                    ['Admiral Kidd Conference and Catering Center', 32.722775, -117.217717],
                    ['Homewood Suites by Hilton San Diego', 32.729500, -117.215923],
                    ['Courtyard San Diego Airport/Liberty Station', 32.730704, -117.215709],
                    ['Holiday Inn Bayside', 32.726246, -117.222454]
                  ]

  // Assign google map to var map and add map to webpage to #map
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // map.setTilt(45);

  // Iterate locations in myMarkers and add to map
  for (i = 0; i < myMarkers.length; i++ ) {
    var position = new google.maps.LatLng(myMarkers[i][1], myMarkers[i][2]);
    bounds.extend(position);  // Used to determine map center
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: myMarkers[i][0]
    });

    // Automatically center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
  //   this.setZoom(14);
  //   google.maps.event.removeListener(boundsListener);
  // });

}
