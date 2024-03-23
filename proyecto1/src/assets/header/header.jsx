import React from 'react'
import "./header.css"

const Cabeza = () => {
  return (
    
    <div className="h-header">
        <nav className='h-nav'>
            <h3 className='logo'>Agustinsch.dev</h3>
            <ul className='h-ul'>
                <li className='home'>
                    <a href='#home' className='active'>Home</a>
                </li>
                <li className='about'>
                    <a href="#about">About</a>
                </li>
                <li className='projects'>
                    <a href="porjects">Projects</a>
                </li>
                <li className='contact'>
                    <a href="contact">Contact</a>
                </li>
                <li>
                    <input type="checkbox" id='check'/>
                    <label htmlFor="check" className='checkbtn'>
                        <i class="gg-menu-motion"></i>
                    </label>
                </li>
            </ul>
        </nav>
    </div>
        
    
  )
}

export default Cabeza