module.exports = function(app){

  /*@ngInject*/
  app.service('StaffService', function($log, $http, Constants){
    return {
      all: function(){
        $log.log("Getting all the staff");
        return $http.get(Constants.urls.api+"/staff");
      },
      get: function(id){
        return $http.get(Constants.urls.api+"/staff/" + id);
      },
      create: function(staff){
        return $http.post(Constants.urls.api+"/staff", staff);
      },
      update: function(id, staff){
        $log.log(id);
        $log.log(staff);
        return $http.put(Constants.urls.api+"/staff/" + id, staff);
      },
      dutyWorker: function(){
        return $http
                .get(Constants.urls.api+"/staff?duty_worker=true");
      }
    };
  });

};
