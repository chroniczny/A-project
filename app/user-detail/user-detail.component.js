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
                console.log(self.userId); //

                // ==== 1. VERSION ===================================
                // $http.get('users/' + $routeParams.userId + '.json')
                //     .then(function (response) {
                //         // self.user = response.data;
                //         localStorage.setItem($routeParams.userId, JSON.stringify(response.data));
                //         // taking viewing data for templates by using localStorage data
                //         self.user = JSON.parse(localStorage.getItem($routeParams.userId));
                //
                //     });
                //
                // self.editDetail = function editDetail(user) { // for now: set new data to localStorage
                //     self.user.id = $routeParams.userId;
                //     localStorage.setItem($routeParams.userId, JSON.stringify(self.user));
                //     editUser(user);
                //     function editUser(user) {
                //         var updatedUsers = JSON.parse(localStorage.getItem('UsersInStorage'));
                //         for (var i = 0; i < updatedUsers.length; i++) {
                //             if (updatedUsers[i].id == self.user.id) {
                //                 alert("Warning! You edit user here.");
                //                 updatedUsers[i] = self.user;
                //             }
                //         }
                //         localStorage.setItem('UsersInStorage', JSON.stringify(updatedUsers));
                //         // self.users = updatedUsers;
                //         console.log(updatedUsers.length +" elements: user-detail");
                //     }
                // };

                // ==== 2. VERSION ===================================
                //////////// to PUT a NEW USER into base ......
                // $http.get('https://a-fire.firebaseio.com/.json').then(function (response) {
                //     // setting data to localStorage in JSON format
                //     localStorage.setItem('UsersInStorage', JSON.stringify(response.data));
                //     for (var i = 0; i < response.data.length; i++) {
                //         if (response.data[i].id === self.userId) {
                //
                //             // console.log(self.users[i].name.first);
                //             self.user = //self.users[i];
                //                 {
                //                 name: {
                //                     first: self.users[i].name.first,
                //                     last: self.users[i].name.last
                //                 },
                //                 email: self.users[i].email,
                //                 about: self.users[i].about
                //             };
                //             localStorage.setItem(response.data[i].id, JSON.stringify(self.user));
                //         }
                //     }
                // });
                // // what is loaded LETS treat as source
                // self.users = JSON.parse(localStorage.getItem('UsersInStorage'));
                // self.user = JSON.parse(localStorage.getItem(self.userId));
                // console.log(self.user.id);
                //
                // self.editDetail = function editDetail(user) {
                //     var editedUsers = [];
                //
                //     for (var i = 0; i < self.users.length; i++) {
                //         if (self.users[i].id === self.user.id) {
                //             self.users[i] = {
                //                 name: {
                //                     first: self.user.name.first,
                //                     last: self.user.name.last
                //                 },
                //                 email: self.users.email,
                //                 about: self.users.about
                //             };
                //
                //
                //         }
                //         editedUsers.push(self.users[i]);
                //     }
                //     localStorage.setItem('UsersInStorage', JSON.stringify(editedUsers));
                //     $http.put('https://a-fire.firebaseio.com/.json', editedUsers);
                //
                // };

                // $http.post('users/' + $routeParams.userId + '.json', self.user); // should create new file 'self.user.id'.json
                // $http.post('https://a-fire.firebaseio.com/.json', updatedUsers); // changes information about whole collection

                /////////////////////////////to control submit form
                // self.submitForm = function submitForm(isValid) {
                //     if (isValid) {
                //         editDetail(user);
                //         alert('Your changes will be edited');
                //     }
                // }


            }]
    });