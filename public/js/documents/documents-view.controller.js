module.exports = function(app){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  app.controller('DocumentsViewController', function($scope, $log, $rootScope, moment, documentList, Categories){
    $log.log($scope);

    var vm = this;
    $log.log(documentList);

    vm.categories = Categories.data;
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
  });

};