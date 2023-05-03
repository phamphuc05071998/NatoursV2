import React from 'react'
import Header from '../components/Home/Header/Header'
import { About } from '../components/Home/About/About'
import { Features } from '../components/Home/Features/Features'
import { Tour } from '../components/Home/Tour/Tour'
import Stories from '../components/Home/Stories/Stories'
import Booking from '../components/Home/Booking/Booking'
import Footer from '../components/Home/Footer/Footer'
import Navigation from '../components/Home/Navigation/Navigation'
import Popup from '../components/Home/Popup/Popup'
// import TestGrid from '../components/testGrid/TestGrid'
function Home() {
  return (
    <>
    <Navigation></Navigation>
    <Header/>
    {/* <TestGrid></TestGrid> */}
    <main>
      <About/>
      <Features/>
      <Tour/>
      <Stories/>
      <Booking/>
    </main>
    <Footer/>
    <Popup/>
    </>
  
  )
}

export default Home