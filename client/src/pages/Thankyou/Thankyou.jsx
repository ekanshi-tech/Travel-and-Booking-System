import React from 'react'
import { Link } from 'react-router-dom'
import './Thankyou.css'

const Thankyou = () => {
  return (
    <div className='thank-container'>
      <div className="thank-txt">
        <div className="thank-txt1">Thank You</div>
        <div className="thank-txt2">your tour is booked!</div>
        <Link to='/' className='t-btn header-btn'>Back To Home</Link>
      </div>
    </div>
  )
}

export default Thankyou