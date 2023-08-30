import React , {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './Navbar.css'
// import Services from './Services/Services';
// import logo1 from '../assest/logo1.jpg';
import { Link,useNavigate } from 'react-router-dom';
import { setcurrentUser } from '../actions/currentUser.js'

const Navbar = () => {
  const dispatch=useDispatch();
  var User = useSelector((state) => state.currentUserReducer);

  const navigate=useNavigate();
  const handleLogout=() => {
    dispatch({type:'LOGOUT'})
    navigate('/');
    dispatch(setcurrentUser(null));
  }

  useEffect(() => {
    dispatch(setcurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  }, [dispatch])

  return (
    <div className='main-nav'>
        <div className="inner-nav">
            <div className='nav-head'>TravelHub</div>
        </div>

        <div className="inner-nav1">
            <a href="/">HOME</a>
            <a href='#services' >SERVICES</a>
            <a href="#gallery">GALLERY</a>
            <a href="#about">ABOUT</a>
        </div>
            
        

        {User === null ?
            <Link to='/Login' className='nav-item'>LogIn</Link> : 
            <>
            <button className='nav-item' onClick={handleLogout} >LogOut</button>
            </>}
            


    </div>
  )
}

export default Navbar