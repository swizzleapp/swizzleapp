'use strict';

angular.module('swizzleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/podcasts', {
        templateUrl: 'views/podcasts.html',
        controller: 'PodcastsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
