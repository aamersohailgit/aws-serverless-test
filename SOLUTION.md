# Instructions for running TypeScript Serverless project with API Gateway and Axios

## Steps

## Step 1: `yarn install`

## Step 2: Add weather apis `WEATHER_API_KEY=<your-keys>` in .env file

## Step 3: Test it offline `serverless offline start --inspect`

## Step 4: Test this endpoint `http://localhost:3000/development/weather?postcode=2000&countryCode=AU`

## Step 5: You will get response like this

`
{
    "lon": 151.21,
    "lat": -33.87,
    "main": "Clear",
    "description": "clear sky",
    "temp": 294.32,
    "feels_like": 294.2,
    "temp_min": 293.13,
    "temp_max": 295.93,
    "pressure": 1017,
    "humidity": 35
}

`

