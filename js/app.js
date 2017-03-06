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

var CountDownModel = function(dt, id) {
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

        // timer = setInterval(showRemaining, 1000);
};

var NavBarModel = function(data) {

	var self = this;

	self.name = data.name;
	self.url = data.url;
};

var AppViewModel = function() {

	var that = this;
	that.navigationList = ko.observableArray([]);
	that.countdownClock = ko.observable(new CountDownModel('09/02/2017 12:00 AM', 'countdown'));

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
