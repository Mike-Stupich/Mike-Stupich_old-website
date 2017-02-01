/**
 * Main AngularJS Web Application
 */
var app = angular.module('mikeWebSite', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/resume", {templateUrl: "partials/resume.html", controller: "ResumeCtrl"})
    .when("/languages", {templateUrl: "partials/languages.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope) {
  // Activates the Carousel
});

app.controller('ResumeCtrl', function($scope){

});
