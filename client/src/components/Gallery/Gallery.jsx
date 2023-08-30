import React from 'react'
import './Gallery.css'
// import {gimg1,gimg2,gimg3,gimg4,gimg5,gimg6,gimg7,gimg8,gimg9,gimg10,gimg11,gimg12,gimg13,gimg14,gimg15} from '../../assest'
import gimg1 from '../../assest/gimg1.jpg'
import gimg2 from '../../assest/gimg2.jpg'
import gimg3 from '../../assest/gimg3.jpg'
import gimg4 from '../../assest/gimg4.jpg'
import gimg5 from '../../assest/gimg5.jpg'
import gimg6 from '../../assest/gimg6.jpg'
import gimg7 from '../../assest/gimg7.jpg'
import gimg8 from '../../assest/gimg8.jpg'
import gimg9 from '../../assest/gimg9.jpg'
import gimg10 from '../../assest/gimg10.jpg'
import gimg11 from '../../assest/gimg11.jpg'
import gimg12 from '../../assest/gimg12.jpg'
import gimg13 from '../../assest/gimg13.jpg'
import gimg14 from '../../assest/gimg14.jpg'
import gimg15 from '../../assest/gimg15.jpg'

const Gallery = () => {
  return (
    <div id='gallery' className="gallery-main-container">
        <div className='services-head'>Gallery</div>
    <div className='grid-wrapper'>
         <div>
            <img className='gimg' src={gimg1} alt="" />
         </div>

         <div className='tall' >
            <img className='gimg' src={gimg2} alt="" />
         </div>

         <div>
            <img className='gimg' src={gimg3} alt="" />
         </div>

         <div className='tall'>
            <img className='gimg' src={gimg4} alt="" />
         </div>

         <div className='full'>
            <img className='gimg' src={gimg5} alt="" />
         </div>

         <div>
            <img className='gimg' src={gimg6} alt="" />
         </div>

         <div className='wide'>
            <img className='gimg' src={gimg7} alt="" />
         </div>

         <div>
            <img className='gimg' src={gimg8} alt="" />
         </div>

         <div className='tall'>
            <img className='gimg' src={gimg9} alt="" />
         </div>

         <div className='wide'>
            <img className='gimg' src={gimg10} alt="" />
         </div>

         <div>
            <img className='gimg' src={gimg11} alt="" />
         </div>

         <div className='full'>
            <img className='gimg' src={gimg12} alt="" />
         </div>

         <div>
            <img className='gimg' src={gimg13} alt="" />
         </div>

         <div className='wide'>
            <img className='gimg' src={gimg14} alt="" />
         </div>

         <div>
            <img className='gimg' src={gimg15} alt="" />
         </div>
    </div>
    </div>
  )
}

export default Gallery