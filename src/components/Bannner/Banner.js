import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {

    return (
        <div>
            <Carousel fade className='carousel' indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://www.ephotozine.com/articles/9-need-to-know-photography-composition-rules-17158/images/227077_1505747960.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Best Pick</h3>
                        <p>Nature Photography</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Pick</h3>
                        <p>Wedding Photography</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://www.guillenphoto.com/data/blog/2020/009-chronique-pourquoi-comment-langage-photo-noir-et-blanc/images/herd-of-bisons-antelope-island-under-a-storm-amar-guillen-photographer.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Pick</h3>
                        <p>Nature Photography</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;