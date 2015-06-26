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


    var host = 'test.mosquitto.org'; // hostname or IP address
    var port = 8080 ;
    var useTLS = false;
    var username = null;
    var password = null;
    var cleansession = true;
    var topic_list = ["esp8266/18:fe:34:fe:c0:ff/#"];

    var mqtt;
    var reconnectTimeout = 2000;

    var userOnConnected = function() { }

    function MQTTconnect() {
        mqtt = new Paho.MQTT.Client(
                        host,
                        port,
                        "web_" + parseInt(Math.random() * 100,
                        10));
        var options = {
            timeout: 3,
            useSSL: useTLS,
            cleanSession: cleansession,
            onSuccess: onConnect,
            onFailure: function (message) {
                console.log("failed");
                setTimeout(MQTTconnect, reconnectTimeout);
            }
        };

        console.log("Host="+ host + ", port=" + port + " TLS = " + useTLS + " username=" + username + " password=" + password);
        mqtt.connect(options);
    }

    function onConnect() {
        console.log('Connected to ' + host + ':' + port);
        userOnConnected(mqtt);
    }


    this.connect = function(callbackFn) {
        console.log(callbackFn);
        userOnConnected = callbackFn.onConnect || function() { };

        if (mqtt != null) {
            mqtt.disconnect();
        }

        MQTTconnect();

        mqtt.onConnectionLost = function(response) {
            setTimeout(MQTTconnect, reconnectTimeout);
            console.log("connection lost: " + response.errorMessage + ". Reconnecting");
        };

        mqtt.onMessageArrived = function(message) {
            var topic = message.destinationName;
            var payload = message.payloadString;
        }
    }

  });
