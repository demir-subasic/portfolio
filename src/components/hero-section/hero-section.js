import React from 'react'
import herobg from "../image/hero-bg.jpeg"
import "./hero-section.css"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import Navbar from './navbar/navbar';



export default function HeroSection() {
  return (
    
    <div className='full-hero-page' style={{backgroundImage: `url(${herobg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <Navbar />
      <div className='main-content'>
        <h1>Demir Subasic</h1>
        <div className='content-text' >
        <span className='name'>Demir</span>
        <span className='lastname'>Subasic</span>
        <span className='description'>Frontend Developer</span>
        </div>
  
        
      </div>

      <div className='media'>
        <a href='https://www.instagram.com/' target='_blank'><AiOutlineInstagram className='media-icon' /></a>
        <a href='https://www.facebook.com/' target='_blank'><FiFacebook className='media-icon' /></a>
       <a href='https://www.linkedin.com/in/demir-subasic-711b1b270/' target='_blank'><AiOutlineLinkedin className='media-icon' /></a>
       <a href='https://github.com/demirsubasic2001' target='_blank'><AiOutlineGithub className='media-icon' /></a>
        
      </div>
    </div>
  )
}
