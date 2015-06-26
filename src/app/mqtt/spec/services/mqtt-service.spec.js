'use strict';

describe('Service: mqttService', function() {
  var mqtt;
  beforeEach(module('mqttwsSimple'));
  beforeEach(inject(function(_mqttService_) {
  mqtt = _mqttService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(mqtt.awesomeThings.length).toBe(3);
  });

});
