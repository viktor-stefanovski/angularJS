(function () {
'use strict'

angular.module('MyLunchChecker', [])

.controller("MyLunchController", CheckLunch);

CheckLunch.$inject = ['$scope'];

function CheckLunch($scope) {

  $scope.lunch = "";
  $scope.message = "";
  $scope.customStyle = {};
  var separator = ",";

  $scope.checkItems = function () {

      var items = $scope.lunch.split(separator);

      for (var i = 0; i< items.length; i++) {
        var item = items[i];
        if(item.trim() == "") {
          var index = items.indexOf(item);
          if (index > -1) {
            items.splice(index, 1);
          }
        }
      }

      if ($scope.lunch == "") {
        $scope.message = "Please enter data first";
        $scope.customStyle.style = {"border-color":"red"};
       } else {
        if (items.length <= 3) {
          $scope.customStyle.style = {"border-color":"green"};
          $scope.customStyle.style = {"color":"green"};
        } else {
          $scope.customStyle.style = {"border-color":"red"};
          $scope.customStyle.style = {"color":"green"};
        }
      }
    }
}

})();
