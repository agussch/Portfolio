import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className='contact-cont-main' id='contact'>
            <div className="contact-cont">
                <div className="contact-tittle">
                    <p>Contact</p>
                    <h3>If you have something to share contact me!!</h3>
                </div>
                <div className="contact-icons">
                    <div className="box-icons">
                        <span class="material-symbols-outlined">
                            map
                        </span>
                        <div className="contact-info">
                            <h3>Location</h3>
                            <p>Argentina, Buenos Aires</p>
                        </div>
                    </div>
                    <div className="box-icons">
                        <span class="material-symbols-outlined">
                            mail
                        </span>
                        <div className="contact-info">
                            <h3>Mail</h3>
                            <p><a href="mailto:agustinschkoff@gmail.com" target="_blank">agustinschkoff@gmail.com</a></p>
                        </div>
                    </div> 
                </div>
            </div>
    </section>
  )
}

export default Contact