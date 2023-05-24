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
                <ContactButton src={<BsFillTelephoneInboundFill />} text='+381 66 512 78 78'/>
                <ContactButton src={<HiOutlineMailOpen />} text='subasicd200@gmail.com'/>
                <ContactButton src={ <MdLocationOn />} text='Novi Pazar, Serbia'/>
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
