/// <reference path='../../typings/base.d.ts' />

var React = require('react');

module FooBar {

  interface ITestViewModel {

  }

  function Test($log: ng.ILogService) {

    function linker(scope: ITestViewModel,
      element: ng.IAugmentedJQuery,
      attrs: ng.IAttributes) {

      // use React

    }

    return {
      restrict: 'A',
      scope: {

      },
      replace: true,
      transclude: true,
      link: linker
    };

  }

  Test.$inject = ['$log'];

  angular.module('foobar.directives', [])
    .directive('testDirective', Test)
}
