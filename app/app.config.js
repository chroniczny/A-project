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

            .when('/users/newUser', {
                template: '<user-new></user-new>'
            })

            .when('/users/:userId', {
                template: '<user-detail></user-detail>'
            })

            .otherwise('/users');
    }
]);


