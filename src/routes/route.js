const express = require(
    'express');
const log = require('./logger');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log("Imorting url from logger",log.url)
    console.log("Hi, This is: ",log.name())
});

module.exports = router;
// adding this comment for no reason