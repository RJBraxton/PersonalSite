angular.module( 'ngBoilerplate.photography', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'photography', {
    url: '/photography/:category',
    views: {
      "main": {
        controller: 'PhotosCtrl',
        templateUrl: 'photography/photography.tpl.html'
      }
    },
    data:{ pageTitle: 'Photography' }
  });
})

.controller( 'PhotosCtrl', function PhotosCtrl( $scope, $stateParams, $state ) {
  $scope.category = $stateParams.category;
  if ($stateParams.category == 'portraits') {
$scope.results = [1,2,3,4,5,6,7,8,9];
  } else if ($stateParams.category == 'landscapes') {
$scope.results = [1,2,3,4,5,6];
  } else if ($stateParams.category == 'organs') {
$scope.results = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  } else {
    $state.go('home');
  }
  
  
});
