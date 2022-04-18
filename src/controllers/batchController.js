const batchModel=require("../models/batchModel")

let createBatch=async function(req,res){
    let newBatch=req.body;
  let saveBatch=await  batchModel.create(newBatch)
  res.send({Status:true,data:saveBatch})
}

module.exports.createBatch=createBatch;