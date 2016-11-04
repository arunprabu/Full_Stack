/// <reference path="../js/angular.min.js" />

var app = angular.module("myApp", []);

app.controller("MyAppCtrl", function($scope){
  $scope.course = "MEAN";

  $scope.days = ["Tue", "Wed", "Thu", "Fri"];

  $scope.books = [
      { name: "JS Design Patterns" },
      { name: "Understanding ES6"}
  ]

  $scope.obj = { 
    appName: "AngularApp",
    appVersion: "1.0.0"
  }

});