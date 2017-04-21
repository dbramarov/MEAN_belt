app.controller('usersController', ['$scope','usersFactory','$location', '$cookies', function($scope, usersFactory, $location, $cookies) {
  $scope.messages = [];

  $scope.user = $cookies.get("user_name");

	$scope.login = function(){
		usersFactory.login($scope.person, function(data){
			console.log(data);
            if(data.errors){
	            if(typeof(data.errors) == "object"){
	               	angular.forEach(data.errors, function(v, k){
	                $scope.messages.push(data.errors[k].message);
	                })
	            }
	            else{
	                $scope.messages.push(data.errors);
	                $location.url("/");
	            }
            }
            else{
                $cookies.put("user_name", data.name);
                $location.url("/dr");
            }			
		})
	}
}]);