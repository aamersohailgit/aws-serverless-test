import axios from "axios";

export const handler = async (event: any) => {
  const { postcode, countryCode } = event.queryStringParameters;

  // Validate input
  if (!postcode || !countryCode) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Both postcode and country code are required" }),
    };
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${postcode},${countryCode}&appid={WEATHER_API_KEY}`);

    // Format response data
    const { coord, weather, main } = response.data;
    const formattedData = {
      lon: coord.lon,
      lat: coord.lat,
      main: weather[0].main,
      description: weather[0].description,
      temp: main.temp,
      feels_like: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      pressure: main.pressure,
      humidity: main.humidity,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(formattedData),
    };
  } catch (error) {
    console.error(error);

    // Handle errors
    if (error.response) {
      return {
        statusCode: error.response.status,
        body: JSON.stringify({ message: error.response.data.message }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error" }),
      };
    }
  }
};
