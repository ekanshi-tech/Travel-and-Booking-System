import React from 'react'
import './Reviews.css'
import person1 from '../../assest/person1.jpg'
import person2 from '../../assest/person2.jpg'
import person3 from '../../assest/person3.jpg'

const Reviews = () => {
  return (
    <div className='reviews1'>
        <div className='services-head'>Reviews</div>
        <div className="views">
                <div className="person">
                    <img className='pimg' src={person2} alt="" height={150} width={150} />
                    <div className='pname'>John Deo</div>
                    <div className='ptext'>We have been dealing with travel online for a few years now and service has been good although I like to speak to someone but they prefer email,I suppose that is just the way things are these days.Will be using the rest of our credit</div>
                </div>
                <div className="person">
                    <img className='pimg' src={person1} alt="" height={150} width={150} />
                    <div className='pname'>Tiara</div>
                    <div className='ptext'>Great price, service and follow up from the Team. I had previously booked family holidays with Travelonline so it has been good to reconnect and remember the quality service. We had a great break. We would certainly book again.</div>

                </div>
                <div className="person">
                    <img className='pimg' src={person3} alt="" height={150} width={150} />
                    <div className='pname'>Katherine Edwards</div>
                    <div className='ptext'>A great way to book a holiday! We appreciate the smooth handling of our arrangements and the quick responses to questions. The reminder emails about entry requirement and the links provided were also very helpful. </div>

                </div>
            </div>
        
    </div>
  )
}

export default Reviews