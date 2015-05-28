app.controller('MainController', ['$scope', function($scope) {
	$scope.menu = [
		{
			text: 'Btn1',
			link: '#/'
		},
		{
			text: 'Button 2',
			link: '#/about/'
		},
		{
			text: 'Btn3',
			link: '#/'
		},
		{
			text: 'Button 4',
			link: '#/about/'
		},
		{
			text: 'Btn5',
			link: '#/'
		}
	];

	$scope.footer = [
		{
			text: 'Home',
			link: '#/'
		},
		{
			text: 'About',
			link: '#/about/'
		},
		{
			text: 'Sitemap',
			link: '#/'
		}
	];

	$scope.hiddenMenu = true;

	$scope.hideMenu = function() {
		$scope.hiddenMenu = true;
	}

	$scope.showMenu = function() {
		$scope.hiddenMenu = false;
	}
}]);