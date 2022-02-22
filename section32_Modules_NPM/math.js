const add = (x, y) =>  x + y; 
const PI = 3.14; 
const square = x => x * x; 

// method 1 
// // module.exports = 'Hello Haven : )'
// module.exports.add = add; 
// module.exports.PI = PI; 
// module.exports.square = square; 

// now we created another file app.js and we want to require this file ./math into that file 
// at this stage, when we execute the file, it would only show an empty object { } 
// unless we use the keyword module.exports.(name of the function) = function name  

// method 2 - the above could be written like: 
const math = {
    add: add,
    PI: PI,
    square: square 
}
module.exports = math; 

// method 3  - putting the module.exports.function_name straight away 
module.exports.add = add; 

// method 4 - no need to add modules anymore 
exports.add = add; 

