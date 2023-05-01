import React from 'react'
import Header from '../components/Home/Header/Header'
import { About } from '../components/Home/About/About'
import { Features } from '../components/Home/Features/Features'
import { Tour } from '../components/Home/Tour/Tour'
// import TestGrid from '../components/testGrid/TestGrid'
function Home() {
  return (
    <>
    <Header/>
    {/* <TestGrid></TestGrid> */}
    <main>
      <About/>
      <Features/>
      <Tour/>
    </main>

    </>
  
  )
}

export default Home