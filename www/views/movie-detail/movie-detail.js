app.controller('MovieDetailCtrl', function ($scope, $state, GlobalService, MoviesService, $stateParams) {
    if($stateParams){
        var movieId = +$stateParams.id;
        $scope.movie = MoviesService.getMovieById(movieId);
    }
})