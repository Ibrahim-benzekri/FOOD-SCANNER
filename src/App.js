import React, { useState } from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Scanner from './Components/Scanner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'

const App = () => {

  
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
        <Nav nav={nav}/>
        <HeroSection />
        <About />
        <Scanner />
        <Contact />
        <Footer nav={nav}/>
    </div>
  )
}

export default App