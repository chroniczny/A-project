/**
 * Created by jkwiatkowski on 12.01.2017.
 */
'use strict';


angular.module('userDetail')
    .component('userDetail', {
        templateUrl: 'user-detail/user-detail.template.html',


        controller: ['$http', '$routeParams',
            function UserDetailController($http, $routeParams) {

                this.userId = $routeParams.userId;
                var self = this;

                $http.get('users/' + $routeParams.userId + '.json')
                    .then(function (response) {
                        // self.user = response.data;

                        localStorage.setItem("'" + $routeParams.userId + "'", JSON.stringify(response.data));
                        //viewing full localStorage in console
                        // console.log(localStorage.getItem("'" + $routeParams.userId + "'"));

                        // taking viewing data for templates by using localStorage data
                        self.user = JSON.parse(localStorage.getItem("'" + $routeParams.userId + "'"));

                        //cleaning localStorage from this used item:
                        // localStorage.removeItem("'" + $routeParams.userId + "'", JSON.stringify(response.data));

                    });


                self.editDetail = function editDetail() { // for now: set new data to localStorage
                    var editedUser = {
                      id: "'" + $routeParams.userId + "'",
                        name: {
                            first: self.user.name.first,
                            last: self.user.name.last
                        },
                        email: self.user.email,
                        about: self.user.about
                    };
                    // set new data to localStorage -
                    localStorage.setItem($routeParams.userId ,JSON.stringify(editedUser));
                    // console.log("just checking");
                }



            }]
    });