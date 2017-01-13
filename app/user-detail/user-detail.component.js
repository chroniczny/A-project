/**
 * Created by jkwiatkowski on 12.01.2017.
 */
'use strict';


angular.module('userDetail')
    .component('userDetail', {
        templateUrl: 'user-detail/user-detail.template.html',

        controller: UserDetailController


// ]
    });

function UserDetailController() {
    var newUser = this;
    // newUser.user = {};

    newUser.addUser = function(user) {
        users.push(newUser.user);
    };





}