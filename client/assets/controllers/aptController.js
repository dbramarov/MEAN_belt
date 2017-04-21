app.controller('aptController', ['$scope','aptFactory','$location', '$cookies', function($scope, aptFactory, $location, $cookies) {
  $scope.messages = [];
  $scope.date = new Date();
  $scope.user = $cookies.get("user_name");

  $scope.cancel = function(){
    $location.url('/dr')
  }

    $scope.newApttt = function(user){
        if($scope.newApt.date <= $scope.date){
            $scope.newApt = {}
            $scope.messages.push("Please enter a future date. Thank you.")
        }
        else{
            aptFactory.new($scope.newApt, user, function(data){
                console.log(data);
                if(data.errors){
                    if(typeof(data.errors) == "object"){
                        angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.error[k].message);
                        })
                        $location.url("/newApt");

                    }
                    else{
                        $scope.messages.push(data.errors);
                        $location.url("/newApt");
                    }
                }
                else{
                    $location.url("/dr");
                }           
            })
        }
    }  
}]);