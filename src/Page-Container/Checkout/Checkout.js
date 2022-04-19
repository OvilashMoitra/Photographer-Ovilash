import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Checkout.css'
const Checkout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='notfound'>
                <img src={"https://media.giphy.com/media/LRORznnSGSNYqjUxUf/giphy.gif"} alt="" />
            </div>
        </div>
    );
};

export default Checkout;