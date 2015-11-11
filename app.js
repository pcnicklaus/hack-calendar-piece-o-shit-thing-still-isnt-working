var app = angular.module('word', []);

app.controller('pleaseCtrl', ['$scope', function($scope) {

    $scope.day = moment();

}]);
