import axios from 'axios'

export const getCountries =()=> axios.get('https://restcountries.eu/rest/v2/all')

export const registerUser = (user) => {
    // return axios.post('https://my-json-server.typicode.com/MilosKozic/users-api/users',user)
    return axios.post('https://nodejs-mongodb-regg-app.herokuapp.com/users',user)
}

export const getUsers = () => {
    // return axios.get('https://my-json-server.typicode.com/MilosKozic/users-api/users')
    return axios.get('https://nodejs-mongodb-regg-app.herokuapp.com/users')
}

export const getCityForecast =(city)=> axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

export const getOneCountry =(country)=> axios.get(`https://restcountries.eu/rest/v2/name/${country}`)

export const KelvinToCels=(number)=>{  
  let celsius =  (Number(number)-273.15)
return celsius.toFixed(2)}
export const KelvinToFarenh=(number)=>{  
    let farenh =  Number(number)*9/5 - 459.67
  return farenh.toFixed(2)}