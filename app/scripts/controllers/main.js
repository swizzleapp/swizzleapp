'use strict';

angular.module('swizzleApp')
  .controller('MainCtrl', function ($scope, $location) {

  	$scope.activeView = null;

    $scope.go = function go(location) {
    	$scope.activeView = location;
    	$location.url(location);
    };
  });
