import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { StyledDivItem, StyledDivCont,StyledFormSelect,StyledSelect,StyledSearch,StyledButton } from './styledComponents'

export const Countries = ({ countries, setUser, user }) => {

    const [selectvalue, setSelectvalue] = useState('')
    const [search, setSearch] = useState('')
     
    let history = useHistory()
    return user?
    (
        <>

            <Form countries={countries} setSelectvalue={setSelectvalue} setSearch={setSearch} setUser={setUser} />

            <StyledDivCont>{countries.filter(el => (el.region.startsWith(selectvalue) && el.name.toLowerCase().includes(search)))
                .map(country =>
                    <StyledDivItem key={country.name} onClick={() => {
                        history.push(`/countries/${country.name}`)
                    }}>
                        {console.log(selectvalue)}
                        <img src={`${country?.flag}`}></img>

                        <Link to={`countries/${country?.name}`}>
                            <p>{country?.name}</p>
                        </Link>

                        <p><span>  Capital city:</span>  {country.capital ? country?.capital : "No capital city"}</p>
                        <p><span>  Population:</span>  {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    </StyledDivItem>)}
            </StyledDivCont>
        </>
    )
    :
    (
            <>
                <h3>You need to be logged in to access this page!</h3>
                {history.push('/login')}
            </>
    )
}

const Form = ({ countries, setSelectvalue = { setSelectvalue }, setSearch = { setSearch }, setUser = { setUser } }) => {

    let regions = Array(...new Set(countries.map(el => el.region)))
    let history = useHistory()
    return (
        <StyledFormSelect>
            <StyledSelect onChange={(e) => {
                setSelectvalue(e.target.value)
            }}>
                <option value="">All countries</option>
                {regions.splice(0, 6).map(el => <option key={el} value={el}>{el}</option>)}
            </StyledSelect>

            <StyledSearch type="text" placeholder="Search some country..." onChange={(e) => {
                setSearch(e.target.value.toLowerCase())
            }} />

            <StyledButton onClick={() => {
                // setUser(null)
                history.push('/login')
                setUser(null)
                localStorage.removeItem('user')
               
            }}>Logout</StyledButton>
        </StyledFormSelect>
    )
}