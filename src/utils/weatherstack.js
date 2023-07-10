const request = require("postman-request")

const weatherstack = async(latitude,longitude,callback)=>{
    const weatherstackURL = "http://api.weatherstack.com/current?access_key="+ process.env.WEATHERSTACK +"="+latitude+","+longitude

    request({
        url: weatherstackURL,
        json: true
    },(err,response)=>{
        if(err){
            callback("Can't reach weatherstack api", undefined)
        }
        else if(response.body.error)
        {
            callback("Unable to find location",undefined)
        }
        else{
            const temp = response.body.current.temperature
            const feelslike = response.body.current.feelslike
            callback(undefined,"The current temperature is "+temp+".\n but it feels like "+feelslike)
        }
    });
}

module.exports = weatherstack