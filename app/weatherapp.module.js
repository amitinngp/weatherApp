// Declare app level module which depends on views, and components
(function(){
  angular.module('weatherapp', ['ngRoute','dashboard.module','app.components','ngResource']).
  config(['$locationProvider', '$routeProvider', ConfigProvider]);
  
  function ConfigProvider($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');    
    $routeProvider.otherwise({redirectTo: '/'});
  }

})();



