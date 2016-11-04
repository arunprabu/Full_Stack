'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.title = "My title";

  $scope.changeMe = function() {
    $scope.title = $scope.titleText;
  }
  $scope.$watch("title", function() {
    $scope.titleText = $scope.title;
  });

var counter = 0;
  document.getElementById("btn").onclick = function() {
    
    $scope.$apply(function() {
      $scope.title = "button cliecked" + counter;
      counter++;
    });
    console.log("button clicked");
  };
}]);