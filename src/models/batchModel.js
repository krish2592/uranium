const mongoose = require('mongoose')

let batchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: Number,
    program:{
        type:String,
        enum:["backend", "frontend"]
    }

},{timestamps:true})

module.exports=mongoose.model('batches', batchSchema)