/// <reference path='../../typings/base.d.ts' />

module FooBar {

  interface TestVM extends ng.IScope {
    helloWorld: string;
    countries: string[];
  }

  class TestController {

    static $inject = ['$scope', 'TestService'];

    constructor($scope: TestVM, svc: TestService) {
      $scope.helloWorld = svc.sayHello();
      $scope.countries = svc.getCountries();
    }

  }

  angular.module('foobar.controllers', []).controller('TestController', TestController);
}
