// OS module

const os = require('os')
//  os.   -- after . list appears

//  info about current user
const user = os.userInfo()
console.log(user)

//  method returns system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log('The currentOS details :', currentOS)
