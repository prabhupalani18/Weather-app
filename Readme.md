# Weather App

The Weather App is a web application that provides current weather information for a given location. It utilizes Node.js and Express.js on the server-side, Weatherstack API for retrieving weather data, Mapbox API for location pinpointing, and HTML, CSS, and Handlebars for the frontend.

## Features

- Current weather information: Get the current weather condition, temperature, humidity, wind speed, and more for a specific location.
- Location search: Enter a location to retrieve weather information for that specific location.
- Location pinpointing: Utilize Mapbox API to pinpoint the location on a map.
- User-friendly interface: The weather information is displayed in a visually appealing and easy-to-understand format.

## Technologies Used

- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A web application framework for Node.js.
- Weatherstack API: An API that provides weather data for different locations.
- Mapbox API: An API for location services, including geocoding and map visualization.
- HTML, CSS, and Handlebars: Web technologies used for creating the frontend of the application.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/prabhupalani18/Weather-app.git
```


2. Install the dependencies:

```sh
cd weather-app
npm install
````


3. Set up the API keys:

   - Sign up for an account at Weatherstack (https://weatherstack.com/) to obtain an API key.
   - Sign up for an account at Mapbox (https://www.mapbox.com/) to obtain an API key.
   - Create a `.env` file in the root directory.
   - Add the following environment variables to the `.env` file:

     ```
     WEATHERSTACK_API_KEY=your-weatherstack-api-key
     MAPBOX_API_KEY=your-mapbox-api-key
     ```

4. Run the application:

```sh
npm start
```


The app should now be running locally on `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Enter the location for which you want to retrieve weather information.
3. Click the "Submit" button.
4. The weather information for the specified location will be displayed, along with a map pinpointing the location.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please submit an issue or open a pull request on the GitHub repository.
