import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaYahoo } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubitted] = useState(false)
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleNewslater = (e) => {
        e.preventDefault()
        setSubitted(!submitted)
    }
    return (
        <footer className='footer'>
            <div className="description">
                <h3>Photographer-Ovilash</h3>
                <p>As a photographer I want my photos to imagine a bold, exciting world one in which the subject, be it a product or a person, stands out, shines. Viewers need to be transported, and my photos achieve that through careful compositions of color and tone. This is the end result of a process by which I bring the creative brief to life and make the subject part of a story.</p>
            </div>
            <div className="newsletter">
                <a href="#" className='text-decoration-none text-white'><strong><FaFacebook className='contact-icon'></FaFacebook> <FaInstagram className='contact-icon'></FaInstagram><FaFacebookMessenger className='contact-icon'></FaFacebookMessenger></strong></a>
                <p>Sign Up</p>
                {
                    submitted ? <strong ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ms-2 submitted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>Submitted</strong> : <form onSubmit={handleNewslater}>
                        <input onBlur={handleEmail} type="email" name="" id="" />
                        <button type="submit"><strong>Sign Up</strong></button>
                    </form>
                }
            </div>
        </footer >
    );
};

export default Footer;