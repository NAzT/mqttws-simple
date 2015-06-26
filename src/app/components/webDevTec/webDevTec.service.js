(function() {
  'use strict';

  angular
      .module('mqttwsSimple')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
