'use strict';

angular.

module('app').

config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/Users', {
            template: '<user-list></user-list>'
        })
            .when('/Users/:userId', {
            template: '<user-detail></user-detail>'
        })
            .when('/Users/NewUser', {
                template: '<user-new></user-new>'
            })
            .otherwise('/Users');
    }
]);


