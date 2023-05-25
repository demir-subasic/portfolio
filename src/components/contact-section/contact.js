import React from 'react'
import './contact.css'
import Navbar from '../hero-section/navbar/navbar'
import ContactButton from '../mini-components/contact-btn/contact-btn'
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    
    <div className='contact-full-page'>
        <Navbar />
      <div className="contact-title">
        <h1 className="contact-me">Contact Me</h1>
        <span className='line'></span>
        </div>
        <div className="contact-wrapper">
            <div className="wrapper-left">
                <button className='phone all'><BsFillTelephoneInboundFill className='contact-icon'/><p className='button-text'>+381 66 512 7878</p></button>
                <button className='email all'><HiOutlineMailOpen className='contact-icon' /><p className='button-text'>subasicd2000@gmail.com</p></button>
                <button className='location all'><MdLocationOn className='contact-icon' /><p className='button-text'>Novi Pazar, Serbia</p></button>
            </div>
            <div className="wrapper-right">
             <form className='contact-form' action='contact-form'>
                <input placeholder='Your Name' type="text" className='your-name' name="fname">
                </input>  
                <input placeholder='Your Email' type="text" className='your-email' name="lname">
                </input>
             <textarea className='text-area' placeholder='Your Message' rows="4" cols="50" name="comment" form="usrform"></textarea>
             <input className='send' type="submit" value="Send">
            </input>
             </form> 
            
                


            </div>
        </div>
    </div>  
  )
}
