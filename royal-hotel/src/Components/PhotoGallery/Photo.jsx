import React from 'react';
import './Photo.css';
// import Hotel11 from '../../images/hotel1-1.jpg'
// import Hotel12 from '../../images/hotel1-2.jpg'
// import Hotel13 from '../../images/hotel1-3.jpg'
// import Hotel24 from '../../images/hotel2-4.jpg'
// import Hotel22 from '../../images/hotel2-2.jpg'
// import Hotel23 from '../../images/hotel2-6.jpg'
// import Hotel31 from '../../images/hotel3-1.jpg'
// import Hotel32 from '../../images/hotel3-2.jpg'
// import Hotel33 from '../../images/hotel3-3.jpg'
// import Hotel34 from '../../images/hotel3-4.jpg'
import { assets } from '../../assets/assets'


const Photo = () => {
    return (
        <div className="photo">
            <div className="heading">
                <h3>Photo <span>Gallery</span></h3>
            </div>
            <div className="box">
                <div className="dream">
                    <img src={assets.Hotel11} alt="Hotel 1 Image 1" />
                    <img src={assets.Hotel12} alt="Hotel 1 Image 2" />
                    <img src={assets.Hotel13} alt="Hotel 1 Image 3" />

                </div>
                <div className="dream">
                    <img src={assets.Hotel24} alt="Hotel 2 Image 1" />
                    <img src={assets.Hotel22} alt="Hotel 2 Image 2" />
                    <img src={assets.Hotel23} alt="Hotel 2 Image 3" />

                </div>
                <div className="dream">
                    <img src={assets.Hotel31} alt="Hotel 3 Image 1" />
                    <img src={assets.Hotel32} alt="Hotel 3 Image 2" />
                    <img src={assets.Hotel33} alt="Hotel 3 Image 3" />
                    <img src={assets.Hotel34} alt="Hotel 3 Image 4" />

                </div>
            </div>
        </div>
    );
}

export default Photo;
