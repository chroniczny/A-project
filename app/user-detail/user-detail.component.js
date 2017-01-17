/**
 * Created by jkwiatkowski on 12.01.2017.
 */
'use strict';


angular.module('userDetail')
    .component('userDetail', {
        templateUrl: 'user-detail/user-detail.template.html',


        controller: ['$http', '$routeParams',
        function UserDetailController($http, $routeParams){

            this.userId = $routeParams.userId;
            var self = this;

            $http.get('Users/'+$routeParams.userId+'.json')
                .then(function(response){
                    self.user = response.data;
                });

        }]
    });