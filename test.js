// Code goes here

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl: 'home.html',
    controller: 'homeController'
  })

 
  .when('/posts/:postId', {
    templateUrl: 'post.html',
    controller: 'postController',
    resolve : {
      post : function(Posts,$route){
        console.log($route.current.params.postId)
        return Posts.getPostById($route.current.params.postId)
      }
    }
  })

  // route for the contact page
  .when('/posts', {
    templateUrl: 'posts.html',
    controller: 'postsController',
    resolve : {
      posts : function(Posts){
        return Posts.getPosts();
      }
    }
  });

});


scotchApp.run(function(Posts) {

  Posts.getPosts().then(function(posts) {
    console.log(posts)
  })

})


//factory that encompasses all Post data stuff. eg - its your "Model Class"

scotchApp.factory('Posts', function($http, $q) {

  //posts will get stored in here.
  var posts;

  //function that loads posts from server or locally, returns a promise;
  function _getPosts() {

    //check if we've already loaded them
    if (posts) {

      //$q.when will 'promisize', so we can use it consistently from the ctrls
      return $q.when(posts);
    }

    //otherwise go fetch 'em
    posts = [];

    //load posts from json file
    //return the promise
    return $http.get('posts.json').then(function(response) {

      //grab the response data (the json) and push each into the array
      //you could transform them here if needed.
      return response.data.map(function(post) {
        //push into local
        posts.push(post);
        //return
        return post;
      })
    })

  }


  function _getPostById(id) {
    //create your own deferred (promise)
    //probbaly overkill here, but makes it easier to swap out to a proper system that's async (eg an API)
    var foundPost = $q.defer();

    //loop through posts
    for (var i = 0; i < posts.length; i++) {
      //if we find a matching one...
      if (posts[i].id == id) {

        //resolve the promise
        foundPost.resolve(posts[i]);
        break;
      }
    }

    //return the deferred's promise;
    return foundPost.promise;
  }


  //public API for the factory. exposes 2 methods:

  return {

    getPosts: _getPosts,
    getPostById: _getPostById

  }

})



scotchApp.controller('homeController', function($scope) {
 


});

// create the controller and inject Angular's $scope
scotchApp.controller('postController', function($scope,post) {

$scope.post = post;

});

scotchApp.controller('postsController', function($scope,posts) {
  $scope.posts = posts;
});

scotchApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});