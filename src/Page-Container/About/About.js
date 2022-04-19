import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import './About.css'
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="image d-flex justify-content-center my-5">
                <img src={"https://i1.sndcdn.com/artworks-000245772984-ij7iua-t500x500.jpg"} alt="" />
            </div>
            <div className="text text-center">
                <p className='w-50 '><strong>As a photographer I want my photos to imagine a bold, exciting world one in which the subject, be it a product or a person, stands out, shines. Viewers need to be transported, and my photos achieve that through careful compositions of color and tone. This is the end result of a process by which I bring the creative brief to life and make the subject part of a story.This is the power that photography's always had for me. I recognized it when I took my first photo class, back when I was growing up in Puerto Rico. So, I apprenticed with photographers and shot for a variety of publications. Eventually, to continue my education, I moved to the United States. Here I've broadened my capacities and become an art director, shepherding ideas from briefs to concepts to production shoots to deliverables. To each project I bring my experience and my keen eye.</strong></p>
                <a href="#" className='text-decoration-none text-white'><strong><FaFacebook className='contact-icon text-dark'></FaFacebook> <FaInstagram className='contact-icon text-dark'></FaInstagram><FaFacebookMessenger className='contact-icon text-dark'></FaFacebookMessenger></strong></a>
            </div>
        </div>
    );
};

export default About;