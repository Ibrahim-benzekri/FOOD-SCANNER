import React from 'react'
import Card from './Card'
export default function Payment() {
  return (
    
    <section id='payment' className=' pt-20 w-screen min-h-screen'>
      <div className=' max-container flex justify-center items-center gap-8 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
        <div className=' flex-1'>
          <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>Choose Your Plan and Get Started</p>
        
          <div className=' my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1>Access premium features and elevate your experience</h1> 
          </div>
          
          <div className="mb-16"> 
          <Card link="https://buy.stripe.com/test_eVa7sya0l8TP93y144"  title="get now premium monthly" desc="this is desc 1" price="100" mod="Monthly"/>
          
          </div>
          <Card className="mt-6" link="https://buy.stripe.com/test_fZe6oua0lb1X5Rm9AB" title="get now premium yearly" desc="this is desc 2" price="1000" mod="Yearly"/>
        </div>
      </div>
    </section>
  )
}
