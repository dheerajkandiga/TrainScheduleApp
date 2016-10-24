/**
 * Created by nagesh on 9/12/2016.
 */
// Routes

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        });

    $locationProvider.html5Mode(true);
});
