/// <reference path='../../typings/base.d.ts' />

module FooBar {

  interface ITestViewModel {

  }

  function Test($log: ng.ILogService) {

    function linker(scope: ITestViewModel,
      element: ng.IAugmentedJQuery,
      attrs: ng.IAttributes) {

      //React.renderComponent(<TestComponent />, document.getElementById('component'));

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
