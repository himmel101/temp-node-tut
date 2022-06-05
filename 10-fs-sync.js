
//const {readFileSync} = require('fs');

//  const fs = require('fs');

// same as fs.readFileSync


// now demonstrated importing 2 modules as object

const {readFileSync, writeFileSync} = require('fs');

// parameters path and encoding

console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//console.log(first,second)

// file exists will be ovwer written
//  no file exists then it creates a file with that name (result)

//   YES !! created new file with correct content

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,
{flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')

