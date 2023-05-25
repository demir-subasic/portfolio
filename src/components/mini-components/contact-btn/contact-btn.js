import React from 'react'
import "./contact-btn.css"

export default function ContactButton({src, text}) {
  return (
     <div className='button-div'>
        <button className='contact-button'>
            <div className='button-items'>
                <div className='src-div'>{src}</div>
            <p className='button-text'>{text}</p>
            </div>
        </button>
    </div>
  )
}
