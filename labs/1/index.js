const Adder = require("./Adder.js");

let add = new Adder({
    a: 2,
    b: 4

});

add.sum();

console.log(add.render());