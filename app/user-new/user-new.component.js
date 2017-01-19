/**
 * Created by jkwiatkowski on 17.01.2017.
 */
'use strict';


angular.module('userNew')
    .component('userNew', {
        templateUrl: 'user-new/user-new.template.html',

        controller: ['$http', '$routeParams',
            function UserNewController($http, $routeParams) {

                this.userId = $routeParams.userId;
                var self = this;

                $http.get('Users/NewUser.json')
                    .then(function (response) {
                        self.user = response.data;
                    });

                self.setDetail = function setDetail() { // for now: set new data to localStorage
                    var newUser = {
                        id: self.user.name.first + "_"+ self.user.name.last,
                        name: {
                            first: self.user.name.first,
                            last: self.user.name.last
                        },
                        email: self.user.email,
                        about: self.user.about
                    };
                    // set new data to localStorage -
                    localStorage.setItem( newUser.id ,JSON.stringify(newUser));
                    // console.log("just checking");
                }



            }]


    });