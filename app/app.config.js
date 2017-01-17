'use strict';

angular.

module('app').

config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/users', {
            template: '<user-list></user-list>'
        })
            .when('/users/:userId', {
            template: '<user-detail></user-detail>'
        })
            .when('/users/newUser', {
                template: '<user-new></user-new>'
            })
            .otherwise('/users');
    }
]);


