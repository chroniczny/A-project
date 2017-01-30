// /**
//  * Created by jkwiatkowski on 11.01.2017.
//  */
'use strict';

angular.
module('core.user')
    // .factory('Userrr', ['$resource', // creating factory "Userrr" to use in controller
    // function($resource) {
    //     return $resource('users/:userId.json', {}, {
    //         query: {
    //             method: 'GET',
    //             params: {userId: 'users'},
    //             isArray: true
    //         }
    //     });
    // }



    .service('Userrr', function($http){
        var service = {
            getAllUsers: function() {
                return $http.get('https://a-fire.firebaseio.com/.json').then(function (response) {
                    // setting data to localStorage in JSON format
                    localStorage.setItem('UsersInStorage', JSON.stringify(response.data));
                    self.users = JSON.parse(localStorage.getItem('UsersInStorage')); // it is written down cause not using 'var'
                });
            }
            // ,

            // getTheUser: function() {
            //     return
            // }


        };
      return service;

    });






// ]);

