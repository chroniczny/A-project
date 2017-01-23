/**
 * Created by jkwiatkowski on 17.01.2017.
 */
'use strict';


angular.module('userNew')
    .component('userNew', {
        templateUrl: 'user-new/user-new.template.html',

        controller: ['$http',
            '$routeParams',
            function UserNewController($http , $routeParams) {
                var self = this;
                self.userId = $routeParams.userId;

                $http.get('Users/NewUser.json')
                    .then(function (response) {
                        self.user = response.data;
                        localStorage.setItem(self.user.name.first + "_" + self.user.name.last, JSON.stringify(self.user));
                        self.user = JSON.parse(localStorage.getItem(self.user.name.first + "_" + self.user.name.last));
                    });

                self.setDetail = function setDetail(user) { // for now: set new data to localStorage
                    self.user.id = self.user.name.first + "_" + self.user.name.last;

                    // localStorage.setItem(self.user.name.first + "_" + self.user.name.last, JSON.stringify(self.user));
                    addUser(self.user);
                    //
                    function addUser() {
                        // var addedUsers = [];
                        var addedUsers = JSON.parse(localStorage.getItem('UsersInStorage'));
                        console.log(addedUsers.length);
                        for (var i = 0; i < addedUsers.length; i++) {
                            if (addedUsers[i].id == self.user.id) {
                                alert("Rejection! User You want to add is already there.");

                                console.log(addedUsers[i].id+" is rejected");
                                console.log(self.user.id+" if rejected");
                                // return;
                            } else {
                                console.log(self.user.id+" if added");
                                addedUsers.push(self.user);
                            }
                        }
                        localStorage.setItem('UsersInStorage', JSON.stringify(addedUsers));
                        self.users = addedUsers;
                        console.log(addedUsers.length);
                        // console.log(self.users);
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