const mongoose=require('mongoose')

let bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:String,
    price:{
        INR:String,
        EU:String,
    },
    year: {type:Number ,default:2021},
    tags:[String],
    totalPages:Number,
    stockAvailable:Boolean
},{timestamps:true})

module.exports=mongoose.model('Book_v01', bookSchema);