var app = angular.module('myApp', ['ngResource', 'ngRoute']);

app.controller('TodoController', ['$scope', '$location',
  function($scope, $location) {
    $scope.myAge = 30;
    $scope.incrementAge = function() {
      $scope.myAge += 1;
    };
  }
]);