import React from 'react'
import './navbar.css'
import {BsPhone} from 'react-icons/bs';
import {NavLink, Route, Routes} from 'react-router-dom'


export default function Navbar() {


  return (
    <div className='nav'>
        <div className='left-side-nav'>
            <ul className='nav-ul'>
                <li className='nav-li'><NavLink className='nav-link' activeClassName={({isActive}) => (isActive ? 'active' : '')} to = "/">Home</NavLink></li>    {/* same page - first page */ }
                <li className='nav-li'><NavLink className='nav-link' to= "/about">About</NavLink></li>   {/* short description about me */ }
                <li className='nav-li'><NavLink className='nav-link' to= "/works">Works</NavLink></li>   {/* my project */ }
                <li className='nav-li'><NavLink className='nav-link' to= "/contact">Contact</NavLink></li> {/* like a footer section */ }
            </ul>
        </div>

        

        {/* <div className='right-side-nav'>
          <button className='phone-number'><BsPhone style={{marginRight: "10px"}} /> +381 66 512 78 78</button>
        </div> */}
    </div>
  )
}
