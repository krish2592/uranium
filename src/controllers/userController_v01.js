const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
const { get } = require("express/lib/request");

let createNewUser = async function (req, res) {
    try {
        let newUserDetail = req.body;
        let saveUser = await userModel.create(newUserDetail)
        res.status(201).send({ Status: true, data: saveUser })
    }
    catch (error) {
        res.status(400).send({ msg: "Error", error: error.message })
    }
}

let signInUser = async function (req, res) {
    try {
        let emailID = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: emailID, password: password })

        if (!user) return res.status(401).send({ msg: "EmailId or password is wrong!" });

        let token = jwt.sign(
            {
                userID: user._id,
                name: "Sachin",
                info: "Developer"
            }, "Student of uranium batch")

        res.status(200).setHeader("x-auth-token", token)
        return res.status(200).send({ Status: true, token: token })
    }
    catch (error) {
        res.status(400).send({ msg: "Error", error: error.message })
    }
}

let getUserDetail = async function (req, res) {

    // let token =req.headers["x-auth-token"]

    // if(!token) token =req.headers["X-Auth-Token"]

    // if(!token) return res.send({msg:"x-auth-token is required!"})

    // let decodeToken= jwt.verify(token,"Student of uranium batch" )

    // if(!decodeToken) return res.send({msg:"Not a valid Token!"})
    try {

        let userId = req.params.userId

        let getUserDetail = await userModel.findOne({ _id: userId })

        if (!getUserDetail) return res.status(404).send({ msg: "User not found!" })

        res.status(200).send({ Status: true, data: getUserDetail })
    }
    catch (error) {
        res.status(400).send({ msg: "Error", error: error.message })
    }

}

let updateUser = async function (req, res) {

    // let token =req.headers["x-auth-token"]

    // if(!token) token=req.headers["X-Auth-Token"]

    // if(!token) return res.send({msg:"x-auth-token is required!"})

    // let decodeToken =jwt.verify(token,"Student of uranium batch")

    // if(!decodeToken) return  res.send({msg:"Not a valid Token!"})

    try {
        let userId = req.params.userId

        let updateUserPost = req.body.post;
        let message=[];
        message.push(updateUserPost);
        req.body["post"]=message;
        let updateUserData=req.body

        let updatedUser = await userModel.findOneAndUpdate({ _id: userId },updateUserData, { new: true })

        if (!updatedUser) return res.status(404).send({ msg: "User not found!" })

        res.status(200).send({ Status: true, data: updatedUser })
    }
    catch (error) {
        res.status(400).send({msg:"Error", error:error.message})
    }
}

let deleteUser = async function (req, res) {

    // let token =req.headers["x-auth-token"]

    // if(!token) token=req.headers["X-Auth-Token"]

    // if(!token) return res.send({msg:"x-auth-token is required!"})

    // let decodeToken =jwt.verify(token,"Student of uranium batch")

    // if(!decodeToken) return  res.send({msg:"Not a valid Token!"})
    try{

    let userId = req.params.userId

    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })

    if (!deletedUser) return res.status(404).send({ msg: "User not found!" })

    res.status(200).send({ Status: true, data: deletedUser })
    }
    catch(error){
        res.status(400).send({msg:"Error", error:error.message})
    }

}


module.exports.createNewUser = createNewUser;
module.exports.signInUser = signInUser;
module.exports.getUserDetail = getUserDetail;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;