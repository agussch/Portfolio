import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <section className="h-container-main" id='home'>
      <div className='h-container'>
        <div className="hero-main">
          <div className="h-tittle">
            <h1>Front-End React Developer</h1>
            <p>Hi, I'm Agustin Schanwarzkoff, a frontend development specialist with experience in backend. I'm passionate about crafting
              exceptional user experiences using modern technologies and frameworks for web design.</p>
            <span className='icons'>
              <a href="https://github.com/agussch" className='git'><img src="./img/github.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/agustin-schanwarzkoff-001732279/" className='linkedin'><img src="./img/linkedin.png" alt="" /></a>
            </span>
          </div>
          <div className="h-foto"></div>
        </div>

        <div className="skills">
            <p>Tech </p>
            <div className="logos">
              <ul>
                <li><img src="https://agustinsch.dev/recursos/imagenes/html.svg" alt=""/></li>
                <li><img src="https://agustinsch.dev/recursos/imagenes/css.svg" alt=""/></li> 
                <li><img src="https://agustinsch.dev/recursos/imagenes/js.svg" alt=""/></li>
                <li><img src="https://agustinsch.dev/recursos/imagenes/react.svg" alt=""/></li>
                <li><img src="https://agustinsch.dev/recursos/imagenes/php.svg" alt=""/></li>
                <li><img src="https://agustinsch.dev/recursos/imagenes/git.svg" alt="" /></li>
              </ul>
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default Home