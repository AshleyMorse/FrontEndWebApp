(function () {
'use strict';

	angular.module('ShoppingListCheckOff', [])
	.filter('customPrice', PriceFilter)
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var showToBuyList = this;

		showToBuyList.toBuyList = ShoppingListCheckOffService.getToBuyList();

		showToBuyList.bought = function(itemIndex) {
			ShoppingListCheckOffService.bought(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var showAlreadyBoughtList = this;

		showAlreadyBoughtList.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
	}

	function PriceFilter() {
	  return function (input) {
        input = "$$" + input;
    	return input;
  	  }
	}

	function ShoppingListCheckOffService() {
		var service = this;

		// list of 'to buy' items
		var toBuyList = [
		{name: "cookies", quantity: 10, pricePerItem: 2},
		{name: "pizzas", quantity: 2, pricePerItem: 7},
		{name: "yogurts", quantity: 8, pricePerItem: .50},
		{name: "kombucha", quantity: 3, pricePerItem: 4},
		{name: "hot chocolates", quantity: 15, pricePerItem: .25}];

		// list of 'already bought' items
		var alreadyBoughtList = [];

		service.bought = function(itemIndex) {
			var item = toBuyList[itemIndex];
			// add to 'already bought' list
			alreadyBoughtList.push(item);
			// remove from 'to buy' list
			toBuyList.splice(itemIndex, 1);
		};

		service.getToBuyList = function() {
			return toBuyList;
		};

		service.getAlreadyBoughtList = function() {
			return alreadyBoughtList;
		};
	}

})();