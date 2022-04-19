import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img src={"https://cdn.dribbble.com/users/2373808/screenshots/6201645/media/35e99be3855defa1ee640e3218218405.gif"} alt="" />
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default NotFound;