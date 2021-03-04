import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useHistory, Redirect } from 'react-router-dom'
import { registerUser, getUsers } from './service'
import {StyledLoginDiv,StyledLoginButton} from './styledComponents'

export const Home = ({ user }) => {
    return (
        <>
        
            {user ? <Redirect to="/countries" /> : <Redirect to="/login" />}
        </>
    )
} 
export const Login = ({ setUser, user }) => {
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
          
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                getUsers().then(res => {
                    let korisnik = res.data.find(el => el.username === username && el.password === password)
                    if (korisnik) {

                        localStorage.setItem('user',(korisnik.username)) 
                        const localUser =localStorage.getItem('user')
                        setUser(localUser)
                        history.push('/countries')
                    }
                    else {
                        window.alert('Neispravni podaci, unesite ponovo')
                    }
                })
            }}>
                <StyledLoginDiv>
                <input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                <StyledLoginButton type="submit" value="Login" />
                </StyledLoginDiv>
            </form>
        </>
    )

}

export const Register = ({user}) => {
    let hist = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
   
    var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    return  (
        <form onSubmit={e => {
            e.preventDefault()

            if (name.length < 2) return window.alert('Ime je previse kratko')
            if (passw.length < 8 || !passw.match(paswd)) return window.alert('Sifra mora sadrzati izmedju 8 i 15 karaktera,  minimum jedno malo slovo, jedno veliko slovo, jedan broj i jedan specijalan karakter')

            getUsers().then(res => {
                console.log(res.data)
                let user = {
                    username: name,
                    email: email,
                    password: passw
                }
                console.log(user.username)
                if (!res.data.find(el => el.username === user.username || el.email === user.email)) {
                    registerUser(user).then(res => {
                        hist.push('/login')
                    })
                }
                else {
                    window.alert('Već postoji korisnik sa unetim podacima')
                }
            })
        }}>
            <StyledLoginDiv>
            <input type="text" placeholder="username..." onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="email..." onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="password..." onChange={e => setPassw(e.target.value)} />
            <StyledLoginButton type="submit" value="Register" />
            </StyledLoginDiv>
        </form>
    )

}