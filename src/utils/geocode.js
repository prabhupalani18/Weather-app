const request = require("postman-request")

const geocode = async(city,callback)=>{
    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+city+".json?access_token=pk.eyJ1IjoicHJhYmh1cGFsYW5pIiwiYSI6ImNsM2VwNGdrejA1dXkzZG8ydDUwYzZwc2oifQ.3LKyHc9NXbn4pqc73TkLiA&limit=1"
    request({url: geocodeURL, json: true},(err,response)=>{
        if(err){
            callback("Can't reach mapbox api", undefined)
        }
        else if(!response && !response.body && response.body.features.length === 0){
            callback("Given city is not found. please try another search")
        }
        else{
            callback(undefined, mapFinalResponse(response,city))
        }
    })
}

const mapFinalResponse = ((response, city)=>{
    let latitude = response.body.features[0].center[1]
    let longitude = response.body.features[0].center[0]
    let location = ''
    if(response.body.features[0].context)
    {
        const contextArray = response.body.features[0].context
        for(const data of contextArray)
        {
            location = location + " " + data.text
        }
    }
    else{
        location = city
    }
    const finalResponse = {
        "latitude": latitude,
        "longitude": longitude,
        "location": location
    }
    return finalResponse
})

module.exports = geocode