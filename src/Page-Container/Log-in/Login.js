import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import authenication from '../../firebase/firebase.init';
import './Login.css'

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [error] = useAuthState(authenication)
    let [user, loading] = useAuthState(authenication);
    const [signInWithGoogle, emailUser, googleError] = useSignInWithGoogle(authenication);
    const [errorText, setErrorText] = useState('')
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword
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
    const googleSignup = () => {
        signInWithGoogle()
        navigate('/')
    }
    const signin = (e) => {

        e.preventDefault()
        if (error) {
            toast('Password or Email is not matching')
            return
        }
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='form my-5'>
            <h3 className='my-5'><strong>Login</strong></h3>
            <form onSubmit={signin}>
                <input className='form-input' onBlur={handleEmail} type="email" name="" id="" placeholder='Enter your email here' required />
                <br />
                <input className='form-input' onBlur={handlePassword} type="password" name="" id="" placeholder='Enter your password here' required />
                <br />
                <button type="submit" className='submit-btn'>Login</button>
            </form>
            <div className='line-container'>
                <div className='line'></div>
                <p className='mx-2'>or</p>
                <div className='line'></div>
            </div>
            <ToastContainer></ToastContainer>
            <button className='submit-btn mt-0' onClick={googleSignup}>Login With Google</button>
            <ToastContainer />
            <p>New to <strong>Photographer-ovilash</strong>?<span><Link to="/signup">Create Account</Link></span> </p>
        </div>
    );
};

export default Login;