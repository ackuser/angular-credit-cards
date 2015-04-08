'use strict';

var angular = require('angular');

describe('cc-cvc', function () {

  beforeEach(angular.mock.module(require('../')));

  var $compile, scope, controller, element;
  beforeEach(angular.mock.inject(function ($injector) {
    $compile   = $injector.get('$compile');
    scope      = $injector.get('$rootScope').$new();
    scope.card = {};
    element    = angular.element('<input ng-model="card.cvc" cc-cvc cc-type="cardType" />');
    controller = $compile(element)(scope).controller('ngModel');
  }));

  it('sets maxlength to 4', function () {
    expect(element.attr('maxlength')).to.equal('4');
  });

  it('adds a numeric pattern', function () {
    expect(element.attr('pattern')).to.equal('[0-9]*');
  });

  it('accepts a 3 digit numeric', function () {
    controller.$setViewValue('123');
    scope.$digest();
    expect(controller.$valid).to.be.true;
    expect(scope.card.cvc).to.equal('123');
  });

  it('accepts a 4 digit numeric', function () {
    controller.$setViewValue('1234');
    scope.$digest();
    expect(controller.$valid).to.be.true;
    expect(scope.card.cvc).to.equal('1234');
  });

  it('can validate against the card type', function () {
    scope.cardType = 'visa';
    scope.card.cvc = '1234';
    scope.$digest();
    expect(controller.$valid).to.be.false;
    scope.cardType = 'americanExpress';
    scope.$digest();
    expect(controller.$valid).to.be.true;
  });

  it('does not accept numbers', function () {
    controller.$setViewValue(123);
    scope.$digest();
    expect(controller.$valid).to.be.false;
  });

  it('unsets the model value when invalid', function () {
    controller.$setViewValue('abc');
    scope.$digest();
    expect(scope.card.cvc).to.be.undefined;
  });

});
