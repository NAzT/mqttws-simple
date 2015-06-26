'use strict';
/**
 * @ngdoc service
 * @name mqttwsSimple.mqttService
 * @description
 * # mqttService
 * Service in the mqttwsSimple.
 */
angular.module('mqttwsSimple')
  .service('mqttServiceService', function () {
// AngularJS will instantiate a singleton by calling "new" on this function
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
