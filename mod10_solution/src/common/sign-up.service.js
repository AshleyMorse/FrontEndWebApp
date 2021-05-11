(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  var savedInfo = {
      firstName: ""
    };

  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  service.saveInfo = function (info) {
  	savedInfo = info;
  };

  service.loadInfo = function() {
  	return savedInfo;
  };

}

})();
