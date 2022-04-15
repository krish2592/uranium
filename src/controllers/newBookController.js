const newBookModel = require('../models/newBook')
const newAuthorModel = require('../models/newAuthor')
const newPublisherModel = require('../models/newPublisher')

const createNewBook = async function (req, res) {
    let newBookData = req.body;
    let author_id = newBookData.author;
    let publisher_id = newBookData.publisher;
 
    

    if (author_id.length === 24) {
        let authorId = await newAuthorModel.findById(author_id);
        if (authorId) {
            if (publisher_id.length === 24) {
                let publisherId = await newPublisherModel.findById(publisher_id)
                if (publisherId) {
                    let saveBookData=await newBookModel.create(newBookData);
                    res.send(saveBookData)
                } else {
                    res.send("The publisher is not present in publisher collection");
                }

            }  else {
                res.send("Valid publisher id is mendatory!");
            }

        } else {
            res.send("The author is not present in author collection");
        }
    } else {
        res.send("Valid author id is mendatory!");
    }
}

const getFullDetail=async function(req,res){
    let fullData=await newBookModel.find().populate("author publisher")
    res.send(fullData);
}


module.exports.createNewBook = createNewBook;
module.exports.getFullDetail=getFullDetail;