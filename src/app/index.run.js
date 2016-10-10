(function() {
  'use strict';

  angular
    .module('qqq')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
