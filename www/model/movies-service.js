app.factory('MoviesService', function ($rootScope, $http, $state, $ionicLoading, APP_CONFIG) {
    return new (function () {
        var service = this;
        service.data = {};
        service.data.movies = [];
        
        service.getMovies = function () {
            var req = {
                method: "GET",
                url: APP_CONFIG.getApiUrl("popular")
            };

            $http(req).success(function (response) {
                [].push.apply(service.data.movies, response.results);
            }).error(function (data, status, headers, config) {
                console.log("error", data, status, headers, config);
            });
        };

        service.getMovieById = function (id) {
            var selectedMovie = {};
            angular.forEach(service.data.movies, function (movie) {
                if (movie.id == id) selectedMovie = movie;
            });
            return selectedMovie;
        };

        service.getMovies();
    });
});
