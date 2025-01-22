import React from 'react'
import heroImg from "./assets/Hero.svg"

const HeroSection = () => {


   

  
  return (
    <div className='heroSection'>
        <div className="mainleft">
            <h1>Navigating the digital landscape for success</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis. Dignissimos voluptas natus, magnam debitis, dolor quas deleniti minus unde nostrum commodi esse corrupti impedit!</p>

            <button>Book a consultation</button>

        </div>

        <div className="mainright">
            <img src={heroImg} alt="" />
        </div>
      
      
    </div>
  )
}

export default HeroSection
