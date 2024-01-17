import React from 'react'
import './Hero.css'

function Hero({text,bacbackdrop}) {
 
  return (
    <header className=' hero-container bg-dark text-white p-5 '>
        <h1 className='hero-text'>{text}</h1>
        {bacbackdrop && 
        <div className="hero-backdrop " style={{backgroundImage: `url(${bacbackdrop})`}}></div> 
      }
    
        </header>
  )
}

export default Hero