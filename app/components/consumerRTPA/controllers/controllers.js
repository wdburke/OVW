/**
 * Created by Earl on 6/16/2015.
 */


var myControllers = angular.module('myControllers', []);


myControllers.controller('ConsumerHomeAccountsInWorkspaceCtrl', ['$scope', '$http', '$log', '$state', function ($scope, $http, $log, $state) {

    $scope.showMe = function(){
        $state.go('orderHistoryList');
    };


    $scope.ConsumerHomeAccountsInWorkspaceGridOptions = {
        showFooter: false,
        enableSorting: true,
        multiSelect: false,
        enableFiltering: false,
        enableRowSelection: true,
        enableSelectAll: false,
        enableRowHeaderSelection: false,
        enableGridMenu: false,
        noUnselect: true,
        onRegisterApi: function (gridApi){
            $scope.gridApi = gridApi;
        }

    }

    $scope.ConsumerHomeAccountsInWorkspaceGridOptions.columnDefs = [
        { name: 'AccountNumber', enableCellEditOnFocus:false, displayName:'Account Number' },
        { name: 'AccountType', enableCellEditOnFocus:false, displayName:'Account Type' },
        { name: 'CustomerName', enableCellEditOnFocus:false, displayName:'Customer Name' },
        { name:'Reload', cellTemplate:'<div><button ng-click="grid.appScope.showMe()">Reload</button></div>'},
        { name:'View', cellTemplate:'<div><button ng-click="grid.appScope.showMe()">View</button></div>'},
        { name:'Close', cellTemplate:'<div><button ng-click="grid.appScope.showMe()">Close</button></div>'},
    ];

    var millisecondsToWait = 100;
    setTimeout(function() {
        $scope.ConsumerHomeAccountsInWorkspaceGridOptions.data = [
            {
                "AccountNumber": "567445634",
                "AccountType": "DPA",
                "CustomerName": "Earl Andrews",
                "1": "1",
                "2": "2",
                "3": "3"
            },
            {
                "AccountNumber": "87658675674",
                "AccountType": "DPA",
                "CustomerName": "Bruce Lee",
                "1": "1",
                "2": "2",
                "3": "3"
            }
        ];
    }, millisecondsToWait);

}]);

myControllers.controller('ConsumerHomeCreditApplicationsInWorkspaceCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {

    $scope.showMe2 = function(){
        alert('Hey');
    };

    $scope.ConsumerHomeCreditApplicationsInWorkspaceGridOptions = {
        showFooter: false,
        enableSorting: true,
        multiSelect: false,
        enableFiltering: false,
        enableRowSelection: true,
        enableSelectAll: false,
        enableRowHeaderSelection: false,
        enableGridMenu: false,
        noUnselect: true,
        onRegisterApi: function (gridApi){
            $scope.gridApi = gridApi;
        }

    }

    $scope.ConsumerHomeCreditApplicationsInWorkspaceGridOptions.columnDefs = [
        { name: 'AccountNumber', enableCellEditOnFocus:false, displayName:'Account Number' },
        { name: 'AccountType', enableCellEditOnFocus:false, displayName:'Account Type' },
        { name: 'CustomerName', enableCellEditOnFocus:false, displayName:'Customer Name' },
        { name:'Reload', cellTemplate:'<div><button ng-click="grid.appScope.showMe2()">Reload</button></div>'},
        { name:'View', cellTemplate:'<div><button ng-click="grid.appScope.showMe2()">View</button></div>'},
        { name:'Close', cellTemplate:'<div><button ng-click="grid.appScope.showMe2()">Close</button></div>'}
    ];

    var millisecondsToWait = 100;
    setTimeout(function() {
        $scope.ConsumerHomeCreditApplicationsInWorkspaceGridOptions.data = [
            {
                "AccountNumber": "567445634",
                "AccountType": "DPA",
                "CustomerName": "Earl Andrews",
                "1": "1",
                "2": "2",
                "3": "3"
            },
            {
                "AccountNumber": "87658675674",
                "AccountType": "DPA",
                "CustomerName": "Bruce Lee",
                "1": "1",
                "2": "2",
                "3": "3"
            }
        ];
    }, millisecondsToWait);

}]);

myControllers.controller('treeCtrl', ['$scope', '$filter',
    function($scope, $filter) {

        //$scope.remove = function(scope) {
        //    scope.remove();
        //};
        //
        $scope.newSubItem = function(scope) {
            var nodeData = scope.$modelValue;
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                nodes: []
            });
        };

        $scope.visible = function(item) {
            if ($scope.query && $scope.query.length > 0
                && item.title.indexOf($scope.query) == -1) {
                return false;
            }
            return true;
        };

        $scope.findNodes = function(){

        };

        $scope.data = [{
            "id": 1,
            "title": "node1",
            "nodes": [
                {
                    "id": 11,
                    "title": "node1.1",
                    "nodes": [
                        {
                            "id": 111,
                            "title": "node1.1.1",
                            "nodes": []
                        }
                    ]
                },
                {
                    "id": 12,
                    "title": "node1.2",
                    "nodes": []
                }
            ],
        }, {
            "id": 2,
            "title": "node2",
            "nodes": [
                {
                    "id": 21,
                    "title": "node2.1",
                    "nodes": []
                },
                {
                    "id": 22,
                    "title": "node2.2",
                    "nodes": []
                }
            ],
        }, {
            "id": 3,
            "title": "node3",
            "nodes": [
                {
                    "id": 31,
                    "title": "node3.1",
                    "nodes": []
                }
            ],
        }, {
            "id": 4,
            "title": "node4",
            "nodes": [
                {
                    "id": 41,
                    title: "node4.1",
                    "nodes": []
                }
            ],
        }];
    }
]);


myControllers.controller('OrderListCtrl', ['$scope', '$http', '$interval', '$modal', '$log',
    function ($scope, $http, $interval, $modal, $log) {

        $scope.myAppScopeProvider = {

            showInfo : function(row) {
                var modalInstance = $modal.open({
                    controller: 'InfoController',
                    templateUrl: 'ngTemplate/infoPopup.html',
                    resolve: {
                        selectedRow: function () {
                            return row.entity;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $log.log('modal selected Row: ' + selectedItem);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }
        }

       $scope.gridOptions = {
            showFooter: false,
            enableSorting: true,
            multiSelect: false,
            enableFiltering: true,
            enableRowSelection: true,
            enableSelectAll: false,
            enableRowHeaderSelection: false,
            enableGridMenu: true,
            noUnselect: true,
            onRegisterApi: function (gridApi){
                $scope.gridApi = gridApi;
            },
           appScopeProvider: $scope.myAppScopeProvider,
           rowTemplate: "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
       }

        $scope.gridOptions.columnDefs = [
            { name: 'SplitPay', enableCellEditOnFocus:false, displayName:'Split Pay' },
            { name: 'DPID', enableCellEditOnFocus:false, displayName:'DPID' },
            { name: 'OrderNumber', enableCellEditOnFocus:false, displayName:'Order Number' },
            { name: 'DCN', enableCellEditOnFocus:false, displayName:'DCN' },
            { name: 'CoNum', enableCellEditOnFocus:false, displayName:'Co Num' },
            { name: 'Source', enableCellEditOnFocus:false, displayName:'Source'},
            { name: 'OrderDate', enableCellEditOnFocus:false, displayName:'Order Date'},
            { name: 'DellStatus', enableCellEditOnFocus:false, displayName:'Dell Status'},
            { name: 'DFSStatus', enableCellEditOnFocus:false, displayName:'DFS Status' },
            { name: 'AuthCode', enableCellEditOnFocus:false, displayName:'Auth Code' },
            { name: 'DPAAmt', enableCellEditOnFocus:false, displayName:'DPAAmt' },
            { name: 'TotalAmt', enableCellEditOnFocus:false, displayName:'TotalAmt' }
       ];

        var millisecondsToWait = 500;
        setTimeout(function() {
            $scope.gridOptions.data = [
                {
                    "SplitPay": "Sue",
                    "DPID": "456353522",
                    "OrderNumber": "6785674564",
                    "DCN": "456867567",
                    "CoNum": "1678678",
                    "Source": "Phone",
                    "OrderDate": "7/1/2015",
                    "DellStatus": "Good",
                    "DFSStatus": "Good",
                    "AuthCode": "AC",
                    "DPAAmt": "1000",
                    "TotalAmt": "150"
                },
                {
                    "SplitPay": "Bob",
                    "DPID": "667456745",
                    "OrderNumber": "234213423",
                    "DCN": "56756575",
                    "CoNum": "7978567457",
                    "Source": "Phone",
                    "OrderDate": "7/2/2015",
                    "DellStatus": "Good",
                    "DFSStatus": "Bad",
                    "AuthCode": "ACC",
                    "DPAAmt": "5000",
                    "TotalAmt": "820"
                }
            ];
        }, millisecondsToWait);


        $scope.currentFocused = "";

        $scope.getCurrentFocus = function(){
            var rowCol = $scope.gridApi.cellNav.getFocusedCell();
            if(rowCol !== null) {
                $scope.currentFocused = 'Row Id:' + rowCol.row.entity.id + ' col:' + rowCol.col.colDef.name;

            }
        }

        $scope.gridOptions.onRegisterApi = function(gridApi){
            $scope.gridApi = gridApi;
        };

/*        $http.get("../app/js/ordersdata.json").success(function(data) {
            $scope.orders = data;
        });*/

        $scope.showModal = false;

        $scope.toggleMyModal = function(){
            $scope.showModal = !$scope.showModal;
        };

    }]);

myControllers.controller('InfoController',
    ['$scope', '$modal', '$modalInstance', '$filter', '$interval', 'selectedRow',
        function ($scope, $modal, $modalInstance, $filter, $interval, selectedRow) {

            $scope.selectedRow = selectedRow;

            $scope.ok = function () {
                $scope.selectedRow = null;
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $scope.selectedRow = null;
                $modalInstance.dismiss('cancel');
            };
        }
    ]);

