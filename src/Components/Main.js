import React, { useState } from 'react'
import Nav from './Nav'
import About from './About'
import Scanner from './Scanner'
import Contact from './Contact'
import Footer from './Footer'
import HeroSection from './HeroSection'

const Main = () => {

  
  const [nav,setNav] = useState(false)

  window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll > 405){
      setNav(true)
    }
    else{
      setNav(false)
    }
   })

  return (
    <div className='App'>
        <Nav nav={nav} bar={true}/>
        <HeroSection />
        <About />
        <Scanner />
        <Contact />
        <Footer nav={nav}/>
    </div>
  )
}

export default Main