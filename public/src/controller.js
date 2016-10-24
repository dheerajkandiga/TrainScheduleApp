/**
 * Created by nagesh on 9/12/2016.
 */
//Controller

app.controller('homeController', function ($scope, trainService, $interval, $route, $location) {

    $scope.orderByMe = function (input) {
        $scope.myOrderBy = input;
    };

    $scope.changeColor = function (inputStatus) {
        if (inputStatus === 'Delay') {
            return 'red';
        }
        else if(inputStatus === 'Boarding')
        {
            return 'yellow';
        }
        else if(inputStatus === 'Ontime')
        {
            return 'green';
        }
    };
    
     $scope.data = function () {
         trainService.getdata().then(function success(response) {
             $scope.dataAPI = response.data;
             console.log($scope.dataAPI);
         }, function error(response) {
             $scope.dataAPI = response.statusCode;
         });
     };
    $scope.data();


    $interval(function () {
        $scope.data();
        console.log('here');
    },10000);

});