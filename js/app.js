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


var NavBarModel = function(data) {

	var self = this;

	self.name = data.name;
	self.url = data.url;
};

var AppViewModel = function() {

	var that = this;
	that.navigationList = ko.observableArray([]);

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
	};
};

ko.applyBindings(new AppViewModel());
