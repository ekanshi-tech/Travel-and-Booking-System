import React from 'react';
import './About.css';
import camping from '../../assest/camping.png'

const About = () => {
  return (
    <div id='about' className='about-main-container'>
        <div className='services-head'>About Us</div>
        <div className="about-container">
            <div className='ac-text'>
                <div className='ac-head'>With our all experience we will serve you</div>
                <div className='ac-content'>The best services of transport ,guide, hotel facilities,tour etc. We will take care of all your basic requirements as well so, that you may enjoy your tour with your whole heart. </div>
                <div className='ac-tab'>
                    <div className='ac-tab-content'>
                        <div className="atc-content">12k+</div>
                        <div className="atc-head">Successful trip</div>
                    </div>
                    <div className='ac-tab-content'>
                        <div className="atc-content">2k+</div>
                        <div className="atc-head">Regular clients</div>
                    </div>
                    <div className='ac-tab-content'>
                        <div className="atc-content">15+</div>
                        <div className="atc-head">Years Experience</div>
                    </div>
                
                </div>
            </div>
            <div className='ac-img'>
                <img src={camping} alt="" height={400} width={450} />
            </div>
        </div>
    </div>
  )
}

export default About