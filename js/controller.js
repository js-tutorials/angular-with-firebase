/**
 * Created by nnduc on 4/10/16.
 */
angularWithFireBase.controller('mainController', ['$scope', '$firebaseObject','$firebaseArray', function ($scope, $firebaseObject,$firebaseArray) {

	var ref = new Firebase("https://myangular1.firebaseio.com/messages");

	$scope.messages = $firebaseArray(ref);

	$scope.addMessage = function() {

		$scope.messages.$add({
			text: $scope.myMessage
		});

		$scope.myMessage = "";
	};


	// download the data into a local object
	var syncObject = $firebaseObject(ref);

	syncObject.$bindTo($scope, "allMessage");

}]);