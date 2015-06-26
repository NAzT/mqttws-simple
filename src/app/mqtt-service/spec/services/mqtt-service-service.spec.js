describe('Service: mqttServiceService', function() {
  var mqttService;
  beforeEach(module('mqttwsSimple'));
  beforeEach(inject(function(_mqttServiceService_) {
  mqttService = _mqttServiceService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(mqttService.awesomeThings.length).toBe(3);
  });

});
