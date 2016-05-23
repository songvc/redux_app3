import axios from 'axios';

const API_KEY = 'c09be425f9780e6cf9b0db19383c2f5f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
