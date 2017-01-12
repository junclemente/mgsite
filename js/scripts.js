// Navigation Bar
var navBar = {
  "navBarList": [
    { "name": "Home", "url": "home"},
    { "name": "Venue", "url": "venue"},
    { "name": "Honeyfunds", "url": "honeyfunds"},
    { "name": "Travel Accomodations", "url": "travelaccomodations"},
    { "name": "RSVP", "url": "rsvp"},
    { "name": "Schedule of Events", "url": "scheduleOfEvents"},
    { "name": "About Us", "url": "aboutUs"},
    { "name": "Add To Our Story", "url": "addToOurStory"},
    { "name": "Map of Area", "url": "mapofarea"}
  ],

  "display": function() {
    var navHTMLLinkGeneric = '<li><a href="#%navLink%">%page%</a></li';

    for (var i=0; i < navBar.navBarList.length; i++) {
      navHTMLLink = navHTMLLinkGeneric.replace("%page%", navBar.navBarList[i]["name"]);
      navHTMLLink = navHTMLLink.replace("%navLink%", navBar.navBarList[i]["url"]);
      $("#navBarContent").append(navHTMLLink);
    }
  },
};

// Populate navBar
navBar.display();


// Animate to smooth scroll
$('ul.nav').find('a').click(function() {
  var $href = $(this).attr('href');
  var $anchor = $($href).offset();
  // window.scrollTo($anchor.left, $anchor.top);
  $('body').animate({ scrollTop: $anchor.top });
  return false;
});


// Add Google Map to Page
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
                    ['Admiral Kidd Conference and Catering Center', 32.722775, -117.217717, "test test"],
                    ['Homewood Suites by Hilton San Diego', 32.729500, -117.215923, "test test test"],
                    ['Courtyard San Diego Airport/Liberty Station', 32.730704, -117.215709, "test test test test"],
                    ['Holiday Inn Bayside', 32.726246, -117.222454, "Holiday Inn"]
                  ]


  // Assign google map to var map and add map to webpage to #map
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);


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
