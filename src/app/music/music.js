angular.module( 'ngBoilerplate.music', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'music', {
    url: '/music',
    views: {
      "main": {
        controller: 'MusicCtrl',
        templateUrl: 'music/music.tpl.html'
      }
    },
    data:{ pageTitle: 'Bio' }
  });
})

.controller( 'MusicCtrl', function MusicCtrl( $scope ) {
  
  $scope.showVideo = function(array){
      if (array[0] === "YT") {
        $('.videoBox').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/' + array[1] + '\" frameborder=\"0\" allowfullscreen></iframe>');
      } else{

      }
    };
  
  $scope.tracks = [
    {
      organ: 'Fisk op. 101',
      composer: 'Bach, Johann Sebastian',
      title: 'BWV 625 - Wachet Auf, ruft uns die Stimme',
      video: ['YT', 'jb0tZG4W1dg']
  },
  {
      organ: 'Fisk op. 101',
      composer: 'Bach, Johann Sebastian',
      title: 'BWV 533 - Prelude and Fugue in e (Cathedral)'
  },
  {
      organ: 'Fisk op. 101',
      composer: 'Fjellestad, Johann Christian',
      title: 'Toccata, op. 1',
      video: ['YT', '4m9ovv3OnX4']
  },
  {
      organ: 'Perkins Chapel',
      composer: 'Bach, Johann Sebastian',
      title: 'BWV 22 (mvt 5) - Ertödt’ uns durch dein’ Güte',
      video: ['YT', 'jBfRUK2F4sI']
  },
  {
      organ: 'Fisk op. 101',
      composer: 'Krebs, Johann Ludwig',
      title: 'Ach Herr, mich armen Sünder',
      video: ['YT', '60XQbOmIieU']
  },
  {
      organ: 'Fisk op. 101',
      composer: 'Kondo, Koji',
      title: 'Zelda\'s Lullaby',
      video: ['YT', 'rDE7bfnscmQ']
  },
  {
      organ: 'Fisk op. 101',
      composer: 'Kondo, Koji',
      title: 'Kakariko Village',
      video: ['YT', '_v7fYqbCM5U']
  },
  {
      organ: 'Fisk op. 101',
      composer: 'Daquin, Louis-Claude',
      title: 'Noel X'
  }
  ];

});
