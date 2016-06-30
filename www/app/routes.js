app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider, $resourceProvider, APP_CONFIG) {
    $httpProvider.interceptors.push('authInterceptorService');

    $stateProvider
        .state('movies', {
            url: '/movies',
            templateUrl: "views/movies/movies-list.html",
            controller: 'MoviesListCtrl'
        })
        .state('movie-detail', {
            url: '/movie-detail/:id',
            templateUrl: 'views/movie-detail/movie-detail.html',
            controller: 'MovieDetailCtrl'
        })
		.state('celebrity', {
				url: '/celebrity',
				templateUrl: 'views/celebrity/celebrity.html',
				controller: 'CelebrityCtrl'
			})

        // states end
    ;

    $urlRouterProvider.otherwise("/movies");

});

