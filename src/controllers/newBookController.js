const newBookModel = require('../models/newBook')
const newAuthorModel = require('../models/newAuthor')
const newPublisherModel = require('../models/newPublisher');
const newAuthor = require('../models/newAuthor');

const createNewBook = async function (req, res) {
    let newBookData = req.body;
    let author_id = newBookData.author;
    let publisher_id = newBookData.publisher;


    //Method1  Note: No need to check lenght here
    if (author_id.length === 24) {
        let authorId = await newAuthorModel.findById(author_id);
        if (authorId) {
            if (publisher_id.length === 24) {
                let publisherId = await newPublisherModel.findById(publisher_id)
                if (publisherId) {
                    let saveBookData=await newBookModel.create(newBookData);
                    res.send({status: true,data:saveBookData})
                } else {
                    res.send({status:false,message:"The publisher is not present in publisher collection"});
                }

            }  else {
                res.send({status:false,message:"Valid publisher id is mendatory!"});
            }

        } else {
            res.send({status:false,message:"The author is not present in author collection"});
        }
    } else {
        res.send({status:false,message:"Valid author id is mendatory!"});
    }


/***********  Note: First write failure then happy case. Here we are not handlig wrong object id  ************/
               
//Method 2
    // //a part faliure case
    // if (!author_id) {
    //     res.send({ status: false, message: "Author id is required!" })
    // }

    // //c part failure case
    // if (!publisher_id) {
    //     res.send({ status: false, message: "Publisher id is required" })
    // }

    // //b part happy flow/case
    // if (author_id) {
    //     let authorId = await newAuthorModel.findById(author_id)
    //     //failure case first
    //     if (!authorId) {
    //         res.send({ status: false, message: "Author id is not present in author collection" })
    //     }
    // }

    // //d part happy case
    // if (publisher_id) {
    //     let publisherId = await newPublisherModel.findById(publisher_id)
    //     //failure case
    //     if (!publisherId) {
    //         res.send({ status: false, message: "Publisher id is not present in publisher collection" })
    //     }
    // }

    // let saveBookData = await newBookModel.create(newBookData)
    // res.send({ status: true, data: saveBookData })

}




const getFullDetail = async function (req, res) {
    let fullData = await newBookModel.find().populate("author publisher")
    res.send(fullData);
}

const updateBook = async function (req, res) {

    //Without populate
    let findIdByPublisher = await newPublisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })
    let findIdByRating = await newAuthor.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })

    //Using loop
    const arrOfPublisherId = []
    for (let i = 0; i < findIdByPublisher.length; i++) {
        arrOfPublisherId.push(findIdByPublisher[i]._id)
    }

    //Using higher order function map
    let arrOfAuthorId = findIdByRating.map(element => element._id)

    let setHardCover = await newBookModel.updateMany({ publisher: { $in: arrOfPublisherId } }, { isHardCover: true }, { new: true })
    let updatePrice = await newBookModel.updateMany({ author: { $in: arrOfAuthorId } }, { $inc: { price: 10 } }, { new: true })



   res.send({ status: true, setHardCover: setHardCover, updatePice: updatePrice })
   
}




module.exports.createNewBook = createNewBook;
module.exports.getFullDetail = getFullDetail;
module.exports.updateBook = updateBook;