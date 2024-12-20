import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const Ourmission = () => {
    return (
        <div className='about'>
            <div className="about-sub">
                <div className="sub-sub-about">
                    <h2>OUR MISSION</h2>
                    <p>
                        The mission of our hotel is to provide outstanding
                        lodging facilities and services to our guests. Our hotel
                        focuses on individual business and leisure travel, as well
                        as travel associated with group meetings. we
                        emphasize high-quality standards in our rooms and
                        food and beverage divisions. We provide a fair return on
                        investment for our owners and recognize that this
                        cannot be done without well-trained, motivated, and
                        enthusiastic employees.
                    </p>
                </div>
                <div className="img">
                    <img src={assets.Hotel9} alt="upload" />
                </div>
            </div>
        </div>
    );
};

export default Ourmission;
