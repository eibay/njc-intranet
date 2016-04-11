(function(){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  angular.module('njcIntranetApp')
    .controller('AuthController', AuthController);

  /*@ngInject*/
  function AuthController($scope, $log, $rootScope, $modal, AuthService){

    var vm = this;
    //vm.model = new Entry(); // create a new instance of the entry model
    vm.model = {};

    // array of our form fields needed
    vm.fields = [{
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Username',
        placeholder: 'Enter your username',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true
      }
    }];

    vm.submit = function(){
      AuthService.attempt(vm.model.username, vm.model.password);
    };

    function init(){
      $log.log("Loaded the login controller");
    }

    init();
  }

})();
