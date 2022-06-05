
const path = require('path');


console.log(`The path separator is : ${path.sep}`)

const filePath = path.join('/content','subfolder','test.txt')

console.log(`Using path.join the result is ${filePath}`)

// if only want last or base

const base = path.basename(filePath)

console.log(`Using path.basename the last file is : ${base}`)

// absolute path 

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');

console.log(`The absolute path is : ${absolute}`)
