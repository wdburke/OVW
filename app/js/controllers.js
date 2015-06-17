/**
 * Created by Earl on 6/16/2015.
 */


var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('../app/js/phonesdata.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);