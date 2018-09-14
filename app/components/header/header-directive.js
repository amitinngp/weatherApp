(function(){
  'use strict';

  angular.module('app.header.header-directive', [])
  .directive("appHeader",HeaderDirective);

  function HeaderDirective(){
    return {
      templateUrl:"./components/header/header.html",
      restrict:"E"
    };
    }

})();