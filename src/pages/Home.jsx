import React from 'react'
import Hero from './Hero'
import 'remixicon/fonts/remixicon.css'
import Collection from './Collection'
import AboutUs from './AboutUs'
import Follow from './Follow'
import Footer from './Footer'
import Login from './Signup'

function Home() {
  return (
    <>
      <Hero/>
      <Collection/>
      <Follow/> 
      <AboutUs/>
      <Login/>
      <Footer/>
    </>
  )
}

export default Home