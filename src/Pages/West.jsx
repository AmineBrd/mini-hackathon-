import React from 'react'
import Road from '../Componenets/Road'
import Feedback from '../Componenets/Feedback'
import Nav from '../Componenets/Nav'
import Footer from '../Componenets/Footer'

function West() {
  return (
    <div>
        <Nav />
        <Road title="west" />
        <Feedback />
        <Footer />
    </div>
  )
}

export default West