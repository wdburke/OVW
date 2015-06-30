/**
 * Created by Earl on 6/16/2015.
 */


var myControllers = angular.module('myControllers', []);




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
            { name: 'SplitPay', enableCellEditOnFocus:false, displayName:'Split Pay', width: 200  },
            { name: 'DPID', enableCellEditOnFocus:false, displayName:'DPID', width: 200  },
            { name: 'OrderNumber', enableCellEditOnFocus:false, displayName:'Order Number', width: 200  },
            { name: 'DCN', enableCellEditOnFocus:false, displayName:'DCN', width: 200  },
            { name: 'CoNum', enableCellEditOnFocus:false, displayName:'Co Num', width: 200  },
            { name: 'Source', enableCellEditOnFocus:false, displayName:'Source', width: 200  },
            { name: 'OrderDate', enableCellEditOnFocus:false, displayName:'Order Date', width: 200  },
            { name: 'DellStatus', enableCellEditOnFocus:false, displayName:'Dell Status', width: 200  },
            { name: 'DFSStatus', enableCellEditOnFocus:false, displayName:'DFS Status', width: 200  },
            { name: 'AuthCode', enableCellEditOnFocus:false, displayName:'Auth Code', width: 200  },
            { name: 'DPAAmt', enableCellEditOnFocus:false, displayName:'DPAAmt', width: 200  },
            { name: 'TotalAmt', enableCellEditOnFocus:false, displayName:'TotalAmt', width: 200  }
       ];

        $scope.gridOptions.data = [
            {
                "SplitPay": "Sue",
                "PurchaseID": "456867567",
                "OrderNumber": "43242341",
                "CCN": "66456451",
                "CoNum": "1678678",
                "Source": "Phone",
                "OrderDate": "7/1/2015",
                "CustomerStatus": "Good",
                "FSStatus": "Good",
                "AuthCode": "AC",
                "CPAAmt": "1000",
                "TotalAmt": "150"
            },
            {
                "SplitPay": "Bob",
                "PurchaseID": "1232332",
                "OrderNumber": "34534",
                "CCN": "123123",
                "CoNum": "656756756",
                "Source": "Online",
                "OrderDate": "7/2/2015",
                "CustomerStatus": "Good",
                "FSStatus": "Bad",
                "AuthCode": "AC",
                "CPAAmt": "5000",
                "TotalAmt": "650"
            }
        ];

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

