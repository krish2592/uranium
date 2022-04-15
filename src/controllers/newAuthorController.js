const newAuthorModel= require('../models/newAuthor')

const createNewAuthor=async function(req,res){
   let newAuthorData =req.body.author;
   // if(newAuthorData.author){
   //    console.log(newAuthorData.author)

   // }
   let saveData=await newAuthorModel.create(newAuthorData);
   res.send(newAuthorData);
}

module.exports.createNewAuthor=createNewAuthor;