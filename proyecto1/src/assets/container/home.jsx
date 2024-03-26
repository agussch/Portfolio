import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className="h-container-main">
      <div className='h-container'>
        <div className="hero-main">
          <div className="h-tittle">
            <h1>Front-End React Developer</h1>
            <p>Hi, I'm Agustin Schanwarzkoff, a frontend development specialist with experience in backend. I'm passionate about crafting
              exceptional user experiences using modern technologies and frameworks for web design.</p>
            <span className='icons'>
              <a href="https://github.com/agussch" className='git'><img src="./github.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/agustin-schanwarzkoff-001732279/" className='linkedin'><img src="./linkedin.png" alt="" /></a>
            </span>
            
          </div>
          <div className="h-foto"></div>
        </div>

        <div className="skills">
            <p>Tech </p>
            <div className="logos">
              <ul>
                <li><img src="../img/html.svg" alt=""/></li>
                <li><img src="../img/css.svg" alt=""/></li>
                <li><img src="../img//js.svg" alt=""/></li>
                <li><img src="../img//react.svg" alt=""/></li>
                <li><img src="../img//php.svg" alt=""/></li>
                <li><img src="../img/git.svg" alt="" /></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home