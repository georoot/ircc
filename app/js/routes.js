module.exports = function(app) {
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when("/",{
            templateUrl: "view/landing.html"
        });
    });
};
