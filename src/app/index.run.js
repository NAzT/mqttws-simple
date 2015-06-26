(function() {
  'use strict';

  angular
    .module('mqttwsSimple')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
