module.exports = function(app){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  app.controller('NewsEventsCreateController', function($scope, $log, NewsEventsService, EmailListService, toastr, $state){
    $log.log($scope);
    var vm = this;

    function init(){
      $log.log("Loaded the news events create controller");
    }

    vm.emailLists = EmailListService.all().data;

    vm.submit = function(){
      NewsEventsService
        .create(vm.model)
        .then(function(res){
          resetModel();
          toastr.success("Great! - Your news / event item was added");
        }, function(err){
          toastr.error("There was a problem creating your news / event item, please refresh and try again");
        });
    };

    $log.log($state);

    vm.type = $state.current.data.type;

    resetModel();

    vm.fields = [
      /*{
        key: 'type',
        type: 'radio',
        templateOptions: {
          label: 'What is this?',
          required: true,
          options: [
            {'value':'news', 'name':'Some News'},
            {'value':'event', 'name':'An Event'}
          ]
        }
      },*/
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Title',
          required: true
        }
      },
      {
        key: 'summary',
        type: 'input',
        templateOptions: {
          label: "Quick summary",
          required: true
        }
      },
      {
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: "Full description",
          required: true
        }
      },
      {
        key: 'url',
        type: 'input',
        templateOptions: {
          label: 'Link to more information',
          required: false
        }
      },
      // these should only appear if the event type is selected
      {
        key: 'date',
        type: 'input',
        templateOptions: {
          label: 'Date of the event',
          'bs-datepicker': 'bs-datepicker',
        },
        ngModelAttrs: {
          'bs-datepicker': {attribute: 'bs-datepicker'},
        },
        hideExpression: 'model.type != "event"'
      },
      {
        key: 'location',
        type: 'input',
        templateOptions: {
          label: 'Location of the event',
          required: false
        },
        hideExpression: 'model.type != "event"'
      },      
      {
        key: 'contact_name',
        type: 'input',
        templateOptions: {
          label: 'Contact person'
        },
        hideExpression: 'model.type != "event"'
      },
      {
        key: 'contact_email',
        type: 'input',
        templateOptions: {
          label: 'Contact email'
        },
        hideExpression: 'model.type != "event"'
      },
      {
        key: 'share',
        type: 'select',
        templateOptions: {
          label: 'Share this with...',
          required: false,
          options: vm.emailLists
        }
      },
    ];

    function resetModel(){
      vm.model = {
        type: vm.type
      };
    }

    init();
  });

};
