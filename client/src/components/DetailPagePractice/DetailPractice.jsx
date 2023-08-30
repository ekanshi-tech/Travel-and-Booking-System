import React from 'react'
import './DetailPractice.css'
import hotelSign from '../../assest/hotelSign.gif'
import policy from '../../assest/policy1.jpg'
import img1 from '../../assest/free-wifi.gif'
import img2 from '../../assest/parking.gif'
import img3 from '../../assest/face-massage.gif'
import img4 from '../../assest/airport.gif'
import img5 from '../../assest/vegan-food.gif'
import rupee from '../../assest/rupees.png';


import star from '../../assest/star.png'

const DetailPractice = () => {
  return (
    <div className='detail-container'>
        <div className="detail-container1">
            <div className="main-hotel-head">
                <img src={hotelSign} alt="hotel" height={50} width={50} />
                <div className="hotel-head">
                USEDU UIHDEJIU HB JN 
                </div>
                {/* <div>Illustration by <a href="https://icons8.com/illustrations/author/WsYoyZ6jp8sg">Victoria Chepkasova</a> from <a href="https://icons8.com/illustrations">Ouch!</a></div> */}
            </div>
            <div className="loc-content">
                <img src="" alt="location" />
                <p>uhudbjndkj jsehbddkjn jubdnxj </p>
            </div>
        </div>
        <div className="facilities">
            

            <div>ygyuhg1</div>
            <div>kmnjkb2</div>
            <div>hiuh3</div>
            <div>jbhjb4</div>
            <div>hjgbhjvbj5</div>
            

        </div>

        <h4>Glipse of room in the hotel</h4>
        <div className="rooms">
            <div className='room-img'>
                <div><img src="" alt="" height={400} width={400} /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
            </div>
            <div className='room-text'>uehuihfjbfjbwuihuiwuncfiu ywgefyb uwhuwqiw uhwbsuhydcbb Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo eius aliquam repellendus, consequatur a, hic iste perferendis, quam id nemo tempora animi quis fugiat explicabo! Sunt dolores est in, libero nisi quasi. Ea?</div>
        </div>
        <h4>MOST POPULAR FACILITIS</h4>
        <div className='popular-facilities'>
            <div className='facility room-text'>
                <div>udhs</div>
                <div>jknxkj</div>
                <div>jknjkdn</div>
                <div>jkcnkj</div>
                <div>knkn</div>
            </div>
            <div className='facility-img'>
                <div className="fac-img img1">
                <img src={img1} alt="wifi" height={120} width={120} />
                </div>
                <div className='fac-img img2'>
                <img src={img2} alt="parking" height={120} width={120} />
                </div>
                <div className="fac-img img3">
                <img src={img3} alt="spa" height={120} width={120} />
                </div>
                <div className="fac-img img4">
                <img src={img5} alt="food" height={120} width={120} />
                </div>
                <div className="fac-img img5">
                <img src={img4} alt="airport" height={120} width={120} />
                </div>
            </div>
            
        </div>

        <h4>Family-facilities</h4>
        <div className='facility room-text'>
            <div>hdyuhbu</div>
            <div>hujdgwbyhujdbhj</div>
            <div>jhedujwnh</div>
            <div>hdbejhu</div>
            <div>hyedbuh</div>
            <div>hjbhjcb</div>
        </div>
        <h4>Policies</h4>
        <div className="policy-container">
            <div className='policy-text'>

                    <div>bhjshi</div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non in ipsam optio esse id maiores doloremque necessitatibus excepturi aliquid, beatae magni eius expedita.</p>

                    <p></p>
                    <h2>hvghy</h2>
                    
            </div>
            <div className='policy-img'>
                <img src={policy} alt="policy" height={600} width={600} />
            </div>
        </div>
        <button className='book-btn header-btn'>BOOK NOW</button>

        <div className="search-result">
            <div className='search-hotel'>
                <div>

                    <img src="" alt="" height={200} width={270} />
                    <div className='hotel-name'>nagvgvgvghvghvghvghvghvgcvgfcgfcgvhgbhbghme</div>
                    <p>address</p>
                    
                    <div className='review'>
                        <div className='rating'>
                        <p>9.9</p>
                        <img src={star} alt="star" height={20} width={20}/>
                        </div>
                        <div className='word'>review-word</div>
                    </div >
                    <div className='price-detail'>
                    <div className='price'>
                        {/* <img src={rupee} alt="" height={20} width={20} /> */}
                        <div className='text'>PRICE:-</div>
                        <div className='paise'>555555555</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='search-hotel'>
            <div>

                <img src="" alt="" height={200} width={270} />
                <h2>name</h2>
                <p>address</p>
                <div className='review'>
                    <p>9.9</p>
                    <p>review-word</p>
                </div>
                <div className='price'>price</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPractice