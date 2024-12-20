import React from 'react'
import './About.css'
// import Hotel8 from '../../images/hotel8.jpg'
import { assets } from '../../assets/assets'

const About = () => {
    return (
        <div className='about'>
            <div className="about-sub">
                <div className="sub-sub-about">
                    <h2>ABOUT US</h2>
                    <p>
                        Famed for being the finest city hotel in Colombo,
                        Royal Luxury Hotel is conveniently located in the heart
                        of the bustling capital city, facing the scenic Indian
                        Ocean and the picturesque Galle Face Green.
                        Whether you’re looking to unwind in a luxurious
                        dwelling, indulge in delectable cuisines, or celebrate
                        special moments in life, Galadari Hotel offers an oasis
                        of relaxation and comfort for all. Discover a world of
                        unparalleled elegance and sophistication at Galadari
                        Hotel, where luxury meets tranquility in the heart of
                        Colombo.
                    </p>
                </div>
                <div className="img">
                    <img src={assets.Hotel8} alt="upload" />
                </div>
            </div>


        </div>
    )
}

export default About