/**
 * Created by Earl on 6/16/2015.
 */


var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.phones = [
            {
                "SplitPay" : "Sue",
                "DPID" : "456867567",
                "OrderNumber" : "43242341",
                "DCN" : "66456451",
                "CoNum" : "1678678",
                "Source" : "DOMS",
                "OrderDate" : "7/1/2015",
                "DellStatus" : "Good",
                "DFSStatus" : "Good",
                "AuthCode" : "AC",
                "DPAAmt" : "1000",
                "TotalAmt" : "150"
            },
            {
                "SplitPay" : "Bob",
                "DPID" : "1232332",
                "OrderNumber" : "34534",
                "DCN" : "123123",
                "CoNum" : "656756756",
                "Source" : "DOMS",
                "OrderDate" : "7/2/2015",
                "DellStatus" : "Good",
                "DFSStatus" : "Bad",
                "AuthCode" : "AC",
                "DPAAmt" : "5000",
                "TotalAmt" : "650"
            }
        ];

/*        $http.get("../app/js/phonesdata.json").success(function(data) {
            $scope.phones = data;
        });*/

        $scope.orderProp = 'age';

        $scope.showModal = false;
        $scope.toggleMyModal = function(){
            $scope.showModal = !$scope.showModal;
        };

    }]);

