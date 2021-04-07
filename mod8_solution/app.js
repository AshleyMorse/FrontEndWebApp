(function () {
'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);

	function FoundItemsDirective() {
	  var ddo = {
	    templateUrl: 'foundItems.html',
	    scope: {
	      items: '<',
	      onRemove: '&'
	    },
	    controller: FoundItemsDirectiveController,
	    controllerAs: 'found',
	    bindToController: true
	  };

	  return ddo;
	}

	function FoundItemsDirectiveController() {
	  var found = this;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var found = this;

		found.getMatchedMenuItems = function(searchTerm) {
			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

		    promise.then(function (response) {
		      found.items = response;
		      console.log(found.items)
		    })
		    .catch(function (error) {
		      console.log("Something went terribly wrong.");
		    })
		};

		found.removeItem = function(itemIndex) {
			found.items.splice(itemIndex, 1);
		};
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;

		// get matched items
		service.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
				})
				.then(function (result) {
					// process result and only keep items that match
					var foundItems = [];
					var menuItems = result.data.menu_items;

					for (var i = 0; i < menuItems.length; i++) {
						if (menuItems[i].description.includes(searchTerm) && searchTerm != "") {
							foundItems.push({
								name: menuItems[i].name,
								shortName: menuItems[i].short_name,
								description: menuItems[i].description
							});
						}
					}
	
					return foundItems;
				});
		};
	}

})();