(function () {
'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function($scope) {
		$scope.lunchCheckResponse = "";

		$scope.displayLunchAmount = function() {
			var lunchCheckResponseValue = calculateLunchCheckResponse($scope.lunchCheckInput);
			$scope.lunchCheckResponse = lunchCheckResponseValue;
		};

		function calculateLunchCheckResponse(string) {
			var response = "";

			// help from https://stackoverflow.com/a/36870043
			if (!string) {
				response = "Please enter data first";
				// style help from https://www.w3schools.com/angular/ng_ng-style.asp
				// and https://www.w3schools.com/cssref/pr_border-color.asp
				$scope.lunchCheckResponseStyle = {
					"color" : "red",
					"border-style" : "solid",
					"border-color" : "red"
				}
			}
			else {
				var lunchItemsArray = string.split(',');
				var lunchItemsCount = 0;
				
				for (var i = 0; i < lunchItemsArray.length; i++) {
					if (lunchItemsArray[i].trim() != '') {
						++lunchItemsCount;
					}
				}


				if (lunchItemsCount <= 0) {
					response = "Please enter data first";
					$scope.lunchCheckResponseStyle = {
						"color" : "red",
						"border-style" : "solid",
						"border-color" : "red"
					}
				}
				else if (lunchItemsCount <= 3) {
					response = "Enjoy!";
					$scope.lunchCheckResponseStyle = {
						"color" : "green",
						"border-style" : "solid",
						"border-color" : "green"
					}
				}
				else if (lunchItemsCount > 3) {
					response = "Too much!";
					$scope.lunchCheckResponseStyle = {
						"color" : "green",
						"border-style" : "solid",
						"border-color" : "green"
					}
				}
			}

			return response;
		}

	});
})();