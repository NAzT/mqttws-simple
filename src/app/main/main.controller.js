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

    var callback = {
        onMessageArrived: function(message) { 
            console.log("MESSAGE ARRIVED", arguments);
            var topic = message.destinationName;
            var payload = message.payloadString;            
            console.log("ARRIVED", topic, payload); 

        },
        onConnect: function(mqtt) {
            console.log("user onCOnnect", mqtt);
            mqtt.subscribe("#", {qos: 0});
            // angular.forEach(topic_list, function(topic, idx) {
            //   console.log("subscribing..", topic);
            //   // mqtt.subscribe(topic, {qos: 0});
            // });
        }

    }

    mqttService.connect(callback);

    function onMessageArrived(message) {
        var topic = message.destinationName;
        var payload = message.payloadString;
        var json = JSON.parse(payload);
        
        if (topic.indexOf("/command") !== false) {
          if (payload == "0") {
            $scope.enabled = false;
          }
          else if (payload == "1") {
            $scope.enabled = true;
          }
          $scope.$apply();
        }

        if (json.d && json.d.myName == "TONG")  {
          $scope.heartbeat = json.d;
          $scope.$apply();
          console.log(json.d && json.d.myName);
        }
    };
  }
})();
