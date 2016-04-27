(function () {
    "use strict";
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApps']);
    });

    //module for myApp decide route/controller/service/directive
    angular.module('myApps', ['ngCookies', 'ngRoute', 'fraction-slider']);

    angular.module('myApps').constant('constantForDynamicChange', {
        ORDER_CREATED: 'event_order_created',
        INVENTORY_DEPLETED: 'event_inventory_depleted'
    });

    angular.module('myApps').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'src/view/home/home.html',
                controller: 'homeController',
                access: {
                    requiresBackground: true,
                    requiresMenuBar: true,
                    requiresFooter: true
                }
            })
            .when('/login', {
                templateUrl: 'src/view/login/login.html',
                controller: 'loginController',
                controllerAs: 'login',
                access: {
                    requiresBackground: true,
                    requiresMenuBar: false,
                    requiresFooter: false
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
        //$locationProvider.html5Mode(true); //For Remove #
    }

    angular.module('myApps').run(run);

    run.$inject = ['$rootScope', '$location', '$cookies'];

    function run($rootScope, $location, $cookies) {
        $rootScope.$on('$routeChangeStart', function (event, next) {

            $("#loader").fadeIn();
            /*var userData = $cookies.getObject('userData');

             $rootScope.authenticated = false;
             if (userData) {
             $rootScope.authenticated = true;

             }
             else {
             var nextUrl = next.$$route.originalPath;

             if (nextUrl == '/login' || nextUrl == '/home') {
             }
             else {
             $location.path("/login");
             }
             }*/

            if (next.access.requiresMenuBar !== undefined) {
                if (next.access.requiresMenuBar === false) {
                    $("#menuBar").fadeOut();
                }
                else {
                    $("#menuBar").fadeIn();
                }
            }

            if (next.access.requiresFooter !== undefined) {
                if (next.access.requiresFooter === false) {
                    $("#footer").fadeOut();
                }
                else {
                    $("#footer").fadeIn();
                }
            }

            if (next.access.requiresBackground !== undefined) {
                if (next.access.requiresBackground === false) {
                    $("#pageWrapper").fadeOut();
                }
                else {
                    $("#pageWrapper").fadeIn();
                }
            }
        });

    }


})();
