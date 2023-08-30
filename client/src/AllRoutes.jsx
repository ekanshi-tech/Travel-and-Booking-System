import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'
import Detail from './pages/Detail/Detail'
import Thankyou from './pages/Thankyou/Thankyou'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Search' element={<Search/>}></Route>
        <Route path='/hotelDetail/:hotelId' element={<Detail/>}></Route>
        <Route path='/thankyou' element={<Thankyou/>}></Route>
    </Routes>
  )
}

export default AllRoutes