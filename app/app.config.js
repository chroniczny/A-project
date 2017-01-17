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
                // template: '<p>ZZZZZZZZZZZZZZZZ</p>'
            template: '<user-detail></user-detail>'
            // templateUrl : 'user-detail/user-detail.template.html'
        })
            .otherwise('/Users');
    }
]);


