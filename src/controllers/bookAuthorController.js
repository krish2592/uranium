const authorModel = require('../models/authorModel')
const bookModel1 = require('../models/bookModel1')

let createBook = async function (req, res) {
    let newBookEntry = req.body
    if (!newBookEntry.author_id) {
        res.send("author_id is missing")
    }
    else if (newBookEntry.author_id) {
        let saveNewEntry = await bookModel1.create(newBookEntry)
        res.send({ "msg": saveNewEntry });
    }
}

let createAuthor = async function (req, res) {
    let newAuthorEntry = req.body

    if (!newAuthorEntry.author_id) {
        res.send("author_id is missing")
    } else if (newAuthorEntry.author_id) 
    {
        let saveNewAuthorEntry = await autherModel.create(newAuthorEntry)
        res.send({ "msg": saveNewAuthorEntry });
    }
}

let listAllBookByAuthor = async function (req, res) {
    let authorId = await authorModel.find({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    let listBookByAuthorName = await bookModel1.find(authorId[0]).select({ name: 1, author_id: 1, _id: 0 })
    res.send(listBookByAuthorName);
}

let getUpdatedPrice = async function (req, res) {
    let getAuthorIdAndPrice = await bookModel1.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true }).select({ author_id: 1,price:1, _id: 0 })
    //let findAuthorIdByBookName= await bookModel1.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true,upsert:true})
    let getUpdatedPriceAndAutherName = await( await authorModel.find(getAuthorIdAndPrice).select({ author_name: true, _id: 0 })).concat({ price: getAuthorIdAndPrice.price })
    res.send({ "Price Updatd Sucessfully": getUpdatedPriceAndAutherName })
}

//Using for Loop
let getBookByPrice = async function (req, res) {
    let getArrAuthorId = await bookModel1.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    let arr = [], getData,authorId;
    for (let element of getArrAuthorId) {
        getData = await authorModel.find(element).select({ author_name: 1, author_id: 1, _id: 0 })
        authorId= getData.map(element=>element.author_id)
        if(authorId[0]){
            arr.push(getData);
         }
    }
    res.send(arr.flat())
}



module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.listAllBookByAuthor = listAllBookByAuthor;
module.exports.getUpdatedPrice = getUpdatedPrice;
module.exports.getBookByPrice = getBookByPrice;