(function () {
  angular.module('dashboard.module')
    .controller('dashboard.controller', DashboardCtrl);
  DashboardCtrl.$inject = ['WeatherService']
  function DashboardCtrl(WeatherService) {
    var vm = this;
    vm.applicationName = "Weather Report";
    vm.weatherService = WeatherService.get(function (data) {      
      vm.weatherData=data.list;
      //vm.iconURL="http://openweathermap.org/img/w";
    });
    
  }
})();