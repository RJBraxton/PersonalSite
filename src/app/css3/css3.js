angular.module( 'ngBoilerplate.css3', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'css3', {
    url: '/css3',
    views: {
      "main": {
        controller: 'CssCtrl',
        templateUrl: 'css3/css3.tpl.html'
      }
    },
    data:{ pageTitle: 'CSS3' }
  });
})

.controller( 'CssCtrl', function CssCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $scope.exampleShadowText = {
    'text-shadow': "2px 2px 6px blue"
  };
  $scope.exampleShadowBox = {
    'box-shadow': "2px 2px 20px red"
  };
  
});
