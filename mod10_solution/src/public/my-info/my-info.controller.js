(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['loadedInfo', 'ApiPath'];
function MyInfoController(loadedInfo, ApiPath) {
  var $ctrl = this;
  $ctrl.loadedInfo = loadedInfo;

  $ctrl.imagePath = ApiPath + '/images/';
}

})();
