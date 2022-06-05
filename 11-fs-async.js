
//const {readFileSync} = require('fs');

//  const fs = require('fs');

// same as fs.readFileSync


// now demonstrated importing 2 modules as object

const {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/first.txt','utf8', (err, result)=> {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        } 
        const second = result
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,
        (err,result) => {
            if (err) {
                console.log(err)
            return
        }
        console.log('done with this task')
        console.log(result)
    }
        )

    })
})

console.log('starting next task');
