import axios from 'axios'

export const getCountries =()=> axios.get('https://restcountries.eu/rest/v2/all')

export const registerUser = (user) => {
    return axios.post('http://localhost:3005/users',user)
}

export const getUsers = () => {
    return axios.get('http://localhost:3005/users')
}

