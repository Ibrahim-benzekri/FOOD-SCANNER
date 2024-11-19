import React from 'react'
import img from "../assets/img-6.jpg"
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();
  return (
    <section id='about' className=' w-screen min-h-screen'>
      <div className=' max-container flex justify-center items-center gap-8 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
        <div className=' flex-1 w-full'>
          <div className=' bg-[orangered] flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5'>
            <img src={img} alt="aboutImg" className=' object-cover object-center max-lg:w-full'/>
          </div>
        </div>

        <div className=' flex-1'>
          <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>ABOUT OUR APP</p>
        
          <div className=' my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1>Balanced Nutrition at Your Fingertips</h1> 
          </div>

          <p className='font text-lg text-slate-800'>
          Our mission is to make healthy eating accessible and enjoyable for everyone. </p>

          <p className=' font text-lg text-slate-500 mt-5 mb-14  max-xl:mb-8'>
          With our scanning tool and tailored meal recommendations, we help you achieve your wellness goals effortlessly. Enjoy the food you love in a healthy, balanced way.
          </p>

          <button onClick={()=>{navigate("/subscription")}} className=' py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
            <div className=' buttonDiv'></div>
            <span className='buttonSpan'>GET PREMIUM</span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default About