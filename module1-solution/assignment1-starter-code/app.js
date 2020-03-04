(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',['$scope',function($scope){
    $scope.clickButton = function () {
      // console.log($scope.lunchList);
      var food= $scope.lunchList;


       const foodCount = food.split(',');
       // console.log(words[1]);
       // console.log(words.length);
          console.log(foodCount.length);

          if (food==""){
            $scope.message = "Please enter data first";
          }
          else {
            if ((foodCount.length)<=3){
                $scope.message = "Enjoy!";
               }
            else {
               $scope.message = "Too much!";
               }
          }



       // $scope.message = food ;

    }

  }]);

})
();
