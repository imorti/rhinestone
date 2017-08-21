
  angular.module('Review', []);
  angular.module('Review').controller('BaseCtrl', ['$scope', function($scope) {

    io.socket.get('/review', function (data) {
      $scope.reviews = data;
      $scope.$apply();
    });

    io.socket.on('review', function (event) {
      switch (event.verb) {
        case 'created':
          $scope.reviews.push(event.data);
          $scope.$apply();
          break;
      }
    });

  }]);
