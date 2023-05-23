import React from 'react'
import './about.css'
import Navbar from '../hero-section/navbar/navbar'
import person from '../image/person.jpg'

export default function About() {
  return (
    <div className='about-full-page'>
      <Navbar />
      <div className='about-wrapper'>
        <div className="photo-side">
          <img src={person} alt="person" className='person-image' />

        </div>
        <div className="text-side">
            <h1 className='about-title'>ABOUT</h1>
            <p className='about-email'>subasicd2000@gmail.com</p>
            <p className='about-description'>
            As a frontend developer with a focus on React, I create modern and interactive user experiences. With knowledge in React, I develop highly optimized components and web applications. I am also familiar with the latest technologies and tools used in the React ecosystem. If you are interested in collaborating on frontend development in React, please feel free to contact me. I look forward to the opportunity to build innovative projects together.
            </p>
        </div>
      </div>
    </div>
  )
}
