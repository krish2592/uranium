const axios = require('axios')


let getWeatherByCity = async function (req, res) {
    try {
        let myAppId = req.query.appid
        const arr = []; 
        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < cities.length; i++) {

            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${myAppId}`
            }

            let result = await axios(options);
            let data = result.data;
            let getTemp = { city: data.name, temp: data.main.temp }
            arr.push(getTemp) 
        }

       let listOfCitiesByTemp= arr.sort( (a,b) => { return a.temp-b.temp });
        
        res.status(200).send({Status:true, data: listOfCitiesByTemp});
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
    }

}


module.exports.getWeatherByCity = getWeatherByCity;