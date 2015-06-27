(function() {
  'use strict';

  angular
    .module('mqttwsSimple')
    .controller('MainController', MainController);

  // var get_mqtt_option() {

  // }

  /** @ngInject */
  function MainController($scope, $timeout, toastr, mqttService) {
    var vm = this;
    var callback = {
        onMessageArrived: function(message) { 
            var topic = message.destinationName;
            var payload = message.payloadString;

            if (topic.indexOf("/command") != -1) {
              $scope.command =  payload;
              if (payload == "0") {
                $scope.enabled = false;
              }
              else if (payload == "1") {
                $scope.enabled = true;
              }
            }
            else {
                $scope.heartbeat = payload;
            }
            $scope.$apply();
        },
        onSuccess: function(mqtt) {
            $scope.sub_topic = "esp8266/" + $scope.macaddr + "/status";
            $scope.pub_topic = "esp8266/" + $scope.macaddr + "/command";

            var topics = [$scope.sub_topic, $scope.pub_topic];
            console.log("user onCOnnect", mqtt);
            angular.forEach(topics, function(topic, idx) {
              console.log("subscribing..", topic);
              mqtt.subscribe(topic, {qos: 0});
              $scope.mqtt = mqtt;
            });
        }
    }

    $scope.$watch('sendText', function() {
        console.log("sendText", $scope.sendText);
        $scope.enable($scope.sendText);
    });

    $scope.enable = function(flag) {
        console.log("FLAG", flag);
        var qos = 0;
        var retain = true;
        console.log($scope.pub_topic);
        if (!!$scope.mqtt) {
            $scope.mqtt.send($scope.pub_topic, flag.toString(), qos, retain);

        }
    }

    $scope.connect = function() {
        mqttService.connect(callback);
    }

  }
})();
