import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Features from '../components/Features'
import About from '../components/About'

const page = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <Features/>
     <About/>
    </div>
  )
}

export default page
