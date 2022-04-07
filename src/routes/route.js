const express = require('express');
const logger = require('./logger')

const router = express.Router();

const arr = ["Ankit", "Anuj", "Sabhia", "Suyash", "Pritesh", "Seema", "Sachin", "Parul", "Akash", "Sunny"];

router.get('/all-candidates', function (req, res) {
    //res.send(JSON.stringify(arr))
    res.send(arr);
})

router.get('/candidates', function (req, res) {
    let count = Number(req.query.count);

    //Method1
    let list = "";
    for (let i = 0; i < arr.length; i++) {
        if (count > 0 && count < 11 && i < count) {
            list = list + arr[i] + " "
        }
    }
    res.send(list);

    //Method2
    // if (count === 0) {
    //     res.send("Count can not be 0 or empty!")
    // }
    // else if (count > 0 && count != NaN) {
    //     let listOfCandidates = arr.filter((element, index) => index < count ? true : false)
    //     res.send(listOfCandidates)
    // } else {
    //     res.send("Count is Not a Number: " + count)
    // }
})

const listOfMovies = ["Lucy", "Drag me to the hell", "Narnia", "Harry Potter",
    "Desipicable me", "Pursuit of Happiness", "Slum dog millaniore", "Love me or Hate me", "Terminator"];

router.get('/movies', function (req, res) {
    res.send("list of movies: " + listOfMovies)
    //res.send(JSON.stringify(listOfMovies))
})

router.get('/movies/:indexNumber', function (req, res) {
    if (req.params.indexNumber < listOfMovies.length) {
        res.send("Movies present at index " + req.params.indexNumber + " is " + listOfMovies[req.params.indexNumber])
    } else {
        res.send("Use a valid index [index is out of bound]")
    }
})


/*****************************************************************************************/

const moviesList = [
    {
        "id": 1,
        "name": "Upside Down"
    },
    {
        "id": 2,
        "name": "Gravity"
    },
    {
        "id": 3,
        "name": "Transformer aramada"
    },
    {
        "id": 4,
        "name": "Rosie"
    },
]

//Problem 4
router.get('/films', function (req, res) {
res.send(moviesList);
})

//Problem 5
router.get('/films/:filmId', function (req, res) {
    if((req.params.filmId>0) && (req.params.filmId<=moviesList.length)){
        res.send(moviesList[req.params.filmId-1]);
    } else{
        res.send("No such movies exist with this filmId");
    }  
    })
// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });




module.exports = router;
// adding this comment for no reason