import React from 'react'
import herobg from "../image/hero-bg.jpeg"
import "./hero-section.css"
import Navbar from './navbar/navbar'
import Btn from '../mini-components/btn/btn'
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";


export default function HeroSection() {
  return (
    
    <div className='full-hero-page' style={{backgroundImage: `url(${herobg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <Navbar />
      <div className='main-content'>
        <div content-text>
        <span className='name'>Demir</span>
        <span className='surname'>Subasic</span>
        <span className='description'>Frontend Developer</span>
        </div>
        <div className='btn-div'>
            <Btn text="Resume" />
            <Btn text="Portfolio" />
        </div>
        
      </div>

      <div className='media'>
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        <FiFacebook />
        <AiOutlineLinkedin />
        <AiOutlineGithub />
      </div>
    </div>
  )
}
