/**
 * Created by nagesh on 9/12/2016.
 */

// factory

app.factory('trainService',function ($http) {

    var service ={};
    
    service.getdata = function () {
          return $http.get('../view/data.json');
    };
    return service;

});














