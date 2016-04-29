(function(){
    angular.module('myApps').directive('appLoader', appLoader);

    function appLoader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'view/layout/loader.html',
            controller: ExampleController
        };

        return directive;
    }

    ExampleController.$inject = ['$scope'];

    function ExampleController($scope) {

    }
})();

