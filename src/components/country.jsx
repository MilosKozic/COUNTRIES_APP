import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom'
import {StyledOneItem} from './styledComponents'

export const Country = ({ countries }) => {
    let { country } = useParams()
    let oneCountry = countries.filter(el => el.name == country)
    console.log(oneCountry)
    let history=useHistory()
    
    return (
        <StyledOneItem>
            <br/>
            <button onClick={()=>{
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
        </StyledOneItem>//
    )
}