(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var reg = this;

  reg.getMenuItem = function(shortName) {
  	var promise = SignUpService.getMenuItem(shortName);

  	promise.then(function (response) {
  	  reg.item = response;
  	  reg.user.menuItem = response.name;
  	  reg.validItem = true;
  	})
  	.catch(function (error) {
	  console.log("Item not found.");
	  reg.item = "error"
	  reg.validItem = false;
	 })
  };

  reg.submit = function () {
    reg.completed = true;
    // Save all items to service
    var info = {
      firstName: reg.user.firstName,
      lastName: reg.user.lastName,
      email: reg.user.email,
      phone: reg.user.phone,
      menuItem: reg.item
    };
    
    SignUpService.saveInfo(info);
  };
}

})();
