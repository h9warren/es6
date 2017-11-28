const $ = require('jquery');

var sayHello = () => { console.log("Hello"); }
sayHello();

$('body').append("<h2>Well, let's change it back!</h2>");
