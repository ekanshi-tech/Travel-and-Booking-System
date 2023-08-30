import React from 'react'
import advisor from '../../assest/advisor.png'
import experience from '../../assest/experience.png'
import connect from '../../assest/connect.png'
import path from '../../assest/path.png'
import './Services.css'

const Services = () => {
  return (
    <div id='services' className='services-main-container'>
        <div className="services-head">Services We Offer</div>
        <div className="services-container">
            <div className='sc-container'>
                <img src={advisor} alt="advisor" height={100} width={100} />
                <div className='sc-head'>Trusted Advisor</div>
                <div className='sc-text'>
                    We pioneered group travel in India and other countries. We are continuosly evolving and investing in leading edge technology for a perfect holiday. 
                </div>
            </div>
            <div className='sc-container'>
                <img src={experience} alt="experience" height={100} width={100} />
                <div className='sc-head'>Memorable Experiences</div>
                <div className='sc-text'>Over 5 lac customers have created their most memorable Experiences with us.The Customer reviews are too good about the packages we provide.</div>
            </div>
            <div className='sc-container'>
                <img src={connect} alt="connect" height={100} width={100} />
                <div className='sc-head'>Recongnize & Connect</div>
                <div className='sc-text'>An experience team of over 1000 travel professionals across 160+ touch points in India and NRI markets to cater to your travel needs </div>
            </div>
            <div className='sc-container'>
                <img src={path} alt="path" height={100} width={100} />
                <div className='sc-head'>Best Tour Guide</div>
                <div className='sc-text'>We have best tour guides all over the India and in other countries also ,which will provide you an ease and facilitate way to enjoy your trip.</div>
            </div>
        </div>
    </div>
  )
}

export default Services