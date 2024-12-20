import React from 'react'
import { NavLink } from 'react-router-dom'
import Slider from '../Components/Slider/Slider'
import About from '../Components/About/About'
import Ourmission from '../Components/About/Ourmission'
import Photo from '../Components/PhotoGallery/Photo'
import Choose from '../Components/About/Choose'

const Home = () => {
  return (
    <div>
      <Slider/>
      <About/>
      <Ourmission/>
      <Photo/>

    </div>
  )
}

export default Home