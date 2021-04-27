(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // List of catergories and their short names
  var categories = [];

  // Return all categories
  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
      })
      .then(function (result) {
        categories = [];

        for (var i = 0; i < result.data.length; i++) {
          categories.push({
            name: result.data[i].name,
            shortName: result.data[i].short_name
          });
        }

        return categories;
      });
  };

  // Return Item short names for a category
  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
      })
      .then(function (result) {
        var items = [];

        for (var i = 0; i < result.data.menu_items.length; i++) {
          items.push(result.data.menu_items[i].name);
        }

        return items;
      });
  };
}

})();
