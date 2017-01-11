'use strict';

angular.
module('app').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/Users', {
            template: '<user-list></user-list>'
        }).
        // when('/phones/:phoneId', {
        //     template: '<phone-detail></phone-detail>'
        // }).
        otherwise('/users');
    }
]);/**
 * Created by jkwiatkowski on 11.01.2017.
 */
