/**
 * Created by jkwiatkowski on 17.01.2017.
 */
'use strict';


angular.module('userNew')
    .component('userNew', {
        templateUrl: 'user-new/user-new.template.html',

        controller: ['$http', '$routeParams',
            function UserNewController($http, $routeParams){

                this.userId = $routeParams.userId;
                var self = this;

                $http.get('Users/NewUser.json')
                    .then(function(response){
                        self.user = response.data;
                    });
            }]
    });