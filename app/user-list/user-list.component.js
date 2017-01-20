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
                    // what is loaded treat as source
                    self.users = JSON.parse(localStorage.getItem('UsersInStorage'));

                    self.deleteUser = function deleteUser(user) {
                        var newUsers = [];
                        var filterinUsers = self.users;

                        for (var i = 0; i < filterinUsers.length; i++) {
                            if (filterinUsers[i].id != user.id) {
                                newUsers.push(filterinUsers[i]);
                            } else {
                                console.log(filterinUsers[i].id + " IS OUT");
                            }
                        }

                        localStorage.setItem('UsersInStorage', JSON.stringify(newUsers));
                        console.log(localStorage.getItem('UsersInStorage'));
                        // filterinUsers = newUsers;
                    }


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

//function UserListController() {
//    this.Users =
//        //Factory.query();
//        [
//        {
//            id: '1234567890',
//            age: '40',
//            eyeColor: 'blue',
//            name: {
//                first: 'Winnie',
//                last: 'Ballard'
//            },
//            company: 'LIMOZEN',
//            email: 'winnie.ballard@limozen.tv',
//            about: 'Sit Lorem labore aliquip laboris reprehenderit nulla adipisicing occaecat tempor ipsum ex minim culpa fugiat. Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'
//
//        },
//
//        {
//            id: '1234567891',
//            age: '60',
//            eyeColor: 'black',
//            name: {
//                first: 'Winona',
//                last: 'Black'
//            },
//            company: 'LIEN',
//            email: 'winona.black@lien.tv',
//            about: 'Nulla adipisicing occaecat tempor ipsum ex minim culpa fugiat. Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'
//
//        },
//        {
//            id: '1234567892',
//            age: '6',
//            eyeColor: 'green',
//            name: {
//                first: 'Kacper',
//                last: 'Black'
//            },
//            company: 'LIEN',
//            email: 'Kacper.black@lien.tv',
//            about: 'Tempor ipsum ex minim culpa fugiat. Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'
//
//        },
//
//        {
//            id: '1234567893',
//            age: '16',
//            eyeColor: 'black',
//            name: {
//                first: 'Gosia',
//                last: 'Black'
//            },
//            company: 'Roeoe',
//            email: 'gosia.black@roeoe.tv',
//            about: 'Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'
//
//        }
//    ];
//
//}
