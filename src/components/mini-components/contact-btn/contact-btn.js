import React from 'react'



export default function ContactButton({src, text}) {
  return (
    <>
        <button className='contact-button'>
            <div className='button-items'>
                <img src={src} alt="src" />
            <p className='button-text'>{text}</p>
            </div>
        </button>
    </> 
  )
}
