import axios from 'axios'

export const getCountries =()=> axios.get('https://restcountries.eu/rest/v2/all')

export const registerUser = (user) => {
    return axios.post('http://localhost:3005/users',user)
}

export const getUsers = () => {
    return axios.get('http://localhost:3005/users')
}

export const getCityForecast =(city)=> axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eabac33fe6ddae5c4cb0b2393407b914`)

export const getOneCountry =(country)=> axios.get(`https://restcountries.eu/rest/v2/name/${country}`)

export const KelvinToCels=(number)=>{  
  let celsius =  (Number(number)-273.15)
return celsius.toFixed(2)}
export const KelvinToFarenh=(number)=>{  
    let farenh =  Number(number)*9/5 - 459.67
  return farenh.toFixed(2)}