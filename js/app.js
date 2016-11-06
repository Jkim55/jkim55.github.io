
let app = angular.module('portfolio', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      contoller: 'homeController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'bioController'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'projectController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'resumeController'
    })
    .otherwise({
      redirectTo: '/error'
    })
    $locationProvider.html5Mode(true)
});
