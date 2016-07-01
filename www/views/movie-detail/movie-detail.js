app.controller('MovieDetailCtrl', function ($scope, $state, GlobalService, MoviesService, $stateParams) {
    MoviesService.gotMovies.promise.then(function(){
        if($stateParams){
            $scope.movieId = +$stateParams.id;
            $scope.movie = MoviesService.getMovieById($scope.movieId);
        }
    });

    $scope.toggleWatched = function () {
        MoviesService.toggleWatched($scope.movieId);
    };
    $scope.isMovieWatched = function () {
        return MoviesService.isMovieWatched($scope.movieId);
    };
})