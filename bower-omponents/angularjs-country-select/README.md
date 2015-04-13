AngularJS country select
======================

Country select is an AngularJS directive for picking countries from a list.

It uses the same countries [this gem](https://github.com/jamesds/country-select/blob/master/lib/country-select.rb#L36-74) does. I'll try keeping the list up-to-date.

How to
----------------------

1. Add the markup ```<country-select data-ng-model="selectedCountry"></country-select>```
2. Add the dependency to your app's module ```angular.module('myApp', ['countrySelect']);```
