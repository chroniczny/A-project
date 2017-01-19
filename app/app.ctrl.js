'use strict';

angular.module('app')
    .controller('AppCtrl', function () {
        var app = this;

        this.categories = [
            {name: 'USERS', id: 'menu1'},
            {name: 'DOCUMENTS', id: 'menu2'}
        ]
    });