app.factory('drFactory', ['$http', function($http) {
  var factory = {};

  factory.getAppointments = function(callback){
    $http.get('/getAps').then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.remove = function(id, user, callback){
    $http.delete('/remove/' + id +'/' + user).then(function(returned_data){
      if(typeof(callback) == "function"){
          callback(returned_data.data);
        }
    })
  }

  return factory;
}]);