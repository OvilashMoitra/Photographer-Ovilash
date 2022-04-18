import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authenication from '../../firebase/firebase.init';
import './Login.css'

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let [user] = useAuthState(authenication);
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(authenication);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const signin = (e) => {

        e.preventDefault()
        if (error) {
            return
        }
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form'>
            <h3 className='my-5'><strong>Login</strong></h3>
            <form onSubmit={signin}>
                <input className='form-input' onBlur={handleEmail} type="email" name="" id="" placeholder='Enter your email here' />
                <br />
                <input className='form-input' onBlur={handlePassword} type="password" name="" id="" placeholder='Enter your password here' />
                <br />
                <button type="submit" className='submit-btn'>Login</button>
            </form>
            <p>New to <strong>Photographer-ovilash</strong>? <span><Link to="/signup">Create Account</Link></span> </p>
        </div>
    );
};

export default Login;