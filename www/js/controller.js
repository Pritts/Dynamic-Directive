// app.config(function ($stateProvider, $urlRouterProvider) {
// 		$urlRouterProvider.otherwise('/index');
// 		$stateProvider.state('/index', {
// 			url:'/index',
// 			templateUrl:'formStart.html'
// 		})
// 		.state('formtypeInput', {
// 			url:'/formtypeInput',
// 			templateUrl:'input.html'
// 		})
// 		.state('formtypeText', {
// 			url:'/formtypeText',
// 			templateUrl:'text.html'
// 		})
// 		.state('formtypeDate', {
// 			url:'/formtypeDate',
// 			templateUrl:'date.html'
// 		});
// });
app.controller('indexController', function($scope, $http, routeFactory, $state, $compile) {
		var formObject = [{
			userId: 1,
			id: 1,
			placement: 1,
			templateType: 'Input',
			title: "sunt aut facere repellat",
			body: "quia et suscipit suscipit"
		}, {
			userId: 1,
			id: 2,
			placement: 2,
			templateType: 'Text',
			title: "qui est esse",
			body: "est rerum tempore vitae"
		}, {
			userId: 1,
			id: 3,
			placement: 3,
			templateType: 'Date',
			title: "ea molestias quasi",
			body: "et iusto sed quo iure"
		}, {
			userId: 1,
			id: 4,
			placement: 4,
			templateType: 'pageBreak',
			title: "ea molestias quasi",
			body: "et iusto sed quo iure"
		},{
			userId: 1,
			id: 3,
			placement: 3,
			templateType: 'Text',
			title: "ea molestias quasi",
			body: "et iusto sed quo iure"
		},{
			userId: 1,
			id: 3,
			placement: 3,
			templateType: 'Date',
			title: "ea molestias quasi",
			body: "et iusto sed quo iure"
		},{
			userId: 1,
			id: 3,
			placement: 3,
			templateType: 'Input',
			placeholder:'Type in something',
			title: "ea molestias quasi",
			body: "et iusto sed quo iure"
		}];
		$scope.directiveValues = [];

		$scope.currentPage = 0;
		$scope.maxPages = formObject.length;
		$scope.previousPage = function () {
			$scope.currentPage--;
		};
		$scope.nextPage = function () {
			$scope.currentPage++;
		};
		$scope.formDivider = 0;
		var directiveContainer = angular.element(document.getElementById('container'));
		directiveContainer.append($compile('<div ng-show="currentPage === '+ $scope.formDivider +'" id="page'+ $scope.formDivider +'"></div>')($scope));
		var latestDiv = angular.element(document.getElementById('page'+$scope.formDivider));
		$scope.addNewPage = function () {
			$scope.formDivider++;
			directiveContainer.append($compile('<div ng-show="currentPage === '+ $scope.formDivider +'" id="page'+ $scope.formDivider +'"></div>')($scope));
			latestDiv = angular.element(document.getElementById('page'+$scope.formDivider));
		};
		angular.forEach(formObject, function (value, index) {
			switch (value.templateType) {
				case 'Input':
				latestDiv.append($compile('<input-input></input-input>')($scope));
					break;
				case 'Date':
				latestDiv.append($compile('<date-input></date-input>')($scope));
					break;
				case 'Text':
				latestDiv.append($compile('<Text-input></Text-input>')($scope));
					break;
				case 'pageBreak':
				$scope.addNewPage();
					break;
			}
		});
		angular.forEach(formObject,function (value, index) {
			routeFactory.createRoute(value);
		});
	})
	.factory('routeFactory', function ($state) {
		return {
			createRoute: function (obj) {
				console.log(obj);
			}
		};
	})
	.directive('formTemplates', function() {
		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			template: '<input type="text" ng-model="hello" placeholder="Type something here!">'
		};
	})
	.directive('dateInput', function() {
		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			templateUrl: 'date.html'
		};
	})
	.directive('textInput', function() {
		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			templateUrl: 'text.html'
		};
	})
	.directive('inputInput', function() {
		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			templateUrl: 'input.html'
		};
	});
