(function() {
  'use strict';

  angular
    .module('mqttwsSimple')
    .controller('MainController', MainController);

  // var get_mqtt_option() {

  // }

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, mqttService) {
    var vm = this;

    console.log(mqttService);

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1435123596915;
    // vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // $scope.heartbeat = "WAITING...";
    // var reconnectTimeout = 2000;

    // MQTTconnect();

    // $scope.enable = function(state) {
    //   var qos = 0;
    //   var retain = true;
    //   if (state) {
    //     mqtt.send("esp8266/18:fe:34:fe:c0:ff/command", "1", qos, retain)
    //   }
    //   else {
    //     mqtt.send("esp8266/18:fe:34:fe:c0:ff/command", "0", qos, retain);
    //   }
    // }


  }
})();
