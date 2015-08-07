(function() {
  'use strict';

  angular.module('tf2stadium').config(mdThemingProvider);

  function mdThemingProvider($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('deep-purple');
  }

});