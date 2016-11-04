'use strict';

angular.module('myApp.contacts', ['ngRoute', 'ui.grid'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', 'ContactsSvc', function($scope, svc) {
  $scope.contacts = [];
  var promise = svc.getAll();
  promise.then(function(data) {
    $scope.$apply(function() {
      Array.prototype.push.apply($scope.contacts, data);
    });
  });
}])

.service('ContactsSvc', ['$resource', function($resource) {
  this.getAll = function() {
    var promise = new Promise(function(resolve, reject) {
          var Contact = $resource("/contacts");
          Contact.query(function(data) {
            resolve(data);
          });
    });
    return promise;
  };

}]);