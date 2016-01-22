(function(){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  angular.module('njcIntranetApp')
    .config(function($urlRouterProvider){
      // route the default state to the app home
      $urlRouterProvider.when('', '/home');
      $urlRouterProvider.when('/', '/home');
    })
    .config(function (CacheFactoryProvider) {
      angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
    })
    .controller('AppController', function ($log, $scope, $rootScope) {
      var main = this;

      $rootScope.user = {
        name: ""
      };

      $log.log("AppController loading");
    })
    .config(stateConfig)
    .constant('_', window._)
    .run(function($log, $rootScope, $location){
      $log.log("Running the app");
    });

  function stateConfig($stateProvider){
    $stateProvider
  	/*.state('login', { // state for showing all movies
  		url: '/',
  		templateUrl: 'js/partials/login.html',
  		controller: 'LoginController',
      controllerAs: 'vm',
      resolve: {

      }
  	})*/
    .state('home', {
  		url: '/home',
  		templateUrl: 'js/partials/home.html',
  		controller: 'HomeController',
      controllerAs: 'vm',
      resolve: {

      }
  	})
    .state('documents', {
      abstract: true,
      template: '<ui-view/>',
      resolve: {

      }
  	})
    .state('documents.index', {
  		url: '/documents',
  		templateUrl: 'js/partials/documents-index.html',
  		controller: 'DocumentsIndexController',
      controllerAs: 'vm',
      resolve: {

      }
  	});
  }

})();