import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {

    return (
        <div>
            <Carousel fade className='carousel'>
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
                        src="https://shaadiwish.com/blog/wp-content/uploads/2020/06/faisal-alam-1024x683.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Pick</h3>
                        <p>Nature Photography</p>
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
                        <p>Wedding Photography</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;