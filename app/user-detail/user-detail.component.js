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

// BETTER VERSION without 'broker'
                self.editDetail = function editDetail(user) { // for now: set new data to localStorage
                    self.user.id = $routeParams.userId;
                    self.user.name.first = self.user.name.first;
                    self.user.name.last = self.user.name.last;

                    self.user.email = self.user.email;
                    self.user.about = self.user.about;

                    localStorage.setItem("'" + $routeParams.userId + "'", JSON.stringify(self.user));

                    editUser(user);
                    function editUser(user) {
                        // var updatedUsers = [];
                        var updatedUsers = JSON.parse(localStorage.getItem('UsersInStorage'));
                        // console.log(updatedUsers+"what I want to play");
                        for (var i = 0; i < updatedUsers.length; i++) {
                            if (updatedUsers[i].id == self.user.id) {
                                alert("Warning! You edit user here.");
                                updatedUsers[i] = self.user;
                                console.log(updatedUsers[i]+" this user should be updated AAAAAAAAAAAAAAAAAAAAAAAA")
                            }
                        }
                        localStorage.setItem('UsersInStorage', JSON.stringify(updatedUsers));
                        // self.users = updatedUsers;
                        console.log(updatedUsers +"what I've done");

                    }

// ====================== first version -  DEPRECATED !!
                    // var editedUser = {
                    //   id: "'" + $routeParams.userId + "'",
                    //     name: {
                    //         first: self.user.name.first,
                    //         last: self.user.name.last
                    //     },
                    //     email: self.user.email,
                    //     about: self.user.about
                    // };
                    // set new data to localStorage -
                    // localStorage.setItem("'" + $routeParams.userId + "'", JSON.stringify(editedUser));
                    // console.log("just checking");

                }


            }]
    });