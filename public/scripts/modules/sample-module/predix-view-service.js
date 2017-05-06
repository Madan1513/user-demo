/*global define */
define(['angular', './sample-module'], function (angular, module) {
    'use strict';
    /**
    * PredixViewService is a sample angular service that integrates with Predix View Service API
    */
    module.factory('PredixViewService', ['$http', '$q', function ($http, $q) {
        return {
            // baseUrl: '/api/view-service',
            getLoginDetails: function (tags) {
                var deferred = $q.defer();
                $http.get("../../../../data/user_detail.json")
                    .then(function (res) {
                        deferred.resolve(res.data);
                    },
                    function () {
                        deferred.reject('Error fetching decks with tags ' + tags);
                    });
                return deferred.promise;
            }
        };
    }]);
});
