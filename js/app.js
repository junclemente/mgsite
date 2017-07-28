

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

var HotelListModel = function(hotel) {

	var self = this;

	self.name = hotel.name;
	self.address = hotel.address;
	self.city_state = hotel.city_state;
	self.phone = 'tel:' + hotel.phone;
	self.display_phone = hotel.display_phone;
	self.booking_url = hotel.booking_url;
	self.group_name = hotel.group_name;
	self.group_code = hotel.group_code;
	self.image_lg = "images/" + hotel.image_base + "-lg.jpg";
	self.image_sm = "images/" + hotel.image_base + "-sm.jpg";
	self.price_html = hotel.price_html;
};

var CarouselModel = function(info) {

	var self = this;

	self.image = "images/carousel/mgimg" + info.image_id + ".jpg";
	self.name = info.description;
};

var GeneralInfo = function() {

	var self = this;

	// General Information
	self.wedding_date = 'September 02, 2017';
	self.wedding_time = '5:00pm';
	self.register_by = 'July 28, 2017';
	self.phone = 'tel:18588489060';
	self.display_phone = '858.848.9060';
	self.email_to = 'mailto:graceandmelvin@gmail.com';
	self.display_email = 'graceandmelvin@gmail.com';
	self.honeyfund_link = 'https://www.honeyfund.com/wedding/gracevin2017';
	self.instagram_text = '#####';

	// Shuttle Information
	self.shuttle_roundtrip_start = '4:10pm';
	self.shuttle_roundtrip_end = '4:30pm';
	self.shuttle_final = '5:00pm';
	self.holiday_inn_start = '4:00pm';
	self.holiday_inn_stop = '5:10pm';

};

var PrimarySponsorModel = function(sponsor) {
	var self = this;

};

var SecondarySponsorList = function(sponsor) {
	var self = this;

};

var VendorList = function(vendor) {
	var self = this;

};

var NavBarModel = function(data) {

	var self = this;

	self.name = data.name;
	self.url = data.url;
};

var AppViewModel = function() {

	var that = this;
	that.activeSection = ko.observable();
	that.carouselList = ko.observableArray([]);
	that.navigationList = ko.observableArray([]);
	that.hotelList = ko.observableArray([]);
	that.primarySponsorList = ko.observableArray([]);
	that.secondarySponsorList = ko.observableArray([]);
	that.vendorList = ko.observableArray([]);
	that.countdownClock = ko.observable(new CountDownModel());
	that.weddingInfo = ko.observable(new GeneralInfo());
	console.log(that.countdownClock().countdownValue());

	NAVBAR_LIST.forEach(function(data) {
		that.navigationList.push(new NavBarModel(data));
	});

	HOTEL_LIST.forEach(function(hotel) {
		that.hotelList.push(new HotelListModel(hotel));
	});

	CAROUSEL_LIST.forEach(function(image) {
		that.carouselList.push(new CarouselModel(image));
	});

	// PRIMARY_SPONSOR_LIST.forEach(function(sponsor) {
	// 	that.primarySponsorList.push(new PrimarySponsorModel(sponsor));
	// });

	// SECONDARY_SPONSOR_LIST.forEach(function(sponsor) {
	// 	that.secondarySponsorList.push(new SeconarySponsorModel(sponsor));
	// });

	// VENDOR_List.forEach(function(vendor) {
	// 	that.vendorList.push(new VendorModel(vendor));
	// });

	that.activeSection(that.navigationList()[0]);

	that.selectNavigation = function(nav) {
		if (nav == that.activeSection()) {
			console.log('section already active');
		} else {
			console.log(nav.url);
			that.activeSection(nav);
			$("section.content").hide();
			var selector = "#" + nav.url;
			$(selector).fadeIn(850);

			if( $('.navbar-toggle').css('display') != 'none') {
				$('.navbar-toggle').click();
			}

			location.hash = nav.url;
		}

		if (nav.name == "Information") {
			initMap();
		}
	};
};

ko.applyBindings(new AppViewModel());
