import React from 'react'

const Navbar = () => {
  return (
    <div className='container' id='nav'>
        <div id='navDiv1' >
            <div id='navDiv2' >Rehmat</div>
            <ul id='navUl' >
                <li className='menulink'><a href='#hero'>Home</a></li>
                <li className='menulink'><a href='#about'>About</a></li>
                <li className='menulink'><a href='#skills'>Skills</a></li>
                <li className='menulink'><a href='#contact'>Contact</a></li>
            </ul>
            
        </div>
      
    </div>
  )
}

export default Navbar
