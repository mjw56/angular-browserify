/// <reference path="../typings/underscore.d.ts" />

var _ = <UnderscoreStatic>require('underscore');
var countries  = require('country-data').countries;

module FooBar {

  export interface ITestService {
    /**
    * Say Hi
    */
    sayHello(): string;

    /**
    * Get some countries
    */
    getCountries(): any;
  }

  export class TestService implements ITestService {


    sayHello() {
      return "hello world";
    }


    getCountries() {
        return _.pluck(countries.all, 'name');
    }

  }

  angular.module('foobar.services', [])
    .service('TestService', TestService);
}
