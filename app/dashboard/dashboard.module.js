(function(){
  angular.module('dashboard.module', ['ngRoute']).
  config(['$routeProvider', DashboardConfig]);

  function DashboardConfig($routeProvider) {   
    $routeProvider.when("/",{templateUrl:"./dashboard/dashboard.html", controller:'dashboard.controller'})    
  }
})();
