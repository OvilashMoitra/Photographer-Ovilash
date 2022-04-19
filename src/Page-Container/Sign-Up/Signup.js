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
    const [signInWithGoogle, emailUser, loading, googleError] = useSignInWithGoogle(authenication);
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
    // if (user) {
    //     navigate('/')
    const googleSignup = async () => {
        if (error) {
            toast('Login failed')
        }
        await signInWithGoogle();
        navigate('/')
    }
    const [
        createUserWithEmailAndPassword,
        error
    ] = useCreateUserWithEmailAndPassword(authenication, { sendEmailVerification: true });

    const signup = async (e) => {
        e.preventDefault()
        console.log(error)
        if (password !== confirmPassword) {
            toast("Password is not matching ")
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        navigate('/')
    }

    return (
        <div className='login-form d-flex'>
            <div className="img">
                <img src={"https://i.pinimg.com/564x/3b/9f/f6/3b9ff649aa3572bbff978a9800dc95a8.jpg"} alt="" />
            </div>
            <div className="form my-5">
                <h3 className='my-3 '><strong>Sign Up</strong></h3>
                <form className='mt-5' onSubmit={signup}>
                    <input className='form-input' type="email" onBlur={handleEmail} name="email" id="" defaultValue={"abc@something.com"} required />
                    <br />
                    <input className='form-input' type="password" onBlur={handlePassword} name="password" id="" placeholder='enter password' required />
                    <br />
                    <input className='form-input' type="password" onBlur={handleConfirmPassword} name="confirmPassword" id="" placeholder='confirm password' required />
                    <br />
                    <button className='submit-btn mb-0' type="submit">Sign Up</button>
                </form>
                <div className='line-container'>
                    <div className='line'></div>
                    <p className='mx-2'>or</p>
                    <div className='line'></div>
                </div>
                <button className='submit-btn mt-0' onClick={googleSignup}>Login With Google</button>
                <ToastContainer />
                <p className=''>Already have an account at<strong>Photographer-ovilash</strong>?<span><Link to="/login">Login</Link></span></p>
            </div>
        </div>
    );
};

export default Signup;