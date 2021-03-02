import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom'
import { StyledOneItem } from './styledComponents'
import { getCityForecast, getOneCountry,KelvinToCels,KelvinToFarenh } from './service'
import { useEffect, useState } from 'react'

export const Country = ({ countries }) => {
    let { country } = useParams()
    let oneCountry = countries.filter(el => el.name == country)
   
    let history = useHistory()
    const[tempUnit,setTempunit]=useState(false)
    const [forecast, setForecast] = useState()

    console.log(process.env.REACT_APP_WEATHER_API_KEY)
    useEffect(() => {
        let mounted = true
        getOneCountry(country).then(res => {
            if (mounted) {
               
                getCityForecast(res.data[0].capital).then(res => {
                    setForecast(res.data)
                })
            }
            return () => { mounted = false }
        })
    }, [])

    return (
        <>
            <StyledOneItem>
                <br />
                <button onClick={() => {
                    history.push('/countries')
                }}>Back</button>
                <div className="text">
                    <p><span>Capital city:</span> {oneCountry[0]?.capital}</p>
                    <p><span>Region:</span>  {oneCountry[0]?.region}</p>
                    <p><span>Native name:</span>  {oneCountry[0]?.nativeName}</p>
                    <p><span>Currency:</span>  {oneCountry[0]?.currencies[0].name}</p>
                    <p><span>Primary language:</span> {oneCountry[0]?.languages[0].name}</p>
                </div>
                <div className="img">
                    <img src={`${oneCountry[0]?.flag}`}></img>
                </div >
            </StyledOneItem>
            <StyledOneItem >
                <button onClick={()=>{
                    setTempunit(!tempUnit)
                }}>&#x2103; / &#x2109;</button>
                
                {tempUnit?
                        <p>Temperature : {KelvinToFarenh(forecast?.main.temp)}<>&#x2109;</> </p>
                        :
                        <p>Temperature: {KelvinToCels(forecast?.main.temp)}<>&#x2103;</></p>
                }
              
                <p>Weather : {forecast?.weather[0].main}</p>
                <p>Wind speed: {forecast?.wind.speed} mp/h </p>
            </StyledOneItem>
        </>
    )
}