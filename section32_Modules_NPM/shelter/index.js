// The index.js is the main file in the directory, so when we require an entire directory, node is going to look for 
// an index file and whatever that file export is what the directory will export. 
// to execute the file, run => node index.js
// this should console log an array of 3 separate cats 

const blue = require('./blue')
const janet = require('./janet')
const sadie = require('./sadie')

const allCats = [blue, sadie, janet]
console.log(allCats);

module.exports = allCats; 