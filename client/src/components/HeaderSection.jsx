import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderSection.css';
// import img27 from '../assest/img27.jpg';
import img2 from '../assest/img2.jpg';
import img3 from '../assest/img3.jpg';
import img4 from '../assest/img4.jpg';
import img11 from '../assest/img11.jpg'

const HeaderSection = () => {

    const newUrl=`url(${img11})`;
    const [bg,setBg] = useState(newUrl) 

    const bgChange=() =>{
        let newBg=`url(${img11})`;
        setBg(newBg);
    }

    const bgChange1=() =>{
        let newBg=`url(${img2})`;
        setBg(newBg);
    }

    const bgChange2=() =>{
        let newBg=`url(${img3})`;
        setBg(newBg);
    }

    const bgChange3=() =>{
        let newBg=`url(${img4})`;
        setBg(newBg);
    }

  return (
    <div className='header-container' style={{background: bg}}>
        <div className="headText">
            <p className='headText1'>
                NEVER STOP
            </p>
            <p className='headText2'>
                EXPLORING THE WORLD
            </p>
            <p className='headText3'>
                Discover the world's hidden treasure and create unforgettable experience.
                <br />
                We live in the wonderful world that is full of beauty,charm and adventure.<br/>
                There is no end to the adventurewe can have if only we seek them with our eyes open. 
            </p>

            <a href='#services' className='e-btn header-btn'>
                Explore
            </a>

            <Link to='/Search' className='header-btn'>Search Hotels</Link>
            
        </div>
        <div className="imagesArea">
            <div className="img-container1">
                <div onMouseEnter={bgChange} className="img-container">
                    <img src={img11} alt="img11" height={180} width={200} />
                </div>
                
                <div onMouseEnter={bgChange1} className="img-container">
                    <img src={img2} alt="img2" height={180} width={200}/>
                </div>

            </div>
            <div className="img-container2">
                <div onMouseEnter={bgChange2} className="img-container">
                    <img src={img3} alt="img3" height={180} width={200} />
                </div>
                
                <div onMouseEnter={bgChange3} className="img-container">
                    <img src={img4} alt="img4" height={180} width={200}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeaderSection