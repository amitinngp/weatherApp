(function(){
    angular
    .module('weatherapp')
    .value("iconURL","http://openweathermap.org/img/w")      
    .factory('WeatherService',WeatherService);

    WeatherService.$inject=['$resource']

function WeatherService($resource) {   
 return $resource('./assets/json/current.json');   
}
})();