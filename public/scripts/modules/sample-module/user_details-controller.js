define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('UserDetailsCtrl', ['$scope', '$log', '$state', '$window', 'PredixViewService', function ($scope, $log, $state, $window, PredixViewService) {
          		PredixViewService.getLoginDetails().then(function(values){
          			debugger
          			$scope.userDetails = values;
          		})                 
            }]);
});
