(function(){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  angular.module('njcIntranetApp')
    .controller('DocumentsViewController', DocumentsViewController);

  /*@ngInject*/
  function DocumentsViewController($scope, $log, $rootScope, moment, documentList){
    $log.log($scope);

    var vm = this;
    $log.log(documentList);

    vm.categories = [{'title':'All documents', 'active': 'active'}, {'title':'Finance', 'active':''}, {'title':'HR','active':''}, {'title':'OH&S', 'active':''}];
    vm.content = [
      {'title':'Leave', 'documents': [{'title':'Leave form'}, {'title':'Leave procedures'}, {'title':'Leave policy'}]},
      {'title':'Feedback', 'documents': [{'title':'Feedback form'}, {'title':'Feedback procedures'}, {'title':'Feedback policy'}]},
      {'title':'Feedback', 'documents': [{'title':'Feedback form'}, {'title':'Feedback procedures'}, {'title':'Feedback policy'}]},
      {'title':'Feedback', 'documents': [{'title':'Feedback form'}, {'title':'Feedback procedures'}, {'title':'Feedback policy'}]}
    ];

    function init(){
      $log.log("Loaded the documents index controller");
    }

    init();
  }

})();