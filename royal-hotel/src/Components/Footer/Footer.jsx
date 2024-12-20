import React from 'react'
import './Footer.css';

import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="footer">
      <div className="about-companies">
        <h2>contact us</h2>
        <div className="info">
          <p><strong>Address:</strong> No. 33, Canal Row, Fort, Colombo 01, Sri Lanka.</p>
          <p><strong>Phone:</strong> (+94) 11-2544544</p>
          <p><strong>Email:</strong> royalluxury@gmail.com</p>
        </div>
        <div className="company-logos">
          <i className="fa fa-instagram"><FaInstagramSquare /> </i>
          <i className="fa fa-facebook"><FaFacebookSquare /></i>
          <i className="fa fa-youtube"><FaYoutubeSquare /></i>
          <i className="fa fa-twitter"><FaSquareXTwitter /></i>
          <i className="fa fa-whatsapp"><FaWhatsappSquare /></i>
        </div>

      </div>
      <div className="copyright">
        &copy; All rights reserved by ROYAL LUXURY HOTEL
      </div>
    </div>
  )
}

export default Footer