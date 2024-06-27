const { type } = require('os')
const {writeDb} = require('./dbFunctions')

const obj = {
    AJ: "I'm in write.js"
}

writeDb(obj)