
let app = angular.module('portfolio', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      contoller: 'homeController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'bioController'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'projectController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'resumeController'
    })
    .otherwise({
      redirectTo: '/error'
    })
    $locationProvider.html5Mode(true)
});
