import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import picture from '../assets/main-banner.png'
import Cup from './Cup'
import { Scene } from "three";

const ImageGallaryComponent = () => {

    return (
        <div>
            <h2>My Image Gallery</h2>
            <Carousel interval="5000" transitionTime="1000">
                <div>
                    <img src={picture} />
                </div>
                <div>
                    <img src={picture} />
                </div>
                <div>
                    <img src={picture} />
                </div>
                <div>
                    <Scene />
                </div>
            </Carousel>
        </div>
    )

}

export default ImageGallaryComponent;