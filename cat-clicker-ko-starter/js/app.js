var ViewModel = function() {
	// create observable of count with 0 value //
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tami');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
	// computed observable: is computed from other data object //
	this.level = ko.computed( function() {
		if (this.clickCount() < 10) {
			return "newBorn";
		}
		else if (0 <= this.clickCount() < 100) {
			return "Infant";
		}
		else {
			return "Teen";
		}
	},this); // this is to enable using this inside the function //

};

ko.applyBindings(new ViewModel());