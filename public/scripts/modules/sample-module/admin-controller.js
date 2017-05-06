define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('AdminCtrl', ['$scope', '$log', '$state', 'PredixViewService', '$window', function ($scope, $log, $state, PredixViewService, $window) {
            if(window.sessionStorage.username==undefined){
                $state.go('login');
            }
    }]);
});
