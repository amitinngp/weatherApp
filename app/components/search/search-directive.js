(function(){
  'use strict';
  angular.module('app.search.search-directive', [])
  .directive("appSearch",SearchDirective);

  function SearchDirective(){
    return {
      templateUrl:"./components/search/search.html",
      restrict:"E"
    };
    }
})();