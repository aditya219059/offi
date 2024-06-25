const mongoose = require('mongoose')

const uri = ""

const connectmd = () => {
    mongoose.connect(uri, () => {
        console.log('connected to mongo');
    })
}

module.export = connectmd;