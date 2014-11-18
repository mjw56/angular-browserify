/// <reference path='../../typings/base.d.ts' />
/// <reference path='../react-components/TestComponent.ts' />

import React = require('react');
import component = require('../react-components/TestComponent');

module FooBar {

  interface ITestViewModel {

  }

  function Test($log: ng.ILogService) {

    function linker(scope: ITestViewModel,
      element: ng.IAugmentedJQuery,
      attrs: ng.IAttributes) {

      var toggled = false;

      function render() {

        React.render(
          React.DOM.div(
            null,
            React.DOM.h1(null, 'heyy!'),
            React.DOM.form(
              null,
              'Your name is ',
              React.DOM.input({
                type: 'text',
                placeholder: 'Your name here'
              })
            ),
            React.DOM.div(
              null,
              React.DOM.h1({
                className: toggled ? 'red' : 'blue'
              }, 'Hello, world!'),
              React.DOM.button({
                onClick: function() {
                  toggled = !toggled;
                  render();
                }
              }, 'Toggle color')
            ),
            React.createElement(component.MyComponent, null, null)
          ),
          document.getElementById('component'));
        }

        render();

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
