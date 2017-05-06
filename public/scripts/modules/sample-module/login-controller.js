define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('LoginCtrl', ['$scope', '$log', '$state', 'PredixViewService', '$window', function ($scope, $log, $state, PredixViewService, $window) {
                $scope.login = function(username, password){
                    window.sessionStorage.username = username;
                    window.sessionStorage.password = password;
                    PredixViewService.getLoginDetails().then(function(values){
                        angular.forEach(values, function(val, key){
                            if(username===val.name && password === val.password)
                            {
                                if(val.role =="admin"){
                                    $state.go('admin');
                                }
                                else{
                                    $state.go('user');
                                }
                            }
                        })
                    })
                }
            }]);
});
