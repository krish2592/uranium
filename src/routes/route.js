const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const userController= require("../controllers/userController_v01")
const userAuthMiddleware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

router.post("/users",userController.createNewUser )
router.post("/login",userController.signInUser)

router.get("/users/:userId",userAuthMiddleware.checkUserTokenAuth, userController.getUserDetail)
router.put("/users/:userId", userAuthMiddleware.checkUserTokenAuth, userController.updateUser)
router.delete("/users/:userId",userAuthMiddleware.checkUserTokenAuth, userController.deleteUser)
module.exports = router;