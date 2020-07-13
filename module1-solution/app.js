(function(){
'use strict';
angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope,$filter){
  $scope.name="";
  $scope.totalValue=0;
  $scope.imageName=1;
  console.log($scope.name);
  $scope.displayNumeric=function(){
    var totalNameValue=calculateNumericForString($scope.name);
    $scope.totalValue=totalNameValue;
  };
  $scope.upper=function(){
    var upCase=$filter('uppercase');
    $scope.name=upCase($scope.name);
  };
  $scope.feedMe=function(){
    if($scope.imageName==1)
    $scope.imageName=2;
    else $scope.imageName=1;

  };
});


function calculateNumericForString(string){
  var totalStringValue=0;
  for(var i=0;i<string.length;i++)
  {
    totalStringValue+=string.charCodeAt(i);
  }
  return totalStringValue;
}

})();
