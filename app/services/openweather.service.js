angular
    .module('app')
    .service('logger', logger);

function logger() {
  this.logError = function(msg) {
    /* */
  };

  function dataService() {
    var someValue = '';
    var service = {
        save: save,
        someValue: someValue,
        validate: validate
    };
    return service;

    ////////////

    function save() {
        /* */
    };

    function validate() {
        /* */
    };
} 
}

