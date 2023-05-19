import React from 'react'
import './navbar.css'
import {BsPhone} from 'react-icons/bs'

export default function Navbar() {


  return (
    <div className='nav'>
        <div className='left-side-nav'>
            <ul className='nav-ul'>
                <li className='nav-li'>Home</li>    {/* same page - first page */ }
                <li className='nav-li'>About</li>   {/* short description about me */ }
                <li className='nav-li'>Works</li>   {/* my project */ }
                <li className='nav-li'>Contact</li> {/* like a footer section */ }
            </ul>
        </div>

        

        <div className='right-side-nav'>
          <button className='phone-number'><BsPhone style={{marginRight: "10px"}} /> +381 66 512 78 78</button>
        </div>
    </div>
  )
}
