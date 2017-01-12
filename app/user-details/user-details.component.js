/**
 * Created by jkwiatkowski on 12.01.2017.
 */
'use strict';


angular.module('userDetails')
    .component('userDetails', {
        templateUrl: 'user-details/user-details.template.html',

        controller: UserListController


// ]
    });

function UserListController() {
    this.users = [
        {
            id: '1234567890',
            age: '40',
            eyeColor: 'blue',
            name: {
                first: 'Winnie',
                last: 'Ballard'
            },
            company: 'LIMOZEN',
            email: 'winnie.ballard@limozen.tv',
            about: 'Sit Lorem labore aliquip laboris reprehenderit nulla adipisicing occaecat tempor ipsum ex minim culpa fugiat. Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'

        },

        {
            id: '1234567891',
            age: '60',
            eyeColor: 'black',
            name: {
                first: 'Winona',
                last: 'Black'
            },
            company: 'LIEN',
            email: 'winona.black@lien.tv',
            about: 'Nulla adipisicing occaecat tempor ipsum ex minim culpa fugiat. Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'

        },
        {
            id: '1234567892',
            age: '6',
            eyeColor: 'green',
            name: {
                first: 'Kacper',
                last: 'Black'
            },
            company: 'LIEN',
            email: 'Kacper.black@lien.tv',
            about: 'Tempor ipsum ex minim culpa fugiat. Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'

        },

        {
            id: '1234567893',
            age: '16',
            eyeColor: 'black',
            name: {
                first: 'Gosia',
                last: 'Black'
            },
            company: 'Roeoe',
            email: 'gosia.black@roeoe.tv',
            about: 'Lorem culpa cillum exercitation reprehenderit sint sint. Mollit cillum id officia proident amet ut id magna. Tempor dolore fugiat irure eiusmod in sit amet id ad non.'

        }
    ];



    this.sortProp = 'name.first'; // filter: sorting results of searching by first name
    this.orderProp = '';

    this.searchUser = function searchUser() {
        this.filterProp = this.orderProp;
    }

}