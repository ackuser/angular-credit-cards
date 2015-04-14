angular.module('validationApp',
['credit-cards','internationalPhoneNumber','vcRecaptcha']
)
.controller('mainController', function($scope, $http, element, attrs, ctrl) {

  // function to submit the form after all validation has occurred
  $scope.submit = function() {

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
.controller('testCtrl', function ($scope, vcRecaptchaService) {
    console.log("this is your app's controller");
    $scope.response = null;
    $scope.widgetId = null;

    $scope.model = {
        key: 'YOUR KEY'
    };

    $scope.setResponse = function (response) {
        console.info('Response available');

        $scope.response = response;
    };

    $scope.setWidgetId = function (widgetId) {
        console.info('Created widget ID: %s', widgetId);

        $scope.widgetId = widgetId;
    };

    $scope.submit = function () {
        var valid;

        /**
         * SERVER SIDE VALIDATION
         *
         * You need to implement your server side validation here.
         * Send the reCaptcha response to the server and use some of the server side APIs to validate it
         * See https://developers.google.com/recaptcha/docs/verify
         */
        console.log('sending the captcha response to the server', $scope.response);

        if (valid) {
            console.log('Success');
        } else {
            console.log('Failed validation');

            // In case of a failed validation you need to reload the captcha
            // because each response can be checked just once
            vcRecaptchaService.reload($scope.widgetId);
        }
    };
})
.filter('yesNo', function () {

  return function (boolean) {

    return boolean ? 'Yes' : 'No';

  }

});
