app.directive('menu', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/menu.html'
	};
});