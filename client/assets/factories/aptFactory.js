app.factory('aptFactory', ['$http', function($http) {
  var factory = {};

  factory.new = function(newApt, user, callback){
  	$http.post('/new/'+user, newApt).then(function(returned_data){
  		if(typeof(callback) == "function"){
  			console.log(returned_data.data)
  			console.log(returned_data)
        	callback(returned_data.data);
        }
  	})
  	.catch(function(err){
   	console.log(err);
    });
  }

  return factory;
}]);