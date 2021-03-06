(function() {
  'use strict';

  angular.module('tf2stadium.services').factory('Websocket', Websocket);

  /** @ngInject */
  function Websocket(socketFactory)
  {
      return socketFactory({
        prefix: '',
        ioSocket: io.connect('http://localhost:8080')
      });
  }
})();
