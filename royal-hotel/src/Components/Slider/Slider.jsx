import React, { useState, useEffect } from 'react';
import './Slider.css';
import { assets } from '../../assets/assets'
// import Hotel from '../../images/hotel.jpg';
// import Hotel2 from '../../images/hotel2.jpg';
// import Hotel3 from '../../images/hotel3.jpg';
// import Hotel4 from '../../images/hotel4.jpg';

const Slider = () => {
    const images = [assets.Hotel, assets.Hotel2, assets.Hotel3, assets.Hotel4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slider-container">
            <div className='bg-dark'>
                <div className="main-content">

                    <h1>Royal Luxury hotel</h1>
                    <p>sence 1999</p>
                    <p> "Royal Luxury hotel" is your smart hotel assistant, offering seamless booking,
                        personalized recommendations, and instant support for a perfect stay.
                    </p>
                </div>
            </div>
            <div className='image'>
                <img src={images[currentIndex]} alt={`hotel ${currentIndex + 1}`} />
            </div>
        </div>
    );
}

export default Slider;
