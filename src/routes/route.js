const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const bookController=require('../controllers/entityController')
//const bookEntity=require('../models/bookEntity')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createNewBook",bookController.createNewBook)
router.post("/getBooks",bookController.getListOfBooks)

module.exports = router;