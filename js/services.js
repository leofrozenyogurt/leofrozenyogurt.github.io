'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Blog', ['$resource',
  function($resource){
    return $resource('blogs/:blogId.json', {}, {
      query: {method:'GET', params:{blogId:'blogs'}, isArray:true}
    });
  }]);
