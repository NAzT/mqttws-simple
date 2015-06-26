'use strict';
/**
 * @ngdoc service
 * @name mqttwsSimple.mqtt
 * @description
 * # mqtt
 * Service in the mqttwsSimple.
 */
angular.module('mqttwsSimple')
  .service('mqttService', function () {
// AngularJS will instantiate a singleton by calling "new" on this function
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
