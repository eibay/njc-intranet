(function(){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  angular.module('njcIntranetApp')
    .config(function($urlRouterProvider){
      // route the default state to the app home
      $urlRouterProvider.when('', '/staff');
      $urlRouterProvider.when('/', '/staff');
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
    .state('staff', {
      abstract: true,
      template: '<ui-view/>',
      resolve: {

      }
  	})
    .state('staff.index', {
  		url: '/staff',
  		templateUrl: 'js/partials/staff-index.html',
  		controller: 'StaffIndexController',
      controllerAs: 'vm',
      resolve: {
        staffList: function(StaffService){
          return StaffService.all();
        }
      }
  	})
    .state('staff.new', {
  		url: '/staff/new',
  		templateUrl: 'js/partials/staff-new.html',
  		controller: 'StaffNewController',
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
        documentList: function(DocumentService){
          return DocumentService.all();
        }
      }
  	})
    .state('documents.new', {
  		url: '/documents/new',
  		templateUrl: 'js/partials/documents-new.html',
  		controller: 'DocumentsNewController',
      controllerAs: 'vm',
      resolve: {

      }
  	});
  }

})();
