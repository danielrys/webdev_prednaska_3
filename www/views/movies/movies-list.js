app.controller('MoviesListCtrl', function ($scope, $state, GlobalService, MoviesService) {
    $scope.data = MoviesService.data;

    $scope.loadMore = function(){
        setTimeout(function(){
            $scope.$broadcast('scroll.infiniteScrollComplete');
            MoviesService.getMovies();
        }, 4000);   
    }
})