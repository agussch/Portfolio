import React from 'react'
import "./about.css"
const About = () => {
  return (
    <section className="a-container-main" id='about'>
        <div className="a-container">
            <div className="a-img">
                <img src="https://agustinsch.dev/recursos/imagenes/about.webp" alt="" />
            </div>
            <div className="about"> 
                <p className='blue'>About Me</p>
                <h2>Front-End and Back-End Developer</h2>
                <div className="a-description">
                    Hello! I'm Agustin, an enthusiastic computer technician and Full Stack developer, specialized in creating comprehensive
                    and high-performance technological solutions. With a focus on quality and usability, I am committed to providing exceptional
                    digital experiences that drive project success.<br></br>
                    <br></br>
                    From design to implementation and system management, I am ready to tackle technical challenges with creativity and
                    efficiency. I'm excited to collaborate on innovative projects and contribute solutions that exceed expectations.
                </div>
            </div>
        </div>
    </section>
  )
}
export default About