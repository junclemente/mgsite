var navBarList = [
	{
		name: "Home",
		url: "home"
	},
	{
		name: "Our Story",
		url: "ourStory"
	},
	{
		name: "Add To Our Story",
		url: "addToOurStory"
	},
	{
		name: "Schedule of Events",
		url: "scheduleOfEvents"
	},
	{
		name: "Information",
		url: "information"
	},
	{
		name: "Accommodations",
		url: "accommodations"
	},
	{
		name: "Registry",
		url: "registry"
	},
	{
		name: "RSVP",
		url: "rsvp"
	}
];

var CountDownModel = function() {

	var self = this;
	COUNTDOWN_DATE = '09/02/2017 12:00 AM';
	var currentTime = '';
	self.countdownValue = ko.observable(currentTime);
	var end = new Date(COUNTDOWN_DATE);

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
	        self.countdownValue('EXPIRED!');

	        return;
	    }
	    var days = Math.floor(distance / _day);
	    var hours = Math.floor((distance % _day) / _hour);
	    var minutes = Math.floor((distance % _hour) / _minute);
	    var seconds = Math.floor((distance % _minute) / _second);

	    currentTime = days + ' days  ';
	    currentTime += hours + ' hrs ';
	    currentTime += minutes + ' min ';
	    self.countdownValue(currentTime += seconds + ' sec');
	}

	timer = setInterval(showRemaining, 1000);
};

var NavBarModel = function(data) {

	var self = this;

	self.name = data.name;
	self.url = data.url;
};

var AppViewModel = function() {

	var that = this;
	that.navigationList = ko.observableArray([]);
	that.countdownClock = ko.observable(new CountDownModel());
	console.log(that.countdownClock().countdownValue());

	navBarList.forEach(function(data) {
		that.navigationList.push(new NavBarModel(data));
	});

	that.selectNavigation = function(nav) {
		console.log(nav.url);
		$("section.content").hide();
		var selector = "#" + nav.url;
		$(selector).fadeIn(850);

		if( $('.navbar-toggle').css('display') != 'none') {
			$('.navbar-toggle').click();
		}

		location.hash = nav.url;
	};
};

ko.applyBindings(new AppViewModel());
