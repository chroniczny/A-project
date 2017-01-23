/**
 * Created by jkwiatkowski on 17.01.2017.
 */
'use strict';


angular.module('userNew')
    .component('userNew', {
        templateUrl: 'user-new/user-new.template.html',

        controller: ['$http',
            // '$routeParams',
            function UserNewController($http //, $routeParams
         ) {
                var self = this;
                // self.userId = $routeParams.userId;


                $http.get('Users/NewUser.json')
                    .then(function (response) {
                        self.user = response.data;

                    });

                self.setDetail = function setDetail() { // for now: set new data to localStorage
                    self.user.id = self.user.name.first + "_" + self.user.name.last;
                    self.user.name.first = self.user.name.first;
                    self.user.name.last = self.user.name.last;

                    self.user.email = self.user.email;
                    self.user.about = self.user.about;

                    localStorage.setItem(self.user.name.first + "_" + self.user.name.last, JSON.stringify(self.user));
                    addUser(user);

                    function addUser(user) {
                        // var updatedUsers = [];
                        var updatedUsers = JSON.parse(localStorage.getItem('UsersInStorage'));
                        console.log(JSON.parse(updatedUsers));
                        for (var i = 0; i < updatedUsers.length; i++) {
                            if (updatedUsers[i].id == self.user.id) {
                                alert("Rejection! User You want to add is already there.");
                                return;
                            } else {
                                updatedUsers.push(user);
                            }
                        }
                        localStorage.setItem('UsersInStorage', JSON.stringify(updatedUsers));
                        self.users = updatedUsers;
                        console.log(self.users);
                    }


                    // console.log(self.user);
                    // self.newUser = {
                    //     id: self.user.name.first + "_" + self.user.name.last, // but it doesn't change!!
                    //     name: {
                    //         first: self.user.name.first,
                    //         last: self.user.name.last
                    //     },
                    //     email: self.user.email,
                    //     about: self.user.about // it doesn't change too in locStorage!!!
                    // };
                    // set new data to localStorage -
                    // localStorage.removeItem('NewUser');
                    // localStorage.setItem(self.user.name.first + "_" + self.user.name.last, JSON.stringify(newUser)); //
                    // console.log("just checking");
                };


                /////////////////////////////to control submit form
                // self.submitForm = function submitForm(isValid) {
                //
                //     if (isValid) {
                //         setDetail();
                //         alert('Your changes will be saved');
                //     }
                // }


            }]


    });