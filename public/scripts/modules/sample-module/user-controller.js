define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('UserCtrl', ['$scope', '$log', '$state', '$window', function ($scope, $log, $state, $window) {
                // debugger
                if(window.sessionStorage.username==undefined){
                    // debugger
                    $state.go('login');
                }
            }]);
});
