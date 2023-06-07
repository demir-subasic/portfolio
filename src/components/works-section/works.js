import React from 'react'
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from '../images'
import './works.css'
import Navbar from '../hero-section/navbar/navbar'

export default function Works() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

  }, [])


  return (
    <div className='works-full-page'>
        <Navbar />
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
          <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
            {images.map(image => {
              return (
                <motion.div className='item' key={image}>
                  <img src={image.image} alt="" />
                  <div className='text-div'> <a href="https://www.google.com/"><p className='slider-text'>{image.text}</p></a></div>
                 
                </motion.div>
              )
            })}

          </motion.div>
        </motion.div>
    </div>
  )
}
