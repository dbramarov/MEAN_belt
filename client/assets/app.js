var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
		})
		.when('/dr', {
			templateUrl: 'partials/appointments.html',
		})
		.when('/newApt', {
			templateUrl: 'partials/newApt.html',
		})
		.otherwise({
			redirectTo: '/'
		})	
});