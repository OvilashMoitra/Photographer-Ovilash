import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    let navigate = useNavigate();
    return (
        <div>
            <div className='service'>
                <div className="img px-5">
                    <Carousel controls={false}>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 "
                                src={props.service.img[1]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src={props.service.img[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src={props.service.img[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text text-center">
                    <h3>{props.service.name}</h3>
                    <p>{props?.service?.description}</p>
                    <p><strong> ${props?.service?.price} </strong></p>
                    <Link className='submit-btn text-decoration-none' to="/checkout">Checkout</Link>
                </div>
            </div>

        </div>
    );
};

export default Service;