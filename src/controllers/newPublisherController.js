const newPublisherModel = require('../models/newPublisher')

const createNewPublisher = async function (req, res) {
    let newPublisherData = req.body
    let savePublisherData=await newPublisherModel.create(newPublisherData)
    res.send(savePublisherData)
}

module.exports.createNewPublisher=createNewPublisher;