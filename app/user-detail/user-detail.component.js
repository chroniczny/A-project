/**
 * Created by jkwiatkowski on 12.01.2017.
 */
'use strict';


angular.module('userDetail')
    .component('userDetail', {
        templateUrl: 'user-detail/user-detail.template.html',


        controller: ['$http', '$routeParams',
            function UserDetailController($http, $routeParams) {
                var self = this;
                this.userId = $routeParams.userId;

                $http.get('users/' + $routeParams.userId + '.json')
                    .then(function (response) {
                        // self.user = response.data;
                        localStorage.setItem($routeParams.userId, JSON.stringify(response.data));
                        // taking viewing data for templates by using localStorage data
                        self.user = JSON.parse(localStorage.getItem($routeParams.userId));

                    });

                self.editDetail = function editDetail(user) { // for now: set new data to localStorage
                    self.user.id = $routeParams.userId;
                    localStorage.setItem($routeParams.userId, JSON.stringify(self.user));
                    editUser(user);
                    function editUser(user) {
                        var updatedUsers = JSON.parse(localStorage.getItem('UsersInStorage'));
                        for (var i = 0; i < updatedUsers.length; i++) {
                            if (updatedUsers[i].id == self.user.id) {
                                alert("Warning! You edit user here.");
                                updatedUsers[i] = self.user;
                            }
                        }
                        localStorage.setItem('UsersInStorage', JSON.stringify(updatedUsers));
                        // self.users = updatedUsers;
                        console.log(updatedUsers.length +" is how many has been done: user-detail");
                    }
                }
            }]
    });