import React, { useState } from 'react';
import './Signup.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authenication from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification } from 'firebase/auth';
import { Tree } from 'rsuite';

const Signup = () => {
    const [signInWithGoogle, emailUser, loading, error] = useSignInWithGoogle(authenication);
    let navigate = useNavigate();
    let location = useLocation();
    let [user] = useAuthState(authenication);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    const googleSignup = () => {
        signInWithGoogle()
        navigate('/')
    }
    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(authenication, { sendEmailVerification: true });

    const signup = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast("Password is not matching ")
            return;
        }
        createUserWithEmailAndPassword(email, password)
        navigate('/')
    }

    return (
        <div className='form'>
            <h3 className='my-3 '><strong>Sign Up</strong></h3>
            <form className='mt-5' onSubmit={signup}>
                <input className='form-input' type="email" onBlur={handleEmail} name="email" id="" defaultValue={"abc@something.com"} required />
                <br />
                <input className='form-input' type="password" onBlur={handlePassword} name="password" id="" placeholder='enter password' required />
                <br />
                <input className='form-input' type="password" onBlur={handleConfirmPassword} name="confirmPassword" id="" placeholder='confirm password' required />
                <br />
                <button className='submit-btn' type="submit">Sign Up</button>
            </form>
            <div className='line-container'>
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>
            <button className='bg-primary font-bold text-white' onClick={googleSignup}>Login With Google</button>
            <ToastContainer />
            <p className='mt-4'>Already have an account at<strong>Photographer-ovilash</strong>? <span><Link to="/login">Login</Link></span> </p>
        </div>
    );
};

export default Signup;