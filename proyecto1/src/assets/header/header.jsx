import React from 'react'
import "./header.css"

const Cabeza = () => {
  return (
    <div className="h-header">
        <nav className='h-nav'>
            <h3 className='logo'>Agustinsch.dev</h3>
            
            <ul className='h-ul'>
                <li className='home'>
                    <a href='#home'>Home</a>
                </li>
                <li className='about'>
                    <a href="#about">About</a>
                </li>
                <li className='projects'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='contact'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className='checkbtn'>
                <span className="material-symbols-outlined">
                    menu
                </span>                    
            </label>
            <div className="mobile-header">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                </span>
                <ul className='h-ul2'>
                    <li className='home'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='about'>
                        <a href="#about">About</a>
                    </li>
                    <li className='projects'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='contact'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>


    </div>
  )
}

export default Cabeza