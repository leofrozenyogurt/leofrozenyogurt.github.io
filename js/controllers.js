'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Blog',
  function($scope, Blog) {
    $scope.blogs = Blog.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('BlogDetailCtrl', ['$scope', '$routeParams', 'Blog', '$sce',
  function($scope, $routeParams, Blog, $sce) {
    $scope.blog = Blog.get({blogId: $routeParams.blogId});

    $scope.renderHtml = function(html_code){
      return $sce.trustAsHtml(html_code);
    };

  }]);

