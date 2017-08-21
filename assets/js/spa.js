
  angular.module('Review', []);
  angular.module('Review').controller('BaseCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/review').then(function (res) {
      $scope.reviews = res.data;
    });

  }]);
