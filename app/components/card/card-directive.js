(function(){
  'use strict';

  angular.module('app.card.card-directive', [])
  .directive("appCard",CardDiretive);
  
  function CardDiretive(){
    return {
      templateUrl:"./components/card/card.html",
      restrict:"E"
    };
    }
})();