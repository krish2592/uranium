const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const bookController=require('../controllers/bookController1')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",bookController.createBook)
router.post("/bookList", bookController.getBookNameAndAutor)
router.post("/getBooksInYear", bookController.getBooksInYear)
router.post("/getParticularBooks", bookController.getPerticularBooks)
router.post("/getXINRBooks", bookController.getXINRBooks)

router.post("/getRandomBooks", bookController.getRandomBooks)
// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;