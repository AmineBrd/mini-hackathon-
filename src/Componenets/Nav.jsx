import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className='List'>
        <Link to={"/"}>  <li className='left'>Home</li></Link>
          <Link to={"/east"}>  <li className={"right"}>East</li> </Link>
          <Link to={"/west"}>  <li className={"right"}>West</li>  </Link>
          <Link to={"/sud"}>  <li className={"right"}>Sud</li> </Link>
          <Link to={"/nord"}>  <li className={"right"}>Nord</li> </Link> 
          <Link to={"/quizz"}>  <li style={{color:"white",}}>Quizz</li> </Link>
        </ul>
    </div>
  )
}

export default Nav