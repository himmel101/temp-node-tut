// npm - global command, comes with node
//  npm -- version

// local dependency - use it only in this particular project
//  npm i <pacakageName>

//   global dependency - use it in any project
//  npm install -g <packageName>
//  sudo install -g <packageName>  (mac)

// package.json - manifest file (stores importatnt info about project/package)
//  manual approach (create package.json in the root, create properties etc.)
//  npm init -y ( everything default) yes to all questions


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)


