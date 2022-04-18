const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;

let developerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female","others"]
    },
    percentage:Number,
    batch:{
        type:ObjectId,
        ref:"batches"
    }
},{timestamps:true})

module.exports=mongoose.model('developers', developerSchema)