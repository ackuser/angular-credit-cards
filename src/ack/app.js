angular.module('ccDemoApp', [

  'credit-cards'

])

.filter('yesNo', function () {

  return function (boolean) {

    return boolean ? 'Yes' : 'No';

  }

})
