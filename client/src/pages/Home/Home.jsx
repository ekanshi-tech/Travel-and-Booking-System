import React from 'react'
import HeaderSection from '../../components/HeaderSection'
// import DetailPractice from '../../components/DetailPagePractice/DetailPractice'
import Services from '../../components/Services/Services'
import Gallery from '../../components/Gallery/Gallery'
import About from '../../components/About/About'
import Reviews from '../../components/Reviews/Reviews'
// import Thankyou from '../Thankyou/Thankyou'

const Home = () => {
  return (
    <div className="home-container">
      <HeaderSection/>
      <Services/>
      <Gallery/>
      <About/>
      <Reviews/>
      {/* <Thankyou/> */}
      {/* <DetailPractice/> */}
    </div>
  )
}

export default Home
