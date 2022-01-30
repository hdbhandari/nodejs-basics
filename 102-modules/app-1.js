/* Modules */
const tutorial = require("./customModule")
console.log("-------------Imported Module-------------")
console.log(tutorial)
console.log("-----------------------------------------")

/* In case of only sum method exported from the module tutorial */
//console.log(tutorial(1,2));

console.log("Calling sum(4,5) from module: " + tutorial.sum(4, 5))
console.log("Value of PI: " + tutorial.PI)
console.log(new tutorial.SomeMathObject())