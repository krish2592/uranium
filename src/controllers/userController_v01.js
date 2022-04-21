const userModel = require("../models/userModel")
const jwt=require("jsonwebtoken");
const { get } = require("express/lib/request");

let createNewUser = async function(req,res){
    let newUserDetail=req.body;
    let saveUser= await userModel.create(newUserDetail)
    res.send({Status:true, data:saveUser})
}

let signInUser=async function(req,res){
    let emailID=req.body.emailId;
    let password=req.body.password;

    let user=await userModel.findOne({emailId:emailID,password:password})

    if(!user) return  res.send({msg:"EmailId or password is wrong!"});
    
    let token= jwt.sign(
        {
       userID:user._id,
       name:"Sachin",
       info: "Developer"
    }, "Student of uranium batch")
    
    res.setHeader("x-auth-token", token)
    return res.send({Status:true,token:token})

}

let getUserDetail =async function(req,res){

    // let token =req.headers["x-auth-token"]

    // if(!token) token =req.headers["X-Auth-Token"]

    // if(!token) return res.send({msg:"x-auth-token is required!"})

    // let decodeToken= jwt.verify(token,"Student of uranium batch" )

    // if(!decodeToken) return res.send({msg:"Not a valid Token!"})

    let userId=req.params.userId

    let getUserDetail=await userModel.findOne({_id:userId})

    if(!getUserDetail) return res.send({msg:"User detail not found!"})
    
    res.send({Status:true,data:getUserDetail})

}

let updateUser= async function(req,res){

    // let token =req.headers["x-auth-token"]

    // if(!token) token=req.headers["X-Auth-Token"]

    // if(!token) return res.send({msg:"x-auth-token is required!"})

    // let decodeToken =jwt.verify(token,"Student of uranium batch")

    // if(!decodeToken) return  res.send({msg:"Not a valid Token!"})

    let userId=req.params.userId
    
    let updateUserData=req.body;

    let updatedUser=await userModel.findOneAndUpdate({_id:userId}, {$set:updateUserData}, {new:true})

    if(!updatedUser) return res.send({msg:"User does not exist"})

    res.send({Status:true, data:updatedUser}) 
}

let deleteUser=async function(req,res){

    // let token =req.headers["x-auth-token"]

    // if(!token) token=req.headers["X-Auth-Token"]

    // if(!token) return res.send({msg:"x-auth-token is required!"})

    // let decodeToken =jwt.verify(token,"Student of uranium batch")

    // if(!decodeToken) return  res.send({msg:"Not a valid Token!"})

    let userId=req.params.userId

    let deletedUser=await userModel.findOneAndUpdate({_id:userId}, {$set:{isDeleted: true}}, {new:true})

    if(!deletedUser) return res.send({msg:"User does not exist"})

    res.send({Status:true, data:deletedUser}) 

}

module.exports.createNewUser=createNewUser;
module.exports.signInUser=signInUser;
module.exports.getUserDetail=getUserDetail;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;