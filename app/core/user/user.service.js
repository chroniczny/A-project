// /**
//  * Created by jkwiatkowski on 11.01.2017.
//  */
'use strict';

angular.
module('core.user').
factory('Userrr', ['$resource', // creating factory "Userrr" to use in controller
    function($resource) {
        return $resource('users/:userId.json', {}, {
            query: {
                method: 'GET',
                params: {userId: 'users'},
                isArray: true
            }
        });
    }

]);

