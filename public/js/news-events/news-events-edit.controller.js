module.exports = function(app){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  app.controller('NewsEventsEditController', function($scope, $log){
    $log.log($scope);
    var vm = this;

    function init(){
      $log.log("Loaded the news edit controller");
    }

    init();
  });

};
