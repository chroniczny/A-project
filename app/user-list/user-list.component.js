/**
 * Created by jkwiatkowski on 11.01.2017.
 */
angular.
module('app').
component('userList', {
    template:
    '<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">' +
    '<h4 class="sub-header">Users</h4>' +
    '<div class="row placeholders">' +
    '<div class="row">' +
    '<input ng-model=""/>' +
    '<button class="btn">Search</button>' +
    '<button class="btn">Add user</button>' +
'</div>' +
'</div>' +
'<div class="row">' +
    '<ul class="users">' +
    '<li ng-repeat="user in Users" class="thumbnail">' +
    '<a href="#" class="thumb">' +
    '<img ng-src="{{}}" alt="{{}}"/>' +
    '</a>' +
    '<a href="#">{{users.name.first + users.name.last}}</a>' +
'<p>{{users.email}}</p>' +
'</li>' +
'</ul>' +
        '<button class="btn-success">Pagination</button>' +
'</div>' +
'<!--<button class="btn-success">SOME BUTTON</button>-->' +
'</div>',

    controller:
        // ['UserListController',
        function UserListController() {
            this.users = [
                {
                    id : '1234567890',
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
                    id : '1234567891',
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
                    id : '1234567892',
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
                    id : '1234567893',
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
        }
    // ]
});