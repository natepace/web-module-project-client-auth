import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const initialLogin = {
        credintials: {
            username: '',
            password: '',
        }
    }
    const [state, setState] = useState(initialLogin)

    const handleChange = e => {
        setState({
            credintials: {
                ...state.credintials,
                [e.target.name]: e.target.value
            }
        })
        return state;
    }

    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', state.credintials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                window.location.href = '/friends'
            })
            .catch(err => {
                console.log(err.response)
            })

    }
    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={state.credintials.username}
                    onChange={handleChange}
                >

                </input>
                <input
                    type="text"
                    name="password"
                    value={state.credintials.password}
                    onChange={handleChange}
                >

                </input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login