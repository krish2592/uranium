const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
var _ = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
    logger.welcome();
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();
    formatter.trim();
    formatter.toLowerCase();
    formatter.toUpperCase();
    res.send('My first ever api!')

});

router.get('/hello', function (req, res) {
    console.log(_.chunk(helper.month_Names, 3))
    const arr = [];
    let n = 1;
    for (let i = 0; i<10 ; i++) {
        if(i===0){
          arr[i]=1;
        }
       else {arr[i]=n+2;
        n=n+2;}
    }
    console.log("Array of first 10 odd number "+arr)
    console.log("Print tail of input array "+ _.tail(arr))

    const array1=[1,5,8,4,5]
    const array2=[6,4,5,3,1]
    const array3=[8,4,5,8,9]
    const array4=[6,3,4,6,2]
    const array5=[3,5,7,8,0]

    console.log("Print union of five input array "+_.union(array1,array2,array3,array4,array5))

    const strArray= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(_.fromPairs(strArray))
    res.send('Hi')
})



router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason