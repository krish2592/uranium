 const bookModel1=require('../models/bookModel1')

let createBook=async function(req,res){
let newBook=req.body;
let saveBook=await bookModel1.create(newBook);
res.send( {"data":saveBook});
}

let getBookNameAndAutor= async function(req,res){
    let getBookList=await bookModel1.find().select({bookName:1, authorName:1,_id:0})
    res.send(getBookList);
}

// let getBookNameAndAutor= async function(req,res){
//     let getBookList=await bookModel1.find().count()
//     res.send(getBookList+"");
// }

//Using Path Params
// let getBooksInYear=async function(req,res){
//     let publishYear=req.params.year;
//     console.log(publishYear);
//     let getListofBooksInYear=await bookModel1.find({year:publishYear});
//     res.send(getListofBooksInYear);
// }

//Using query params
let getBooksInYear=async function(req,res){
    let publishYear=req.query.year;
    let getListofBooksInYear=await bookModel1.find({year:publishYear});
    res.send(getListofBooksInYear);
}


let getPerticularBooks=async function(req,res){
    let inputParams=req.body;
    let getListofPerticularBooks=await bookModel1.find(inputParams);
    res.send(getListofPerticularBooks);
}

let getXINRBooks=async function(req,res){
    let getListofBooksByPriceTag=await bookModel1.find({$or: [{"price.INR":"100"},{"price.INR":"200"},{"price.INR":"500"}]});
    res.send(getListofBooksByPriceTag);
}

let getRandomBooks =async function(req,res){
let getListOfBooksAvailableBooks=await bookModel1.find({$or:[{stockAvailable:true},{totalPages:{$gt: 500}}]})
res.send(getListOfBooksAvailableBooks)
}

module.exports.createBook=createBook;
module.exports.getBookNameAndAutor=getBookNameAndAutor;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getPerticularBooks=getPerticularBooks;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;