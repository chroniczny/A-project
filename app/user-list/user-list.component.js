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

                    // self.loadUsers = function loadUsers() {
                        $http.get('users/users.json').then(function (response) {
                            //self.users = response.data; // --> .slice(0,5); ale potem nie wyszukuje wśród wszsytkich

                            // setting data to localStorage in JSON format
                            localStorage.setItem('UsersInStorage', JSON.stringify(response.data));
                        });
                    // };
                    // what is loaded LETS treat as source
                    self.users = JSON.parse(localStorage.getItem('UsersInStorage'));

                 //========= DELETING in VANILLA ========== WORKS!
                    self.deleteUser = function deleteUser(user) {

                        alert('You actually deleted user: '+user.name.first+" "+user.name.last);

                        var newUsers = [];
                        var filteredUsers = self.users;

                         for (var i = 0; i < filteredUsers.length; i++) {
                            if (filteredUsers[i].id != user.id) {
                                newUsers.push(filteredUsers[i]);
                            } else {
                                console.log(filteredUsers[i].id + " IS OUT");
                            }
                        }
                        localStorage.setItem('UsersInStorage', JSON.stringify(newUsers));
                        // console.log(localStorage.getItem('UsersInStorage')); // checkin

                        // after (and for further) deletings our new base for template  is 'newUsers'
                        self.users = newUsers; // WORKS!!!
                    };


             // ______DELETING in Lo__________try try try
             //        self.deleteUser = function deleteUser(user) {
             //            console.log(user.id + " IS OUT");
             //
             //            var newUsersList = JSON.stringify(self.users);
             //            console.log('AAAAAAAAAAA' + newUsersList);
             //            _.remove(newUsersList,function(b){
             //                return b.id == user.id;
             //            });
             //
             //            localStorage.setItem('UsersInStorage', JSON.stringify(newUsersList));
             //            console.log('LOCAL STORAGE HAS: '+localStorage.getItem('UsersInStorage'));
             //        }

                }
            ]

        // ------------ using service and factory ----
        //    ['Userrr',
        //        function UserListController(Userrr) {
        //            var self = this;
        //
        //            self.sortProp = 'name.first'; // filter: sorting results of searching by first name
        //            self.searchValue = '';
        //            self.searchUser = function searchUser() {
        //                self.filterProp = self.searchValue;
        //            };
        //
        //            // take data from json-files and set it to the localStorage by ng-click
        //            // self.dataHunt = function dataHunt() {
        //                // set the data from factory Userrr.query() to the local storage
        //                // var huntedUsers = Userrr.query();
        //                // localStorage.setItem('UserInStorage', JSON.stringify(Userrr.query()));
        //                // view it in console:
        //                // console.log(localStorage.getItem('UserInStorage')); // GIVES ME [] as a Promise
        //            // };
        //
        //            // console.log(JSON.stringify(Userrr.query())); // again I see [] in console
        //
        //            // for templates taking data from localStorage
        //            // self.users = JSON.parse(localStorage.getItem('UserInStorage'));
        //
        //            /////// --- lets see again:
        //
        //            self.users = Userrr.query();


        //}]

    });
