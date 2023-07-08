const searchEvent = document.querySelector('form')
const search = document.querySelector('input')

const locationID = document.querySelector('#location')
const forecastID = document.querySelector('#forecast')

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    locationID.textContent = "Loading..."
                forecastID.textContent = ''
    fetch('/weather?address='+location).then(result=>{
        locationID.textContent = "Loading"
        result.json().then(data=>{
            if(data.error)
            {
                locationID.textContent = data.error
                forecastID.textContent = ''
            }
            else{
                locationID.textContent = data.location
                forecastID.textContent = data.weatherData
            }
        })
    })
})