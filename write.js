const {writeDb} = require('./dbFunctions')

const obj = {
    AJ: "I'm in write.js"
}

writeDb(obj)