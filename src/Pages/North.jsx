import React from 'react'
import Nav from '../Componenets/Nav'
import { Carousel } from 'flowbite'
import Footer from '../Componenets/Footer'
import Feedback from '../Componenets/Feedback'
import Road from '../Componenets/Road'
import "./joy.css"

const North = () => {
  return (
    <div>
         <Nav />
         <Road title={"Nord"} />
         <div className='breath'>
          <div className='image1'>
            <img  className='image6' src='https://i0.wp.com/harba-dz.com/wp-content/uploads/2020/11/Ruines-romaines-Tipaza-3.jpg?fit=960%2C603&ssl=1'></img>
            <img  className='image4' src='https://i0.wp.com/harba-dz.com/wp-content/uploads/2020/11/Ruines-romaines-Tipaza-3.jpg?fit=960%2C603&ssl=1'></img>
          </div>
         </div>
        <Feedback />
        <Footer />
    </div>
  )
}

export default North