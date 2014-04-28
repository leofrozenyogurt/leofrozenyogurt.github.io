	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			.when('/signup', {
				templateUrl : 'pages/signup.html',
				controller  : 'mainController'
			})

			.when('/organizations', {
				templateUrl : 'pages/organizations.html',
				controller  : 'mainController'
			});

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';

		$(document).ready(function(){
			$('#login').click(function(){
				$('#myModal').modal('show');
			});

			$('#payment').click(function(){
				$('#paymentModal').modal('show');
			});

			$('.red_video').popover({
			offset: 10,
			trigger: 'manual',
			html: true,
			placement: 'top',
			template: '<div class="popover" onmouseover="$(this).mouseleave(function() {$(this).hide();});"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
			}).mouseenter(function(e) {
			$(this).popover('show');
			}).mouseleave(function(e) {
			var _this = this;
			setTimeout(function() {
			if (!$(".popover:hover").length) {
			  $(_this).popover("hide");
			 }
			}, 100);
			});

		});

	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});