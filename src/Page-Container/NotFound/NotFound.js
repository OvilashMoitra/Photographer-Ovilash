import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={"https://cdn.dribbble.com/users/2373808/screenshots/6201645/media/35e99be3855defa1ee640e3218218405.gif"} alt="" />
            <p className='d-flex'><Link className='submit-btn text-decoration-none link' to={'/'}>Home</Link></p>
        </div>
    );
};

export default NotFound;