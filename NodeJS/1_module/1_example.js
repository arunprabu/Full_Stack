var myModule = require("./welcome_modules");
var fnModule = require("./welcome_modules/fn");

myModule("Exploring Node JS Modules");

//try accessing global var from module.js
console.log(myGlobalVar);

//try accessing local var of module -- you can't access'
//console.log(myLocalVar);

//call a function that resides in a module
fnModule.howsNode();