angular.module("addItemApp", [])
    .controller("toDoCtrl", function ($scope) {
        //Array to save the items added
        $scope.items = [];
        //Add Item Function
        $scope.addItem = function(item) {
            console.log(item);
            $scope.items.push(angular.copy(item));
            console.log($scope.items);
        };
        //Remove Item Function
        $scope.remove = function(item) {
            var index = $scope.items.indexOf(item);
            $scope.items.splice(index, 1);
        };
        //Select Option Elements
        $scope.typeOptions = [
            {name: 'CHOOSE COLUMN', value: 'default'},
            {name: 'COLUMN 1', value: 'column1'},
            {name: 'COLUMN 2', value: 'column2'}
        ];
        //Default for Select Element
        $scope.item = {pos: $scope.typeOptions[0].value};

    });