'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);


phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'PhoneListCtrl',      
      }).
      when('/blog', {
        templateUrl: 'pages/blog.html',
        controller: 'PhoneListCtrl'
      }).
      when('/blog/:blogId', {
        templateUrl: 'pages/post.html',
        controller: 'BlogDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

