app.factory('MoviesService', function ($rootScope, $http, $state, $ionicLoading, APP_CONFIG, $q) {
    return new (function () {
        var service = this;
        service.data = {};
        service.data.movies = [];
        service.gotMovies = $q.defer();
        service.watchedMovies = [];
        
        service.getMovies = function (callback) {
            var req = {
                method: "GET",
                url: APP_CONFIG.getApiUrl("popular")
            };

            $http(req).success(function (response) {
                [].push.apply(service.data.movies, response.results);
                service.gotMovies.resolve();
                if(callback) callback();
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

        service.getWatchedMoviesFromStorage = function () {
            try {
                service.watchedMovies = JSON.parse(localStorage.getItem("watched_movies")) || [];
            } catch (e) {
                console.warn("Invalid JSON string");
                service.watchedMovies = [];
            }
            return service.watchedMovies;
        }

        service.toggleWatched = function (id) {
            var occurenceIndex = service.watchedMovies.indexOf(id);
            if (~occurenceIndex)
                service.watchedMovies.splice(occurenceIndex, 1);
            else
                service.watchedMovies.push(+id);
                localStorage.setItem("watched_movies", JSON.stringify(service.watchedMovies));
        };

        service.isMovieWatched = function (movieId) {
            return !!~service.watchedMovies.indexOf(movieId)
        };

        service.getMovies(function(){
            service.getWatchedMoviesFromStorage();
        });
    });
});
