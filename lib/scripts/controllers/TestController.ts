/// <reference path='../../typings/angular.d.ts' />

import service = require('../service');

module FooBar {

  interface TestVM extends ng.IScope {
    helloWorld: string;
    countries: string[];
  }

  class TestController {

    static $inject = ['$scope'];

    constructor($scope: TestVM) {

      var svc = new service.Test;

      $scope.helloWorld = svc.sayHello();
      $scope.countries = svc.getCountries();
    }

  }

  angular.module('foobar.controllers', []).controller('TestController', TestController);
}
