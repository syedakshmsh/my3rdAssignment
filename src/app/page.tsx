import React from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Image from 'next/image'
import { Footer } from './Component/Footer'
const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
    
  )
}

export default Homepage