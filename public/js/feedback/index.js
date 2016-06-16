module.exports = function(app){
  require('./feedback-form.controller')(app);
  require('./feedback.service')(app);

  app.config(function($stateProvider){
    $stateProvider
      .state('feedback', {
        abstract: true,
        authenticate : true,
        template: '<ui-view />',
        resolve: {
          Teams: function(TeamsService){
            return TeamsService.all();
          }
        }
      })
      .state('feedback.create', {
        url: '/feedback/create',
        authenticate : true,
        template: require('./feedback-create.html'),
    		controller: 'FeedbackCreateController',
        controllerAs: 'vm',
        resolve: {
          StaffList: function(StaffService, $log){
            $log.log("Resolving the staff list");
            return StaffService.all();
          },
        }
      });
  });
};
