/// <reference path='../../typings/base.d.ts' />
/// <reference path='../react-components/TestComponent.ts' />

import React = require('react');
import MyComponent = require('../react-components/TestComponent');

module FooBar {

  interface ITestViewModel {

  }

  function Test($log: ng.ILogService) {

    function linker(scope: ITestViewModel,
      element: ng.IAugmentedJQuery,
      attrs: ng.IAttributes) {

      init();

      function init() {
        $log.debug('React imported component', MyComponent);
      }


      //React.renderComponent(<MyComponent />, document.getElementById('component'));

    }

    return {
      restrict: 'A',
      scope: {},
      replace: true,
      transclude: true,
      link: linker
    };

  }

  Test.$inject = ['$log'];

  angular.module('foobar.directives', [])
    .directive('testDirective', Test)
}
