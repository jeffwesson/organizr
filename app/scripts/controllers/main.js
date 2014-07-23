'use strict';

/**
 * @ngdoc function
 * @name organizrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the organizrApp
 */
angular.module('organizrApp')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
