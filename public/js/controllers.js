'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      console.log(data);
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).

  controller('MyCtrl1', function ($scope, $http, $filter) {
    // write Ctrl here
    $scope.query = {};
    $scope.queryBy = "$";
    $scope.textArea = null;

    $scope.getData = function (comp, query) {
      $scope.queryData = $filter('filter')(comp, query);
     
    };

    $scope.btnSend = function(){
      
      $http({
        method: 'POST',
        url: '/api/send',
        data: {data:$scope.queryData, message:$scope.textArea}

      }).
      success(function (data, status, headers, config) {
        console.log("sukses");
        console.log(data);
      }).
      error(function (data, status, headers, config) {
        console.log("error");
      });
    }

    $http({
      method: 'GET',
      url: '/api/list'
    }).
    success(function (data, status, headers, config) {
      $scope.comp = data;
      console.log(data);
    }).
    error(function (data, status, headers, config) {
      $scope.comp = 'Error!';
    });
  }).

  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
