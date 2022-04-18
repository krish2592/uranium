const newAuthorModel= require('../models/newAuthor')

const createNewAuthor=async function(req,res){
   let newAuthorData =req.body;
   let saveData=await newAuthorModel.create(newAuthorData);
   res.send(saveData);
}

module.exports.createNewAuthor=createNewAuthor;