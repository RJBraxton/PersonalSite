angular.module( 'ngBoilerplate.code', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'code', {
    url: '/code',
    views: {
      "main": {
        controller: 'CodeCtrl',
        templateUrl: 'code/code.tpl.html'
      }
    },
    data:{ pageTitle: 'Coding Projects' }
  });
})

.controller( 'CodeCtrl', function CodeCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
