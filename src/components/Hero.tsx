import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />
      <div id='heroDiv1'>
        <div id='heroDiv2' > <img src="/portfolio.jpeg" alt="" className='xl:h-[500px] xl:w-[500px] h-[350px] w-[350px] rounded-full'/></div>
        <div id='heroDiv3'>
          <div >
            <p  className='heroPara' data-aos="zoom-in-up">I&apos;m</p>
            <p className='heroPara' data-aos="zoom-in-up">Rehmat Khalid</p>
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
