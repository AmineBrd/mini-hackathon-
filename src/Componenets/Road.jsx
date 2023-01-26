import React from 'react'
import './main.css'
function Road(props) {
  return (
    <div>
        <h1 className='titrage'>Decouvrir {props.title}</h1>
        <div className='container' style={{
          paddingBottom:"5rem"
        }}>
            <div className='line1'>
            </div>
            <div className='line2'></div>
            <div className='line3'>
            </div>
        </div>
       
    </div>
  )
}

export default Road