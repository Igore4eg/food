window.addEventListener('DOMContentLoaded', function() {
    const forms = require('./modules/forms'),
          tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calculator = require('./modules/calculator'),
          slider = require('./modules/slider');
    
          forms();
          tabs();
          modal();
          timer();
          cards();
          calculator();
          slider();
});