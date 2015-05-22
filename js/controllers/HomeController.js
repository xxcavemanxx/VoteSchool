app.controller('HomeController', ['$scope', function($scope) {
	$scope.menu = [
		{
			text: 'Btn1',
			link: '/'
		},
		{
			text: 'Button 2',
			link: '/'
		},
		{
			text: 'Btn3',
			link: '/'
		},
		{
			text: 'Button 4',
			link: '/'
		},
		{
			text: 'Btn5',
			link: '/'
		}
	];

	$scope.footer = [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'About',
			link: '/'
		},
		{
			text: 'Sitemap',
			link: '/'
		}
	];
}]);