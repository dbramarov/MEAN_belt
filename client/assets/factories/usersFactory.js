app.factory('usersFactory', ['$http', function($http) {
  var factory = {};

  factory.login = function(newUser, callback){

  	$http.post('/login', newUser).then(function(returned_data){
  		if(typeof(callback) == "function"){
        	callback(returned_data.data);
        }
  	})
  	.catch(function(err){
   	console.log(err);
    });
  }

  return factory;
}]);