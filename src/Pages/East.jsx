import React from 'react'
import Road from '../Componenets/Road'
import Feedback from '../Componenets/Feedback'
import Nav from '../Componenets/Nav'
import Footer from '../Componenets/Footer'

function East() {
  return (
    <div>
        <Nav />
        <Road title="east" />
        <Feedback />
        <Footer />
    </div>
  )
}

export default East