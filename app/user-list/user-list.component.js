/**
 * Created by jkwiatkowski on 11.01.2017.
 */
'use strict';

angular.module('app')
    .component('userList', {
        templateUrl: 'user-list/user-list.template.html',

        controller: //  --- before SERVICE and FACTORY ----
            ['$http',
                function UserListController($http) {
                    var self = this;
                    self.sortProp = 'name.first'; // filter: sorting results of searching by first name
                    self.searchValue = '';
                    self.searchUser = function searchUser() {
                        self.filterProp = self.searchValue;
                    };
                    //     $http.get('users/users.json').then(function (response) {
                    $http.get('https://a-fire.firebaseio.com/.json').then(function (response) {
                        // setting data to localStorage in JSON format
                        localStorage.setItem('UsersInStorage', JSON.stringify(response.data));
                        self.users = JSON.parse(localStorage.getItem('UsersInStorage')); // it is written down cause not using 'var'
                    });
                    // what is loaded LETS treat as source


                    //========= DELETING in VANILLA ========== WORKS!
                    self.deleteUser = function deleteUser(user) { // thanks angular scope it is known which user is clicked

                        alert("You've just deleted user: " + user.name.first + " " + user.name.last);

                        var filteredUsers = self.users; // users in localStorage

                    //// ver. 1.
                        // var newUsers = [];
                        // for (var i = 0; i < filteredUsers.length; i++) {
                        //     if (filteredUsers[i].id != user.id) { // user means: clicked/chosen user
                        //         newUsers.push(filteredUsers[i]);
                        //         console.log('its not '+i+" item")
                        //     } else {
                        //         console.log(filteredUsers[i].id + " IS OUT");
                        //         var indexOut = i;
                        //     }
                        // }
                        // // deleting this element, but in firebase left a gap in indexing!!! - depreciated
                        // // $http.delete('https://a-fire.firebaseio.com/'+ indexOut+'.json');
                        //
                        // // this is why It's better to:
                        // // change information about whole collection
                        // $http.put('https://a-fire.firebaseio.com/.json', filteredUsers);
                        //
                        // localStorage.setItem('UsersInStorage', JSON.stringify(newUsers));
                        // localStorage.removeItem(filteredUsers[indexOut].id);


                     //// ver. 2. --- USING Lo -------------------
                        _.remove(filteredUsers, function (b) {
                            return b.id == user.id;
                        });
                        console.log(user.id + " IS OUT by Lo");

                        // ... change information about whole collection
                        $http.put('https://a-fire.firebaseio.com/.json', filteredUsers);
                        localStorage.setItem('UsersInStorage', JSON.stringify(filteredUsers));
                        localStorage.removeItem(user.id); // clean localStorage

                    };
                }
            ]

        //// ------------ using service and factory ----

        // ['Userrr',
        //     function UserListController(Userrr) {
        //         var self = this;
        //
        //         self.sortProp = 'name.first'; // filter: sorting results of searching by first name
        //         self.searchValue = '';
        //         self.searchUser = function searchUser() {
        //             self.filterProp = self.searchValue;
        //         };
        //
        //
        //         var filteredUsers = Userrr.getAllUsers(); // users in localStorage
        //         self.deleteUser = function deleteUser(user) { // thanks angular scope it is known which user is clicked
        //             alert("You've just deleted user: " + user.name.first + " " + user.name.last);
        //
        //             _.remove(filteredUsers, function (b) {
        //                 return b.id == user.id;
        //             });
        //             console.log(user.id + " IS OUT by Lo");
        //             localStorage.setItem('UsersInStorage', JSON.stringify(filteredUsers));
        //             localStorage.removeItem(user.id); // clean localStorage
        //
        //             $http.put('https://a-fire.firebaseio.com/.json', filteredUsers); // changes information about whole collection
        //             // // to delete file with chosen USER by user.id from the 'users' location
        //             // $http.delete('https://a-fire.firebaseio.com/.json'+user.id+'.json');
        //         };
        //     }]

    });
