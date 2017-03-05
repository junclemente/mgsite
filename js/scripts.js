// Navigation Bar
var navBar = {
  "navBarList": [
    { "name": "Home", "url": "home"},
    { "name": "Our Story", "url": "ourStory"},
    { "name": "Add To Our Story", "url": "addToOurStory"},
    { "name": "Schedule of Events", "url": "scheduleOfEvents"},
    { "name": "Information", "url": "information"},
    { "name": "Accommodations", "url": "accommodations"},
    { "name": "Registry", "url": "registry"},
    { "name": "RSVP", "url": "rsvp"},
],

  "display": function() {
    var navHTMLLinkGeneric = '<li><a href="#" data-toggle="#%navLink%">%page%</a><li>';

    for (var i=0; i < navBar.navBarList.length; i++) {
      navHTMLLink = navHTMLLinkGeneric.replace("%page%", navBar.navBarList[i]["name"]);
      navHTMLLink = navHTMLLink.replace("%navLink%", navBar.navBarList[i]["url"]);
      $("#navBarContent").append(navHTMLLink);
    }
  },
};

// Populate navBar
navBar.display();

$("a[data-toggle]").on("click", function(e) {
  e.preventDefault();
  var selector = $(this).data("toggle");
  $("section.content").hide();
  $(selector).fadeIn(850);
})

// Auto Close Navbar on Click
$('.nav a').on('click', function() {
  if( $('.navbar-toggle').css('display') != 'none') {
  $('.navbar-toggle').click();

  }
})


// Animate to smooth scroll
// $('ul.nav').find('a').click(function() {
//   var $href = $(this).attr('href');
//   var $anchor = $($href).offset();
//   // window.scrollTo($anchor.left, $anchor.top);
//   $('body').animate({
//      scrollTop: $anchor.top
//    });
//   return false;
// });


// Count Down Timer:
// Resource: http://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date
function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + ' days  ';
            document.getElementById(id).innerHTML += hours + ' hrs ';
            document.getElementById(id).innerHTML += minutes + ' min ';
            document.getElementById(id).innerHTML += seconds + ' sec';
        }

        timer = setInterval(showRemaining, 1000);
    }

CountDownTimer('09/02/2017 12:00 AM', 'countdown');


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
                    ['Admiral Kidd Conference and Catering Center', 32.722775, -117.217717],
                    ['Homewood Suites by Hilton San Diego', 32.729500, -117.215923],
                    ['Courtyard San Diego Airport/Liberty Station', 32.730704, -117.215709],
                    ['Holiday Inn Bayside', 32.726246, -117.222454]
                  ]


  // Assign google map to var map and add map to webpage to #map
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);


  // Iterate locations in myMarkers and add to map
  for (i = 0; i < myMarkers.length; i++ ) {
    var position = new google.maps.LatLng(myMarkers[i][1], myMarkers[i][2]);
    console.log(position);
    bounds.extend(position);  // Used to determine map center
    marker = new google.maps.Marker({
      position: position,
      label: String(i+1),
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
