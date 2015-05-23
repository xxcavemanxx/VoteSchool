var app = angular.module('VoteSchool', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/home.html'
		})
		.when('/about/', {
			controller: 'MainController',
			templateUrl: 'views/about.html',
		})
		.otherwise({
			redirectTo: '/'
		});
});