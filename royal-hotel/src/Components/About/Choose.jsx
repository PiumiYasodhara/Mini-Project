import React from 'react';
import './About.css'
// import Room1 from '../../images/room1.jpg'
import { assets } from '../../assets/assets'


const Choose = () => {
    return (
        <div className='about'>
            <div className="about-sub">
                <div className="sub-sub-about">
                    <h2>CHOOSE YOUR ROOMS</h2>
                    <p>Royal Luxury Hotel houses a range of elegantly designed and spacious hotel
                        rooms in Colombo, carefully crafted to offer maximum comfort to guests.
                        From the lavish Superior Room to the spacious Presidential Room, these abodes
                        are thoughtfully curated with an array of modern amenities to ensure guests
                        indulge in a luxurious stay.
                        We invite you to discover the perfect room that will make a lasting impression on
                        you. Come and experience the unparalleled luxury and hospitality of Royal Luxury
                        Hotel.</p>
                    <button>
                        <a href="./room" className="gradient-btn">Rooms</a>
                    </button>
                </div>
                <div className="img">
                    <img src={assets.Room1} alt="Room 1" />
                </div>
            </div>
        </div>
    );
}

export default Choose;
