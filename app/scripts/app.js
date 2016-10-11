'use strict';

/**
 * @ngdoc overview
 * @name projectNameApp
 * @description
 * # projectNameApp
 *
 * Main module of the application.
 */
angular
  .module('projectNameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'fullPage.js'
  ])
  .config(function ( $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
