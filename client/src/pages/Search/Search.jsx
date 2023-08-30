import React ,{useState} from 'react'
import './Search.css';
import { searchHotel } from '../../actions/searchHotel.js';
import { useDispatch ,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import star from '../../assest/star.png'
import loadingImg from '../../assest/Loading.gif'


const Search = () => {
    const dispatch=useDispatch();

    const[location,setLocation]=useState('');
    const[checkInDate,setCheckIn]=useState('');
    const[checkOutDate,setCheckOut]=useState('');
    const[guest,setGuest]=useState('');
    const hotels=useSelector( (state) => state.hotel.hotels);
    const cloading=useSelector((state) => state.hotel.loading);

    const handleSubmit = async() =>{
        console.log('inside handle');
        console.log(location);
        console.log(checkInDate);
        console.log(checkOutDate);
        console.log(guest);
        console.log('search');
        dispatch(searchHotel({location,checkInDate,checkOutDate,guest}));
    }
    console.log('hotels');
    console.log(hotels);
    console.log(typeof(hotels));
    console.log('loading');
    console.log(cloading);

  return (
    <div className='search-main-container'>
        <div className="search-bar">
            <div className="search-container">
                <label htmlFor="location">
                <h2>Destination</h2>
                <input type="text" id='location' placeholder='Your Destination' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </label>
            </div>
            <div className="search-container">
                <label htmlFor="check-in">
                    <h2>Check-In Date</h2>
                    <input type="date" id='check-in' placeholder='check-in-date' value={checkInDate} onChange={(e) =>setCheckIn(e.target.value)}/>
                </label>
            </div>
            <div className="search-container">
                <label htmlFor="check-out">
                    <h2>Check-Out Date</h2>
                    <input type="date" name="check-out" placeholder='check-out-date' value={checkOutDate} onChange={(e)=> setCheckOut(e.target.value)} />
                </label>
            </div>
            <div className="search-container">
                <label htmlFor="guest">
                    <h2>No. of Guest</h2>
                    <input type="number" placeholder='guest' value={guest} onChange={(e) => setGuest(e.target.value)} />
                </label>
            </div>
            <div className='search-btn'>
            <button className='header-btn' type="submit" onClick={handleSubmit}>Search</button>
            </div>

        </div>

        <div className='searching'>
        {cloading ? (
        <>
        <img className='s-img' src={loadingImg} alt="loading" height={350} width={350} />
        </>
        ):
        (
            <div className="search-result">
            
            {hotels.map( hotel => (
                
                <div className='search-hotel' key={hotel.hotel_id}>
                    <Link to={`/hotelDetail/${hotel.hotel_id}`} className='LinkingSearch' >
                    <div className='search-hotel-detail'>
                        
                        <img className='himg' src={hotel.main_photo_url} alt={hotel.hotel_name} height={200} width={270} />
                        <div className='hotel-name'>{hotel.hotel_name}</div>
                        <p>{hotel.address},{hotel.city}</p>

                        <div className="review">
                            <div className="rating">
                                <p>{hotel.review_score}</p>
                                <img src={star} alt="star" height={20} width={20}/>
                            </div>
                            <div className="word">{hotel.review_score_word}</div>
                        </div>
                        
                        <div className='price-detail'>
                            <div className="price">
                                <div>PRICE:- </div>
                                <div>{hotel.min_total_price}</div>
                            </div>
                        </div>
                        
                        
                    </div>
                    </Link>
                </div>
            ))}
            
        </div>)}
        </div>

    </div>
    );
}

export default Search;