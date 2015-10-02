app.controller('indexController', function($scope, $http, routeFactory) {
		$scope.test = 'lel';
		var formObject = [{
			userId: 1,
			id: 1,
			title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
		}, {
			userId: 1,
			id: 2,
			title: "qui est esse",
			body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
		}, {
			userId: 1,
			id: 3,
			title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
			body: "et iusto sed quo iure"
		}];

		for (var i = 0; i < formObject.length; i++) {
			console.log(routeFactory);
		}
	})
	.factory('routeFactory', function ($state) {
		return 'hello!';
	})
	.directive('formTemplates', function() {
		return {
			restrict: 'E',
			replace: 'false',
			scope: false,
			template: '<input type="text" ng-model="hello" placeholder="Type something here!">'
		};
	});
