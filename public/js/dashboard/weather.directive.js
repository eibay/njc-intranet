module.exports = function(app){
  'use strict';
  // App bootstrapping + DI
  /*@ngInject*/
  app.directive('njcWeather', function($log, Constants){
    return {
      restrict: "EA", // element or attribute only
      replace: true, // replace the element
      templateUrl: Constants.urls.public+'/js/partials/weather.directive.html',
      scope: {

      },
      link: function(scope, elem, attrs){
        $log.log("Weather directive");

      }
    };
  });

};
