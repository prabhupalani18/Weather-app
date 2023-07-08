const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")

const PORT = process.env.PORT || 3000

const weatherstack = require('./utils/weatherstack')
const geocode = require('./utils/geocode')

const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('', (req,res)=>{
    res.render('index',{
        "title": "Weather Application",
        "name": "Prabhu Palani"
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        "title": "About page",
        "name": "Prabhu Palani"
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        "title": "Help page",
        "name": "Prabhu Palani"
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            "error": "Please provide address in the query"
        })
    }
    geocode(req.query.address,(error,{latitude, longitude, location} = {})=>{
        if(error)
        {
            return res.send({
                "error": error
            })
        }
        else{
            weatherstack(latitude, longitude,(error,weatherData)=>{
                if(error)
                {
                    return res.send({
                        "error": error
                    })
                }
                else{
                    res.send({
                        "weatherData": weatherData,
                        "location": location,
                        "title": "Weather Application",
                        "name": "Prabhu Palani"
                    })
                }
            })
        }
    })
})

app.get('/help/*', (req,res)=>{
    res.render('error', {
        "title": "Help article not found",
        "name": "Prabhu Palani"
    })
})

app.get('/*', (req,res)=>{
    res.render('error', {
        "title": "404 page not found",
        "name": "Prabhu Palani"
    })
})

app.listen(PORT,()=>{
    console.log("Server is up and running at port ",PORT)
})