app.controller('drController', ['$scope','drFactory','$location', '$cookies', function($scope, drFactory, $location, $cookies) {
  $scope.messages = [];
  $scope.aps = {};
  $scope.errors = {};

  $scope.user = $cookies.get("user_name");

	var getAps = function(){
		drFactory.getAppointments(function(data){
			$scope.aps = data;
		})
	}
	getAps()  

    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        $location.url("/");
    }	

    $scope.newApt = function(){
    	$location.url('/newApt')
    }

    $scope.removeApt = function(id){
    	drFactory.remove(id, $scope.user, function(data){
			if(data.error){	    
	            $scope.errors = data;

            }
            else{
            	$scope.errors = {};
            	getAps() 
            }    		
    	 
    	})
    	
    }
}]);