
const bookEntity = require('../models/bookEntity')

let createNewBook = async function (req, res) {
    let newBook = req.body;
    let createBook = await bookEntity.create(newBook);
    res.send({"New book in database has been created sucessfully":createBook});
}

let getListOfBooks= async function(req,res){
let getList=await bookEntity.find();
res.send({"List of all books":getList})
}

module.exports.createNewBook = createNewBook;
module.exports.getListOfBooks=getListOfBooks;