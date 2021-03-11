import React, { useEffect, useState,useStateWithLocalStorage } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { getCountries } from './components/service'
import { Login,Register,Home } from './components/home'
import { Countries } from './components/countries'
import { Country } from './components/country'
import { StyledHome,StyledDivHome } from './components/styledComponents'
import { HashRouter } from 'react-router-dom'


function App() {

  const [countries, setCountries] = useState([])

  const [user,setUser]= useState(localStorage.getItem('user'))

 console.log(localStorage.getItem('user'))
 console.log(user)



  useEffect(() => {
    let mounted = true
    getCountries().then(res => {
      if (mounted) {
        setCountries(res.data)
      }
      return () => { mounted = false }
    })
  }, [])
  

  return (
    <>
      <HashRouter>
        <header>
        {
          user  ?
          <StyledDivHome>
          <Link to="/countries"><>&#x1F30E;</>Explore world around you...</Link>
        </StyledDivHome>
            :
            <StyledDivHome>
             <StyledHome> <Link to="/">Welcome to "Explore world around you...." </Link></StyledHome>
             <hr/>
            <StyledHome>  <Link to="/login">Login</Link></StyledHome>
            <StyledHome>  <Link to="/register">Create new account</Link></StyledHome>
            
          </StyledDivHome>}
        </header>

        <Switch>
        <Route exact path="/">
					<Home user={user} />
				</Route>
          <Route exact path="/login">
            <Login   setUser={setUser} user={user}/>
          </Route>
          <Route exact path="/register">
            <Register user={user}/>
          </Route>
          <Route exact path='/countries'>
            <Countries countries={countries} setUser={setUser} user={user}  />
          </Route>
          <Route exact path='/countries/:country'>
            <Country countries={countries}  />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
