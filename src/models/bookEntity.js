const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: {
        fiction: String,
        nonFiction: String
    },
    year: {
        type: Number,
        required: true,
    }  
},
{timestamps: true})


module.exports = mongoose.model('Book', bookSchema); 