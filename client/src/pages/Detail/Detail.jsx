import React ,{useEffect}from 'react'
import {hotelDetailAction} from '../../actions/detailHotel.js';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import geolocation from '../../assest/geolocation.gif'
import './Detail.css'
import hotelSign from '../../assest/hotelSign.gif'
import policy from '../../assest/policy1.jpg'
import img1 from '../../assest/free-wifi.gif'
import img2 from '../../assest/parking.gif'
import img3 from '../../assest/face-massage.gif'
import img4 from '../../assest/airport.gif'
import img5 from '../../assest/vegan-food.gif'
import loadingImg1 from '../../assest/Loading1.png'



const Detail = () => {

    const dispatch=useDispatch();
    const {hotelId} = useParams();
    const hotelDetail=useSelector((state) => state.detail.hotelDetails);

    useEffect(() =>{
        // const dispatch=useDispatch();
        console.log('insideUseEffect');
        if(hotelId && hotelId!== ""){
          dispatch(hotelDetailAction(hotelId))
        }
    },[hotelId])

    console.log('dettail')
    console.log(hotelDetail);

  return (

    <div className='detailing'>
        {!hotelDetail ?(
          <>
          <img className='dimg' src={loadingImg1} alt="loading"  height={350} width={310}/>
          {/* <p>Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nobis, ad omnis adipisci quis deleniti quaerat ullam culpa mollitia necessitatibus dignissimos reprehenderit vitae optio quasi sint, eos ipsam repellendus tempore eaque. Magnam eos illum consequuntur quaerat aliquid sequi possimus dolore fugit itaque, non sit eligendi eaque adipisci. Quam accusamus, laudantium libero ex consequuntur optio perspiciatis. Provident, unde eligendi esse molestias suscipit fuga aliquam delectus rerum accusamus possimus veritatis ex dolorem aperiam mollitia quisquam aspernatur assumenda excepturi ducimus veniam ipsa neque consequatur facere impedit laudantium? Asperiores pariatur dolor in saepe reprehenderit delectus deleniti explicabo! Accusamus facere sint perferendis adipisci illo earum, modi exercitationem assumenda, vel doloremque totam possimus dolorem corrupti fugiat ducimus expedita hic. Aliquid magni dolore aspernatur in minima. Nisi iste facilis tempora blanditiis nobis similique sapiente sit corporis voluptatibus libero provident suscipit autem cupiditate deserunt perspiciatis corrupti alias illum, ipsam recusandae et quis asperiores assumenda molestias! Iure beatae fuga autem odit! Quis porro dignissimos saepe maxime, repudiandae nulla autem, nisi id reiciendis, inventore facere? Porro dicta distinctio eligendi nesciunt beatae, illum rem corrupti libero laboriosam, officia, expedita consequuntur inventore a sequi ratione error? Rem aspernatur enim atque ea? Accusantium numquam qui et fugiat neque placeat consectetur commodi quo. Veniam. amet consectetur, adipisicing elit. Quia magnam nobis eos quam! Iste fugit explicabo ipsam expedita laudantium, labore sapiente sit dolor quibusdam soluta aspernatur a laborum minima, veniam provident error. Qui, dolore ipsa dolor inventore iste nesciunt itaque laborum porro delectus harum nulla voluptatibus accusantium ea unde saepe et optio! Inventore accusamus ut ipsum soluta quasi nihil, mollitia consectetur minus incidunt culpa quas temporibus? Beatae, et ducimus quae, est atque inventore, nesciunt fuga sit voluptatem architecto iusto soluta iure nihil. Maxime odio, quisquam, eius architecto unde omnis numquam asperiores itaque beatae cumque ipsum explicabo excepturi hic repudiandae a. Enim eaque dolores ipsam nam explicabo, quos accusamus sapiente expedita aliquid corrupti rem quasi, est veniam deleniti autem mollitia quas labore velit culpa quia veritatis reiciendis! Distinctio sapiente ullam consequatur quos amet laboriosam qui repellendus vero. Id soluta totam velit, a sint alias deserunt consequatur quia, quis deleniti ducimus, iusto beatae obcaecati placeat reiciendis? Sit labore rerum eligendi excepturi. Quae iste hic explicabo illo, quibusdam at quia saepe quod nihil atque excepturi modi vitae et nam, similique nemo perferendis commodi deserunt neque repudiandae ipsa debitis eum aperiam nostrum. Iusto nesciunt culpa sint cum facilis dolorum quibusdam totam nemo quia dignissimos?</p> */}
          </>
        ) : (
        <div className='detail-container'>
          <div className='detail-container1'>
            <div className='main-hotel-head'>
              <img src={hotelSign} alt="hotel" height={50} width={50} />
              <div className="hotel-head">
              {hotelDetail[0].hotel_name}
              </div>
            </div>
            <div className='loc-content'>
              <img src={geolocation} alt="location" height={50} width={50} />
              <p>{hotelDetail[0].address},{hotelDetail[0].city},{hotelDetail[0].country_trans},{hotelDetail[0].countrycode}</p>
            </div>
          </div>
            <div>
              <div className='facilities'>
                {hotelDetail[0].property_highlight_strip.map((highlight) => (
                  <div>
                    {highlight.name}  
                  </div>
                ))}
              </div>
              <h4 className='d-head'>GLIMPSE OF ROOMS ARE</h4>
              <div className='rooms'>
                {Object.values(hotelDetail[0].rooms).map((room) =>(
                  <>
                    <div className='room-img'>
                        {room.photos.map((img) => (
                          <div>
                          <img src={img.url_original} alt='img' height={350} width={385}/>
                          </div>
                          ))}
                    </div>
                    <div className='room-text'>{room.description}</div>
                  </>
                ))}
              </div>
              <div>
                <h4 className='d-head'>MOST-POPULAR FACILITIES</h4>
                <div className="popular-facilities">
                  <div className="facility room-text">
                    {hotelDetail[0].facilities_block.facilities.map((val) => (
                    <div>
                      {val.name}
                    </div>
                    ))}
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
                
              </div>

              <div>
                <h4 className='d-head'>POLICIES</h4>
                <div className="policy-container">
                <div className='policy-text'>
                  {hotelDetail[0].block[0].block_text.policies.map((policy) => (
                  <>
                  <div>{policy.class}</div>
                  <p>{policy.content}</p>
                  </>
                  ))}
                  </div>
                  <div className="policy-img">
                    <div>
                    <img src={policy} alt="policy" height={500} width={500} />
                    </div>
                  </div>
                </div>
              </div>
              <Link to='/thankyou' className='book-btn header-btn'>BOOK NOW</Link>
            </div>
        </div>
        )}
            
    </div>
  )
}

export default Detail