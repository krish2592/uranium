const batchModel = require("../models/batchModel");
const developerModel = require("../models/developerModel");

let createDeveloper=async function(req,res){
    let newDeveloper=req.body;
    let saveDeveloper=await developerModel.create(newDeveloper)
    res.send({status:true,data:saveDeveloper});
}


let getEligibleDevelopers=async function(req,res){
    let getEligibleDevelopers= await developerModel.find({$and:[{gender:"female"},{percentage:{$gte:70}}]})
    res.send({status:true,data:getEligibleDevelopers})
}

let getDevloperByQuery=async function(req,res){
    let percentageValue=req.query.percentage;
    let programValue=req.query.program;
    let batchId=await (await batchModel.find({name:programValue}).select({_id:1})).map(element=>element._id)
    let getDeveloper=await developerModel.find({$and:[{batch:batchId},{percentage:{$gte:percentageValue}}]}).populate("batch")
    res.send({Status:true,data1:getDeveloper})

}

module.exports.createDeveloper=createDeveloper;
module.exports.getEligibleDevelopers=getEligibleDevelopers;
module.exports.getDevloperByQuery=getDevloperByQuery;