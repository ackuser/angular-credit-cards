angular.module('validationApp',
['credit-cards']
)
.controller('mainController', function($scope, $http) {

  // function to submit the form after all validation has occurred
  $scope.submitForm = function() {

    // check to make sure the form is completely valid
    if ($scope.userForm.$valid) {
      alert('our form is amazing');
    }

  };

})
.controller('CountryCtl', function($scope, $http) {
  $scope.name = 'World';


  $http.get('allcountries.json').
      success(function(data, status, headers, config) {
        $scope.countries = data;
      }).
      error(function(data, status, headers, config) {
        // log error
        alert("Cannot load availables countries");
      });

})
.filter('yesNo', function () {

  return function (boolean) {

    return boolean ? 'Yes' : 'No';

  }

});
