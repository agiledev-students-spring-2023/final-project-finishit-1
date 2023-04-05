import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = props => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = event => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        try {
            const response = axios.post('http://localhost:5002/login', { username, password })
            const token = response.data.token
            localStorage.setItem('token', token)
            // redirect to protected route
            window.location = '/protected'
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Sign Into Your Account</h1>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    <input className="inputBox" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <br />
                <br />
                <label>
                    <input className="inputBox" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <br />
                <br />
                <Link to="/">
                    <button className="submitButton" type="submit">Log in</button>
                </Link>
                <p><Link className="loginText" to="/reset">Forgot password?</Link></p>
                <br />
                <br />
                <p>
                    Dont have an account?
                    <Link class="loginText" to="/create">Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
